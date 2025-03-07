import { Context } from "../context";
import { UserInput } from "../../types/generated";
import { UserRole } from "@prisma/client";
import { db } from "./db.dataSource";
import { User } from "../db/types";
import { Selectable } from "kysely";

export class UserDatasource {
  async create(args: UserInput, context: Context): Promise<Selectable<User>> {
    try {
      const { email, name, lastName, password } = args;
      const data = {
        email,
        name,
        lastName,
        password,
        role: UserRole.USER, // or map accordingly
        updatedAt: new Date(),
      };
      const newUser = await db
        .insertInto("User")
        .values(data)
        .returningAll()
        .executeTakeFirst();

      if (!newUser) {
        throw new Error("User not created");
      }

      // context.dataSources?.mailer?.sendEmail(
      //   newUser?.email,
      //   "Welcome",
      //   "Welcome to our platform"
      // );

      return newUser;
    } catch (e) {
      console.log(e);
      if (e instanceof Error) {
        throw new Error(e.message);
      } else {
        throw new Error(String(e));
      }
    }
  }
}
