"use client";

import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Dumbbell } from "lucide-react";
import { Button } from "@/components/ui/button";

interface NavLink {
  name: string;
  href: string;
}

interface MobileMenuProps {
  links: NavLink[];
}

export function MobileMenu({ links }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [prevPathname, setPrevPathname] = useState("");
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  // Close menu on route change
  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setIsOpen(false);
  }

  // Lock body scroll when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const menuContent = isOpen ? (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 99999,
        display: "flex",
        justifyContent: "flex-end",
      }}
    >
      {/* Dimmed backdrop - click outside to close */}
      <div
        onClick={() => setIsOpen(false)}
        style={{
          position: "fixed",
          inset: 0,
          backgroundColor: "rgba(0, 0, 0, 0.7)",
          backdropFilter: "blur(4px)",
        }}
      />

      {/* Compact Right-Side Drawer */}
      <aside
        style={{
          position: "relative",
          width: "280px",
          maxWidth: "80vw",
          height: "100%",
          backgroundColor: "#141414",
          borderLeft: "1px solid #303030",
          boxShadow: "-8px 0 25px rgba(0,0,0,0.8)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          zIndex: 1,
        }}
        className="animate-fade-in"
      >
        {/* Drawer Header */}
        <div className="flex h-16 items-center justify-between px-5 border-b border-[#303030]">
          <div className="flex items-center gap-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-md bg-[#FF6B1A] text-white">
              <Dumbbell className="h-4 w-4" />
            </span>
            <span className="text-base font-extrabold tracking-wider text-white">
              FIT<span className="text-[#FF6B1A]">GUIDE</span>
            </span>
          </div>

          <button
            type="button"
            onClick={() => setIsOpen(false)}
            aria-label="Close sidebar menu"
            className="p-1.5 rounded-lg text-[#A3A3A3] hover:text-white hover:bg-[#252525] transition-colors focus:outline-none"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Compact Navigation Links */}
        <nav className="flex-1 px-4 py-6 space-y-1.5 overflow-y-auto">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`flex items-center text-sm font-semibold py-2.5 px-3.5 rounded-lg transition-colors ${
                  isActive
                    ? "text-[#FF6B1A] bg-[#1C1C1C] border border-[#FF6B1A]/30"
                    : "text-[#A3A3A3] hover:text-white hover:bg-[#1C1C1C]"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Action Button at Bottom */}
        <div className="p-4 border-t border-[#303030] bg-[#101010]">
          <Button
            href="/exercises"
            variant="primary"
            size="md"
            className="w-full justify-center text-xs uppercase tracking-wider font-bold shadow-md shadow-[#FF6B1A]/20"
            onClick={() => setIsOpen(false)}
          >
            Explore Exercises
          </Button>
        </div>
      </aside>
    </div>
  ) : null;

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        aria-label="Open navigation menu"
        className="p-2 rounded-lg text-[#A3A3A3] hover:text-white hover:bg-[#252525] focus:outline-none"
      >
        <Menu className="w-6 h-6 text-white" />
      </button>

      {mounted && typeof document !== "undefined"
        ? createPortal(menuContent, document.body)
        : null}
    </div>
  );
}