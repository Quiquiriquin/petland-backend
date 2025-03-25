import { extendType } from "nexus";
import { getUserDogs } from "../../../resolvers/user.resolver";

export const UserQuery = extendType({
  type: "Query",
  definition(t) {
    t.list.field("users", {
      type: "User",
      resolve: (_, a, ctx) => ctx.prisma.user.findMany(),
    });
    t.list.field("user", {
      type: "User",
      args: {
        id: "ID",
      },
      resolve: (_, { id }, ctx) =>
        ctx.prisma.user.findMany({
          where: {
            id: id,
          },
        }),
    });
  },
});

export const UserDogs = extendType({
  type: "Query",
  definition(t) {
    t.list.field("userDogs", {
      type: "Dog",
      args: {
        userId: "Int",
      },
      resolve: getUserDogs,
    });
  },
});
