// Force rebuild: 2026-04-13T00:42
import Hero from "@/components/sections/Hero";
import AboutMe from "@/components/sections/AboutMe";
import TechStack from "@/components/sections/TechStack";
import Projects from "@/components/sections/Projects";
import FeatureGrid from "@/components/sections/FeatureGrid";
import BenchmarkTable from "@/components/sections/BenchmarkTable";
import Contact from "@/components/sections/Contact";
import SmoothScroll from "@/components/providers/SmoothScroll";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <AboutMe />
      <TechStack />
      <Projects />
      <FeatureGrid />
      <BenchmarkTable />
      <Contact />
    </main>
  );
}
