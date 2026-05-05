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
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } },
  };

  return (
    <section id="hero" className="min-h-screen pt-[160px] pb-20 px-8 relative overflow-hidden flex items-center">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
      >
        {/* Lado Esquerdo: Tipografia Editorial */}
        <div className="space-y-8 relative z-10">
          <motion.div variants={itemVariants} className="flex items-center gap-3 font-mono text-[10px] tracking-widest uppercase text-cyber-white/60">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald animate-pulse-emerald" />
            <span>Desenvolvedor Back-End & Front-End</span>
          </motion.div>

          <motion.h1 
            variants={itemVariants}
            className="text-[clamp(3.5rem,8vw,100px)] font-serif font-medium leading-[0.9] tracking-tightest text-cyber-white"
          >
            Renato B. <br />
            <span className="italic text-emerald">Carvalho</span>
          </motion.h1>

          <motion.p 
            variants={itemVariants}
            className="text-lg text-cyber-white/50 max-w-lg leading-relaxed font-sans font-light"
          >
            Estudante de Análise e Desenvolvimento de Sistemas, 19 anos, focado em back-end com Java e Spring, com experiência prática em front-end com React e Next. Antes da faculdade, operei alguns projetos digitais por conta própria — é o que me fez chegar no código.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap gap-4 pt-4">
            <a href="#projetos">
              <button className="px-8 py-4 bg-cyber-white text-cyber-black rounded-full font-sans font-medium text-sm transition-all shadow-[0_0_0_0_rgba(16,185,129,0.4)] animate-pulse-emerald hover:scale-105">
                Ver Projetos
              </button>
            </a>
            <a href="#contato">
              <button className="px-8 py-4 bg-transparent border border-cyber-white/20 text-cyber-white rounded-full font-sans font-medium text-sm hover:bg-cyber-white/5 transition-all">
                Contato
              </button>
            </a>
          </motion.div>
        </div>

        {/* Lado Direito: Foto de perfil + Card VOYDRA */}
        <motion.div 
          variants={itemVariants}
          className="relative h-[600px] flex items-center justify-center lg:justify-end mt-12 lg:mt-0"
        >
          <div className="w-[450px] h-[550px] relative perspective-1000">
            
            {/* Foto de Perfil */}
            <motion.div 
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-1/2 left-[55%] -translate-x-1/2 -translate-y-1/2 w-[280px] h-[380px] rounded-[2rem] overflow-hidden z-10 border border-white/[0.04] filter grayscale-[0.4] contrast-110 shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-[#020202] via-[#020202]/20 to-transparent z-10 pointer-events-none" />
              <Image 
                src="/images/perfilimage.jpeg" 
                alt="Renato B. Carvalho" 
                fill 
                priority
                className="object-cover object-center scale-105"
              />
            </motion.div>

            {/* Card VOYDRA */}
            <motion.div 
              animate={{ y: [0, 15, 0], rotate: [-1, 2, -1] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute top-4 right-0 p-6 rounded-[1.5rem] w-64 shadow-[0_30px_60px_rgba(0,0,0,0.6)] z-20 border border-white/[0.05] bg-[#0A0A0A]/40 backdrop-blur-2xl"
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-50" />
              
              <div className="flex items-center justify-between mb-6">
                <span className="text-[8px] font-mono uppercase tracking-[0.2em] text-white/30">Projeto próprio</span>
                <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
              </div>
              <div className="relative w-32 h-8 mb-8">
                 <Image src="/images/voydra/VOYDRA_LOGO.png" alt="VOYDRA Logo" fill className="object-contain object-left brightness-0 invert opacity-90" />
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex justify-between items-baseline">
                  <span className="text-[10px] font-sans text-white/40 uppercase tracking-widest">Melhor mês</span>
                  <span className="font-mono text-xl text-white font-medium tracking-tight">R$6k</span>
                </div>
                <div className="w-full h-[2px] bg-white/5 rounded-full overflow-hidden">
                  <div className="w-full h-full bg-white/40" />
                </div>
              </div>
            </motion.div>

            {/* Card de Status */}
            <motion.div 
              animate={{ y: [0, -20, 0], x: [0, -10, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute bottom-[5%] -left-12 p-8 rounded-[2rem] w-[300px] shadow-[0_40px_80px_rgba(0,0,0,0.8)] z-30 border border-emerald/10 bg-[#050505]/80 backdrop-blur-3xl overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-emerald/5 to-transparent pointer-events-none" />
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald/30 to-transparent opacity-80" />
              
              <div className="flex items-start justify-between mb-8 relative z-10">
                <div>
                  <div className="text-[8px] font-mono uppercase tracking-[0.2em] text-white/30 mb-2">Formação</div>
                  <div className="font-serif text-2xl font-medium text-white tracking-tighter">ADS</div>
                </div>
                <div className="relative">
                  <div className="absolute inset-0 bg-emerald/20 blur-md rounded-full" />
                  <span className="relative px-2 py-1 bg-[#020202] text-emerald text-[8px] font-mono uppercase tracking-[0.2em] rounded-[4px] border border-emerald/20 flex items-center gap-1.5 shadow-[inset_0_0_0_1px_rgba(52,211,153,0.1)]">
                    <span className="w-1 h-1 rounded-full bg-emerald animate-pulse" />
                    2025–2027
                  </span>
                </div>
              </div>
              
              <div className="relative z-10">
                <div className="text-xs font-sans text-cyber-white/50 mb-8 max-w-[90%] leading-relaxed font-light">
                  Uniceplac · Brasília, BR
                </div>

                <div className="flex justify-between items-center text-[9px] font-mono uppercase tracking-[0.2em] pt-4 border-t border-white/5">
                  <span className="text-white/30">Foco atual</span>
                  <span className="text-emerald">Java / Spring Boot</span>
                </div>
              </div>
            </motion.div>

          </div>
        </motion.div>

      </motion.div>
    </section>
  );
}
