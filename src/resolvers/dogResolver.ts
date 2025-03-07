import { Context } from "../context";
import { GqlDog, GqlUser, Resolvers, UserInput } from "../schema.generated";

// import { User } from "@prisma/client";
const dogResolver: Resolvers = {
  Mutation: {
    createDog: async (
      _parent,
      { input },
      context: Context
    ): Promise<GqlDog> => {
      try {
        return await context?.dataSources?.dogs?.create(input, context);
      } catch (e) {
        console.log("ERROR", e);
        throw new Error(e instanceof Error ? e.message : String(e));
      }
    },
  },
  Query: {
    userDogs: async (
      _parent,
      { userId },
      context: Context
    ): Promise<GqlDog[]> => {
      try {
        return await context?.dataSources?.dogs?.getDogsByUserId(
          userId,
          context
        );
      } catch (e) {
        console.log("ERROR", e);
        throw new Error(e instanceof Error ? e.message : String(e));
      }
    },
  },
};

export default dogResolver;
