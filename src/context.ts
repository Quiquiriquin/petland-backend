import { PrismaClient, User } from "@prisma/client";
import jwt from "jsonwebtoken";
import { ACCESS_SECRET } from "./utils/token.utils";
import { ClientEnum, ClientType, translateClient } from "./utils/middleware";
import { s3 } from "./utils/aws";
const prisma = new PrismaClient();

export type Context = {
  prisma: PrismaClient;
  user?: User;
  client: ClientEnum;
  s3: any;
};

export const createContext = async (req: any): Promise<Context> => {
  const headers = req.headers || {};
  const accessToken = headers?.authorization?.split(" ")[1] || "";
  let user = undefined;
  const rawClient = headers?.["x-client-type"];
  const client = translateClient(rawClient as ClientType);

  if (client === ClientEnum.UNKNOWN) {
    console.warn("Unknown client type:", rawClient);
  }

  if (accessToken) {
    try {
      user = jwt.verify(accessToken, ACCESS_SECRET) as User;
    } catch (e) {
      console.log("Invalid access token");
    }
  }
  return {
    prisma,
    user,
    client,
    s3: s3,
  };
};
