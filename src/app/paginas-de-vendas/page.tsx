"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Filter, Sparkles, X } from "lucide-react";
import Link from "next/link";
import { landingStyles, categories, categoryColors } from "@/data/landing-styles";
import { SpotlightCard } from "@/components/ui/SpotlightCard";

export default function PaginasDeVendas() {
  const [activeCategory, setActiveCategory] = useState<string>("Todos");
  const [selectedStyle, setSelectedStyle] = useState<string | null>(null);

  const filteredStyles = activeCategory === "Todos"
    ? landingStyles
    : landingStyles.filter(s => s.category === activeCategory);

  return (
    <main className="min-h-screen bg-cyber-black text-cyber-white pt-40 pb-32">
      <div className="max-w-7xl mx-auto px-6">

        {/* Hero */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 rounded-lg bg-emerald/5 border border-emerald/10">
              <Sparkles className="text-emerald" size={18} />
            </div>
            <span className="font-mono text-[10px] tracking-widest uppercase text-white/30">
              Catálogo de Estilos — {landingStyles.length} disponíveis
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif tracking-tightest leading-[0.9] mb-8">
            Sua página de vendas,
            <br />
            <span className="italic gradient-text">no estilo que converte.</span>
          </h1>

          <p className="text-lg md:text-xl text-cyber-white/40 max-w-2xl leading-relaxed font-sans">
            Mais de {landingStyles.length} estilos disponíveis — do editorial premium ao
            brutalist de alta performance. Cada página construída com
            estratégia de conversão, não só design bonito.
          </p>
        </motion.section>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex items-center gap-3 mb-12 overflow-x-auto pb-2 scrollbar-hide"
        >
          <Filter size={14} className="text-white/20 shrink-0" />
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-[11px] font-mono uppercase tracking-widest whitespace-nowrap transition-all duration-300 border ${
                activeCategory === cat
                  ? "bg-emerald/10 text-emerald border-emerald/20"
                  : "bg-white/[0.02] text-white/40 border-white/5 hover:border-white/10 hover:text-white/60"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Count */}
        <div className="flex items-center justify-between mb-8">
          <span className="font-mono text-[10px] text-white/20 uppercase tracking-widest">
            {filteredStyles.length} estilo{filteredStyles.length !== 1 ? 's' : ''}
          </span>
        </div>

        {/* Masonry Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          <AnimatePresence mode="popLayout">
            {filteredStyles.map((style, idx) => (
              <motion.div
                key={style.name}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: idx * 0.03 }}
                className="break-inside-avoid"
              >
                <SpotlightCard className="border border-white/5 group overflow-hidden hover:border-emerald/10 transition-all duration-500">
                  {/* Thumbnail */}
                  <div className="relative overflow-hidden">
                    <img
                      src={style.thumbnail}
                      alt={style.name}
                      className="w-full h-auto object-cover group-hover:scale-[1.03] transition-transform duration-700"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className={`px-3 py-1 rounded-full text-[9px] font-mono uppercase tracking-widest backdrop-blur-md ${categoryColors[style.category] || 'bg-white/10 text-white/60'}`}>
                        {style.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="font-serif text-lg mb-3 group-hover:text-emerald transition-colors">
                      {style.name}
                    </h3>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-5">
                      {style.tags.map(tag => (
                        <span
                          key={tag}
                          className="px-2.5 py-0.5 rounded-full text-[9px] font-mono text-white/30 bg-white/[0.03] border border-white/5"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* CTA */}
                    <Link
                      href={`/#contato?style=${encodeURIComponent(style.name)}`}
                      className="flex items-center gap-2 text-[11px] font-mono uppercase tracking-widest text-white/40 hover:text-emerald transition-colors group/cta"
                    >
                      Quero esse estilo
                      <ArrowRight size={12} className="group-hover/cta:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </SpotlightCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Bottom CTA Section */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-40 text-center"
        >
          <div className="max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-serif tracking-tightest leading-[0.95] mb-8">
              Não é só design.
              <br />
              <span className="italic gradient-text">É conversão.</span>
            </h2>

            <p className="text-cyber-white/40 text-lg leading-relaxed mb-12 font-sans">
              Cada estilo é adaptado ao seu produto, público e objetivo.
              A estrutura por baixo — headline, CTA, hierarquia de objeções,
              prova social — é sempre construída para converter.
              O visual é o que faz o cliente parar. A copy é o que faz ele comprar.
            </p>

            <Link
              href="/#contato"
              className="inline-flex items-center gap-4 px-10 py-5 rounded-full bg-emerald text-black font-bold uppercase tracking-widest text-xs hover:shadow-[0_0_40px_rgba(16,185,129,0.3)] transition-all duration-500"
            >
              Solicitar Orçamento <ArrowRight size={18} />
            </Link>
          </div>
        </motion.section>
      </div>
    </main>
  );
}
