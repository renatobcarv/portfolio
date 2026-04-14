// Force rebuild: 2026-04-13T00:42
import Hero from "@/components/sections/Hero";
import AboutMe from "@/components/sections/AboutMe";
import TechStack from "@/components/sections/TechStack";
import Projects from "@/components/sections/Projects";
import ProjectQualifier from "@/components/sections/ProjectQualifier";

import Methodology from "@/components/sections/Methodology";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";
import SmoothScroll from "@/components/providers/SmoothScroll";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <AboutMe />
      <TechStack />
      <Projects />
      <ProjectQualifier />
      <Methodology />

      <Contact />
      <FAQ />
      <Footer />
    </main>
  );
}
