"use client";

import React, { useState } from "react";
import Image from "next/image";

interface NutritionPreviewBgProps {
  src?: string;
}

export function NutritionPreviewBg({
  src = "/images/home/nutrition-preview-bg.jpg",
}: NutritionPreviewBgProps) {
  const [hasError, setHasError] = useState(false);

  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
      {!hasError && (
        <>
          {/* Main Background Image */}
          <Image
            src={src}
            alt="Natural meal prep and training recovery background"
            fill
            sizes="100vw"
            className="object-cover object-center scale-105 filter brightness-[0.70] contrast-100 saturate-100"
            onError={() => setHasError(true)}
          />

          {/* Top Edge Vignette */}
          <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#101010] to-transparent" />

          {/* Bottom Edge Vignette */}
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#101010] to-transparent" />

          {/* Center Darkness Dimmer for Text and Card Legibility */}
          <div className="absolute inset-0 bg-[#101010]/80" />
        </>
      )}

      {/* Atmospheric Subtle Accent Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#FF6B1A]/5 blur-[160px] rounded-full pointer-events-none" />
    </div>
  );
}