import { extendType } from "nexus";
import {
  getUserDogs,
  getUserInformation,
} from "../../../resolvers/user.resolver";

export const UserQuery = extendType({
  type: "Query",
  definition(t) {
    t.list.field("users", {
      type: "User",
      resolve: (_, a, ctx) => ctx.prisma.user.findMany(),
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

export const User = extendType({
  type: "Query",
  definition(t) {
    t.field("user", {
      type: "User",
      resolve: getUserInformation,
    });
  },
});
