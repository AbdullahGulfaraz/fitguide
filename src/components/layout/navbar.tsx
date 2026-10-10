import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { MobileMenu } from "@/components/layout/mobile-menu";
import { Dumbbell } from "lucide-react";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "Exercises", href: "/exercises" },
  { name: "Guides", href: "/guides" },
  { name: "Tips", href: "/tips" },
  { name: "Nutrition", href: "/nutrition" },
  { name: "About", href: "/about" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-[#303030] bg-[#101010]/90 backdrop-blur-md">
      <Container>
        <div className="flex h-16 items-center justify-between">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#FF6B1A] text-white">
              <Dumbbell className="h-5 w-5" />
            </span>
            <span className="text-xl font-black tracking-wider text-white">
              FIT<span className="text-[#FF6B1A]">GUIDE</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[#A3A3A3] transition-colors hover:text-white"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Desktop Action */}
          <div className="hidden md:flex items-center space-x-4">
            <Button href="/exercises" variant="primary" size="md">
              Explore Exercises
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <MobileMenu links={NAV_LINKS} />
        </div>
      </Container>
    </header>
  );
}