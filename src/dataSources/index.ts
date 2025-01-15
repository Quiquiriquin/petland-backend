import { Constructor } from "../types";
import { EmailHandler } from "./email.datasource";
import { PrismaDatasource } from "./prismaDatasource";
import { UserDatasource } from "./user.datasource";

export type DataSourceConstructors<T> = { [P in keyof T]: Constructor<T[P]> };

export interface DataSources {
  prismaDatasource: PrismaDatasource;
  users?: UserDatasource;
  mailer?: EmailHandler;
}

const dataSources: DataSourceConstructors<DataSources> = {
  prismaDatasource: PrismaDatasource,
  users: UserDatasource,
  mailer: EmailHandler,
};

export default dataSources;
