"use client";

import { motion } from "framer-motion";

export default function Contact() {
  const fadeUp = {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.5, ease: "easeOut" }
  } as const;

  return (
    <section id="contato" className="relative z-10 text-center overflow-hidden border-t border-white/[0.03] bg-[#020202] pb-24">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] pointer-events-none" style={{ background: "radial-gradient(ellipse, rgba(16,185,129,0.05) 0%, transparent 60%)" }} />
      
      <div className="max-w-7xl mx-auto py-[120px] px-6 lg:px-8 relative z-10">
        <motion.div {...fadeUp}>
          <div className="text-emerald font-mono uppercase tracking-[0.3em] text-[9px] mb-8 flex items-center justify-center gap-3">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald animate-pulse-emerald" />
            05 — Contato
          </div>
          
          <div className="mb-10">
            <h2 className="font-serif text-[clamp(2.5rem,6vw,5rem)] leading-[0.95] tracking-tighter text-white font-medium">
              <span className="text-emerald italic">Contato</span>
            </h2>
          </div>
          
          <p className="text-[clamp(16px,1.2vw,20px)] text-white/50 max-w-[600px] mx-auto mb-20 leading-relaxed font-sans font-light">
            Estou em busca da primeira oportunidade formal como dev — estágio ou júnior, back-end ou full-stack. Se quiser conversar, é só chamar por qualquer canal abaixo.
          </p>
          
          <div className="flex flex-col md:flex-row justify-center items-stretch gap-6 w-full max-w-5xl mx-auto">
            {/* E-mail + WhatsApp */}
            <div className="flex-[1.5] glass p-10 rounded-[2.5rem] border border-white/[0.05] bg-[#050505]/60 backdrop-blur-3xl text-left flex flex-col justify-between group hover:border-emerald/30 transition-all duration-500 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-to-bl from-emerald/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-full blur-3xl" />
              <div className="relative z-10">
                <div className="text-emerald text-[9px] font-mono uppercase tracking-[0.2em] mb-6">Canal Direto</div>
                <h3 className="text-3xl font-serif text-white tracking-tight mb-3">Fale comigo</h3>
                <p className="text-sm font-sans text-white/40 mb-10 max-w-md font-light leading-relaxed">Disponível para oportunidades de estágio ou júnior, presencial em Brasília ou remoto.</p>
              </div>
              <div className="space-y-4 relative z-10 mt-auto">
                <a href="mailto:renato.bcarvalho7@gmail.com" className="flex items-center gap-5 p-4 rounded-2xl bg-white/[0.02] border border-white/[0.04] group/link hover:bg-white/[0.05] hover:border-emerald/20 transition-all duration-300">
                  <div className="w-12 h-12 rounded-full bg-white/[0.03] flex items-center justify-center border border-white/5 group-hover/link:bg-emerald/10 group-hover/link:border-emerald/20 transition-all">
                    <svg className="w-5 h-5 text-white/40 group-hover/link:text-emerald transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  </div>
                  <div className="overflow-hidden">
                    <div className="text-[10px] font-mono uppercase tracking-widest text-white/30 mb-1">E-mail</div>
                    <div className="text-sm font-medium text-white group-hover/link:text-emerald transition-colors truncate">renato.bcarvalho7@gmail.com</div>
                  </div>
                </a>
                <a href="https://wa.me/5561996381002" target="_blank" rel="noopener noreferrer" className="flex items-center gap-5 p-4 rounded-2xl bg-white/[0.02] border border-white/[0.04] group/link hover:bg-white/[0.05] hover:border-emerald/20 transition-all duration-300">
                  <div className="w-12 h-12 rounded-full bg-white/[0.03] flex items-center justify-center border border-white/5 group-hover/link:bg-emerald/10 group-hover/link:border-emerald/20 transition-all">
                    <svg className="w-5 h-5 text-white/40 group-hover/link:text-emerald transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
                  </div>
                  <div>
                    <div className="text-[10px] font-mono uppercase tracking-widest text-white/30 mb-1">WhatsApp</div>
                    <div className="text-sm font-medium text-white group-hover/link:text-emerald transition-colors">+55 61 99638-1002</div>
                  </div>
                </a>
              </div>
            </div>
            {/* LinkedIn + GitHub */}
            <div className="flex-1 flex flex-col gap-6">
              <a href="https://www.linkedin.com/in/renatobcarv/" target="_blank" rel="noopener noreferrer" className="flex-1 glass p-8 rounded-[2.5rem] border border-white/[0.05] bg-[#050505]/60 backdrop-blur-3xl text-left flex flex-col justify-end group hover:border-[#0A66C2]/40 hover:bg-[#0A66C2]/10 transition-all duration-500 relative overflow-hidden">
                <div className="mb-auto mt-2">
                  <svg className="w-8 h-8 text-white/20 group-hover:text-[#0A66C2] transition-colors duration-500" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                </div>
                <div className="relative z-10">
                  <div className="text-[9px] font-mono uppercase tracking-[0.2em] text-white/30 mb-2">LinkedIn</div>
                  <div className="text-2xl font-serif text-white tracking-tight">/in/renatobcarv</div>
                </div>
              </a>
              <a href="https://github.com/renatobcarv" target="_blank" rel="noopener noreferrer" className="flex-1 glass p-8 rounded-[2.5rem] border border-white/[0.05] bg-[#050505]/60 backdrop-blur-3xl text-left flex flex-col justify-end group hover:border-white/30 hover:bg-white/5 transition-all duration-500 relative overflow-hidden">
                <div className="mb-auto mt-2">
                  <svg className="w-8 h-8 text-white/20 group-hover:text-white transition-colors duration-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                </div>
                <div className="relative z-10">
                  <div className="text-[9px] font-mono uppercase tracking-[0.2em] text-white/30 mb-2">GitHub</div>
                  <div className="text-2xl font-serif text-white tracking-tight">/renatobcarv</div>
                </div>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
