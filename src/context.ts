import dataSources, { DataSources } from "./dataSources";
import { EmailHandler } from "./dataSources/email.datasource";
import { PrismaDatasource } from "./dataSources/prismaDatasource";

export type ApolloBaseContext = {};

export interface Context extends ApolloBaseContext {
  dataSources: DataSources;
}

export default async function context(): Promise<Context> {
  const result: Context = {
    dataSources: {
      prismaDatasource: new PrismaDatasource(),
      mailer: new EmailHandler(),
      dogs: new dataSources.dogs(),
    },
  };
  return result;
}
