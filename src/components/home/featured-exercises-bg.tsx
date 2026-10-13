"use client";

import React, { useState } from "react";
import Image from "next/image";

interface FeaturedExercisesBgProps {
  src?: string;
  fixed?: boolean;
}

export function FeaturedExercisesBg({
  src = "/images/home/featured-exercises-bg.jpg",
  fixed = false,
}: FeaturedExercisesBgProps) {
  const [hasError, setHasError] = useState(false);

  return (
    <div
      className={`${
        fixed ? "fixed" : "absolute"
      } inset-0 pointer-events-none z-0 overflow-hidden`}
    >
      {!hasError && (
        <>
          {/* Main Background Image */}
          <Image
            src={src}
            alt="Exercises atmospheric background"
            fill
            sizes="100vw"
            priority={fixed}
            className="object-cover object-center scale-105 filter brightness-[0.70] contrast-100 saturate-0"
            onError={() => setHasError(true)}
          />

          {/* Top Edge Vignette */}
          <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#101010] to-transparent" />

          {/* Bottom Edge Vignette */}
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#101010] to-transparent" />

          {/* Center Dimmer */}
          <div className="absolute inset-0 bg-[#101010]/85 backdrop-blur-[1px]" />
        </>
      )}

      {/* Ambient Accent Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[550px] bg-[#FF6B1A]/5 blur-[170px] rounded-full pointer-events-none" />
    </div>
  );
}