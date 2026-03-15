"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Dumbbell, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 20);
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsHidden(true);
        setMobileMenuOpen(false);
      }
      else if (currentScrollY < lastScrollY) {
        setIsHidden(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ease-in-out
        ${isScrolled ? "bg-zinc-950/90 backdrop-blur-md border-b border-zinc-800" : "bg-transparent"}
        ${isHidden ? "-translate-y-full" : "translate-y-0"} 
      `}>
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        <Link href="/" className="flex items-center gap-2" onClick={() => setMobileMenuOpen(false)}>
          <Dumbbell className="h-8 w-8 text-orange-500" />
          <span className="text-xl font-bold tracking-tight text-white">PMW <span className="text-orange-500">INFINITY</span></span>
        </Link>

        <nav className="hidden md:flex gap-8 text-sm font-medium text-zinc-300">
          <Link href="/services" className="hover:text-white transition-colors">Services</Link>
          <Link href="/transformations" className="hover:text-white transition-colors">Transformations</Link>
          <Link href="/pricing" className="hover:text-white transition-colors">Pricing</Link>
          <Link href="/#contact" className="hover:text-white transition-colors">Location</Link>
        </nav>

        <div className="hidden md:block">
          <Button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold">
            <Link href="/login">Join Now</Link>
          </Button>
        </div>

        <button className="md:hidden text-zinc-300 hover:text-white transition-colors p-2 -mr-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-zinc-950 border-b border-zinc-800 shadow-2xl flex flex-col px-6 py-6 gap-6">
          <nav className="flex flex-col gap-4 text-base font-medium text-zinc-300">
            <Link href="/services" onClick={() => setMobileMenuOpen(false)} className="hover:text-white transition-colors active:text-orange-500">Services</Link>
            <Link href="/transformations" onClick={() => setMobileMenuOpen(false)} className="hover:text-white transition-colors active:text-orange-500">Transformations</Link>
            <Link href="/pricing" onClick={() => setMobileMenuOpen(false)} className="hover:text-white transition-colors active:text-orange-500">Pricing</Link>
            <Link href="/#contact" onClick={() => setMobileMenuOpen(false)} className="hover:text-white transition-colors active:text-orange-500">Location</Link>
            <a
              href="https://github.com/avichal-08"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors active:text-orange-500"
            >
              Contact Developer
            </a>
          </nav>

        </div>
      )}
    </header>
  );
}