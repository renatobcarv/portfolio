"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { Activity, TrendingUp, Shield, Zap } from "lucide-react";
import { SpotlightCard } from "@/components/ui/SpotlightCard";

const heroMetrics = [
  { value: 6, suffix: "+", label: "Anos de Mercado", icon: Activity },
  { value: 19, suffix: "", label: "Anos de Idade", icon: Zap },
  { value: 7, suffix: "+", label: "Infoprodutos", icon: TrendingUp },
  { value: 40, suffix: "+", label: "LP Templates", icon: Shield },
];

const systemMetrics = [
  {
    category: "RECEITA & CRESCIMENTO",
    rows: [
      { label: "VØYDRA — Receita Recorrente Base", value: 6, suffix: "k", unit: "R$/mês", status: "live" },
      { label: "Valence — Um projeto em desenvolvimento com base em recuperação de grana", textValue: "Em Dev", suffix: "", unit: "Retenção", status: "stable" },
    ],
  },
  {
    category: "OPERAÇÃO & DELIVERY",
    rows: [
      { label: "Experiência Acumulada em Negócios", value: 6, suffix: "+", unit: "Anos", status: "stable" },
      { label: "Infoprodutos Validados e Escalados", value: 7, suffix: "+", unit: "Produtos", status: "stable" },
      { label: "Sistemas em Produção Simultânea", value: 3, suffix: "", unit: "Plataformas", status: "live" },
      { label: "Estilos de Landing Page Disponíveis", value: 40, suffix: "+", unit: "Templates", status: "stable" },
    ],
  },
  {
    category: "ENGENHARIA & QUALIDADE",
    rows: [
      { label: "Stack Primária — Frontend", textValue: "100%", suffix: "", unit: "TypeScript, HTML, CSS", status: "stable" },
      { label: "Stack Primária — Backend", textValue: "100%", suffix: "", unit: "Java", status: "stable" },
    ],
  },
];

function CountUp({ target, duration = 2, decimals = 0 }: { target: number; duration?: number; decimals?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const increment = target / (duration * 60);

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(decimals > 0 ? parseFloat(start.toFixed(decimals)) : Math.floor(start));
      }
    }, 1000 / 60);

    return () => clearInterval(timer);
  }, [target, duration, isInView, decimals]);

  return <span ref={ref}>{decimals > 0 ? count.toFixed(decimals) : count}</span>;
}

export default function BenchmarkTable() {
  return (
    <section className="py-32 px-6 relative z-10 bg-[#050505]">
      <div className="max-w-5xl mx-auto">
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
              04 — System Benchmarks
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif text-white tracking-tightest leading-tight mb-6"
          >
            Desempenho <span className="gradient-text italic">Comprovado</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-cyber-white/30 text-sm font-sans max-w-xl leading-relaxed"
          >
            Números reais de sistemas em produção. Sem projeção, sem vanity metric.
            Cada linha é rastreável até o produto que a gerou.
          </motion.p>
        </div>

        {/* Hero Metrics Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20"
        >
          {heroMetrics.map((metric, idx) => (
            <SpotlightCard
              key={idx}
              className="p-6 border border-white/5 text-center"
            >
              <metric.icon size={16} className="text-emerald mx-auto mb-4 opacity-40" />
              <div className="text-3xl md:text-4xl font-serif text-white mb-1">
                <CountUp target={metric.value} />{metric.suffix}
              </div>
              <span className="font-mono text-[8px] tracking-widest uppercase text-white/30">
                {metric.label}
              </span>
            </SpotlightCard>
          ))}
        </motion.div>

        {/* System Metrics Table */}
        <div className="space-y-12">
          {systemMetrics.map((group, gIdx) => (
            <motion.div
              key={gIdx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: gIdx * 0.1 }}
            >
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-6">
                <span className="font-mono text-[9px] tracking-[0.2em] uppercase text-emerald/60 font-bold">
                  {group.category}
                </span>
                <div className="flex-1 h-px bg-white/5" />
              </div>

              {/* Rows */}
              <div className="border border-white/5 rounded-2xl overflow-hidden">
                {group.rows.map((row, rIdx) => (
                  <div
                    key={rIdx}
                    className={`grid grid-cols-12 items-center px-6 py-5 group hover:bg-white/[0.02] transition-colors ${
                      rIdx < group.rows.length - 1 ? "border-b border-white/5" : ""
                    }`}
                  >
                    {/* Status + Label */}
                    <div className="col-span-7 md:col-span-8 flex items-center gap-4">
                      <div className="relative flex items-center justify-center w-2 h-2 shrink-0">
                        <div className={`w-2 h-2 rounded-full ${
                          row.status === "live" ? "bg-emerald animate-pulse" : "bg-white/20"
                        }`} />
                      </div>
                      <span className="font-sans text-sm text-cyber-white/70 group-hover:text-white/90 transition-colors">
                        {row.label}
                      </span>
                    </div>

                    {/* Value */}
                    <div className="col-span-3 md:col-span-2 text-right">
                      <span className={`font-mono text-2xl font-bold tracking-tight ${
                        row.status === "live" ? "text-emerald" : "text-white/80"
                      }`}>
                        {row.textValue ? (
                          row.textValue
                        ) : (
                          <CountUp
                            target={row.value || 0}
                            decimals={(row.value || 0) % 1 !== 0 ? 1 : 0}
                          />
                        )}{row.suffix}
                      </span>
                    </div>

                    {/* Unit */}
                    <div className="col-span-2 text-right">
                      <span className="font-mono text-[8px] tracking-widest uppercase text-white/20">
                        {row.unit}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 pt-8 border-t border-white/5 flex items-center justify-between"
        >
          <span className="font-mono text-[9px] text-white/15 tracking-widest uppercase">
            Dados atualizados em tempo real dos sistemas em produção
          </span>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald animate-pulse" />
            <span className="font-mono text-[9px] text-emerald/40 tracking-widest uppercase">
              All Systems Operational
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
