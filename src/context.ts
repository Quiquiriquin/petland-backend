export type ApolloBaseContext = {};

export interface Context extends ApolloBaseContext {
  hola: string;
}

export default async function context(): Promise<Context> {
  return {
    hola: "world",
  };
}
