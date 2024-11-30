"use client";

// import { getApp, getApps, initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";
// import { env } from "@/env/server";
// const firebaseAdminConfig = {
//     credential: {
//         projectId: env.FIREBASE_PROJECT_ID,
//         clientEmail: env.FIREBASE_CLIENT_EMAIL,
//         privateKey: env.FIREBASE_PRIVATE_KEY,
//     },
//     databaseURL: `https://${env.FIREBASE_PROJECT_ID}.firebaseio.com`,
// };
// export const firebaseAdmin =
//     getApps().length === 0 ? initializeApp(firebaseAdminConfig) : getApp();
// export const adminDb = getFirestore(firebaseAdmin);
import { getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

import { firebaseConfig } from "./config";

export const firebaseApp =
    getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

export const db = getFirestore(firebaseApp);
