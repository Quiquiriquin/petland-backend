import { inputObjectType, mutationField } from "nexus";
import {
  addDogToUserResolver,
  createUserResolver,
} from "../../../resolvers/user.resolver";
import { GenderEnum } from "./user.model";

export const CreateUserInput = inputObjectType({
  name: "CreateUserInput",
  definition(t) {
    t.nonNull.string("email");
    t.nonNull.string("password");
  },
});

export const UpdateUserInput = inputObjectType({
  name: "UpdateUserInput",
  definition(t) {
    t.string("email");
    t.string("name");
    t.string("lastname");
    t.int("id");
    t.field("gender", { type: GenderEnum });
    t.string("phone");
    t.string("password");
    t.int("companyId");
    t.int("clientOfId");
  },
});

export const UserMutation = mutationField("createUser", {
  type: "User",
  resolve: createUserResolver,
  args: {
    input: CreateUserInput,
  },
});

export const AddDogToUser = mutationField("addDogToUser", {
  type: "User",
  args: {
    userId: "Int",
    dogId: "Int",
  },
  resolve: addDogToUserResolver,
});

// export const LoginUser = mutationField("loginUser", {
//   type: "User",
//   args: {
//     email: "String",
//     password: "String",
//   },
//   resolve: async (_, { email, password }, ctx) => {
