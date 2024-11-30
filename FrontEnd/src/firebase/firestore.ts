import { addDoc, collection, serverTimestamp } from "firebase/firestore";

import { db } from "@/firebase/firebase-init";

export const createRoom = async (roomName: string) => {
    const roomRef = collection(db, "rooms");
    const room = await addDoc(roomRef, {
        roomName: roomName,
        createdAt: serverTimestamp(),
    });
    return room.id;
};
