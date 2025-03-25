import { enumType, objectType } from "nexus";
import { Context } from "../../../context";
export const UserType = objectType({
  name: "User",
  definition(t) {
    t.id("id");
    t.nonNull.string("email");
    t.nonNull.string("name");
    t.nonNull.string("lastname");
    t.field("role", { type: RoleEnum });
    t.field("gender", { type: GenderEnum });
    t.string("phone");
    t.string("password");
    t.field("dogs", {
      type: "Dog",
      resolve(root, args, ctx) {
        return ctx.prisma.dog.findMany({
          where: {
            ownerId: root.id,
          },
        });
      },
    });
    t.int("companyId");
    t.int("clientOfId");
    t.field("company", {
      type: "Company",
      resolve(root, args, ctx: Context) {
        return ctx.prisma.company.findUnique({
          where: {
            id: root.companyId,
          },
        });
      },
    });
    t.field("ownedCompany", {
      type: "Company",
      resolve(root, args, ctx: Context) {
        return ctx.prisma.company.findUnique({
          where: {
            ownerId: root.id,
          },
        });
      },
    });
    t.field("clientOf", {
      type: "Company",
      resolve(root, args, ctx: Context) {
        return ctx.prisma.company.findFirst({
          where: {
            id: root.clientOfId,
          },
        });
      },
    });
  },
});

export const GenderEnum = enumType({
  name: "Gender",
  members: ["Male", "Female", "Other"],
  description: "User gender",
});

export const RoleEnum = enumType({
  name: "Role",
  members: ["ADMIN", "USER", "CLIENT", "OWNER"],
  description: "User role",
});
