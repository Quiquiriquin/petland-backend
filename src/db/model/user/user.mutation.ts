import { inputObjectType, mutationField } from "nexus";
import {
  addDogToUserResolver,
  createUserResolver,
  signUserResolver,
  updateUserResolver,
  verifyIfEmailExists,
} from "../../../resolvers/user.resolver";
import { GenderEnum, RoleEnum } from "./user.model";

export const CreateUserInput = inputObjectType({
  name: "CreateUserInput",
  definition(t) {
    t.nonNull.string("email");
    t.nonNull.string("password");
    t.field("role", { type: RoleEnum });
  },
});

export const UpdateUserInput = inputObjectType({
  name: "UpdateUserInput",
  definition(t) {
    t.string("email");
    t.string("name");
    t.string("lastname");
    t.field("gender", { type: GenderEnum });
    t.string("phone");
    t.string("password");
    t.int("companyId");
    t.int("clientOfId");
  },
});

export const UpdateUser = mutationField("updateUser", {
  type: "User",
  resolve: updateUserResolver,
  args: {
    input: UpdateUserInput,
  },
});

export const FindEmailInput = inputObjectType({
  name: "FindEmailInput",
  definition(t) {
    t.nonNull.string("email");
  },
});

export const UserMutation = mutationField("createUser", {
  type: "User",
  resolve: createUserResolver,
  args: {
    input: CreateUserInput,
  },
});

export const SignUser = mutationField("signUser", {
  type: "AuthResponse",
  args: {
    input: CreateUserInput,
  },
  resolve: signUserResolver,
});

export const AddDogToUser = mutationField("addDogToUser", {
  type: "User",
  args: {
    userId: "Int",
    dogId: "Int",
  },
  resolve: addDogToUserResolver,
});

export const VerifyIfEmailExists = mutationField("verifyIfEmailExists", {
  type: "User",
  args: {
    input: FindEmailInput,
  },
  resolve: verifyIfEmailExists,
});

// export const LoginUser = mutationField("loginUser", {
//   type: "User",
//   args: {
//     email: "String",
//     password: "String",
//   },
//   resolve: async (_, { email, password }, ctx) => {
