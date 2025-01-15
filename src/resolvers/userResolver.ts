import { Context } from "../context";
import { UserDatasource } from "../dataSources/user.datasource";
import { Resolvers, User, UserInput } from "../schema.generated";
// import { User } from "@prisma/client";
const userResolver: Resolvers = {
  Query: {
    user: async (parent, args, context) => {
      console.log(context);
      return "Hello world";
    },
  },
  Mutation: {
    createUser: async (_parent, { input }, context: Context): Promise<User> => {
      return new UserDatasource().create(input, context);
    },
  },
};

export default userResolver;
