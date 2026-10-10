"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
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
  const pathname = usePathname();

  // Close menu automatically on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

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

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Close main menu" : "Open main menu"}
        aria-expanded={isOpen}
        className="p-2 rounded-lg text-[#A3A3A3] hover:text-white hover:bg-[#252525] focus:outline-none"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {isOpen && (
        <div className="fixed inset-0 top-16 z-50 bg-[#101010]/95 backdrop-blur-md px-6 py-6 border-t border-[#303030] flex flex-col justify-between">
          <nav className="flex flex-col space-y-4">
            {links.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`text-lg font-medium py-2 px-3 rounded-md transition-colors ${
                    isActive
                      ? "text-[#FF6B1A] bg-[#1C1C1C]"
                      : "text-white hover:bg-[#1C1C1C]"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>
          <div className="pt-6 border-t border-[#303030]">
            <Button
              href="/exercises"
              variant="primary"
              size="lg"
              className="w-full"
            >
              Explore Exercises
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}