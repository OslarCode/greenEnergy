// src/app/about/page.tsx
import AboutOverview from "@/components/AboutOverview";
import FAQ from "@/components/FAQ";
import Values from "@/components/Values";
import Team from "@/components/Team";
import Timeline from "@/components/Timeline";
import Partners from "@/components/Partners";

export default function AboutPage() {
  return (
    <div>
      <AboutOverview />
      <FAQ />
      <Values />
      <Team />
      <Timeline />
      <Partners />
    </div>
  );
}
