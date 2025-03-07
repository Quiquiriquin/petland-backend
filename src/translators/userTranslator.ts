import { Selectable } from "kysely";
import { User } from "../db/types";
import { GqlUser, UserRole } from "../schema.generated";

export const translateUser = (user: Selectable<User>): GqlUser => {
  console.log({
    id: user.id,
    email: user.email,
    name: user?.name || "",
    lastName: user?.lastName || "",
    role: UserRole[user.role as keyof typeof UserRole],
    createdAt: user.createdAt,
    updatedAt: user.updatedAt,
  });
  return {
    id: user.id,
    email: user.email,
    name: user?.name || "",
    lastName: user?.lastName || "",
    role: user.role as UserRole,
    createdAt: user.createdAt,
    updatedAt: user.updatedAt,
  };
};
