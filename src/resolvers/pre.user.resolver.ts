import { Context } from "../context";
import { GraphQLError } from "graphql";

export const createPreUserResolver = async (
  _: unknown,
  {
    input,
  }: {
    input: {
      email: string;
      phone: string;
      howManyDogs?: number;
    };
  },
  ctx: Context
) => {
  try {
    return await ctx.prisma.preUser.upsert({
      where: {
        email: input.email,
      },
      update: {
        ...input,
      },
      create: {
        ...input,
      },
    });
  } catch (e) {
    const error = e as GraphQLError;
    console.log("error", error);
    throw new GraphQLError(error.message);
  }
};
