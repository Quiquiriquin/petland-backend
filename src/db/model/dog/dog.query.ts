import { extendType, queryType } from "nexus";
import { getDogById } from "../../../resolvers/dog.resolver";

export const DogQuery = extendType({
  type: "Query",
  definition(t) {
    t.list.field("dogs", {
      type: "Dog",
      args: {
        id: "Int",
      },
      resolve: (_, { id }, ctx) =>
        ctx.prisma.dog.findMany({
          where: {
            id: id,
          },
        }),
    });
  },
});

export const DogById = extendType({
  type: "Query",
  definition(t) {
    t.field("dogById", {
      type: "Dog",
      args: {
        id: "Int",
      },
      resolve: getDogById,
    });
  },
});
