"use client";
import "react";
import Link from "next/link";

export default function Header() {
    return (
        <header className="flex items-center justify-start p-3 bg-transparent w-full">
            <Link href="/" passHref>
                <p className="text-3xl font-[PatrickHand] text-white bg-yellow-500 rounded-full w-12 h-12 flex items-center justify-center cursor-pointer hover:bg-yellow-600 hover:scale-105 hover:shadow-lg transition-all duration-300">
                    P
                </p>
            </Link>
            <p className="text-2xl font-[PatrickHand] text-amber-600 pl-1 tracking-wide">
                JOSUNGER
            </p>
        </header>
    );
}
