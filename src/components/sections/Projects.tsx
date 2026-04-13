"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { projects } from "@/data/projects";
import Link from "next/link";

// Raw SVG for Github to ensure stability across library versions
const GithubIcon = ({ size = 18 }: { size?: number }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
    <path d="M9 18c-4.51 2-5-2-7-2"/>
  </svg>
);

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1]
    }
  }
};

export default function Projects() {
  return (
    <section id="projetos" className="py-24 px-6 relative bg-[#050505]">
      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="mb-20">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 mb-4"
          >
            <div className="w-1 h-1 bg-emerald rounded-full animate-pulse" />
            <span className="font-mono text-[9px] tracking-widest uppercase text-emerald">
              02 — Projetos Selecionados
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif text-white tracking-tightest leading-tight"
          >
            Sistemas em <span className="gradient-text italic">Produção</span>
          </motion.h2>
        </div>

        {/* Vertical Compact Projects Stack */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-6"
        >
          {projects.map((project) => (
            <motion.div key={project.id} variants={itemVariants}>
              <SpotlightCard className="p-6 md:p-8 border border-white/5 hover:border-emerald/20 transition-colors duration-500">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
                  {/* Left content */}
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                       <span className="font-mono text-[9px] tracking-widest text-emerald uppercase font-bold">
                         {project.role}
                       </span>
                       <div className="h-px w-8 bg-white/5" />
                    </div>
                    
                    <h3 className="text-2xl md:text-3xl font-serif text-white tracking-tightest mb-3">
                      {project.name}
                    </h3>
                    
                    <p className="text-cyber-white/40 text-sm leading-relaxed font-sans max-w-lg">
                      {project.summary}
                    </p>
                  </div>

                  {/* Right content - Metrics & Action */}
                  <div className="flex flex-wrap md:flex-nowrap items-center gap-8 md:gap-12">
                    <div className="flex gap-8">
                      {project.metrics.map((metric, i) => (
                        <div key={i} className="flex flex-col">
                          <span className="text-xl md:text-2xl font-mono text-white/80 font-bold tracking-tightest">
                            {metric.value}
                          </span>
                          <span className="text-[8px] font-mono tracking-widest text-white/30 uppercase mt-1">
                            {metric.label}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center gap-4 lg:gap-6">
                      {project.github && (
                        <a 
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 rounded-full bg-white/5 border border-white/5 text-white/40 hover:text-emerald hover:border-emerald/20 hover:bg-emerald/5 transition-all duration-300"
                          title="Ver Repositório"
                        >
                          <GithubIcon size={18} />
                        </a>
                      )}
                      
                      {project.liveUrl && (
                        <a 
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-emerald/10 border border-emerald/20 text-emerald hover:bg-emerald/20 transition-all duration-300 group/site"
                        >
                          <span className="font-mono text-[9px] tracking-widest uppercase font-bold">Ver Site</span>
                          <svg className="w-3.5 h-3.5 group-hover/site:translate-x-0.5 group-hover/site:-translate-y-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      )}

                      <Link 
                        href={project.link}
                        className="flex items-center gap-2 group/btn py-2 px-1"
                      >
                        <span className="font-mono text-[10px] tracking-widest uppercase text-white/50 group-hover/btn:text-emerald transition-colors link-underline">
                          Saber Mais
                        </span>
                        <ArrowRight size={14} className="text-emerald -rotate-45 group-hover/btn:rotate-0 transition-transform duration-300" />
                      </Link>
                    </div>
                  </div>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}

          {/* STANDOUT: Landing Pages Catalog */}
          <motion.div variants={itemVariants}>
            <Link href="/paginas-de-vendas">
              <SpotlightCard className="p-6 md:p-8 border border-emerald/10 bg-emerald/[0.02] hover:bg-emerald/[0.05] hover:border-emerald/30 transition-all duration-500 group">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                       <span className="font-mono text-[9px] tracking-widest text-emerald uppercase font-bold">
                         EDITORIAL & PERFORMANCE
                       </span>
                       <div className="h-px w-8 bg-emerald/20" />
                    </div>
                    
                    <h3 className="text-2xl md:text-3xl font-serif text-white tracking-tightest mb-3">
                      Páginas de <span className="italic gradient-text">Vendas</span>
                    </h3>
                    
                    <p className="text-emerald/40 text-sm leading-relaxed font-sans max-w-lg">
                      Catálogo visual com mais de 40 estilos de landing pages de alta conversão. Do editorial premium ao brutalist.
                    </p>
                  </div>

                  <div className="flex items-center gap-6">
                    <div className="flex flex-col items-end">
                      <span className="text-2xl font-mono text-emerald font-bold tracking-tightest">
                        40+
                      </span>
                      <span className="text-[8px] font-mono tracking-widest text-emerald/40 uppercase mt-1">
                        Estilos Disponíveis
                      </span>
                    </div>

                    <div className="h-12 w-px bg-emerald/10 hidden md:block" />

                    <div className="flex items-center gap-2 group/btn">
                      <span className="font-mono text-[10px] tracking-widest uppercase text-emerald group-hover:translate-x-1 transition-transform">
                        Explorar Catálogo
                      </span>
                      <ArrowRight size={14} className="text-emerald bg-emerald/10 p-2 rounded-full w-8 h-8" />
                    </div>
                  </div>
                </div>
              </SpotlightCard>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
