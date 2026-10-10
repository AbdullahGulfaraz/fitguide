"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Dumbbell, ImageOff } from "lucide-react";

interface HeroImageProps {
  src: string;
  alt: string;
}

export function HeroImage({ src, alt }: HeroImageProps) {
  const [hasError, setHasError] = useState(false);

  return (
    <div className="relative w-full h-[420px] sm:h-[500px] lg:h-[560px] rounded-2xl overflow-hidden border border-[#303030] bg-[#1C1C1C] flex items-center justify-center group shadow-2xl">
      {/* Background glow behind the athlete */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#FF6B1A]/20 via-transparent to-transparent opacity-80 pointer-events-none z-10" />

      {!hasError ? (
        <div className="relative w-full h-full animate-fade-in-up opacity-0 [animation-fill-mode:forwards]">
          <Image
            src={src}
            alt={alt}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
            onError={() => setHasError(true)}
          />
          {/* Subtle gradient vignette at bottom to blend with background */}
          <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#101010] via-[#101010]/60 to-transparent z-10" />
        </div>
      ) : (
        /* Fallback State */
        <div className="flex flex-col items-center justify-center p-8 text-center space-y-3 z-10 animate-fade-in">
          <div className="w-16 h-16 rounded-2xl bg-[#252525] border border-[#303030] flex items-center justify-center text-[#A3A3A3]">
            <ImageOff className="w-8 h-8 text-[#FF6B1A]" />
          </div>
          <div>
            <p className="text-base font-bold text-white uppercase tracking-wide">
              No Preview Available
            </p>
            <p className="text-xs text-[#A3A3A3] mt-1 max-w-xs">
              Drop your portrait image into{" "}
              <code className="text-[#FF6B1A] font-mono">public/images/hero/hero-athlete.png</code>
            </p>
          </div>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold bg-[#252525] text-[#A3A3A3] border border-[#303030]">
            <Dumbbell className="w-3.5 h-3.5 text-[#FF6B1A]" /> FitGuide Visual
          </span>
        </div>
      )}
    </div>
  );
}