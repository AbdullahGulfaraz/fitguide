"use client";

import React, { useState } from "react";
import Image from "next/image";

interface CtaBannerBgProps {
  src?: string;
}

export function CtaBannerBg({
  src = "/images/home/cta-banner-bg.jpg",
}: CtaBannerBgProps) {
  const [hasError, setHasError] = useState(false);

  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
      {!hasError && (
        <>
          {/* Main Background Image */}
          <Image
            src={src}
            alt="Atmospheric gym hallway and training equipment background"
            fill
            sizes="100vw"
            className="object-cover object-center scale-105 filter brightness-[0.50] contrast-100"
            onError={() => setHasError(true)}
          />

          {/* Top Edge Vignette to blend into the preceding section */}
          <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#101010] to-transparent" />

          {/* Bottom Edge Vignette to blend into the footer */}
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#101010] to-transparent" />

          {/* Center Darkness Dimmer for readability */}
          <div className="absolute inset-0 bg-[#101010]/80" />
        </>
      )}

      {/* Primary Orange Spotlight behind the CTA text & button */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[450px] bg-[#FF6B1A]/8 blur-[150px] rounded-full pointer-events-none" />
    </div>
  );
}