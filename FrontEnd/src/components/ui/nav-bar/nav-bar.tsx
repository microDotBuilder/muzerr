"use client";

import Link from "next/link";
import * as React from "react";

import { SignInButton, SignUpButton, UserButton, useUser } from "@clerk/nextjs";
import { Github, Menu, X } from "lucide-react";

import { ThemeSwitch } from "../theme-switch";

const publicNavItems = [{ name: "Home", href: "/" }];

const privateNavItems = [
    { name: "Library", href: "/library" },
    { name: "Rooms", href: "/rooms" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = React.useState(false);
    const { isSignedIn } = useUser();

    const navItems = [
        ...publicNavItems,
        ...(isSignedIn ? privateNavItems : []),
    ];

    return (
        <nav className="bg-white shadow-md dark:bg-gray-900">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 justify-between">
                    <div className="flex items-center">
                        <Link
                            href="/"
                            className="flex flex-shrink-0 items-center"
                        >
                            <span className="text-xl font-bold text-gray-800 dark:text-white">
                                Muzerr
                            </span>
                        </Link>
                    </div>
                    <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700 dark:text-gray-300 dark:hover:text-white"
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>
                    <div className="hidden sm:ml-6 sm:flex sm:items-center sm:space-x-4">
                        <ThemeSwitch />
                        <Link
                            href="https://github.com/yourusername/muzerr"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-white"
                        >
                            <Github className="h-6 w-6" />
                        </Link>

                        <div className="flex items-center space-x-4">
                            {isSignedIn ? (
                                <UserButton afterSignOutUrl="/" />
                            ) : (
                                <>
                                    <SignInButton mode="modal">
                                        <button className="rounded-md px-3 py-2 text-sm font-medium text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-white">
                                            Sign in
                                        </button>
                                    </SignInButton>
                                    <SignUpButton mode="modal">
                                        <button className="rounded-md bg-black px-3 py-2 text-sm font-medium text-white hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200">
                                            Sign up
                                        </button>
                                    </SignUpButton>
                                </>
                            )}
                        </div>
                    </div>
                    <div className="-mr-2 flex items-center sm:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 dark:hover:bg-gray-800"
                            aria-expanded="false"
                        >
                            <span className="sr-only">Open main menu</span>
                            {isOpen ? (
                                <X
                                    className="block h-6 w-6"
                                    aria-hidden="true"
                                />
                            ) : (
                                <Menu
                                    className="block h-6 w-6"
                                    aria-hidden="true"
                                />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {isOpen && (
                <div className="sm:hidden">
                    <div className="space-y-1 pb-3 pt-2">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white"
                                onClick={() => setIsOpen(false)}
                            >
                                {item.name}
                            </Link>
                        ))}
                        <div className="border-t border-gray-200 pt-4 dark:border-gray-700">
                            <div className="flex flex-col space-y-4 px-4">
                                <Link
                                    href="https://github.com/yourusername/muzerr"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-white"
                                >
                                    <Github className="mr-2 h-6 w-6" />
                                    GitHub
                                </Link>
                                {isSignedIn ? (
                                    <UserButton afterSignOutUrl="/" />
                                ) : (
                                    <>
                                        <SignInButton mode="modal">
                                            <button className="w-full rounded-md px-3 py-2 text-sm font-medium text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-white">
                                                Sign in
                                            </button>
                                        </SignInButton>
                                        <SignUpButton mode="modal">
                                            <button className="w-full rounded-md bg-black px-3 py-2 text-sm font-medium text-white hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200">
                                                Sign up
                                            </button>
                                        </SignUpButton>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}
