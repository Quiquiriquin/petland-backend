import { GraphQLError } from "graphql";
import { Context } from "../context";
import { Prisma } from "@prisma/client";
import bcrypt from "bcrypt";

export const createUserResolver = async (
  _: unknown,
  { input }: { input: Prisma.UserCreateInput },
  ctx: Context
) => {
  try {
    const passowrd = await bcrypt.hash(input.password, 10);
    return await ctx.prisma.user.create({
      data: {
        ...input,
        password: passowrd,
      },
    });
  } catch (e) {
    const error = e as GraphQLError;
    throw new GraphQLError(error.message);
  }
};

export const addDogToUserResolver = async (
  _: unknown,
  { userId, dogId }: { userId: number; dogId: number },
  ctx: Context
) => {
  return await ctx.prisma.user.update({
    where: {
      id: userId,
    },
    data: {
      dogs: {
        connect: {
          id: dogId,
        },
      },
    },
  });
};

export const getUserDogs = async (
  _: unknown,
  { userId }: { userId: number },
  ctx: Context
) => {
  return await ctx.prisma.user
    .findUnique({
      where: {
        id: userId,
      },
    })
    .dogs();
};
