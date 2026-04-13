"use client";

import { projects } from "@/data/projects";
import { notFound } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowLeft, Database, Cpu, Target, Award, X, Play, 
  Image as ImageIcon, TrendingUp, BarChart3, Layers, FileText, CheckCircle2,
  Server, Globe, Activity, Code2, ShieldCheck, Zap,
  Palette, Type, Boxes, Workflow, Package, ArrowRight
} from "lucide-react";
import Link from "next/link";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { useState } from "react";

// Raw SVG for Github to ensure stability across library versions
const GithubIcon = ({ size = 20 }: { size?: number }) => (
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

export default function ProjectPage({ params }: { params: { id: string } }) {
  const project = projects.find((p) => p.id === params.id);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  if (!project) {
    notFound();
  }

  const sections = [
    { title: "O Desafio", content: project.details.challenge, icon: <Target className="text-emerald" size={20} /> },
    { title: "Engenharia de Solução", content: project.details.solution, icon: <Cpu className="text-emerald" size={20} /> },
    { title: "Arquitetura & Dados", content: project.details.architecture, icon: <Database className="text-emerald" size={20} /> },
    { title: "Impacto & Resultados", content: project.details.impact, icon: <Award className="text-emerald" size={20} /> },
  ];

  return (
    <main className="min-h-screen bg-[#050505] text-white pt-32 pb-32 px-6 relative overflow-hidden">
      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 md:p-12 cursor-zoom-out"
          >
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="absolute top-8 right-8 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
            >
              <X size={24} />
            </motion.button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={selectedImage}
              alt="Project Visual"
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Background Decorative Element */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none opacity-20">
        <div className="absolute top-[5%] left-[-10%] w-[600px] h-[600px] bg-emerald/10 blur-[150px] rounded-full animate-pulse" />
        <div className="absolute bottom-[20%] right-[-10%] w-[500px] h-[500px] bg-emerald/5 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Navigation */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-16"
        >
          <Link 
            href="/#projetos" 
            className="inline-flex items-center gap-3 text-white/40 hover:text-emerald transition-all group py-2"
          >
            <div className="p-2 rounded-full border border-white/5 group-hover:border-emerald/30 group-hover:bg-emerald/5 transition-all">
              <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            </div>
            <span className="font-mono text-[10px] tracking-widest uppercase">Voltar ao Portfólio</span>
          </Link>
        </motion.div>

        {/* Hero Header */}
        <div className="mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 mb-6"
          >
            <div className="w-1.5 h-1.5 bg-emerald rounded-full animate-pulse" />
            <span className="font-mono text-[11px] tracking-widest uppercase text-emerald font-bold">
              Case Study — {project.role}
            </span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-6xl md:text-8xl lg:text-9xl font-serif tracking-tightest leading-[0.85] mb-12"
          >
             {project.name.split(' ').length > 1 ? (
               <>
                 {project.name.split(' ').slice(0, -1).join(' ')} <br className="hidden md:block" />
                 <span className="gradient-text italic">{project.name.split(' ').slice(-1)}</span>
               </>
             ) : (
               <span className="gradient-text italic">{project.name}</span>
             )}
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-cyber-white/60 text-xl md:text-2xl font-sans leading-relaxed max-w-3xl"
          >
            {project.summary}
          </motion.p>
        </div>

        {/* Technical Metrics Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-32"
        >
          {project.metrics.map((m, i) => (
            <div key={i} className="p-6 rounded-3xl bg-white/[0.02] border border-white/5 backdrop-blur-sm group hover:border-emerald/20 transition-all">
              <span className="text-3xl md:text-4xl font-mono text-white font-bold tracking-tightest block mb-1">{m.value}</span>
              <span className="text-[9px] font-mono tracking-widest text-white/30 uppercase">{m.label}</span>
            </div>
          ))}
          <div className="p-6 rounded-3xl bg-white/[0.02] border border-white/5 flex items-center justify-center">
             {project.github && (
                <a 
                  href={project.github}
                  target="_blank"
                  className="flex items-center gap-3 font-mono text-[10px] tracking-widest uppercase text-white/40 hover:text-emerald transition-colors"
                >
                  <GithubIcon size={20} />
                  <span>Repositório</span>
                </a>
             )}
          </div>
        </motion.div>

        {/* GALLERY SECTION */}
        {project.gallery && (
          <div className="mb-40 space-y-40">
            {/* Design Showcase */}
            <section>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-4 mb-12"
              >
                <div className="p-2 rounded-lg bg-emerald/5 border border-emerald/10">
                  <ImageIcon className="text-emerald" size={20} />
                </div>
                <h2 className="font-mono text-[10px] tracking-widest uppercase text-white/40">Visual Design & Mockups</h2>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {project.gallery.estampas.map((path, idx) => (
                  <motion.div
                    key={path}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05 }}
                    onClick={() => setSelectedImage(path)}
                    className="group relative aspect-[3/4] rounded-3xl overflow-hidden bg-white/[0.02] border border-white/5 cursor-zoom-in"
                  >
                    <img
                      src={path}
                      alt="Design Preview"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                       <span className="font-mono text-[8px] tracking-widest uppercase text-white/60">Expandir Visual</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Video Showcase */}
            <section>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-4 mb-12"
              >
                <div className="p-2 rounded-lg bg-emerald/5 border border-emerald/10">
                  <Play className="text-emerald" size={20} />
                </div>
                <h2 className="font-mono text-[10px] tracking-widest uppercase text-white/40">Videos do Instagram</h2>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {project.gallery.videos.map((path, idx) => (
                  <motion.div
                    key={path}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative aspect-video rounded-3xl overflow-hidden bg-white/[0.02] border border-white/5 group shadow-2xl"
                  >
                    <video
                      src={path}
                      muted
                      autoPlay
                      loop
                      playsInline
                      className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                    />
                    <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black via-black/40 to-transparent">
                       <span className="font-mono text-[8px] tracking-widest uppercase text-emerald/80 drop-shadow-lg">
                         VØYDRA — {path.split('/').pop()?.split('.')[0]}
                       </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>
          </div>
        )}

        {/* STRATEGY & SCALE SECTION */}
        {project.strategy && (
          <section className="mb-40">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <div className="flex items-center gap-4 mb-10">
                <div className="p-2 rounded-lg bg-emerald/5 border border-emerald/10">
                  <TrendingUp className="text-emerald" size={20} />
                </div>
                <h2 className="font-mono text-[10px] tracking-widest uppercase text-white/40">Estratégia & Escala Infinita</h2>
              </div>
              
              <div className="max-w-3xl mb-24">
                <h3 className="text-4xl md:text-5xl font-serif text-white tracking-tightest leading-tight mb-8">
                  Soldados, não <span className="gradient-text italic">Vitrines.</span>
                </h3>
                <p className="text-cyber-white/60 text-lg md:text-xl font-sans leading-relaxed border-l-2 border-emerald/20 pl-8">
                  {project.strategy.philosophy}
                </p>
                
                <div className="mt-12 flex items-center gap-6">
                   <a 
                     href={project.strategy.pdfPath}
                     target="_blank"
                     className="flex items-center gap-3 py-4 px-8 rounded-full bg-white/5 border border-white/10 hover:border-emerald/30 hover:bg-emerald/5 transition-all group"
                   >
                     <FileText size={18} className="text-emerald" />
                     <span className="font-mono text-[10px] tracking-widest uppercase text-white/60 group-hover:text-white">Protocolo de Patrocínio (PDF)</span>
                   </a>
                </div>
              </div>
            </motion.div>

            {/* The Ladder (Sponsorship Levels) */}
            <div className="relative">
              {/* Vertical line connector */}
              <div className="absolute left-[39px] top-10 bottom-10 w-px bg-gradient-to-b from-emerald/50 via-emerald/10 to-transparent hidden md:block" />

              <div className="space-y-12">
                {project.strategy.levels.map((level, idx) => (
                  <motion.div 
                    key={level.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex flex-col md:flex-row gap-8 items-start relative z-10"
                  >
                    {/* Level Badge */}
                    <div className="flex-shrink-0 w-20 h-20 rounded-2xl bg-[#0a0a0a] border border-white/5 flex items-center justify-center shadow-2xl group flex-col gap-1 hover:border-emerald/40 transition-colors">
                       <span className="font-mono text-[8px] text-white/30 uppercase tracking-tighter">Nível</span>
                       <span className="text-2xl font-mono font-bold text-emerald">{idx + 1}</span>
                    </div>

                    <SpotlightCard className="flex-1 p-8 border border-white/5">
                       <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-8">
                          <div>
                            <div className="flex items-center gap-3 mb-2">
                              <h4 className="text-2xl font-mono font-black text-white tracking-widest group-hover:text-emerald transition-colors">
                                {level.name}
                              </h4>
                              <div className="px-3 py-1 rounded-full bg-emerald/10 border border-emerald/20">
                                <span className="font-mono text-[9px] text-emerald uppercase font-bold">{level.requirement}</span>
                              </div>
                            </div>
                            <span className="font-sans text-xs text-white/30 uppercase tracking-widest">Sponsorship Tier</span>
                          </div>

                          {level.commission && (
                            <div className="flex items-center gap-4 py-3 px-6 rounded-2xl bg-white/[0.02] border border-white/5">
                               <BarChart3 size={16} className="text-emerald/50" />
                               <div className="flex flex-col">
                                  <span className="text-[8px] font-mono text-white/30 uppercase">Comissão</span>
                                  <span className="text-sm font-mono text-white font-bold">{level.commission}</span>
                               </div>
                            </div>
                          )}
                       </div>

                       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {level.rewards.map((reward, i) => (
                            <div key={i} className="flex items-start gap-3">
                               <CheckCircle2 size={14} className="text-emerald mt-0.5 flex-shrink-0" />
                               <p className="text-sm text-cyber-white/50 leading-snug">{reward}</p>
                            </div>
                          ))}
                       </div>
                    </SpotlightCard>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ARCHITECTURE PILLARS (For complex SaaS like Valence) */}
        {project.architecture && (
          <section className="mb-40">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-16"
            >
              <div className="p-2 rounded-lg bg-emerald/5 border border-emerald/10">
                <Layers className="text-emerald" size={20} />
              </div>
              <h2 className="font-mono text-[10px] tracking-widest uppercase text-white/40">Revenue Operating System — Modular Architecture</h2>
            </motion.div>

            {/* Pillars Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
              {project.architecture.pillars.map((pillar, idx) => (
                <SpotlightCard key={idx} className="p-8 border border-white/5 flex flex-col h-full group">
                  <div className="mb-6 flex justify-between items-start">
                    <div className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-center group-hover:border-emerald/30 group-hover:bg-emerald/5 transition-all">
                      {idx === 0 ? <Database size={18} className="text-white/40 group-hover:text-emerald" /> : 
                       idx === 1 ? <Cpu size={18} className="text-white/40 group-hover:text-emerald" /> : 
                       <Zap size={18} className="text-white/40 group-hover:text-emerald" />}
                    </div>
                    <span className="font-mono text-[8px] text-white/20 uppercase tracking-widest">{pillar.tech}</span>
                  </div>
                  <h3 className="font-serif text-2xl mb-4 group-hover:text-emerald transition-colors">{pillar.title}</h3>
                  <p className="text-sm text-cyber-white/50 leading-relaxed mb-6 flex-grow">{pillar.description}</p>
                </SpotlightCard>
              ))}
            </div>

            {/* Principles & Manifest */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-12">
                {project.architecture.principles.map((principle, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    <h4 className="font-serif text-xl italic gradient-text mb-3">{principle.title}</h4>
                    <p className="text-cyber-white/60 text-sm leading-relaxed border-l border-white/10 pl-6">
                      {principle.content}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* Code Showcase */}
              {project.architecture.codeSnippet && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                >
                  <div className="rounded-2xl overflow-hidden border border-white/5 bg-[#0a0a0a] shadow-2xl">
                    <div className="px-5 py-3 border-b border-white/5 bg-white/[0.02] flex items-center justify-between">
                      <div className="flex gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                        <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                        <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                      </div>
                      <div className="flex items-center gap-2">
                         <Code2 size={12} className="text-white/20" />
                         <span className="font-mono text-[9px] text-white/20 uppercase tracking-widest">engine.py</span>
                      </div>
                    </div>
                    <div className="p-8">
                      <pre className="font-mono text-[11px] leading-relaxed text-white/60 overflow-x-auto">
                        <code>{project.architecture.codeSnippet}</code>
                      </pre>
                    </div>
                  </div>
                  <p className="mt-4 text-center font-mono text-[8px] text-white/20 uppercase tracking-widest italic">
                    Snippet: Lógica Determinística de Recuperação em Tempo Real
                  </p>
                </motion.div>
              )}
            </div>
          </section>
        )}

        {/* DESIGN SYSTEM SHOWCASE (For Apex Noir Case) */}
        {project.designSystem && (
          <section className="space-y-40 mb-40">
            {/* Palette */}
            <div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-4 mb-16"
              >
                <div className="p-2 rounded-lg bg-emerald/5 border border-emerald/10">
                  <Palette className="text-emerald" size={20} />
                </div>
                <h2 className="font-mono text-[10px] tracking-widest uppercase text-white/40">The Noir Stack — Color Palette</h2>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {project.designSystem.palette.map((color, idx) => {
                  const typeColor = color.type === 'accent' && color.name.includes('Lava') 
                    ? 'text-red-500' 
                    : color.type === 'accent' && color.name.includes('Emerald')
                    ? 'text-emerald'
                    : 'text-white/30';
                  
                  const borderGlow = color.type === 'accent' && color.name.includes('Lava')
                    ? 'hover:ring-red-500/20'
                    : color.type === 'accent' && color.name.includes('Emerald')
                    ? 'hover:ring-emerald/20'
                    : 'hover:ring-white/10';

                  return (
                    <SpotlightCard key={idx} className={`p-8 border border-white/5 group transition-all ${borderGlow}`}>
                      <div 
                        className="w-full h-28 rounded-xl mb-6 relative overflow-hidden ring-1 ring-white/5"
                        style={{ background: color.hex }}
                      >
                        {/* Subtle noise for depth on dark swatches */}
                        {color.type === 'base' && (
                          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.03)_0%,transparent_70%)]" />
                        )}
                      </div>
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="font-serif text-xl">{color.name}</h3>
                        <span className={`font-mono text-[8px] uppercase tracking-[0.15em] mt-1.5 ${typeColor}`}>{color.type}</span>
                      </div>
                      <p className="text-[13px] text-cyber-white/40 leading-relaxed">{color.role}</p>
                    </SpotlightCard>
                  );
                })}
              </div>
            </div>

            {/* Typography */}
            <div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-4 mb-16"
              >
                <div className="p-2 rounded-lg bg-emerald/5 border border-emerald/10">
                  <Type className="text-emerald" size={20} />
                </div>
                <h2 className="font-mono text-[10px] tracking-widest uppercase text-white/40">Grade Editorial — Typography Cases</h2>
              </motion.div>

              <div className="space-y-8">
                {/* Display & Identity */}
                <div>
                  <p className="font-mono text-[9px] text-white/20 uppercase tracking-[0.3em] mb-4">Identidade & Display</p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {project.designSystem.typography.filter((_, i) => i < 3).map((font, idx) => (
                      <SpotlightCard key={idx} className="p-6 border border-white/5 group">
                        <div className="h-20 flex items-center justify-center mb-6 border-b border-white/5 pb-6">
                          <span className={`leading-none text-white transition-all
                            ${idx === 0 ? 'text-4xl font-black italic uppercase tracking-[-0.06em]' : 
                              idx === 1 ? 'text-3xl font-mono uppercase tracking-[0.15em] text-white/70' : 
                              'text-3xl italic font-light font-serif'}`}
                            style={{ fontFamily: idx === 0 ? 'var(--font-montserrat)' : undefined }}
                          >
                            {font.sample}
                          </span>
                        </div>
                        <h3 className="font-mono text-[10px] text-emerald uppercase tracking-[0.2em] mb-2">{font.role}</h3>
                        <p className="font-serif text-lg italic mb-4 text-white/80">{font.family}</p>
                        <div className="space-y-1.5">
                          {font.rules.map((rule, rIdx) => (
                            <div key={rIdx} className="flex items-center gap-2 text-[11px] text-white/30">
                              <div className="w-1 h-1 rounded-full bg-emerald/40" />
                              {rule}
                            </div>
                          ))}
                        </div>
                      </SpotlightCard>
                    ))}
                  </div>
                </div>

                {/* Interface & Reading */}
                <div>
                  <p className="font-mono text-[9px] text-white/20 uppercase tracking-[0.3em] mb-4">Interface & Leitura</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {project.designSystem.typography.filter((_, i) => i >= 3).map((font, idx) => (
                      <SpotlightCard key={idx} className="p-6 border border-white/5 group">
                        <div className="h-16 flex items-center justify-center mb-6 border-b border-white/5 pb-6">
                          <span className={`leading-none transition-all
                            ${idx === 0 ? 'text-2xl text-white/70' : 
                              'text-xl text-white/50 tracking-tight'}`}
                            style={{ fontFamily: idx === 1 ? '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", system-ui, sans-serif' : undefined }}
                          >
                            {font.sample}
                          </span>
                        </div>
                        <h3 className="font-mono text-[10px] text-emerald uppercase tracking-[0.2em] mb-2">{font.role}</h3>
                        <p className="font-serif text-lg italic mb-4 text-white/80">{font.family}</p>
                        <div className="space-y-1.5">
                          {font.rules.map((rule, rIdx) => (
                            <div key={rIdx} className="flex items-center gap-2 text-[11px] text-white/30">
                              <div className="w-1 h-1 rounded-full bg-emerald/40" />
                              {rule}
                            </div>
                          ))}
                        </div>
                      </SpotlightCard>
                    ))}
                  </div>
                </div>

                {/* Editorial Rules */}
                <div className="mt-8 p-8 rounded-2xl bg-white/[0.01] border border-white/5">
                  <h4 className="font-mono text-[9px] text-white/20 uppercase tracking-[0.3em] mb-6">Regras Editoriais</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <p className="text-sm text-white/50 mb-3">Títulos</p>
                      <div className="flex items-baseline gap-4">
                        <span className="text-3xl font-black italic tracking-[-0.06em] text-white" style={{ fontFamily: 'var(--font-montserrat)' }}>RECUPERAÇÃO</span>
                      </div>
                      <p className="mt-2 font-mono text-[10px] text-white/20">tracking-[-0.06em] · italic · black</p>
                    </div>
                    <div>
                      <p className="text-sm text-white/50 mb-3">Labels</p>
                      <div className="flex items-baseline gap-4">
                        <span className="text-sm uppercase italic tracking-[0.4em] text-white/60">Receita Perdida</span>
                      </div>
                      <p className="mt-2 font-mono text-[10px] text-white/20">uppercase · italic · tracking-[0.4em]</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Signature Components */}
            <div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-4 mb-16"
              >
                <div className="p-2 rounded-lg bg-emerald/5 border border-emerald/10">
                  <Boxes className="text-emerald" size={20} />
                </div>
                <h2 className="font-mono text-[10px] tracking-widest uppercase text-white/40">Componentes de Assinatura — UI Lab</h2>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {project.designSystem.components.map((comp, idx) => (
                  <SpotlightCard key={idx} className="p-8 border border-white/5 group relative overflow-hidden">
                    <div className="relative z-10">
                      <h3 className="font-serif text-2xl mb-4 group-hover:text-emerald transition-colors">{comp.name}</h3>
                      <p className="text-sm text-cyber-white/50 leading-relaxed">{comp.description}</p>
                    </div>
                    
                    {/* Visual representative for components */}
                    {idx === 0 && (
                      <div className="mt-8 h-24 rounded-2xl bg-white/[0.03] backdrop-blur-[20px] border border-white/10 flex items-center justify-center">
                         <span className="font-mono text-[10px] text-white/20">Backdrop Blur 20px</span>
                      </div>
                    )}
                    {idx === 1 && (
                      <div className="mt-8 h-24 grid grid-cols-2 gap-2 opacity-20">
                         <div className="bg-white/20 rounded-lg" />
                         <div className="bg-white/20 rounded-lg row-span-2" />
                         <div className="bg-white/20 rounded-lg" />
                      </div>
                    )}
                    {idx === 2 && (
                      <div className="absolute -bottom-10 -right-10 w-32 h-32 rounded-full bg-red-600/20 blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity" />
                    )}
                  </SpotlightCard>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* INFOPRODUCTS CASE STUDY */}
        {project.infoproducts && (
          <section className="space-y-32 mb-40">
            {/* Process Pipeline */}
            <div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-4 mb-16"
              >
                <div className="p-2 rounded-lg bg-emerald/5 border border-emerald/10">
                  <Workflow className="text-emerald" size={20} />
                </div>
                <h2 className="font-mono text-[10px] tracking-widest uppercase text-white/40">Processo de Operação — Pipeline</h2>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {project.infoproducts.process.map((step, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="relative group"
                  >
                    <SpotlightCard className="p-6 border border-white/5 h-full">
                      <div className="flex items-center justify-between mb-4">
                        <span className="font-mono text-[10px] font-bold text-emerald tracking-[0.2em]">{step.step}</span>
                        <span className="font-mono text-[9px] text-white/15">0{idx + 1}</span>
                      </div>
                      <p className="text-[13px] text-cyber-white/40 leading-relaxed">{step.description}</p>
                    </SpotlightCard>
                    {idx < 3 && (
                      <div className="hidden lg:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10">
                        <ArrowRight size={14} className="text-white/10" />
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Product Portfolio Grid */}
            <div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-4 mb-16"
              >
                <div className="p-2 rounded-lg bg-emerald/5 border border-emerald/10">
                  <Package className="text-emerald" size={20} />
                </div>
                <h2 className="font-mono text-[10px] tracking-widest uppercase text-white/40">Portfólio de Produtos — Histórico</h2>
              </motion.div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {project.infoproducts.products.map((product, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05 }}
                    className="group cursor-pointer"
                    onClick={() => { setLightboxImages(project.infoproducts!.products.map(p => p.image)); setLightboxIndex(idx); }}
                  >
                    <div className="aspect-[3/4] rounded-2xl overflow-hidden relative border border-white/5 group-hover:border-emerald/20 transition-all">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <p className="font-serif text-sm text-white mb-1 line-clamp-2">{product.name}</p>
                        <span className={`font-mono text-[8px] uppercase tracking-[0.15em] ${
                          product.status === 'deprecated' ? 'text-red-400/60' : 'text-emerald'
                        }`}>
                          {product.status === 'deprecated' ? 'Descontinuado' : 'Ativo'}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Deep Dive Chapters */}
            <div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-4 mb-16"
              >
                <div className="p-2 rounded-lg bg-emerald/5 border border-emerald/10">
                  <FileText className="text-emerald" size={20} />
                </div>
                <h2 className="font-mono text-[10px] tracking-widest uppercase text-white/40">Análise Profunda — Chapters</h2>
              </motion.div>

              <div className="space-y-16">
                {project.infoproducts.chapters.map((chapter, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05 }}
                  >
                    <div className="flex items-center gap-4 mb-6">
                      <span className="font-mono text-[9px] text-emerald/40">0{idx + 1}</span>
                      <h3 className="font-serif text-2xl italic text-white">{chapter.title}</h3>
                    </div>
                    <div className="lg:pl-10">
                      <p className="text-cyber-white/50 text-[15px] leading-[1.9] max-w-3xl border-l border-white/5 pl-8">
                        {chapter.content}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Member Area Showcase */}
            {project.gallery?.social && project.gallery.social.length > 0 && (
              <div>
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-4 mb-8"
                >
                  <div className="p-2 rounded-lg bg-emerald/5 border border-emerald/10">
                    <Layers className="text-emerald" size={20} />
                  </div>
                  <h2 className="font-mono text-[10px] tracking-widest uppercase text-white/40">Área de Membros — Entrega & UX</h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.gallery.social.map((img, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      className="aspect-video rounded-xl overflow-hidden border border-white/5 hover:border-emerald/10 transition-all cursor-pointer group"
                      onClick={() => { setLightboxImages(project.gallery!.social); setLightboxIndex(idx); }}
                    >
                      <img 
                        src={img} 
                        alt={`Área de Membros ${idx + 1}`}
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                      />
                    </motion.div>
                  ))}
                </div>
              </div>
            )}
          </section>
        )}

        <div className="space-y-24 mb-40">
          {sections.map((section, idx) => (
            <motion.section 
              key={section.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              className="group"
            >
              <div className="flex items-center gap-4 mb-10">
                <div className="w-10 h-10 rounded-xl bg-emerald/5 border border-emerald/10 flex items-center justify-center group-hover:bg-emerald/10 transition-colors">
                  {section.icon}
                </div>
                <h2 className="font-mono text-[10px] tracking-widest uppercase text-white/40 group-hover:text-emerald transition-colors">
                  {section.title}
                </h2>
              </div>
              
              <div className="lg:pl-14">
                <p className="text-cyber-white/70 text-lg md:text-xl font-sans leading-relaxed max-w-3xl border-l border-white/5 pl-8 md:pl-12">
                  {section.content}
                </p>
              </div>
            </motion.section>
          ))}
        </div>

        {/* Stack Footer */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="pt-16 border-t border-white/5"
        >
          <span className="font-mono text-[10px] tracking-widest uppercase text-white/20 block mb-10">Tecnologias Envolvidas</span>
          <div className="flex flex-wrap gap-3">
            {project.stack.map(tech => (
              <span 
                key={tech} 
                className="px-6 py-3 rounded-full bg-white/[0.02] border border-white/5 font-mono text-[10px] tracking-widest uppercase text-white/60 hover:text-emerald hover:border-emerald/20 transition-all cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
        
        {/* Final CTA */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-40 rounded-[3rem] p-12 md:p-20 bg-gradient-to-br from-emerald/10 via-transparent to-transparent border border-emerald/20 text-center relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald/10 blur-[100px] -mr-32 -mt-32 rounded-full" />
          
          <h3 className="text-4xl md:text-6xl font-serif text-white tracking-tightest leading-none mb-10">
            Vamos construir o <br /> <span className="italic gradient-text">Próximo Nível?</span>
          </h3>
          
          <Link 
            href="/#contato"
            className="inline-flex items-center gap-4 px-10 py-5 rounded-full bg-emerald text-black font-bold uppercase tracking-widest text-xs hover:shadow-[0_0_40px_rgba(16,185,129,0.3)] transition-all duration-500 scale-110 md:scale-100"
          >
            Entrar em Contato <ArrowLeft className="rotate-180" size={18} />
          </Link>
        </motion.div>
      </div>
    </main>
  );
}
