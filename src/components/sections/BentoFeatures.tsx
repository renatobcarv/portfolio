"use client";

import { motion } from "framer-motion";
import { BarChart, Bar, ResponsiveContainer, YAxis, XAxis, Cell } from "recharts";
import { Terminal, Database, Layout, Sparkles, MessageCircle } from "lucide-react";

const chartData = [
  { name: "Mon", value: 40 },
  { name: "Tue", value: 70 },
  { name: "Wed", value: 45 },
  { name: "Thu", value: 90 },
  { name: "Fri", value: 65 },
  { name: "Sat", value: 85 },
  { name: "Sun", value: 50 },
];

export default function BentoFeatures() {
  return (
    <section id="projetos" className="py-24 px-8 bg-obsidian-surface">
      <div className="max-w-[1400px] mx-auto">
        <div className="mb-16">
          <div className="font-mono text-[10px] tracking-widest uppercase text-lime mb-4">Features & Projects</div>
          <h2 className="text-5xl font-bold tracking-tightest">
            Ecossistema de <span className="text-white/40">Engenharia.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Large Card: 2x2 - Data Visualization / Valence Case */}
          <div className="md:col-span-2 lg:row-span-2 glass rounded-[2.5rem] p-10 flex flex-col justify-between group overflow-hidden relative">
             <div className="glow-sphere -top-20 -right-20 !w-64 !h-64 opacity-20" />
             
             <div>
               <div className="flex gap-2 items-center mb-6">
                 <div className="w-8 h-8 rounded-lg bg-lime/10 flex items-center justify-center text-lime">
                   <Terminal size={16} />
                 </div>
                 <span className="font-mono text-[10px] tracking-widest uppercase opacity-50">Project 01</span>
               </div>
               <h3 className="text-4xl font-bold mb-4">Valence Recovery</h3>
               <p className="text-white/50 text-base leading-relaxed max-w-sm">
                 Sistema de recuperação de receita para e-commerces. Automação inteligente que estanca vazamentos financeiros.
               </p>
             </div>

             <div className="mt-12 h-40 w-full">
               <ResponsiveContainer width="100%" height="100%">
                 <BarChart data={chartData}>
                   <Bar dataKey="value" radius={[4, 4, 0, 0]}>
                     {chartData.map((entry, index) => (
                       <Cell key={`cell-${index}`} fill={index === 3 ? "#ccff00" : "rgba(255,255,255,0.1)"} />
                     ))}
                   </Bar>
                   <XAxis dataKey="name" hide />
                   <YAxis hide domain={[0, 100]} />
                 </BarChart>
               </ResponsiveContainer>
               <div className="flex justify-between mt-4 font-mono text-[10px] uppercase tracking-widest opacity-40">
                 <span>Revenue Efficiency</span>
                 <span className="text-lime">+1200% ROI</span>
               </div>
             </div>
          </div>

          {/* Tall Card: 1x2 - Tech Swatches */}
          <div className="lg:row-span-2 glass rounded-[2.5rem] p-8 flex flex-col">
            <div className="font-mono text-[10px] tracking-widest uppercase opacity-50 mb-8 items-center flex gap-2">
              <Database size={12} /> Technical Stack
            </div>
            
            <div className="space-y-4 flex-grow">
               {[
                 { label: "Backend", value: "Java / Python", color: "bg-lime" },
                 { label: "Frontend", value: "Next.js / TS", color: "bg-white/20" },
                 { label: "Database", value: "PostgreSQL", color: "bg-emerald" },
                 { label: "Infrastructure", value: "Supabase / AWS", color: "bg-white/10" },
                  { label: "AI Integration", value: "Custom Agents", color: "bg-lime/50" },
               ].map((item, i) => (
                 <div key={i} className="p-4 rounded-3xl bg-white/[0.02] border border-white/[0.05] flex items-center justify-between group/swatch hover:border-lime/30 transition-all cursor-default">
                    <div>
                      <div className="text-[10px] uppercase opacity-40 mb-1">{item.label}</div>
                      <div className="text-sm font-bold">{item.value}</div>
                    </div>
                    <div className={`w-3 h-3 rounded-full ${item.color} shadow-[0_0_10px_rgba(204,255,0,0.2)]`} />
                 </div>
               ))}
            </div>

            <div className="mt-8 p-6 glass rounded-3xl border-white/5 bg-lime/5">
              <div className="text-[10px] uppercase tracking-widest opacity-50 mb-2">Philosophy</div>
              <div className="text-sm italic text-white/80">&quot;Código é o veículo, <br/> lucro é o destino.&quot;</div>
            </div>
          </div>

          {/* Accent Card: VØYDRA */}
          <div className="bg-lime rounded-[2.5rem] p-8 flex flex-col justify-between group cursor-pointer hover:scale-[0.98] transition-transform relative overflow-hidden">
             {/* Noise texture */}
             <div className="absolute inset-0 opacity-10 mix-blend-overlay pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} />
             
             <div className="flex justify-between items-start text-black">
                <Layout size={24} />
                <span className="font-mono text-[10px] tracking-widest uppercase font-bold">Project 02</span>
             </div>

             <div className="text-black">
                <h3 className="text-3xl font-bold tracking-tightest mb-2">VØYDRA</h3>
                <p className="text-sm font-medium opacity-70">Industrial Branding & D2C Operations</p>
             </div>
          </div>

          {/* Glass Card: Experience */}
          <div className="glass rounded-[2.5rem] p-8 flex flex-col justify-between">
             <div className="flex justify-between items-start text-white/50">
                <Sparkles size={20} />
                <span className="font-mono text-[10px] tracking-widest uppercase">Seniority</span>
             </div>

             <div>
                <div className="text-4xl font-bold text-white mb-2">6+ <span className="text-xs opacity-40 uppercase tracking-widest font-mono">Years</span></div>
                <p className="text-xs text-white/40 leading-relaxed uppercase tracking-wider">De mercado, liderando iniciativas de crescimento técnico.</p>
             </div>
          </div>

          {/* Social / Contact Grid Card (Small) */}
          <div className="lg:col-span-2 glass rounded-[2.5rem] p-8 flex items-center justify-between group cursor-pointer hover:bg-white/[0.05] transition-colors">
             <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-emerald/10 flex items-center justify-center text-emerald">
                  <MessageCircle size={24} />
                </div>
                <div>
                   <h4 className="text-xl font-bold">Vamos conversar?</h4>
                   <p className="text-sm text-white/40">Inicie um projeto estratégico hoje.</p>
                </div>
             </div>
             <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-lime group-hover:text-black transition-all">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 11L11 1M11 1H1M11 1V11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
