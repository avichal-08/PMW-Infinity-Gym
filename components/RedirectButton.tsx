"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

interface RedirectButtonProps {
    link: string,
    text: string
}

export function RedirectButton({ link, text }: RedirectButtonProps) {
    return (
        <Link
            href={`${link}`}
            className={`${buttonVariants({ variant: "outline" })} bg-transparent border-zinc-800 text-white hover:bg-zinc-900 shrink-0 gap-2 flex items-center`}
        >
            {text} <ArrowRight className="h-4 w-4" />
        </Link>
    )
}