import { Kysely, PostgresDialect } from "kysely";

import { DB } from "../db/types";
import pg from "pg";
const { Pool } = pg;

const dialect = new PostgresDialect({
  pool: new Pool({
    connectionString: process.env.DATABASE_URL || "",
    max: 10,
  }),
});

console.log(process.env.DATABASE_URL);
export const db = new Kysely<DB>({
  dialect,
});
