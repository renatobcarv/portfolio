"use client";

import { motion } from "framer-motion";

const infoCards = [
  { label: "Localização", value: "Brasília, BR" },
  { label: "Idade", value: "19 anos" },
  { label: "Formação", value: "ADS · Uniceplac (2025–2027)" },
  { label: "Idiomas", value: "Português / Inglês (avançado)" },
];

export default function AboutMe() {
  return (
    <section id="sobre" className="py-24 px-6 relative z-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        
        {/* Lado Esquerdo: Conteúdo editorial */}
        <div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-mono text-[10px] tracking-widest uppercase text-emerald mb-6 flex items-center gap-2"
          >
             <div className="w-8 h-px bg-emerald" />
             01 — Sobre
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-serif text-cyber-white tracking-tighter leading-[1.1] mb-8"
          >
            Sobre <span className="italic text-emerald">mim</span>
          </motion.h2>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-6 text-cyber-white/50 text-base md:text-lg font-sans font-light leading-relaxed"
          >
            <p>
              Tenho 19 anos, moro em Brasília e curso Análise e Desenvolvimento de Sistemas, com previsão de formatura em 2027.
            </p>
            <p>
              Antes da faculdade, já vinha construindo projetos próprios na internet. Trabalhei com infoprodutos, testando ofertas, escrevendo copy e rodando tráfego pago. Alguns projetos funcionaram e outros não, mas esse processo me ensinou, na prática, a validar ideias, ajustar rapidamente e entender o que realmente gera resultado.
            </p>
            <p>
              Depois disso, criei e operei sozinho a VOYDRA (@voydraforce), uma marca de powerlifting. Fui responsável por tudo: posicionamento, site, lançamentos e parcerias. Foi nesse período que entendi, de forma clara, o impacto da tecnologia em um negócio — e o custo de não dominá-la.
            </p>
            <p>
              A dependência de terceiros para desenvolver funcionalidades, automações e integrações foi o que me levou a estudar programação de forma estruturada.
            </p>
            <p>
              Comecei pelo front-end (HTML, CSS, JavaScript, React e Next.js), onde desenvolvi mais prática, e hoje estou focado em back-end, com <strong className="text-cyber-white font-medium">Java, Spring Boot, APIs REST e modelagem de banco de dados.</strong>
            </p>
            <p>
              Meu diferencial é trazer visão de produto para o desenvolvimento. Não penso só no código, mas no problema que ele resolve, no usuário e no impacto real dentro de um negócio.
            </p>
            <p>
              Atualmente, estudo diariamente combinando faculdade, formação estruturada e projetos próprios, mantendo consistência e foco em evolução prática.
            </p>
            <p>
              Estou em busca da minha primeira oportunidade como desenvolvedor (estágio ou júnior), em back-end ou full-stack, onde eu possa contribuir, aprender com um time experiente e evoluir com responsabilidade.
            </p>
          </motion.div>
        </div>

        {/* Lado Direito: Cards de informação */}
        <div className="grid grid-cols-2 gap-4 self-center">
          {infoCards.map((card, index) => (
            <motion.div 
              key={card.label}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="p-8 rounded-[2rem] bg-white/[0.02] border border-white/5 flex flex-col justify-between h-[200px]"
            >
              <div className="font-mono text-[10px] uppercase tracking-widest text-emerald">{card.label}</div>
              <div className="text-xl font-serif text-cyber-white">{card.value}</div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
