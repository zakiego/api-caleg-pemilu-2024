import { env } from "@/lib/env";
import type { Config } from "drizzle-kit";

import * as dotenv from "dotenv";
dotenv.config();

export default {
  schema: "./src/db/*.ts",
  out: "./src/db/migrations",
  driver: "pg", // 'pg' | 'mysql2' | 'better-sqlite' | 'libsql' | 'turso'
  dbCredentials: {
    connectionString: env.DATABASE_URL,
  },
} satisfies Config;
