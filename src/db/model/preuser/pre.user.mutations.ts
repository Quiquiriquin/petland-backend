import { inputObjectType, mutationField } from "nexus";
import { createPreUserResolver } from "../../../resolvers/pre.user.resolver";

export const CreatePreUserInput = inputObjectType({
  name: "CreatePreUserInput",
  definition(t) {
    t.nonNull.string("email");
    t.nonNull.string("phone");
    t.int("howManyDogs");
  },
});

export const CreatePreUser = mutationField("createPreUser", {
  type: "PreUser",
  resolve: createPreUserResolver,
  args: {
    input: CreatePreUserInput,
  },
});
