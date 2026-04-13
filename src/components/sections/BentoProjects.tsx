"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  description: string;
  tags: string[];
  metrics?: { label: string; value: string }[];
  link?: string;
  github?: string;
  image: string;
}

const projects: Project[] = [
  {
    id: "01",
    title: "Valence (Recovery System)",
    subtitle: "Engenharia de Receita",
    category: "Revenue / SaaS",
    description: "Identificamos e recuperamos lucro morto em operações de e-commerce de alto volume. O Recovery System estanca vazamentos financeiros via automação inteligente.",
    tags: ["Next.js", "FastAPI", "PostgreSQL", "Stripe"],
    image: "/images/Valence Logo.png",
    metrics: [
      { label: "ROI Médio", value: "12x" },
      { label: "Recuperação", value: "85%" }
    ]
  },
  {
    id: "02",
    title: "VØYDRA",
    subtitle: "Branding Industrial",
    category: "Brand / Logistics",
    description: "Operação completa de D2C focado em vestuário de elite. Branding autoral e logística otimizada para o mercado de powerlifting.",
    tags: ["Logistics", "Operations", "E-commerce"],
    image: "/images/VOYDRA LOGO.png",
    metrics: [
      { label: "Receita/Mês", value: "R$6k" }
    ]
  },
  {
    id: "03",
    title: "Sistemas Estratégicos",
    subtitle: "Automação de Crescimento",
    category: "Automation",
    description: "Desenvolvimento de engrenagens técnicas que operam no pulso do tráfego pago, transformando cliques em dados estruturados e lucro.",
    tags: ["Python", "Scalability", "Growth"],
    image: "https://images.unsplash.com/photo-1551288049-bbbda536ad89?q=80&w=2070&auto=format&fit=crop"
  }
];

export default function BentoProjects() {
  const fadeUp = {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.5, ease: "easeOut" }
  } as const;

  return (
    <section id="projetos" className="py-24 px-6 lg:px-[60px] max-w-[1200px] mx-auto relative z-10">
      <motion.div {...fadeUp} className="mb-16">
        <div className="text-lava-orange font-bold uppercase tracking-[0.3em] text-[10px] mb-4">
          {"// 02 — portfólio"}
        </div>
        <h2 className="font-sans text-[clamp(32px,4vw,56px)] font-bold leading-[1.0] tracking-tighter text-white">
          Sistemas com <span className="text-white/40">intencionalidade.</span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 auto-rows-[auto]">
        {projects.map((project, idx) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className={`group relative bg-noir-card rounded-[2rem] border border-white/[0.03] overflow-hidden flex flex-col p-10 transition-all hover:border-white/[0.08] hover:bg-noir-hover ${
              idx === 0 ? "md:col-span-2" : "md:col-span-1"
            }`}
          >
            {/* Mesh Glow */}
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-lava/5 blur-[120px] rounded-full pointer-events-none group-hover:bg-lava/10 transition-colors" />

            <div className="flex flex-col md:flex-row justify-between items-start gap-8 relative z-10">
              <div className="flex flex-col flex-1">
                <span className="text-lava font-bold uppercase tracking-widest text-[10px] mb-2">{project.category}</span>
                <h3 className="text-3xl font-bold text-white tracking-tight mb-2">
                  {project.title}
                </h3>
                <div className="text-lava/60 font-serif italic text-lg mb-6">{project.subtitle}</div>
                
                <p className="text-text-muted text-base leading-relaxed mb-8 max-w-[500px]">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-white/[0.03] border border-white/[0.05] rounded-full text-[10px] text-text-subtle uppercase tracking-widest font-bold">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 items-center">
                  <a href="#" className="flex items-center gap-2 text-sm text-white/50 hover:text-white transition-colors group/link">
                    Explorar Case <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                  </a>
                </div>
              </div>

              <div className="flex flex-col items-start md:items-end gap-8 w-full md:w-auto">
                {project.image && (
                  <div className="relative w-20 h-20 rounded-2xl overflow-hidden bg-black/40 border border-white/5 p-4 backdrop-blur-md shadow-2xl">
                    <Image 
                      src={project.image} 
                      alt={project.title} 
                      width={80}
                      height={80}
                      className="w-full h-full object-contain opacity-80 group-hover:opacity-100 transition-opacity"
                    />
                  </div>
                )}

                {project.metrics && (
                  <div className="flex gap-8">
                    {project.metrics.map((m, i) => (
                      <div key={i} className="flex flex-col md:items-end">
                        <span className="text-3xl font-bold text-white tracking-tighter">{m.value}</span>
                        <span className="text-[10px] text-text-subtle uppercase tracking-widest font-bold">{m.label}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
