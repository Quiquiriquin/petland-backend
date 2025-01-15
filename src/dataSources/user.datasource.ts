import { Context } from "../context";
import { UserInput } from "../../types/generated";
import { User } from "../schema.generated";

export class UserDatasource {
  async create(args: UserInput, context: Context): Promise<User> {
    try {
      const newUser =
        await context.dataSources.prismaDatasource.prisma.user.create({
          data: {
            email: args.email,
            name: args.name,
          },
        });
      context.dataSources.mailer.sendEmail(
        newUser.email,
        "Welcome",
        "Welcome to our platform"
      );
      return newUser;
    } catch (e) {
      throw new Error(e);
    }
  }
}
