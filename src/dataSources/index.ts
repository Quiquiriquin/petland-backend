import { Kysely } from "kysely";
import { Constructor } from "../types";
import { EmailHandler } from "./email.datasource";
import { PrismaDatasource } from "./prismaDatasource";
import { UserDatasource } from "./user.datasource";
import { DB } from "../db/types";
import { DogDataSource } from "./dog.dataSource";

export type DataSourceConstructors<T> = { [P in keyof T]: Constructor<T[P]> };

export interface DataSources {
  prismaDatasource: PrismaDatasource;
  users?: UserDatasource;
  dogs: DogDataSource;
  mailer?: EmailHandler;
  db?: Kysely<DB>;
}

const dataSources: DataSourceConstructors<DataSources> = {
  prismaDatasource: PrismaDatasource,
  users: UserDatasource,
  mailer: EmailHandler,
  dogs: DogDataSource,
};

export default dataSources;
