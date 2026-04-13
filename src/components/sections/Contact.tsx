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
    <>
      <section id="contato" className="relative z-10 text-center overflow-hidden border-t border-white/[0.03] bg-noir pb-20">
        {/* Glow Element */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] pointer-events-none" style={{ background: "radial-gradient(ellipse, rgba(252,59,0,0.08) 0%, transparent 70%)" }} />
        
        <div className="max-w-[1200px] mx-auto py-[160px] px-6 lg:px-[60px] relative z-10">
          <motion.div {...fadeUp}>
            <div className="text-lava-orange font-bold uppercase tracking-[0.3em] text-[10px] mb-8">
              {"// 06 — o contato"}
            </div>
            
            <div className="mb-12">
              <h2 className="font-sans text-[clamp(32px,5vw,72px)] leading-[1.0] mb-0 tracking-tighter text-white font-bold">
                Vamos construir algo<br/>
                <span className="text-white/40 italic font-serif font-medium">que gere valor real.</span>
              </h2>
            </div>
            
            <p className="text-[clamp(18px,1.5vw,22px)] text-text-muted max-w-[600px] mx-auto mb-16 leading-relaxed font-sans">
              Se você busca engenharia robusta combinada com intuição de produto e design de autoridade, meu canal está aberto.
            </p>
            
            <div className="flex flex-col items-center gap-12">
              <a href="mailto:renato.bcarvalho7@gmail.com" className="font-sans font-bold text-[clamp(24px,4vw,48px)] text-white transition-all hover:text-lava tracking-tighter hover:scale-105 duration-300">
                renato.bcarvalho7@gmail.com
              </a>
              
              <div className="flex justify-center flex-wrap gap-6">
                <a href="mailto:renato.bcarvalho7@gmail.com" className="bg-lava px-12 py-5 rounded-2xl text-sm font-bold uppercase tracking-widest text-white shadow-[0_20px_40px_rgba(252,59,0,0.2)] hover:shadow-[0_20px_60px_rgba(252,59,0,0.4)] transition-all hover:-translate-y-1">
                  Iniciar Conversa
                </a>
                <a href="https://linkedin.com/in/renatobcarv" target="_blank" rel="noopener" className="bg-white/[0.02] border border-white/[0.1] px-12 py-5 rounded-2xl text-sm font-bold uppercase tracking-widest text-white/60 hover:text-white hover:bg-white/[0.05] transition-all hover:border-white/[0.2]">
                  Ver LinkedIn
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <footer className="border-t border-white/[0.03] bg-noir py-12 px-6 lg:px-[120px] relative z-10">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div>
            <div className="text-white font-bold tracking-tighter text-xl mb-2">APEX NOIR <span className="text-lava">2.0</span></div>
            <p className="text-[10px] text-text-subtle uppercase tracking-[0.2em] font-bold">
              Designed & Built in Brasília, BR.
            </p>
          </div>
          
          <div className="flex gap-12">
            <div className="flex flex-col gap-2">
              <span className="text-[10px] text-lava font-bold uppercase tracking-widest">Copyright</span>
              <span className="text-[12px] text-text-subtle">&copy; {new Date().getFullYear()} RBC. Todos os direitos reservados.</span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-[10px] text-lava font-bold uppercase tracking-widest">Status</span>
              <span className="text-[12px] text-text-subtle">Disponível para Projetos</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
