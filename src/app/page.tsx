// src/app/page.tsx
import React from "react";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Testimonials from "../components/Testimonials";
import CtaSection from "../components/CtaSection";
import Services from "@/components/Services";
import Stats from "@/components/Stats";
import CaseStudies from "@/components/CaseStudies";
import Process from "@/components/Process";

const HomePage: React.FC = () => {
  return (
    <div>
      <Hero />
      <Services />
      <CaseStudies />
      <Stats />
      <Process />
      <Features />
      <Testimonials />
      <CtaSection />
    </div>
  );
};

export default HomePage;
