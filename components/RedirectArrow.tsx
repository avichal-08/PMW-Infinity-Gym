"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export function RedirectArrow() {
    return (
        <div className="absolute top-8 left-6 md:left-12 z-50">
            <Link href="/" className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors group">
                <ArrowLeft className="h-5 w-5 group-hover:-translate-x-1 transition-transform" />
                <span className="text-sm font-medium">Back to Home</span>
            </Link>
        </div>
    )
}