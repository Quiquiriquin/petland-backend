import { Context } from "vm";
import { DogInput, GqlDog } from "../schema.generated";
import { db } from "./db.dataSource";
import {
  translateDog,
  translateMultipleDogs,
} from "../translators/dogTranslator";

export class DogDataSource {
  async create(args: DogInput, context: Context): Promise<GqlDog> {
    try {
      const { name, breed, age, userId } = args;
      const data = {
        name,
        breed,
        age,
        userId: parseInt(userId),
        updatedAt: new Date(),
      };
      const newDog = await db
        .insertInto("Dog")
        .values(data)
        .returningAll()
        .executeTakeFirst();
      if (!newDog) {
        throw new Error("Dog not created");
      }

      return translateDog(newDog);
    } catch (e) {
      console.log(e);
      if (e instanceof Error) {
        throw new Error(e.message);
      } else {
        throw new Error(String(e));
      }
    }
  }

  async getDogsByUserId(userId: string, context: Context): Promise<GqlDog[]> {
    try {
      const dogs = await db
        .selectFrom("Dog")
        .where("userId", "=", parseInt(userId))
        .selectAll()
        .execute();
      console.log(typeof dogs[0]);
      if (!dogs) {
        throw new Error("Dogs not found");
      }
      return translateMultipleDogs(dogs);
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
