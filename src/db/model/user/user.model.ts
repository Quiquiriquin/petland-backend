import { enumType, objectType } from "nexus";
import { Context } from "../../../context";
import { GraphQLUpload } from "graphql-upload-ts";

export const Upload = GraphQLUpload;

export const UserType = objectType({
  name: "User",
  definition(t) {
    t.id("id");
    t.nonNull.string("email");
    t.string("name");
    t.string("lastname");
    t.field("role", { type: RoleEnum });
    t.field("gender", { type: GenderEnum });
    t.field("status", { type: UserStatusEnum });
    t.string("phone");
    t.int("howManyDogs");
    t.nonNull.string("password");
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

export const AuthType = objectType({
  name: "AuthResponse",
  definition(t) {
    t.string("accessToken");
    t.string("refreshToken");
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

export const UserStatusEnum = enumType({
  name: "UserStatus",
  members: ["ACTIVE", "INACTIVE", "BLOCKED", "INCOMPLETE", "DELETED"],
  description: "User status",
});
