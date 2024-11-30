"use client";

import { Button } from "@/components/ui/button";

import { createRoom } from "@/firebase/firestore";

export default function Home() {
    const handleCreateRoom = async () => {
        console.log("createRoom");
        const roomId = await createRoom("test");
        console.log("roomId :-> ", roomId);
    };
    return (
        <div className="flex h-screen items-center justify-center">
            <Button onClick={handleCreateRoom}>Click me</Button>
        </div>
    );
}
