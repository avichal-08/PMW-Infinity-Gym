import { Dumbbell } from 'lucide-react';

export function HypeBanner() {
  const highlights = [
    "100% Guaranteed Results",
    "Fully AC Premium Facility",
    "5 Expert Trainers",
    "Free Customized Diet Plan",
    "Ladies Trainer Available",
    "Modern Cardio Section",
    "Heavy Free Weights"
  ];
  const marqueeItems = [...highlights, ...highlights, ...highlights, ...highlights];

  return (
    <div className="w-full bg-orange-500 py-3 overflow-hidden flex whitespace-nowrap border-y border-orange-600 relative z-10 shadow-[0_0_20px_rgba(249,115,22,0.2)]">
      <div className="flex w-max animate-marquee items-center group">
        {marqueeItems.map((item, idx) => (
          <div key={idx} className="flex items-center text-sm md:text-base font-black tracking-widest uppercase text-zinc-950 px-4">
            {item}
            <Dumbbell className="h-4 w-4 mx-6 opacity-40 rotate-45" />
          </div>
        ))}
      </div>
    </div>
  );
}