import { enumType, objectType } from "nexus";
import {
  getCompanyClients,
  getCompanyEmployees,
  getCompanyOwner,
} from "../../../resolvers/company.resolver";

export const CompanyType = objectType({
  name: "Company",
  definition(t) {
    t.id("id");
    t.nonNull.string("name");
    t.nonNull.string("phone");
    t.int("addressId");
    t.nonNull.int("ownerId");
    t.field("address", {
      type: "Address",
      resolve: (root, args, ctx) =>
        ctx.prisma.address.findUnique({
          where: {
            id: root.addressId,
          },
        }),
    });
    t.field("owner", {
      type: "User",
      resolve: (root, args, ctx) =>
        getCompanyOwner(
          root,
          {
            id: root.ownerID,
          },
          ctx
        ),
    });
    t.field("employees", {
      type: "User",
      resolve: (root, args, ctx) =>
        getCompanyEmployees(
          root,
          {
            id: root.id,
          },
          ctx
        ),
    });
    t.field("clients", {
      type: "User",
      resolve: (root, args, ctx) =>
        getCompanyClients(
          root,
          {
            id: root.id,
          },
          ctx
        ),
    });
  },
});
