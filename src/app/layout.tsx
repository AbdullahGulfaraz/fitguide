import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#101010",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://fitguide.vercel.app"),
  title: {
    default: "FitGuide | Train Smarter. Move Better. Get Stronger.",
    template: "%s | FitGuide",
  },
  description:
    "Discover practical exercise instructions, structured training guides, and general fitness education.",
  keywords: [
    "fitness",
    "exercise library",
    "workout instructions",
    "technique guides",
    "strength training",
    "recovery",
  ],
  authors: [{ name: "FitGuide Editorial Team" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://fitguide.vercel.app",
    siteName: "FitGuide",
    title: "FitGuide | Train Smarter. Move Better. Get Stronger.",
    description:
      "Honest, accessible fitness education. Form cues, step-by-step instructions, and training principles without gimmicks.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="flex min-h-screen flex-col bg-[#101010] text-[#FFFFFF] antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}