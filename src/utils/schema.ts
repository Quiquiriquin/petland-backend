import { GraphQLFileLoader } from "@graphql-tools/graphql-file-loader";
import { loadSchema } from "@graphql-tools/load";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { allResolvers } from "../resolvers";
import config from "config";

export async function prepareSchema() {
  const typeDefs = await loadSchema(config.get("schema"), {
    loaders: [new GraphQLFileLoader()],
  });

  return makeExecutableSchema({
    typeDefs,
    resolvers: allResolvers,
  });
}
