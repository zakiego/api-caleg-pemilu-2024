import { migrate } from "drizzle-orm/postgres-js/migrator";
import { dbClient, migrationClient } from "./index";

const main = async () => {
  try {
    await migrate(migrationClient, { migrationsFolder: "./src/db/migrations" });

    console.log("Migration success");
  } catch (error) {
    console.error(`Migration error: ${error}`);
  }
};

main().then(() => process.exit(0));
