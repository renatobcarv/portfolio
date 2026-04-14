"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { projects } from "@/data/projects";
import Link from "next/link";
import Image from "next/image";

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
      ease: [0.16, 1, 0.3, 1] as const
    }
  }
};

export default function Projects() {
  return (
    <section id="projetos" className="py-24 px-6 relative bg-[#050505]">
      <div className="max-w-6xl mx-auto relative z-10">
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
              03 — Projetos Selecionados
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
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {projects.map((project) => (
            <motion.div key={project.id} variants={itemVariants}>
              <SpotlightCard className="p-0 border border-white/5 hover:border-emerald/20 transition-colors duration-500 overflow-hidden group/card text-left h-full flex flex-col">
                {/* Top Thumbnail */}
                {project.thumbnail && (
                  <div className="relative w-full h-[200px] overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050505] to-transparent z-10" />
                    <Image 
                      src={project.thumbnail} 
                      alt={project.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                      className="object-cover grayscale opacity-40 group-hover/card:grayscale-0 group-hover/card:opacity-60 transition-all duration-700 group-hover/card:scale-110"
                    />
                  </div>
                )}

                {/* Content */}
                <div className="flex-1 p-8 relative z-20 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                       <span className="font-mono text-[9px] tracking-widest text-emerald uppercase font-bold">
                         {project.role}
                       </span>
                    </div>
                    
                    <h3 className="text-2xl md:text-3xl font-serif text-white tracking-tightest mb-4">
                      {project.name}
                    </h3>
                    
                    <p className="text-cyber-white/40 text-[13px] leading-relaxed font-sans mb-8">
                      {project.summary}
                    </p>
                  </div>

                  <div className="flex items-center justify-between gap-4 mt-auto">
                    <div className="flex gap-4">
                      {project.metrics.map((metric, i) => (
                        <div key={i} className="flex flex-col">
                          <span className="text-lg font-mono text-white/80 font-bold tracking-tightest">
                            {metric.value}
                          </span>
                          <span className="text-[7px] font-mono tracking-widest text-white/30 uppercase">
                            {metric.label}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center gap-5">
                      {project.github && (
                        <a 
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white/30 hover:text-emerald transition-colors"
                          title="Ver Repositório"
                        >
                          <GithubIcon size={18} />
                        </a>
                      )}
                      
                      <Link 
                        href={project.link}
                        className="flex items-center gap-2 group/btn py-2"
                      >
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
            <Link href="/paginas-de-vendas" className="h-full block">
              <SpotlightCard className="p-8 border border-emerald/10 bg-emerald/[0.02] hover:bg-emerald/[0.05] hover:border-emerald/30 transition-all duration-500 group h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                     <span className="font-mono text-[9px] tracking-widest text-emerald uppercase font-bold">
                       EDITORIAL & PERFORMANCE
                     </span>
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl font-serif text-white tracking-tightest mb-4">
                    Páginas de <br /><span className="italic gradient-text">Vendas</span>
                  </h3>
                  
                  <p className="text-emerald/40 text-[13px] leading-relaxed font-sans mb-8">
                    Catálogo visual com mais de 40 estilos de alta conversão. Do editorial premium ao brutalist.
                  </p>
                </div>

                <div className="flex flex-col gap-6 mt-auto">
                  <div className="flex flex-col">
                    <span className="text-3xl font-mono text-emerald font-bold tracking-tightest">
                      40+
                    </span>
                    <span className="text-[7px] font-mono tracking-widest text-emerald/40 uppercase mt-1">
                      Estilos Disponíveis
                    </span>
                  </div>

                  <div className="flex items-center gap-2 group/btn">
                    <span className="font-mono text-[10px] tracking-widest uppercase text-emerald group-hover:translate-x-1 transition-transform">
                      Explorar Catálogo
                    </span>
                    <ArrowRight size={14} className="text-emerald bg-emerald/10 p-2 rounded-full w-8 h-8" />
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
