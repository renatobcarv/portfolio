"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer id="contato" className="bg-obsidian-pure pt-32 pb-16 px-8 relative overflow-hidden">
      {/* Massive Watermark */}
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center pointer-events-none select-none">
        <span className="text-[20vw] font-bold text-white/[0.03] tracking-tightest leading-none">
          SUPER
        </span>
      </div>

      <div className="max-w-[1400px] mx-auto relative z-10">
        <div className="text-center mb-32">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1 glass rounded-full text-[10px] font-mono tracking-widest uppercase text-lime mb-8"
          >
            Disponível para Projetos 2026
          </motion.div>
          
          <h2 className="text-5xl md:text-8xl font-bold tracking-tightest mb-12 max-w-4xl mx-auto leading-[0.9]">
            Vamos construir o seu <br />
            <span className="lime-text-gradient italic">próximo salto.</span>
          </h2>

          <a href="mailto:renato.bcarvalho7@gmail.com">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-12 py-8 bg-lime text-black font-bold text-xl md:text-2xl rounded-full overflow-hidden transition-all shadow-[0_0_50px_rgba(204,255,0,0.2)]"
            >
              <span className="relative z-10">Iniciar Conversa</span>
              <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
            </motion.button>
          </a>
        </div>

        {/* Bottom Bar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-16 border-t border-white/5 items-start">
          <div>
            <div className="text-xl font-bold mb-4">RBC. <span className="text-lime">Studio</span></div>
            <p className="text-sm text-white/40 max-w-xs leading-relaxed">
              Engenharia de software focada em resultados comerciais e escala técnica. Brasília, BR.
            </p>
          </div>

          <div className="space-y-4">
             <div className="text-[10px] font-mono uppercase tracking-widest text-lime">Channels</div>
             <ul className="space-y-2 text-sm font-medium">
               <li><a href="https://linkedin.com/in/renatobcarv" className="hover:text-lime transition-colors">LinkedIn</a></li>
               <li><a href="mailto:renato.bcarvalho7@gmail.com" className="hover:text-lime transition-colors">Email</a></li>
               <li><a href="#" className="hover:text-lime transition-colors">GitHub</a></li>
             </ul>
          </div>

          <div className="space-y-4 md:text-right">
             <div className="text-[10px] font-mono uppercase tracking-widest text-lime">Copyright</div>
             <div className="text-sm font-mono opacity-40">
                &copy; 2026 Renato Barros <br />
                All Rights Reserved
             </div>
             <div className="flex gap-2 justify-end">
                {[1,2,3].map(i => (
                  <div key={i} className="w-1.5 h-1.5 rounded-full border border-white/20" />
                ))}
             </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
