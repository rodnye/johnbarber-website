import { PrismaClient } from "@prisma/client";
import { PrismaLibSQL } from "@prisma/adapter-libsql";

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};
let prisma: PrismaClient;

console.log("🔧 ::: Initializing Prisma client configuration");

if (process.env.NODE_ENV === "production") {
  console.log("  ::: Running in production mode - configuring Turso database");

  // use the turso db in production
  if (!process.env.TURSO_DATABASE_URL) {
    console.error("❌ ::: Missing TURSO_DATABASE_URL environment variable");
    throw new Error("Missing TURSO_DATABASE_URL env var");
  }
  if (!process.env.TURSO_AUTH_TOKEN) {
    console.error("❌ ::: Missing TURSO_AUTH_TOKEN environment variable");
    throw new Error("Missing TURSO_AUTH_TOKEN env var");
  }

  const adapter = new PrismaLibSQL({
    url: process.env.TURSO_DATABASE_URL,
    authToken: process.env.TURSO_AUTH_TOKEN,
  });

  console.log("  ::: LibSQL adapter created for Turso connection");

  prisma = globalForPrisma.prisma ?? new PrismaClient({ adapter });
  console.log("  ::: Production Prisma client initialized with Turso adapter");
} else {
  console.log("  ::: Running in development mode - using local database");

  // use only the local db in development
  if (!globalForPrisma.prisma) {
    console.log("  ::: Creating new Prisma client instance for development");
    globalForPrisma.prisma = new PrismaClient();
  } else {
    console.log(
      "♻️ ::: Reusing existing Prisma client instance from global scope",
    );
  }

  prisma = globalForPrisma.prisma;
  console.log("📊 ::: Development Prisma client ready!");
}

console.log("✅ ::: Prisma client initialization completed successfully");
export { prisma };
