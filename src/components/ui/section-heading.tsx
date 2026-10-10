import React from "react";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export function SectionHeading({
  title,
  subtitle,
  centered = false,
}: SectionHeadingProps) {
  return (
    <div className={`mb-8 ${centered ? "text-center" : ""}`}>
      <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white uppercase">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-2 text-sm sm:text-base text-[#A3A3A3] max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}