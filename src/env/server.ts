import { createEnv } from "@t3-oss/env-nextjs";
import { ZodError, z } from "zod";

//what happens if i convert this function into IIFE?
export const env = createEnv({
  isServer: typeof window === "undefined",

  server: {
    NODE_ENV: z.enum(["development", "production"]),
  },
  onValidationError: (error: ZodError) => {
    console.error(
      "❌ Invalid environment variables:",
      error.flatten().fieldErrors
    );
    process.exit(1);
  },
  // Called when server variables are accessed on the client.
  onInvalidAccess: () => {
    throw new Error(
      "❌ Attempted to access a server-side environment variable on the client"
    );
  },

  experimental__runtimeEnv: process.env,
  emptyStringAsUndefined: true,
});
