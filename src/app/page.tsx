import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <div className="py-20">
      <Container>
        <SectionHeading
          title="FitGuide Shell Active"
          subtitle="Phase 1 setup complete: Design foundation, UI tokens, and layout components are ready."
          centered
        />
        <div className="mt-8 flex justify-center gap-4">
          <Button variant="primary">Primary Button</Button>
          <Button variant="secondary">Secondary Button</Button>
          <Button variant="outline">Outline Button</Button>
        </div>
      </Container>
    </div>
  );
}