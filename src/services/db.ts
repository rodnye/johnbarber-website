import { PrismaClient } from "@prisma/client";
import { PrismaLibSQL } from "@prisma/adapter-libsql";

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};
let prisma: PrismaClient;

if (process.env.NODE_ENV === "production") {
  // use the turso db in production
  if (!process.env.TURSO_DATABASE_URL) {
    throw new Error("Missing TURSO_DATABASE_URL env var");
  }
  if (!process.env.TURSO_AUTH_TOKEN) {
    throw new Error("Missing TURSO_AUTH_TOKEN env var");
  }

  const adapter = new PrismaLibSQL({
    url: process.env.TURSO_DATABASE_URL,
    authToken: process.env.TURSO_AUTH_TOKEN,
  });

  prisma = globalForPrisma.prisma ?? new PrismaClient({ adapter });
} else {
  // use only dthe local db in development
  if (!globalForPrisma.prisma) {
    globalForPrisma.prisma = new PrismaClient();
  }
  prisma = globalForPrisma.prisma;
}

export { prisma };
