import React from "react";
import Link from "next/link";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  children: React.ReactNode;
}

export function Button({
  variant = "primary",
  size = "md",
  href,
  className = "",
  children,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none";

  const variants = {
    primary:
      "bg-[#FF6B1A] hover:bg-[#e05b12] text-white shadow-sm font-semibold",
    secondary:
      "bg-[#252525] hover:bg-[#303030] text-white border border-[#303030]",
    outline:
      "border border-[#FF6B1A] text-[#FF6B1A] hover:bg-[#FF6B1A]/10",
    ghost:
      "text-[#A3A3A3] hover:text-white hover:bg-[#252525]",
  };

  const sizes = {
    sm: "px-3 py-1.5 text-xs",
    md: "px-4 py-2.5 text-sm",
    lg: "px-6 py-3 text-base",
  };

  const combinedClasses = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
}