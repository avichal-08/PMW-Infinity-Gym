"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Dumbbell, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800" : "bg-transparent"}`}>
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Dumbbell className="h-8 w-8 text-orange-500" />
          <span className="text-xl font-bold tracking-tight text-white">PMW <span className="text-orange-500">INFINITY</span></span>
        </Link>
        
        <nav className="hidden md:flex gap-8 text-sm font-medium text-zinc-300">
          <Link href="/services" className="hover:text-white transition-colors">Services</Link>
          <Link href="/transformations" className="hover:text-white transition-colors">Transformations</Link>
          <Link href="/#pricing" className="hover:text-white transition-colors">Pricing</Link>
          <Link href="/#contact" className="hover:text-white transition-colors">Location</Link>
        </nav>

        <div className="hidden md:block">
          <Button asChild className="bg-orange-500 hover:bg-orange-600 text-white font-semibold">
            <Link href="/login">Join Now</Link>
          </Button>
        </div>

        <button className="md:hidden text-zinc-300" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
    </header>
  );
}