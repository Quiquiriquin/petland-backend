import { PutObjectCommand } from "@aws-sdk/client-s3";
import { DeleteObjectCommand } from "@aws-sdk/client-s3";

import { Context } from "../context";
import { s3 } from "../utils/aws";

export const getDogById = async (
  _: unknown,
  { id }: { id: string },
  ctx: Context
) => {
  return await ctx.prisma.dog.findUnique({
    where: {
      id: parseInt(id),
    },
  });
};

export const getCompanyDogs = async (
  _: unknown,
  { companyId, search }: { companyId: string; search?: string },
  ctx: Context
) => {
  return await ctx.prisma.dog.findMany({
    where: {
      companyId: parseInt(companyId),
      ...(search && {
        name: {
          contains: search,
          mode: "insensitive",
        },
      }),
    },
  });
};

export const uploadDogImage = async (
  _: unknown,
  { dogId, file }: { dogId: number; file: any },
  ctx: Context
) => {
  try {
    console.log("Uploading dog image for dogId:", dogId);
    const { filename, mimetype, createReadStream } = await file;
    const stream = createReadStream();

    const chunks: Uint8Array[] = [];
    for await (const chunk of stream) {
      chunks.push(chunk);
    }
    const buffer = Buffer.concat(chunks);

    // Sanitize filename
    const sanitizedFilename = encodeURIComponent(
      filename.replace(/[^a-z0-9.\-_]/gi, "_")
    );
    const key = `uploads/${Date.now()}-${sanitizedFilename}`;

    // ✅ Step 1: Get existing image URL from DB
    const dog = await ctx.prisma.dog.findUnique({
      where: { id: dogId },
      select: { imageUrl: true },
    });

    // ✅ Step 2: Extract key from imageUrl if exists
    if (dog?.imageUrl) {
      const url = new URL(dog.imageUrl);
      const oldKey = decodeURIComponent(url.pathname.slice(1)); // remove leading slash

      // ✅ Step 3: Delete old object
      const deleteCommand = new DeleteObjectCommand({
        Bucket: process.env.AWS_S3_BUCKET_NAME!,
        Key: oldKey,
      });

      try {
        await s3.send(deleteCommand);
        console.log("Previous image deleted:", oldKey);
      } catch (deleteErr) {
        console.warn("Failed to delete previous image:", deleteErr);
      }
    }

    // ✅ Step 4: Upload new image
    const uploadParams = {
      Bucket: process.env.AWS_S3_BUCKET_NAME!,
      Key: key,
      Body: buffer,
      ContentType: mimetype,
      ContentLength: buffer.length,
    };

    const command = new PutObjectCommand(uploadParams);
    await s3.send(command);

    const s3Url = `https://${process.env.AWS_S3_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/${key}`;
    console.log("S3 URL:", s3Url);

    // ✅ Step 5: Update dog record with new image URL
    await ctx.prisma.dog.update({
      where: { id: dogId },
      data: { imageUrl: s3Url },
    });

    return s3Url;
  } catch (e) {
    console.error("Error uploading dog image:", e);
    throw new Error("Failed to upload dog image");
  }
};
