import { z } from "zod";

import * as dotenv from "dotenv";
dotenv.config();

const schema = z.object({
  DATABASE_URL: z.string().url(),
  NODE_ENV: z.enum(["development", "production"]),
});

export type Env = z.infer<typeof schema>;

export const env = schema.parse(process.env);
