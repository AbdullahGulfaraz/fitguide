"use client";

import React, { useState } from "react";
import Image from "next/image";

interface HeroBgProps {
  src: string;
}

export function HeroBg({ src }: HeroBgProps) {
  const [hasError, setHasError] = useState(false);

  return (
    <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
      {!hasError && (
        <>
          {/* Background Image */}
          <Image
            src={src}
            alt="Gym background"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center scale-110 filter brightness-[0.80] contrast-100"
            onError={() => setHasError(true)}
          />

          {/* Directional gradient to keep text readable on the left */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#101010] via-[#101010]/80 to-transparent" />

          {/* Bottom vignette so it blends cleanly into the next section */}
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#101010] to-transparent" />
        </>
      )}

      {/* Atmospheric radial glow fallback/accent */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-[#FF6B1A]/10 blur-[150px] rounded-full pointer-events-none" />
    </div>
  );
}