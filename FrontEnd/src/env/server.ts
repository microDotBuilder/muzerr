// import { createEnv } from "@t3-oss/env-nextjs";
// import { ZodError, z } from "zod";
// export const env = createEnv({
//     isServer: typeof window === "undefined",
//     server: {
//         NODE_ENV: z.enum(["development", "production"]),
//     },
//     client: {
//         // CLERK_SECRET_KEY: z.string().min(1),
//         // NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY: z.string().min(1),
//         // NEXT_PUBLIC_CLERK_SIGN_IN_URL: z.string().min(1),
//         // NEXT_PUBLIC_CLERK_SIGN_UP_URL: z.string().min(1),
//         NEXT_PUBLIC_FIREBASE_API_KEY: z.string().min(1),
//         NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN: z.string().min(1),
//         NEXT_PUBLIC_FIREBASE_PROJECT_ID: z.string().min(1),
//         NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET: z.string().min(1),
//         NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID: z.string().min(1),
//         NEXT_PUBLIC_FIREBASE_APP_ID: z.string().min(1),
//         NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID: z.string().min(1),
//     },
//     runtimeEnv: {
//         NEXT_PUBLIC_FIREBASE_API_KEY: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
//         NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN:
//             process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
//         NEXT_PUBLIC_FIREBASE_PROJECT_ID:
//             process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
//         NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET:
//             process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
//         NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID:
//             process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
//         NEXT_PUBLIC_FIREBASE_APP_ID: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
//         NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID:
//             process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
//     },
//     onValidationError: (error: ZodError) => {
//         console.error(
//             "❌ Invalid environment variables:",
//             error.flatten().fieldErrors
//         );
//         process.exit(1);
//     },
//     onInvalidAccess: () => {
//         throw new Error(
//             "❌ Attempted to access a server-side environment variable on the client"
//         );
//     },
// });
import { createEnv } from "@t3-oss/env-nextjs";
import { ZodError, z } from "zod";

export const env = createEnv({
    server: {
        NODE_ENV: z.enum(["development", "production"]),
        // NEXT_PUBLIC_FIREBASE_API_KEY: z.string().min(1),
    },
    client: {
        NEXT_PUBLIC_FIREBASE_API_KEY: z.string().min(1),
    },
    onValidationError: (error: ZodError) => {
        console.log(error);
        console.error(
            "❌ Invalid environment variables:",
            error.flatten().fieldErrors
        );
        process.exit(1);
    },
    onInvalidAccess: () => {
        throw new Error(
            "❌ Attempted to access a server-side environment variable on the client"
        );
    },

    // For Next.js >= 13.4.4, you only need to destructure client variables:
    experimental__runtimeEnv: {
        NEXT_PUBLIC_PUBLISHABLE_KEY: process.env.NEXT_PUBLIC_PUBLISHABLE_KEY,
    },
    emptyStringAsUndefined: true,
});
