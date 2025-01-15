import { PrismaClient } from "@prisma/client";

export class PrismaDatasource {
  prisma: PrismaClient;
  constructor() {
    this.prisma = new PrismaClient();
  }
}
