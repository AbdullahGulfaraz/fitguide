import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "accent" | "surface" | "outline";
  className?: string;
}

export function Badge({ children, variant = "surface", className = "" }: BadgeProps) {
  const variants = {
    accent: "bg-[#FF6B1A]/15 text-[#FF6B1A] border border-[#FF6B1A]/30",
    surface: "bg-[#252525] text-[#A3A3A3] border border-[#303030]",
    outline: "bg-transparent text-white border border-[#303030]",
  };

  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium tracking-wide uppercase ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  );
}