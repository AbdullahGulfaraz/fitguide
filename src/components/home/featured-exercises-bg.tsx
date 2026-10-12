"use client";

import React, { useState } from "react";
import Image from "next/image";

interface FeaturedExercisesBgProps {
  src?: string;
}

export function FeaturedExercisesBg({
  src = "/images/home/featured-exercises-bg.jpg",
}: FeaturedExercisesBgProps) {
  const [hasError, setHasError] = useState(false);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {!hasError && (
        <>
          {/* Main Background Image */}
          <Image
            src={src}
            alt="Featured exercises atmospheric gym background"
            fill
            sizes="100vw"
            className="object-cover object-center scale-110 filter brightness-[0.40] contrast-150 saturate-0"
            onError={() => setHasError(true)}
          />

          {/* Top Edge Vignette to blend smoothly with previous section */}
          <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#101010] to-transparent" />

          {/* Bottom Edge Vignette to blend into next section */}
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#101010] to-transparent" />

          {/* Center Dark Dimmer to keep cards and texts crisp */}
          <div className="absolute inset-0 bg-[#101010]/75" />
        </>
      )}

      {/* Atmospheric Subtle Accent Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#FF6B1A]/5 blur-[160px] rounded-full pointer-events-none" />
    </div>
  );
}