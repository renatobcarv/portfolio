"use client";

import { motion } from "framer-motion";

export default function AboutMe() {
  return (
    <section id="sobre" className="py-24 px-6 relative z-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        
        {/* Left Side: Editorial positioning */}
        <div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-mono text-[10px] tracking-widest uppercase text-emerald mb-6 flex items-center gap-2"
          >
             <div className="w-8 h-px bg-emerald" />
             01 — O Arquiteto
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-serif text-cyber-white tracking-tighter leading-[1.1] mb-8"
          >
            Engenharia de negócio. <span className="italic text-emerald">Código que move o mercado</span>
          </motion.h2>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-6 text-cyber-white/50 text-base md:text-lg font-sans font-light leading-relaxed"
          >
            <p>
              Antes de escrever uma linha de código, já tinha construído e quebrado produtos digitais o suficiente pra entender onde o dinheiro some
            </p>
            <p>
              O código veio depois e veio com propósito. <strong className="text-cyber-white font-medium">No funil, na página, na oferta errada pro público certo.</strong>
            </p>
            <p>
              O código entrou como ferramenta, não como identidade. Ele resolve o que estratégia sozinha não consegue escalar.
              Hoje opero na interseção entre negócio e engenharia. Uma combinação rara, e é exatamente o que separa um sistema que funciona de um sistema que gera resultado.
            </p>
          </motion.div>
        </div>

        {/* Right Side: Bento Grid for Data */}
        <div className="grid grid-cols-2 gap-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="p-8 rounded-[2rem] bg-white/[0.02] border border-white/5 flex flex-col justify-between h-[200px]"
          >
            <div className="font-mono text-[10px] uppercase tracking-widest text-emerald">Origem</div>
            <div className="text-xl font-serif text-cyber-white">Brasília, BR</div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="p-8 rounded-[2rem] bg-white/[0.02] border border-white/5 flex flex-col justify-between h-[200px]"
          >
            <div className="font-mono text-[10px] uppercase tracking-widest text-emerald">Trajetória</div>
            <div className="text-xl font-serif text-cyber-white">3+ Anos de Execução</div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="p-8 rounded-[2rem] bg-white/[0.02] border border-white/5 flex flex-col justify-between h-[200px]"
          >
            <div className="font-mono text-[10px] uppercase tracking-widest text-emerald">Formação</div>
            <div className="text-xl font-serif text-cyber-white">ADS — 2027</div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="p-8 rounded-[2rem] bg-white/[0.02] border border-white/5 flex flex-col justify-between h-[200px]"
          >
            <div className="font-mono text-[10px] uppercase tracking-widest text-emerald">Idiomas</div>
            <div className="text-xl font-serif text-cyber-white">PT-BR / EN</div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
