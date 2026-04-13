"use client";

import { motion } from "framer-motion";
import { Terminal, Layout, Share2 } from "lucide-react";

const features = [
  {
    icon: <Terminal size={24} className="text-emerald" />,
    title: "Sistemas Core",
    desc: "Arquiteturas construídas para não ceder sob pressão. Java e Spring Boot como espinha dorsal de produtos que precisam existir quando importa.",
  },
  {
    icon: <Layout size={24} className="text-emerald" />,
    title: "Interface Tática",
    desc: "Não é sobre ser bonito. É sobre converter. Next.js/React com experiência visual que reduz fricção e aumenta receita.",
  },
  {
    icon: <Share2 size={24} className="text-emerald" />,
    title: "Engenharia de Dados",
    desc: "Intuição é cara demais. Extração, transformação e análise de dados para que cada decisão tenha evidência embaixo.",
  }
];

export default function FeatureGrid() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } },
  };

  return (
    <section id="projetos" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-24">
          <h2 className="text-5xl md:text-6xl font-serif tracking-tighter mb-4 text-cyber-white">
            Engenharia com <span className="italic text-emerald">Intenção</span>
          </h2>
          <p className="text-cyber-white/50 text-base font-sans max-w-2xl mx-auto">
            Não construo sistemas. Construo ativos. Cada linha de código é uma decisão de negócio — desenhada para converter, escalar e durar.
          </p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {features.map((feature, idx) => (
            <motion.div 
              key={idx}
              variants={itemVariants}
              className={`spotlight-target group rounded-[2rem] p-10 bg-[#0A0A0A] border border-white/5 flex flex-col justify-between h-[350px] shadow-2xl transition-transform duration-500 cyber-bezier hover:-translate-y-2 ${idx === 1 ? 'shimmer-border' : ''}`}
            >
              <div className="w-14 h-14 rounded-2xl bg-emerald/10 border border-emerald/20 flex items-center justify-center transition-transform duration-700 ease-out group-hover:rotate-[360deg]">
                {feature.icon}
              </div>
              
              <div className="mt-8">
                <h3 className="text-2xl font-serif text-cyber-white mb-3">{feature.title}</h3>
                <p className="text-cyber-white/40 text-sm font-sans leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
