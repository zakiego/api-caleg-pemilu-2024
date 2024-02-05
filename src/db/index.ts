import { dbSchema } from "@/db/schema";
import { env } from "@/lib/env";
import { PostgresJsDatabase, drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";

export const migrationClient = drizzle(postgres(env.DATABASE_URL, { max: 1 }));

const queryClient = postgres(env.DATABASE_URL, { max: 3 });

declare global {
  // biome-ignore lint/style/noVar: <explanation>
  var dbClient: PostgresJsDatabase<typeof dbSchema> | undefined;
}

// biome-ignore lint/suspicious/noRedeclare: <explanation>
let dbClient: PostgresJsDatabase<typeof dbSchema>;

if (env.NODE_ENV === "production") {
  const client = postgres(env.DATABASE_URL);

  dbClient = drizzle(client, {
    schema: dbSchema,
  });
} else {
  if (!global.dbClient) {
    const client = postgres(env.DATABASE_URL);

    global.dbClient = drizzle(client, {
      schema: dbSchema,
    });
  }

  dbClient = global.dbClient;
}

export { dbClient };
