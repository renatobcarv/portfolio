"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { projects } from "@/data/projects";
import Link from "next/link";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1] as const
    }
  }
};

export default function Projects() {
  return (
    <section id="projetos" className="py-24 px-6 relative bg-[#050505]">
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="mb-16">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 mb-4"
          >
            <div className="w-1 h-1 bg-emerald rounded-full animate-pulse" />
            <span className="font-mono text-[9px] tracking-widest uppercase text-emerald">
              03 — Projetos
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif text-white tracking-tightest leading-tight mb-4"
          >
            <span className="gradient-text italic">Projetos</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/40 font-sans text-sm max-w-lg"
          >
            Coisas que construí ou operei até aqui.
          </motion.p>
        </div>

        {/* Grid compacto lado a lado */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-5"
        >
          {projects.map((project) => (
            <motion.div key={project.id} variants={itemVariants}>
              <Link href={project.link} className="block h-full">
                <SpotlightCard className="p-6 border border-white/5 hover:border-emerald/20 transition-colors duration-500 overflow-hidden group/card text-left h-full flex flex-col">
                  {/* Tag */}
                  <div className="flex items-center gap-3 mb-3">
                    <span className="font-mono text-[8px] tracking-widest text-emerald uppercase font-bold">
                      {project.role}
                    </span>
                  </div>
                  
                  {/* Título */}
                  <h3 className="text-xl font-serif text-white tracking-tightest mb-3">
                    {project.name}
                  </h3>
                  
                  {/* Resumo curto (apenas primeira linha do summary) */}
                  <p className="text-cyber-white/40 text-[12px] leading-relaxed font-sans mb-6 line-clamp-2">
                    {project.summary.split('\n')[0]}
                  </p>

                  {/* Badges compactos */}
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.metrics.map((metric, i) => (
                      <span key={i} className="px-3 py-1 rounded-full bg-white/[0.03] border border-white/5 text-[9px] font-mono text-white/50">
                        <span className="text-white/80 font-bold">{metric.value}</span>
                        <span className="mx-1 text-white/20">·</span>
                        {metric.label.toLowerCase()}
                      </span>
                    ))}
                  </div>

                  {/* Seta */}
                  <div className="flex items-center gap-2 mt-5 group/btn">
                    <span className="font-mono text-[9px] tracking-widest uppercase text-white/30 group-hover/card:text-emerald transition-colors">
                      Ver detalhes
                    </span>
                    <ArrowRight size={12} className="text-white/20 group-hover/card:text-emerald -rotate-45 group-hover/card:rotate-0 transition-all duration-300" />
                  </div>
                </SpotlightCard>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
