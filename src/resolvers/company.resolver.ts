import { Context } from "../context";

export const getCompanyEmployees = async (
  _: unknown,
  { id }: { id: number },
  ctx: Context
) => {
  return await ctx.prisma.user.findMany({
    where: {
      companyId: id,
    },
  });
};

export const getCompanyClients = async (
  _: unknown,
  { id }: { id: number },
  ctx: Context
) => {
  return await ctx.prisma.user.findMany({
    where: {
      clientOfId: id,
    },
  });
};

export const getCompanyOwner = async (
  _: unknown,
  { id }: { id: number },
  ctx: Context
) => {
  return await ctx.prisma.user.findUnique({
    where: {
      id,
    },
  });
};
