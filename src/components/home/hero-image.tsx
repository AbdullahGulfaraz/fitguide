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
    <div className="relative w-full h-[460px] sm:h-[580px] lg:h-[760px] flex items-end justify-center pointer-events-none select-none">
      {!hasError ? (
        <div className="relative w-full h-full animate-hero-glide-up will-change-transform flex items-end">
          <Image
            src={src}
            alt={alt}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 55vw"
            className="object-contain object-bottom drop-shadow-[0_25px_60px_rgba(0,0,0,0.85)]"
            onError={() => setHasError(true)}
          />
        </div>
      ) : (
        /* Fallback State */
        <div className="flex flex-col items-center justify-center p-8 text-center space-y-3 pointer-events-auto border border-[#303030] bg-[#1C1C1C] rounded-2xl mb-8">
          <div className="w-16 h-16 rounded-2xl bg-[#252525] border border-[#303030] flex items-center justify-center text-[#A3A3A3]">
            <ImageOff className="w-8 h-8 text-[#FF6B1A]" />
          </div>
          <div>
            <p className="text-base font-bold text-white uppercase tracking-wide">
              No Preview Available
            </p>
            <p className="text-xs text-[#A3A3A3] mt-1 max-w-xs">
              Drop your transparent athlete PNG into{" "}
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