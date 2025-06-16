import { User } from "@prisma/client";
import jwt from "jsonwebtoken";

export const ACCESS_SECRET = "access-secret";
export const REFRESH_SECRET = "refresh-secret";

export function generateTokens(user: User) {
  const accessToken = jwt.sign({ id: user.id }, ACCESS_SECRET, {
    expiresIn: "15m",
  });

  const refreshToken = jwt.sign({ id: user.id }, REFRESH_SECRET, {
    expiresIn: "7d",
  });

  return { accessToken, refreshToken };
}
