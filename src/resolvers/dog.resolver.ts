import { Context } from "../context";

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
