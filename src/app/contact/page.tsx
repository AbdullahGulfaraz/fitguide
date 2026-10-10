import React from "react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Mail, MessageSquare } from "lucide-react";

export const metadata = {
  title: "Contact Us | FitGuide",
  description: "Get in touch with the FitGuide editorial team.",
};

export default function ContactPage() {
  return (
    <div className="py-12 sm:py-16">
      <Container>
        <SectionHeading
          title="Contact FitGuide"
          subtitle="Have feedback, content corrections, or questions about the educational material?"
        />

        <div className="max-w-xl mx-auto rounded-xl bg-[#1C1C1C] border border-[#303030] p-8 text-center">
          <div className="w-12 h-12 rounded-full bg-[#FF6B1A]/10 text-[#FF6B1A] flex items-center justify-center mx-auto mb-4">
            <Mail className="w-6 h-6" />
          </div>
          <h2 className="text-2xl font-bold text-white mb-2">Editorial Contact</h2>
          <p className="text-sm text-[#A3A3A3] mb-6 leading-relaxed">
            FitGuide is an open educational project. To report an error or suggest improvements to our exercise guides, please reach out via our contact channels.
          </p>
          <div className="p-4 rounded-lg bg-[#252525] border border-[#303030] text-sm text-white font-mono mb-6">
            abdullahgulfaraz19@gmail.com
          </div>
          <p className="text-xs text-[#A3A3A3] flex items-center justify-center gap-1.5">
            <MessageSquare className="w-4 h-4 text-[#FF6B1A]" />
            We read and review all verified community feedback regarding exercise safety.
          </p>
        </div>
      </Container>
    </div>
  );
}