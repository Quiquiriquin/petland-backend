import { extendType, queryType } from "nexus";
import { getCompanyDogs, getDogById } from "../../../resolvers/dog.resolver";

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

export const DogsByOwner = extendType({
  type: "Query",
  definition(t) {
    t.list.field("dogsByOwner", {
      type: "Dog",
      args: {
        ownerId: "Int",
      },
      resolve: (_, { ownerId }, ctx) =>
        ctx.prisma.dog.findMany({
          where: {
            ownerId: ownerId,
          },
        }),
    });
  },
});

export const CompanyDogs = extendType({
  type: "Query",
  definition(t) {
    t.list.field("companyDogs", {
      type: "Dog",
      args: {
        companyId: "Int",
        search: "String",
      },
      resolve: getCompanyDogs,
    });
  },
});
