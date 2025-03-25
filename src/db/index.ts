import { makeSchema } from "nexus";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import * as Types from "./model/index";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const schema = makeSchema({
  types: Object.values(Types),
  outputs: {
    typegen: join(__dirname, "../..", "nexus-typegen.ts"), // 2
    schema: join(__dirname, "../..", "schema.graphql"), // 3
  },
});
