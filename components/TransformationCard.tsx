"use client";

import { useState } from "react";
import { Star, MoveHorizontal, Activity } from "lucide-react";

export interface TransformationProps {
  beforeImage: string;
  afterImage: string;
  title: string;
  desc: string;
  time?: string;
}

export function TransformationCard({ beforeImage, afterImage, title, desc, time }: TransformationProps) {
  const [sliderPosition, setSliderPosition] = useState(50);

  return (
    <div className="group rounded-xl overflow-hidden border border-zinc-800 bg-zinc-950 relative flex flex-col h-full">
      {/* FIXED: Replaced h-64 sm:h-72 with aspect-[4/5] 
        This makes the box tall like a phone screen, stopping the massive zoom.
      */}
      <div className="aspect-[4/5] relative w-full select-none overflow-hidden bg-zinc-800 shrink-0">
        
        {/* AFTER IMAGE */}
        <img 
          src={afterImage} 
          alt="After" 
          className="absolute inset-0 w-full h-full object-cover object-center" 
        />
        <div className="absolute top-2 right-2 bg-orange-500/90 backdrop-blur-sm text-[10px] px-2 py-1 rounded text-white z-10 font-bold uppercase tracking-wider">
          After
        </div>

        {/* BEFORE IMAGE */}
        <div 
          className="absolute inset-0 w-full h-full"
          style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
        >
          <img 
            src={beforeImage} 
            alt="Before" 
            // FIXED: Removed the invalid tailwind class and set it back to object-center
            className="absolute inset-0 w-full h-full object-cover object-center mix-blend-luminosity pointer-events-none" 
          />
          <div className="absolute top-2 left-2 bg-black/60 backdrop-blur-sm text-[10px] px-2 py-1 rounded text-white z-10 font-bold uppercase tracking-wider">
            Before
          </div>
        </div>

        {/* SLIDER HANDLE */}
        <div 
          className="absolute top-0 bottom-0 w-1 bg-white shadow-[0_0_10px_rgba(0,0,0,0.5)] z-20 pointer-events-none"
          style={{ left: `calc(${sliderPosition}% - 2px)` }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-8 w-8 bg-white rounded-full flex items-center justify-center shadow-lg border-2 border-orange-500 text-orange-500">
            <MoveHorizontal className="h-4 w-4" />
          </div>
        </div>

        {/* INVISIBLE RANGE INPUT */}
        <input 
          type="range" 
          min="0" 
          max="100" 
          value={sliderPosition}
          onChange={(e) => setSliderPosition(Number(e.target.value))}
          className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30"
        />
      </div>

      {/* Card Content */}
      <div className="p-6 flex-1 flex flex-col">
        {time && (
          <div className="inline-flex items-center gap-1.5 text-xs font-medium text-orange-400 bg-orange-500/10 px-2 py-1 rounded w-fit mb-3">
            <Activity className="h-3 w-3" /> {time}
          </div>
        )}
        <div className="flex items-center justify-between mb-3">
          <h4 className="font-semibold text-white text-lg leading-tight">{title}</h4>
          <div className="flex gap-0.5 shrink-0">
            {[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 text-orange-500 fill-orange-500" />)}
          </div>
        </div>
        <p className="text-sm text-zinc-400 leading-relaxed flex-1">
          "{desc}"
        </p>
      </div>
    </div>
  );
}