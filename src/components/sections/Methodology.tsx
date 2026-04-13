"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const steps = [
  {
    num: "01",
    title: "Fase 1 — Estratégia antes de código",
    desc: "A maioria perde dinheiro construindo a coisa certa da maneira errada. Antes de qualquer linha de código, mapeamos o modelo de negócio, validamos as hipóteses críticas e definimos a arquitetura que vai sustentar crescimento — não travar nele. Canvas, fluxo de receita, LTV e unit economics na mesa antes do primeiro commit.",
  },
  {
    num: "02",
    title: "Fase 2 — MVP com precisão cirúrgica",
    desc: "MVP não é produto incompleto. É a menor superfície possível que prova o maior risco possível. Entrego sistemas core em Java/Spring Boot e interfaces em Next.js/React construídos para converter desde o primeiro usuário — sem dívida técnica que vai te cobrar juros compostos mais tarde.",
  },
  {
    num: "03",
    title: "Fase 3 — Lançamento e Escala",
    desc: "Produto no ar é onde a maioria improvisa. Aqui é onde o trabalho anterior se paga. Arquiteturas resilientes que não falham sob carga, pipelines de dados que transformam comportamento de usuário em decisão, e iteração orientada a número — não a opinião.",
  }
];

export default function Methodology() {
  return (
    <section className="bg-[#e5e5e5] text-black rounded-t-[4rem] py-24 px-8 relative z-20 -mt-10">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        {/* Left Side: Numbered List */}
        <div>
          <div className="font-mono text-[10px] tracking-widest uppercase opacity-50 mb-6">Metodologia de Engenharia</div>
          <h2 className="text-5xl md:text-6xl font-bold tracking-tightest mb-16 leading-[0.9]">
            Como eu transformo <br />
            <span className="italic opacity-40">lógica em lucro.</span>
          </h2>

          <div className="space-y-12">
            {steps.map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-8 group"
              >
                <div className="w-12 h-12 rounded-full border border-black/10 flex items-center justify-center font-mono text-sm font-bold shrink-0 group-hover:bg-black group-hover:text-white transition-all">
                  {step.num}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-black/60 text-base leading-relaxed max-w-xl">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Side: Portrait with Overlay */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="relative w-[300px] h-[300px] md:w-[450px] md:h-[450px]">
            {/* Main Portrait */}
            <div className="w-full h-full rounded-full overflow-hidden filter grayscale contrast-125 border-8 border-white shadow-2xl">
              <Image 
                src="/images/perfilimage.jpeg" 
                alt="Portrait" 
                fill 
                className="object-cover"
              />
            </div>
            
            {/* Glass Testimonial/Status Card Overlay */}
            <motion.div 
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              className="absolute -bottom-10 -left-10 md:left-0 glass border-black/10 text-black p-8 rounded-[2rem] shadow-2xl max-w-xs backdrop-blur-2xl bg-white/10"
            >
              <div className="text-black font-bold text-lg mb-2">Renato B. Carvalho</div>
              <p className="text-black/70 text-sm italic leading-relaxed">
                &quot;Transformo sistemas complexos em processos simples que geram mais clientes, mais controle e mais receita.&quot;
              </p>
              <div className="mt-4 flex gap-1">
                 {[1,2,3,4,5].map(i => (
                    <div key={i} className="w-2 h-2 bg-black rounded-full" />
                 ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
