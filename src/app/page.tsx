// Conteúdo atualizado em 2026-05-05
import Hero from "@/components/sections/Hero";
import AboutMe from "@/components/sections/AboutMe";
import TechStack from "@/components/sections/TechStack";
import Projects from "@/components/sections/Projects";
import Education from "@/components/sections/Education";
import Portrait from "@/components/sections/Portrait";
import Contact from "@/components/sections/Contact";
import FAQ from "@/components/sections/FAQ";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <AboutMe />
      <TechStack />
      <Projects />
      <Education />
      <Portrait />
      <Contact />
      <FAQ />
    </main>
  );
}
