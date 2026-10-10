import React from "react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { ShieldAlert } from "lucide-react";

export const metadata = {
  title: "Health & Fitness Disclaimer | FitGuide",
  description: "General educational information disclaimer and safety guidance.",
};

export default function DisclaimerPage() {
  return (
    <div className="py-12 sm:py-16">
      <Container>
        <SectionHeading
          title="Health & Fitness Disclaimer"
          subtitle="Please read this important notice regarding the educational nature of this website."
        />

        <div className="max-w-3xl space-y-6 text-[#A3A3A3] text-sm sm:text-base leading-relaxed bg-[#1C1C1C] border border-[#303030] p-8 rounded-xl">
          <div className="flex items-center gap-3 text-[#EF4444] font-bold text-base mb-2">
            <ShieldAlert className="w-6 h-6 shrink-0" />
            <span>NOT MEDICAL ADVICE</span>
          </div>

          <p>
            The information presented on FitGuide — including movement instructions, guides, tips, and nutritional principles — is published exclusively for general educational and informational purposes.
          </p>

          <section>
            <h2 className="text-lg font-bold text-white mb-2 uppercase">1. Consult a Physician</h2>
            <p>
              Physical exercise involves inherent risk of physical injury. Prior to beginning any new exercise regimen, physical conditioning program, or making substantial dietary alterations, consult a physician or licensed healthcare provider, especially if you have pre-existing cardiovascular, orthopedic, or metabolic conditions.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-2 uppercase">2. Discontinue Exercise on Pain</h2>
            <p>
              If at any point during training you experience lightheadedness, sharp joint pain, shortness of breath, dizziness, or abnormal physical discomfort, cease the activity immediately and seek medical attention.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-2 uppercase">3. No Guaranteed Results</h2>
            <p>
              Physical responses to resistance training and nutrition vary widely between individuals based on genetics, recovery capability, and consistency. FitGuide does not guarantee specific body composition or athletic performance outcomes.
            </p>
          </section>
        </div>
      </Container>
    </div>
  );
}