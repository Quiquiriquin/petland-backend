import { inputObjectType, list, mutationField, nonNull } from "nexus";
import { SizeEnum } from "./dog.model";
import { skip } from "@prisma/client/runtime/library";
import { Dog } from "@prisma/client";
import { connect } from "http2";

export const CreateDogInput = inputObjectType({
  name: "CreateDogInput",
  definition(t) {
    t.nonNull.string("name");
    t.nonNull.string("breed");
    t.nonNull.int("age");
    t.nonNull.float("weight");
    t.nonNull.string("color");
    t.nonNull.field("size", { type: SizeEnum });
    t.nonNull.int("ownerId");
  },
});

export const CreateDogsInput = inputObjectType({
  name: "CreateDogsInput",
  definition(t) {
    t.nonNull.list.nonNull.field("dogs", {
      type: CreateDogInput,
    });
  },
});

export const CreateDog = mutationField("createDog", {
  type: "Dog",
  args: {
    input: CreateDogInput,
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

export const CreateDogs = mutationField("createDogs", {
  type: nonNull(list(nonNull("Dog"))),
  args: {
    input: CreateDogsInput,
  },
  resolve: async (_, { input }, ctx) => {
    const user = await ctx.prisma.user.findUnique({
      where: {
        id: input.dogs[0].ownerId,
      },
    });
    const recordsToCreate = input.dogs.map((dog: Dog) => ({
      name: dog.name,
      breed: dog.breed,
      age: parseInt(dog.age.toString(), 10), // Ensure age is an integer
      size: dog.size,
      weight: parseFloat(dog.weight.toString()), // Ensure weight is a float
      color: dog.color,
    }));
    console.log("Records to create:", JSON.stringify(recordsToCreate, null, 2));
    const results = await ctx.prisma.dog.createManyAndReturn({
      data: recordsToCreate,
      skipDuplicates: true,
    });
    await ctx.prisma.user.update({
      where: {
        id: input.dogs[0].ownerId,
      },
      data: {
        dogs: {
          connect: results.map((dog: any) => ({ id: dog.id })),
        },
      },
    });

    return results;
  },
});
