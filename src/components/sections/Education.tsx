"use client";

import { motion } from "framer-motion";
import { BookOpen, GraduationCap, ExternalLink } from "lucide-react";

const completedCertificates = [
  { name: "Scrum Fundamentals Certified", issuer: "SCRUMstudy" },
  { 
    name: "Fundamentos de Banco de Dados e SQL", 
    issuer: "Alura",
    link: "https://cursos.alura.com.br/user/renatobcarv/course/trabalhando-dados-fundamentos-analise-dados/certificate"
  },
  { name: "Tráfego Pago e Marketing Digital Aplicado", issuer: "—" },
  { 
    name: "Pensamento computacional: fundamentos da computação e lógica de programação", 
    issuer: "Alura",
    link: "https://cursos.alura.com.br/certificate/d676f67e-543a-4e72-9f8b-651b9d345e9f?lang"
  },
  { 
    name: "Java: criando a sua primeira aplicação", 
    issuer: "Alura",
    link: "https://cursos.alura.com.br/certificate/5efaf432-2a91-43ea-a577-9a2f810bb7d7?lang"
  },
];

const inProgress = [
  { name: "Desenvolvimento Back-End Java", issuer: "Alura" },
  { name: "Análise e Desenvolvimento de Sistemas", issuer: "Uniceplac (2025–2027)" },
];

const aluraTracks = [
  "Back-End Java",
  "Spring Framework / APIs REST",
  "Banco de Dados e SQL",
  "Boas práticas e arquitetura",
];

export default function Education() {
  return (
    <section id="formacao" className="py-24 px-6 relative z-10 bg-[#020202]">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 mb-4"
          >
            <div className="w-1 h-1 bg-emerald rounded-full animate-pulse" />
            <span className="font-mono text-[9px] tracking-widest uppercase text-emerald">
              04 — Formação
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif text-white tracking-tightest leading-tight mb-4"
          >
            Formação e <span className="italic text-emerald">certificados</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/40 font-sans text-sm max-w-lg"
          >
            O que estou estudando hoje e o que já concluí.
          </motion.p>
        </div>

        {/* Card Destaque: Alura Ultra */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8 p-10 rounded-[2rem] bg-white/[0.02] border border-emerald/10 relative overflow-hidden group hover:border-emerald/30 transition-all duration-500"
        >
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-to-bl from-emerald/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-full blur-3xl" />

          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-6">
              <BookOpen size={20} className="text-emerald" />
              <h3 className="text-2xl font-serif text-white tracking-tight">Alura Ultra</h3>
              <span className="px-3 py-1 bg-emerald/10 text-emerald text-[9px] font-mono uppercase tracking-[0.2em] rounded-full border border-emerald/20 font-bold">
                ULTRA · Em andamento
              </span>
            </div>

            <p className="text-white/50 text-sm font-sans font-light leading-relaxed max-w-2xl mb-8">
              Assinatura anual do plano completo da Alura. Estou seguindo a trilha de back-end com Java e Spring, junto com cursos de banco de dados, arquitetura e boas práticas. Uso a plataforma como base do estudo diário, complementando o conteúdo da faculdade.
            </p>

            <div className="flex flex-wrap gap-3">
              {aluraTracks.map((track) => (
                <span
                  key={track}
                  className="px-4 py-2 rounded-full text-[11px] font-sans text-white/60 bg-white/[0.03] border border-white/5"
                >
                  {track}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Grid de Certificados Concluídos */}
        <div className="mb-8">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-mono text-[9px] tracking-widest uppercase text-white/30 mb-4 flex items-center gap-2"
          >
            <GraduationCap size={14} />
            Concluídos
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {completedCertificates.map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="p-6 rounded-[1.5rem] bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors duration-300"
              >
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <div className="text-sm font-serif text-white mb-2">{cert.name}</div>
                    <div className="text-[10px] font-mono text-white/30 uppercase tracking-widest">{cert.issuer}</div>
                  </div>
                  {cert.link && (
                    <a 
                      href={cert.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="shrink-0 w-8 h-8 rounded-full bg-white/[0.03] border border-white/5 flex items-center justify-center hover:bg-emerald/10 hover:border-emerald/20 transition-all group/cert"
                      title="Ver certificado"
                    >
                      <ExternalLink size={13} className="text-white/30 group-hover/cert:text-emerald transition-colors" />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Em andamento */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-mono text-[9px] tracking-widest uppercase text-emerald/60 mb-4 flex items-center gap-2"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-emerald animate-pulse" />
            Em andamento
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {inProgress.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="p-6 rounded-[1.5rem] bg-emerald/[0.03] border border-emerald/10 hover:border-emerald/20 transition-colors duration-300"
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className="text-sm font-serif text-white">{item.name}</div>
                  <span className="px-2 py-0.5 bg-emerald/10 text-emerald text-[8px] font-mono uppercase tracking-widest rounded-full">
                    Cursando
                  </span>
                </div>
                <div className="text-[10px] font-mono text-white/30 uppercase tracking-widest">{item.issuer}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
