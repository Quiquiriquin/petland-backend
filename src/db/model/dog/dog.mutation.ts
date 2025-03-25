import { mutationField } from "nexus";

export const CreateDog = mutationField("createDog", {
  type: "Dog",
  args: {
    name: "String",
    breed: "String",
    age: "Int",
    size: "Size",
    ownerId: "Int",
  },
  resolve: async (_, { name, breed, age, size, ownerId }, ctx) => {
    return ctx.prisma.dog.create({
      data: {
        name,
        breed,
        age,
        size,
        owner: {
          connect: {
            id: ownerId,
          },
        },
      },
    });
  },
});
