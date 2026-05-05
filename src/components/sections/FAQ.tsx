"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "Qual sua disponibilidade?",
    answer: "Disponível pra estágio ou júnior. Aberto a remoto, híbrido ou presencial em Brasília. Posso começar de imediato."
  },
  {
    question: "Você é mais front ou back?",
    answer: "Tenho mais experiência prática em front-end, porque comecei por aí construindo sites e páginas pras marcas que operei. Hoje meu foco de estudo é back-end (Java/Spring), porque é onde quero firmar minha carreira. Mas trabalho bem como full-stack júnior."
  },
  {
    question: "Como você está se formando?",
    answer: "Três frentes: faculdade de ADS na Uniceplac (até 2027), Alura Ultra com foco em Java/Spring, e projetos próprios pra praticar o que aprendo."
  },
  {
    question: "Tem projetos no GitHub?",
    answer: "Tenho. Estão no link do GitHub aqui no site. Alguns são exercícios de estudo, outros são projetos pessoais — coloquei tudo público pra mostrar o caminho real, não só os pontos altos."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-32 px-6 bg-[#020202] relative overflow-hidden" id="faq">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6"
          >
            <span className="text-[10px] font-mono tracking-widest text-emerald uppercase font-bold">Perguntas Frequentes</span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-serif text-white tracking-tighter mb-6">
            Dúvidas <span className="italic text-emerald">Frequentes</span>
          </h2>
          <p className="text-white/40 font-sans text-sm max-w-lg mx-auto leading-relaxed">
            Respostas diretas sobre disponibilidade, formação e experiência.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="border border-white/5 rounded-3xl bg-white/[0.02] overflow-hidden hover:border-white/10 transition-colors"
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full p-8 flex items-center justify-between text-left group"
              >
                <span className={`text-lg font-serif transition-colors duration-300 ${openIndex === idx ? 'text-emerald' : 'text-white'}`}>
                  {faq.question}
                </span>
                <div className={`w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-300 ${openIndex === idx ? 'bg-emerald border-emerald text-black rotate-180' : 'border-white/10 text-white/40 group-hover:border-white/30'}`}>
                  {openIndex === idx ? <Minus size={14} /> : <Plus size={14} />}
                </div>
              </button>

              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-8 pb-8">
                      <div className="h-px w-10 bg-emerald/30 mb-6" />
                      <p className="text-white/50 text-sm leading-relaxed font-sans font-light max-w-3xl">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
