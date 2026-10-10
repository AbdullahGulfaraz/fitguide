import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Dumbbell } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-[#303030] bg-[#101010] py-12 text-[#A3A3A3]">
      <Container>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#FF6B1A] text-white">
                <Dumbbell className="h-4 w-4" />
              </span>
              <span className="text-lg font-black tracking-wider text-white">
                FIT<span className="text-[#FF6B1A]">GUIDE</span>
              </span>
            </Link>
            <p className="text-sm">
              Train Smarter. Move Better. Get Stronger. Practical, responsible
              exercise instruction and fitness education.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Explore
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link href="/exercises" className="hover:text-white">
                  Exercise Library
                </Link>
              </li>
              <li>
                <Link href="/guides" className="hover:text-white">
                  Training Guides
                </Link>
              </li>
              <li>
                <Link href="/tips" className="hover:text-white">
                  Fitness Tips
                </Link>
              </li>
              <li>
                <Link href="/nutrition" className="hover:text-white">
                  Nutrition & Recovery
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              FitGuide
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link href="/about" className="hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Legal & Health
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link href="/disclaimer" className="hover:text-white">
                  Health Disclaimer
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-white">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-[#303030] pt-8 text-center text-xs text-[#A3A3A3]">
          <p>© 2026 FitGuide. All rights reserved. For general educational purposes only.</p>
        </div>
      </Container>
    </footer>
  );
}