"use client";

import { motion } from "framer-motion";
import { Network, PenTool, Target, Copy, BrainCircuit, LayoutTemplate } from "lucide-react";

const stackData = [
  {
    category: "Sistemas Core & Backend",
    items: [
      { name: "Java", iconClass: "devicon-java-plain" },
      { name: "Python", iconClass: "devicon-python-plain" },
      { name: "FastAPI", iconClass: "devicon-fastapi-plain" },
      { name: "JavaScript", iconClass: "devicon-javascript-plain" },
      { name: "TypeScript", iconClass: "devicon-typescript-plain" },
      { name: "Kotlin", iconClass: "devicon-kotlin-plain" },
    ]
  },
  {
    category: "Interface Tática (Frontend)",
    items: [
      { name: "Next.js", iconClass: "devicon-nextjs-plain" },
      { name: "React", iconClass: "devicon-react-original" },
      { name: "Tailwind CSS", iconClass: "devicon-tailwindcss-original" },
      { name: "HTML5", iconClass: "devicon-html5-plain" },
      { name: "CSS3", iconClass: "devicon-css3-plain" },
    ]
  },
  {
    category: "Dados & Infraestrutura",
    items: [
      { name: "PostgreSQL", iconClass: "devicon-postgresql-plain" },
      { name: "SQL Server", iconClass: "devicon-microsoftsqlserver-plain" },
      { name: "Supabase", iconClass: "devicon-supabase-plain" },
      { name: "APIs REST", iconNode: <Network size={18} /> },
      { name: "Vercel", iconClass: "devicon-vercel-original" },
    ]
  },
  {
    category: "Estratégia & Produto",
    items: [
      { name: "Copywriting", iconNode: <PenTool size={18} /> },
      { name: "Mark. Digital", iconNode: <Target size={18} /> },
      { name: "Branding", iconNode: <Copy size={18} /> },
      { name: "Design UI/UX", iconNode: <LayoutTemplate size={18} /> },
      { name: "AI-driven Dev", iconNode: <BrainCircuit size={18} /> },
    ]
  }
];

export default function TechStack() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } },
  };

  return (
    <section id="stack" className="py-24 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <div className="font-mono text-[10px] tracking-widest uppercase text-emerald mb-4 flex items-center justify-center gap-2">
            <div className="w-1.5 h-1.5 bg-emerald rounded-full animate-pulse-emerald" />
            02 — O Arsenal Tático
          </div>
          <h2 className="text-4xl md:text-5xl font-serif text-cyber-white tracking-tighter">
            Ferramentas sob medida para <br />
            <span className="italic text-emerald">engenharia de alto impacto.</span>
          </h2>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {stackData.map((section, idx) => (
            <motion.div 
              key={idx}
              variants={itemVariants}
              className="spotlight-target p-10 rounded-[2rem] bg-[#0A0A0A] border border-white/5 relative group"
            >
              <h3 className="font-mono text-[10px] uppercase tracking-widest text-cyber-white/40 mb-8 border-b border-white/5 pb-4">
                {section.category}
              </h3>
              
              <div className="flex flex-wrap gap-3 relative z-10">
                {section.items.map((item, itemIdx) => (
                  <div 
                    key={itemIdx}
                    className="flex items-center gap-2.5 px-4 py-2.5 rounded-full border border-white/5 bg-white/[0.02] transition-colors duration-300 hover:border-emerald/30 hover:bg-emerald/5"
                  >
                    <div className="text-cyber-white/60 group-hover:text-emerald transition-colors text-lg flex items-center justify-center">
                      {item.iconClass ? <i className={item.iconClass}></i> : item.iconNode}
                    </div>
                    <span className="font-sans text-sm font-medium text-cyber-white/80">{item.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
