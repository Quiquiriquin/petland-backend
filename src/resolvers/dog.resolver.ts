import { Context } from "../context";

export const getDogById = async (
  _: unknown,
  { id }: { id: string },
  ctx: Context
) => {
  return await ctx.prisma.dog.findUnique({
    where: {
      id: parseInt(id),
    },
  });
};

export const getCompanyDogs = async (
  _: unknown,
  { companyId, search }: { companyId: string; search?: string },
  ctx: Context
) => {
  return await ctx.prisma.dog.findMany({
    where: {
      companyId: parseInt(companyId),
      ...(search && {
        name: {
          contains: search,
          mode: "insensitive",
        },
      }),
    },
  });
};
