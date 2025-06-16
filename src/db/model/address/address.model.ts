import { objectType } from "nexus";

export const Address = objectType({
  name: "Address",
  definition(t) {
    t.string("streetOne", { description: "Primary street address" });
    t.nullable.string("streetTwo", { description: "Secondary street address" });
    t.string("town", { description: "Town or locality" });
    t.string("city", { description: "City of the address" });
    t.string("state", { description: "State of the address" });
    t.string("zipCode", { description: "Postal code of the address" });
    t.nullable.int("companyId");
    t.nullable.field("company", {
      type: "Company",
      resolve(root, args, ctx) {
        return ctx.prisma.company.findUnique({
          where: {
            id: root.companyId,
          },
        });
      },
    });
  },
});
