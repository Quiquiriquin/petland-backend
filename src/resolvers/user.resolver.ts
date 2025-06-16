import { GraphQLError } from "graphql";
import { Context } from "../context";
import { Prisma, UserStatus } from "@prisma/client";
import bcrypt from "bcrypt";
import { generateTokens } from "../utils/token.utils";

export const createUserResolver = async (
  _: unknown,
  { input }: { input: Prisma.UserCreateInput },
  ctx: Context
) => {
  try {
    let status: UserStatus = UserStatus.INCOMPLETE;
    if (input.role === "ADMIN") {
      status = UserStatus.ACTIVE;
    }
    const passowrd = await bcrypt.hash(input.password, 10);
    return await ctx.prisma.user.create({
      data: {
        ...input,
        password: passowrd,
        status,
      },
    });
  } catch (e) {
    const error = e as GraphQLError;
    throw new GraphQLError(error.message);
  }
};

export const signUserResolver = async (
  _: unknown,
  { input }: { input: { email: string; password: string } },
  ctx: Context
) => {
  const { client } = ctx;
  const user = await ctx.prisma.user.findUnique({
    where: {
      email: input.email,
    },
  });
  if (!user) {
    throw new GraphQLError("User not found");
  }
  const isPasswordValid = await bcrypt.compare(input.password, user.password);
  if (!isPasswordValid) {
    throw new GraphQLError("Invalid password");
  }
  if (user.role.toLocaleLowerCase() !== client) {
    throw new GraphQLError(
      `User role ${user.role} does not match client type ${client}`
    );
  }

  return generateTokens(user);
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

export const verifyIfEmailExists = async (
  _: unknown,
  { input }: { input: { email: string } },
  ctx: Context
) => {
  const user = await ctx.prisma.user.findUnique({
    where: {
      email: input.email,
    },
  });

  return user;
};

export const getUserInformation = async (
  _: unknown,
  args: unknown,
  ctx: Context
) => {
  console.log("ctx.user", ctx.user);
  if (!ctx.user) {
    throw new GraphQLError("User not found");
  }
  console.log(ctx.user);
  const user = await ctx.prisma.user.findUnique({
    where: {
      id: ctx.user.id,
    },
  });
  return user;
};

export const updateUserResolver = async (
  _: unknown,
  { input }: { input: Prisma.UserUpdateInput },
  ctx: Context
) => {
  if (!ctx.user) {
    throw new GraphQLError("User not found");
  }
  const status =
    input.name && input.lastname && input.gender ? "ACTIVE" : "INCOMPLETE";
  const user = await ctx.prisma.user.update({
    where: {
      id: ctx.user.id,
    },
    data: {
      ...input,
      status,
    },
  });
  return user;
};
