import { Context } from "vm";
import { DataSources } from ".";

export class BaseDatasource {
  db: DataSources["prismaDatasource"];
  context: Context;
  constructor(context: Context) {
    this.db = context.dataSources.prismaDatasource;
    this.context = context;
  }
}
