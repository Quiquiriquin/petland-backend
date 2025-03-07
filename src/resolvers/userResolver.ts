import { Context } from "../context";
import { UserDatasource } from "../dataSources/user.datasource";
import { User } from "../db/types";
import { GqlUser, Resolvers, UserInput } from "../schema.generated";
import { translateUser } from "../translators/userTranslator";
// import { User } from "@prisma/client";
const userResolver: Resolvers = {
  Query: {
    user: async (parent, args, context) => {
      console.log(context);
      return "Hello world";
    },
  },
  Mutation: {
    createUser: async (
      _parent,
      { input },
      context: Context
    ): Promise<GqlUser> => {
      return translateUser(await new UserDatasource().create(input, context));
    },
  },
};

export default userResolver;
