"use client";

import { Button } from "@/components/ui/button";
import { ThemeSwitch } from "@/components/ui/theme-switch";

export default function Home() {
    return (
        <div className="flex h-screen items-center justify-center">
            <ThemeSwitch />
            <Button>Click me</Button>
        </div>
    );
}
