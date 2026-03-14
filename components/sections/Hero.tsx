import { Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-orange-500/20 via-zinc-950 to-zinc-950 -z-10" />
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <Badge variant="outline" className="bg-zinc-900 border-zinc-800 text-zinc-300 py-1.5 px-4 rounded-full gap-2">
            <Star className="h-3 w-3 text-orange-500 fill-orange-500" />
            4.9/5 Top Rated Gym in Kalyanpur
          </Badge>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.1] text-white">
            Transform Your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
              Physique Today.
            </span>
          </h1>
          <p className="text-lg text-zinc-400 max-w-lg leading-relaxed">
            State-of-the-art equipment, expert trainers, and a community built on hustle. Your ultimate fitness destination.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="bg-orange-500 hover:bg-orange-600 text-white font-semibold gap-2 rounded-xl p-2 border border-orange-300">
              <Link href="/pricing" className="text-lg">Start Your Journey</Link>
            </div>
            <div className="bg-zinc-900 p-2 text-white hover:bg-zinc-800 rounded-xl border border-zinc-800 hover:text-white">
              <Link href="/services" className="text-lg">View Facilities</Link>
            </div>
          </div>
        </div>
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-amber-500 rounded-xl blur opacity-25 group-hover:opacity-40 transition duration-1000" />
          <img 
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1470&auto=format&fit=crop" 
            alt="Gym Athlete" 
            className="relative rounded-xl border border-zinc-800 object-cover h-[500px] w-full shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}