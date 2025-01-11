import { Resolvers } from "../schema.generated";

const userResolver: Resolvers = {
  Query: {
    user: async () => {
      return "Hello world";
    },
  },
};

export default userResolver;
