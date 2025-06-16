import { enumType, objectType } from "nexus";

export const DogType = objectType({
  name: "Dog",
  definition(t) {
    t.id("id");
    t.nonNull.string("name");
    t.nonNull.string("breed");
    t.nonNull.int("age");
    t.field("size", { type: SizeEnum });
    t.nonNull.int("ownerId");
    t.string("imageUrl");
    t.string("notes");
    t.field("owner", {
      type: "User",
      resolve(root, args, ctx) {
        return ctx.prisma.user.findUnique({
          where: {
            id: root.ownerId,
          },
        });
      },
    });
  },
});

export const SizeEnum = enumType({
  name: "Size",
  members: ["SMALL", "MEDIUM", "LARGE"],
  description: "Dog size",
});
