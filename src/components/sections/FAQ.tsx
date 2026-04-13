"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "O que exatamente faz um Revenue Engineer?",
    answer: "Diferente de um desenvolvedor comum, eu não foco apenas no código. Eu desenho a arquitetura técnica focada em métricas de negócio: LTV (Lifetime Value), conversão e redução de CAC (Custo de Aquisição de Cliente). Meu papel é garantir que a tecnologia seja um ativo que gera lucro, não apenas um custo."
  },
  {
    question: "Qual a diferença entre um site comum e um ativo de negócio?",
    answer: "Um site comum é estático e institucional. Um ativo de negócio é uma máquina de vendas: possui funis integrados, automações de CRM, rastreamento de dados preciso e uma arquitetura escalável desenhada para converter visitantes em clientes de forma previsível."
  },
  {
    question: "Qual stack você utiliza nos seus projetos principais?",
    answer: "Foco em ferramentas de elite para performance e escala. Sistemas Core são construídos em Java e Spring Boot para máxima resiliência. Interfaces Táticas são desenvolvidas em Next.js e React para garantir SEO e uma experiência de usuário imersiva e rápida."
  },
  {
    question: "Como funciona o acompanhamento após a entrega do projeto?",
    answer: "Trabalho em fases (Estratégia, MVP e Escala). Após o lançamento, ofereço suporte técnico especializado e análise de dados para iterações. O objetivo não é apenas entregar um código, mas garantir que o sistema performe e cresça conforme o planejado."
  },
  {
    question: "Qual o investimento médio para iniciar um projeto?",
    answer: "Os projetos são precificados com base na complexidade e no impacto comercial gerado. O investimento reflete a construção de uma infraestrutura profissional e proprietária que elimina a dependência de plataformas limitadas e se paga no longo prazo através de escala e eficiência."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-32 px-6 bg-[#020202] relative overflow-hidden" id="faq">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6"
          >
            <span className="text-[10px] font-mono tracking-widest text-emerald uppercase font-bold">Respostas Diretas</span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-serif text-white tracking-tighter mb-6">
            Dúvidas <span className="italic text-emerald">Frequentes</span>
          </h2>
          <p className="text-white/40 font-sans text-sm max-w-lg mx-auto leading-relaxed">
            Esclareça os pontos técnicos e estratégicos sobre como operamos para escalar sua operação digital.
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
