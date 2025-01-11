import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: "./src/typeDefs/**/*.graphql",
  generates: {
    "src/schema.generated.ts": {
      plugins: ["typescript", "typescript-resolvers"],
      config: {
        useIndexSignature: true,
        useTypeImports: true,
        makeResolverTypeCallable: true,
        optionalInfoArgument: true,
        noSchemaStitching: true,
        contextType: "./context#Context",
      },
    },
    "./types/generated.ts": {
      plugins: ["fragment-matcher", "typescript"],
      config: {
        noSchemaStitching: true,
      },
    },
  },
};

export default config;
