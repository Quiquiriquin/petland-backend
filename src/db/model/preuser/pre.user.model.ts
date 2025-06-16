import { objectType } from "nexus";

export const PreUserType = objectType({
  name: "PreUser",
  definition(t) {
    t.id("id");
    t.nonNull.string("email");
    t.string("phone");
    t.int("howManyDogs");
  },
});
