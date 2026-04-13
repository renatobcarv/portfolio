"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section id="hero" className="min-h-screen pt-[160px] pb-20 px-8 relative overflow-hidden flex items-center">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
      >
        {/* Left Side: Editorial Typography */}
        <div className="space-y-8 relative z-10">
          <motion.div variants={itemVariants} className="flex items-center gap-3 font-mono text-[10px] tracking-widest uppercase text-cyber-white/60">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald animate-pulse-emerald" />
            <span>Engenheiro de Receita e Software</span>
          </motion.div>

          <motion.h1 
            variants={itemVariants}
            className="text-[clamp(3.5rem,8vw,100px)] font-serif font-medium leading-[0.9] tracking-tightest text-cyber-white"
          >
            Sistemas que <br />
            <span className="italic text-emerald">geram lucro</span> <br />
            e protegem escala.
          </motion.h1>

          <motion.p 
            variants={itemVariants}
            className="text-lg text-cyber-white/50 max-w-lg leading-relaxed font-sans font-light"
          >
            Foco em performance, automação e arquiteturas que estancam vazamentos financeiros. Transformo lógica em receita real para o seu negócio.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap gap-4 pt-4">
            <button className="px-8 py-4 bg-cyber-white text-cyber-black rounded-full font-sans font-medium text-sm transition-all shadow-[0_0_0_0_rgba(16,185,129,0.4)] animate-pulse-emerald hover:scale-105">
              Explorar Projetos
            </button>
            <button className="px-8 py-4 bg-transparent border border-cyber-white/20 text-cyber-white rounded-full font-sans font-medium text-sm hover:bg-cyber-white/5 transition-all">
              Contato
            </button>
          </motion.div>
        </div>

        {/* Right Side: Floating Mockup Layers */}
        <motion.div 
          variants={itemVariants}
          className="relative h-[500px] flex items-center justify-center lg:justify-end"
        >
          <div className="w-[450px] h-[550px] relative perspective-1000">
            
            {/* Base Layer: Profile */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-80 rounded-3xl overflow-hidden glass z-10 border border-white/5 opacity-50 filter grayscale contrast-125"
            >
              <Image 
                src="/images/perfilimage.jpeg" 
                alt="Renato B. Carvalho" 
                fill 
                className="object-cover"
              />
            </motion.div>

            {/* Middle Layer: VOYDRA Card */}
            <motion.div 
              animate={{ y: [0, 15, 0], rotate: [-2, 2, -2] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute top-10 right-0 glass p-6 rounded-[2rem] w-64 shadow-2xl z-20 border-white/10 bg-[#050505]/40"
            >
              <div className="text-[10px] font-mono uppercase tracking-widest text-emerald mb-4">Project 02</div>
              <div className="relative w-full h-12 mb-4">
                 <Image src="/images/VOYDRA LOGO.png" alt="VOYDRA Logo" fill className="object-contain object-left filter invert brightness-0 opacity-80" />
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center text-xs font-sans text-white/50 border-b border-white/5 pb-2">
                  <span>Revenue</span>
                  <span className="font-mono text-white">R$6k/mês</span>
                </div>
                <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                  <div className="w-full h-full bg-emerald" />
                </div>
              </div>
            </motion.div>

            {/* Front Layer: Valence Card */}
            <motion.div 
              animate={{ y: [0, -20, 0], x: [0, -10, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute bottom-[10%] -left-10 glass p-8 rounded-[2rem] w-72 shadow-2xl z-30 border-white/20 bg-[#050505]/60 backdrop-blur-xl"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="relative w-24 h-8">
                   <Image src="/images/Valence Logo.png" alt="Valence Logo" fill className="object-contain object-left filter brightness-200" />
                </div>
                <span className="px-2 py-1 bg-emerald/20 text-emerald text-[9px] font-mono uppercase tracking-widest rounded-md border border-emerald/30">
                  Active
                </span>
              </div>
              
              <div className="font-serif text-3xl font-medium mb-1">12x ROI</div>
              <div className="text-xs font-sans text-white/40 mb-6">Sistema de Recuperação</div>

              <div className="flex justify-between text-xs font-mono uppercase tracking-widest">
                <span className="opacity-40">Recovery Rate</span>
                <span className="text-emerald">85%</span>
              </div>
            </motion.div>

          </div>
        </motion.div>

      </motion.div>
    </section>
  );
}
