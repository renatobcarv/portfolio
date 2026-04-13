"use client";

import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <section id="contato" className="py-40 px-6 relative overflow-hidden flex flex-col items-center justify-center min-h-[80vh]">
      
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald/5 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8"
        >
          <div className="w-1.5 h-1.5 bg-emerald rounded-full animate-pulse-emerald" />
          <span className="font-mono text-[10px] tracking-widest uppercase text-cyber-white/70">
            Available for Strategic Projects
          </span>
        </motion.div>
        
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-6xl md:text-8xl lg:text-[120px] font-serif font-medium tracking-tightest leading-[0.9] mb-12 text-transparent bg-clip-text bg-[linear-gradient(90deg,#EBEBEB,rgba(16,185,129,0.8),#EBEBEB)] bg-[length:200%_auto] animate-[shimmer_6s_linear_infinite]"
        >
          Pronto para o<br/>
          <span className="italic">próximo nível?</span>
        </motion.h2>

        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ delay: 0.2 }}
        >
          <a href="mailto:renato.bcarvalho7@gmail.com">
            <button className="group relative px-12 py-6 bg-cyber-black border border-emerald/50 text-cyber-white rounded-full font-serif text-2xl italic tracking-tight overflow-hidden transition-all shadow-[0_0_40px_rgba(16,185,129,0.15)] hover:shadow-[0_0_60px_rgba(16,185,129,0.3)] animate-pulse-emerald">
              <span className="relative z-10 group-hover:text-cyber-black transition-colors duration-500">Iniciar Conversa</span>
              <div className="absolute inset-0 bg-emerald translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.16,1,0.3,1]" />
            </button>
          </a>
        </motion.div>

        <div className="mt-20 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 font-mono text-[10px] tracking-widest uppercase text-cyber-white/40">
          <div>&copy; 2026 Renato Barros de Carvalho</div>
          <div className="flex gap-6">
            <a href="https://linkedin.com/in/renatobcarv" className="hover:text-emerald transition-colors">LinkedIn</a>
            <a href="mailto:renato.bcarvalho7@gmail.com" className="hover:text-emerald transition-colors">Email</a>
          </div>
          <div className="flex gap-1.5">
            {[1,2,3].map(i => <div key={i} className="w-1.5 h-1.5 rounded-full border border-white/20" />)}
          </div>
        </div>
      </div>
    </section>
  );
}
