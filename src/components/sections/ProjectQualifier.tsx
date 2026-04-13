"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Building2, 
  Target, 
  Code2, 
  Cloud, 
  Cpu, 
  Rocket, 
  ArrowRight, 
  ArrowLeft,
  CheckCircle2,
  MessageSquare,
  Clock,
  Wallet,
  User,
  Phone
} from "lucide-react";

const WPP_NUMBER = '5561996381002';

type Category = {
  id: string;
  label: string;
  icon: any;
  desc: string;
  hot?: boolean;
};

const categories: Category[] = [
  { id: "software", label: "Software Customizado", icon: Code2, desc: "Sistemas complexos sob medida para sua operação" },
  { id: "saas", label: "Plataforma SaaS", icon: Cloud, desc: "Sistemas escaláveis com modelo de recorrência", hot: true },
  { id: "automation", label: "Automações e IA", icon: Cpu, desc: "Fluxos inteligentes que trabalham por você" },
  { id: "site", label: "Site Institucional", icon: Building2, desc: "Presença digital sólida e profissional" },
  { id: "lp", label: "Landing Page", icon: Target, desc: "Página focada em converter visitante em cliente" },
  { id: "package", label: "Pacote Empresa", icon: Rocket, desc: "Tudo junto: site, tráfego e IA", hot: true },
];

const situations = [
  "Novo negócio, ainda não lancei",
  "Já vendo, quero crescer",
  "Tenho produto mas não escala",
  "Empresa consolidada, quero modernizar"
];

const objectives = [
  "Atrair mais clientes",
  "Vender diretamente online",
  "Construir autoridade e marca",
  "Lançar e validar produto",
  "Reduzir custo operacional com IA",
  "Escalar o que já funciona",
  "Automatizar atendimento e follow-up"
];

const deadlines = [
  "Urgente — menos de 1 mês",
  "1 a 3 meses",
  "3 a 6 meses",
  "Sem prazo definido"
];

const budgets = [
  "R$ 300 – R$ 800",
  "R$ 1.000 – R$ 5.000",
  "R$ 5.000 – R$ 10.000",
  "R$ 10.000+",
  "Prefiro discutir na conversa"
];

export default function ProjectQualifier() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    categoria: "",
    segmento: "",
    situacao: "",
    objetivo: "",
    prazo: "",
    descricao: "",
    referencias: "",
    orcamento: "",
    nome: "",
    contato: ""
  });

  const updateData = (key: string, value: string) => {
    setFormData(prev => ({ ...prev, [key]: value }));
  };

  const nextStep = () => setStep(s => Math.min(s + 1, 5));
  const prevStep = () => setStep(s => Math.max(s - 1, 1));

  const generateWppLink = () => {
    const text = `Olá! Quero conversar sobre um projeto.\n\n` +
      `👤 *Nome:* ${formData.nome || '—'}\n` +
      `📱 *Contato:* ${formData.contato || '—'}\n\n` +
      `🗂 *Projeto:* ${formData.categoria || '—'}\n` +
      `🏭 *Segmento:* ${formData.segmento || '—'}\n` +
      `📊 *Situação atual:* ${formData.situacao || '—'}\n` +
      `🎯 *Objetivo:* ${formData.objetivo || '—'}\n` +
      `⏱ *Prazo:* ${formData.prazo || '—'}\n` +
      `💰 *Investimento:* ${formData.orcamento || '—'}\n\n` +
      `📝 *Descrição:*\n${formData.descricao || '—'}\n\n` +
      `🔗 *Referências:* ${formData.referencias || '—'}`;
    
    return `https://wa.me/${WPP_NUMBER}?text=${encodeURIComponent(text)}`;
  };

  const stepVariants = {
    initial: { opacity: 0, x: 20 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -20 }
  };

  return (
    <section className="py-24 px-6 relative overflow-hidden bg-[#020202]" id="qualificador">
      {/* Background elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute -top-[20%] -left-[10%] w-[40%] h-[60%] bg-emerald/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="mb-12 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald/10 border border-emerald/20 mb-4"
          >
            <span className="text-[10px] font-mono tracking-widest text-emerald uppercase font-bold">Qualificador de Projetos</span>
          </motion.div>
          <h2 className="text-3xl md:text-5xl font-serif text-white tracking-tightest mb-4">
            O que vamos <span className="italic gradient-text">Construir?</span>
          </h2>
          <p className="text-white/40 font-sans text-sm max-w-xl mx-auto">
            Responda 4 perguntas rápidas e receba uma proposta estratégica formatada para o seu negócio.
          </p>
        </div>

        {/* Progress Bar */}
        <div className="flex justify-between items-center mb-12 relative">
          <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/5 -z-10" />
          {[1, 2, 3, 4, 5].map((i) => (
            <div 
              key={i}
              className={`w-8 h-8 rounded-full flex items-center justify-center border transition-all duration-500 ${
                step >= i 
                  ? "bg-emerald border-emerald text-black" 
                  : "bg-[#050505] border-white/10 text-white/40"
              }`}
            >
              {step > i ? <CheckCircle2 size={16} /> : <span className="text-[10px] font-bold">{i}</span>}
            </div>
          ))}
        </div>

        <div className="min-h-[450px]">
          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div key="step1" {...stepVariants} className="space-y-6">
                <div>
                  <h3 className="text-xl font-serif text-white mb-2">Selecione o tipo de projeto</h3>
                  <p className="text-white/40 text-sm">Escolha a categoria principal ou o pacote completo.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => { updateData("categoria", cat.label); nextStep(); }}
                      className={`group p-6 rounded-2xl border text-left transition-all duration-300 ${
                        formData.categoria === cat.label 
                          ? "bg-emerald/10 border-emerald/50" 
                          : "bg-white/[0.02] border-white/5 hover:border-white/20 hover:bg-white/[0.05]"
                      }`}
                    >
                      <cat.icon className={`w-8 h-8 mb-4 transition-colors ${
                        formData.categoria === cat.label ? "text-emerald" : "text-white/20 group-hover:text-white"
                      }`} />
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-white font-bold tracking-tight">{cat.label}</span>
                        {cat.hot && <span className="px-2 py-0.5 bg-emerald text-[9px] font-black text-black rounded-full uppercase">HOT</span>}
                      </div>
                      <p className="text-white/40 text-[11px] leading-relaxed">{cat.desc}</p>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div key="step2" {...stepVariants} className="space-y-8">
                <div>
                  <h3 className="text-xl font-serif text-white mb-4">Sobre o seu negócio</h3>
                  <div className="space-y-6">
                    <div>
                      <label className="text-xs uppercase tracking-widest text-white/30 font-bold mb-3 block">Qual o seu nicho ou segmento?</label>
                      <input 
                        className="w-full bg-white/[0.02] border border-white/5 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald/50 transition-colors"
                        placeholder="Ex: Clínica, SaaS, Escritório, Consultoria..."
                        value={formData.segmento}
                        onChange={(e) => updateData("segmento", e.target.value)}
                      />
                    </div>
                    <div>
                      <label className="text-xs uppercase tracking-widest text-white/30 font-bold mb-3 block">Situação atual</label>
                      <div className="flex flex-wrap gap-2">
                        {situations.map(s => (
                          <button
                            key={s}
                            onClick={() => updateData("situacao", s)}
                            className={`px-4 py-2 rounded-full text-xs transition-all ${
                              formData.situacao === s 
                                ? "bg-emerald text-black font-bold" 
                                : "bg-white/[0.02] border border-white/10 text-white/40 hover:border-white/30"
                            }`}
                          >
                            {s}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between pt-4">
                  <button onClick={prevStep} className="flex items-center gap-2 text-white/40 hover:text-white transition-colors">
                    <ArrowLeft size={16} /> Voltar
                  </button>
                  <button 
                    onClick={nextStep} 
                    disabled={!formData.segmento || !formData.situacao}
                    className="px-8 py-3 bg-white text-black rounded-xl font-bold flex items-center gap-2 hover:bg-emerald transition-colors disabled:opacity-20"
                  >
                    Continuar <ArrowRight size={16} />
                  </button>
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div key="step3" {...stepVariants} className="space-y-8">
                <div>
                  <h3 className="text-xl font-serif text-white mb-4">Objetivo e Prazo</h3>
                  <div className="space-y-6">
                    <div>
                      <label className="text-xs uppercase tracking-widest text-white/30 font-bold mb-3 block">Objetivo Principal</label>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {objectives.map(o => (
                          <button
                            key={o}
                            onClick={() => updateData("objetivo", o)}
                            className={`px-4 py-3 rounded-xl text-left text-[11px] transition-all border ${
                              formData.objetivo === o 
                                ? "bg-emerald/10 border-emerald/50 text-emerald" 
                                : "bg-white/[0.02] border-white/5 text-white/40 hover:border-white/20"
                            }`}
                          >
                            {o}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div>
                      <label className="text-xs uppercase tracking-widest text-white/30 font-bold mb-3 block">Qual o seu prazo?</label>
                      <div className="flex flex-wrap gap-2">
                        {deadlines.map(d => (
                          <button
                            key={d}
                            onClick={() => updateData("prazo", d)}
                            className={`px-4 py-2 rounded-full text-xs transition-all ${
                              formData.prazo === d 
                                ? "bg-emerald text-black font-bold" 
                                : "bg-white/[0.02] border border-white/10 text-white/40 hover:border-white/30"
                            }`}
                          >
                            {d}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between pt-4">
                  <button onClick={prevStep} className="flex items-center gap-2 text-white/40 hover:text-white transition-colors">
                    <ArrowLeft size={16} /> Voltar
                  </button>
                  <button 
                    onClick={nextStep} 
                    disabled={!formData.objetivo || !formData.prazo}
                    className="px-8 py-3 bg-white text-black rounded-xl font-bold flex items-center gap-2 hover:bg-emerald transition-colors disabled:opacity-20"
                  >
                    Continuar <ArrowRight size={16} />
                  </button>
                </div>
              </motion.div>
            )}

            {step === 4 && (
              <motion.div key="step4" {...stepVariants} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div>
                      <label className="text-xs uppercase tracking-widest text-white/30 font-bold mb-3 block">Descrição do Projeto</label>
                      <textarea 
                        rows={4}
                        className="w-full bg-white/[0.02] border border-white/5 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald/50 transition-colors resize-none text-sm"
                        placeholder="Descreva o que deseja no projeto..."
                        value={formData.descricao}
                        onChange={(e) => updateData("descricao", e.target.value)}
                      />
                    </div>
                    <div>
                      <label className="text-xs uppercase tracking-widest text-white/30 font-bold mb-3 block">Orçamento Disponível</label>
                      <div className="grid grid-cols-2 gap-2">
                        {budgets.map(b => (
                          <button
                            key={b}
                            onClick={() => updateData("orcamento", b)}
                            className={`px-3 py-2 rounded-lg text-[10px] transition-all border ${
                              formData.orcamento === b 
                                ? "bg-emerald/10 border-emerald/50 text-emerald" 
                                : "bg-white/[0.02] border-white/5 text-white/40 hover:border-white/20"
                            }`}
                          >
                            {b}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="space-y-6">
                    <div>
                      <label className="text-xs uppercase tracking-widest text-white/30 font-bold mb-3 block">Referências Visuais</label>
                      <input 
                        className="w-full bg-white/[0.02] border border-white/5 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald/50 transition-colors text-sm"
                        placeholder="Links ou nomes de referências..."
                        value={formData.referencias}
                        onChange={(e) => updateData("referencias", e.target.value)}
                      />
                    </div>
                    <div className="pt-2 space-y-4">
                      <div className="relative">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20 w-4 h-4" />
                        <input 
                          className="w-full bg-white/[0.02] border border-white/5 rounded-xl pl-12 pr-4 py-3 text-white focus:outline-none focus:border-emerald/50 transition-colors text-sm"
                          placeholder="Seu Nome"
                          value={formData.nome}
                          onChange={(e) => updateData("nome", e.target.value)}
                        />
                      </div>
                      <div className="relative">
                        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20 w-4 h-4" />
                        <input 
                          className="w-full bg-white/[0.02] border border-white/5 rounded-xl pl-12 pr-4 py-3 text-white focus:outline-none focus:border-emerald/50 transition-colors text-sm"
                          placeholder="WhatsApp ou E-mail"
                          value={formData.contato}
                          onChange={(e) => updateData("contato", e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between pt-4">
                  <button onClick={prevStep} className="flex items-center gap-2 text-white/40 hover:text-white transition-colors">
                    <ArrowLeft size={16} /> Voltar
                  </button>
                  <button 
                    onClick={nextStep} 
                    disabled={!formData.nome || !formData.contato || !formData.orcamento}
                    className="px-8 py-3 bg-emerald text-black rounded-xl font-bold flex items-center gap-2 hover:bg-emerald-bright transition-colors disabled:opacity-20"
                  >
                    Gerar Resumo <ArrowRight size={16} />
                  </button>
                </div>
              </motion.div>
            )}

            {step === 5 && (
              <motion.div key="step5" {...stepVariants} className="space-y-8">
                <div className="bg-white/[0.02] border border-white/5 rounded-3xl p-8 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-emerald/5 blur-[50px] -z-10" />
                  <h3 className="text-2xl font-serif text-white mb-6">Resumo do Pedido</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-12 text-sm">
                    <div className="flex justify-between border-b border-white/5 pb-2">
                       <span className="text-white/30">Cliente</span>
                       <span className="text-white font-medium">{formData.nome}</span>
                    </div>
                    <div className="flex justify-between border-b border-white/5 pb-2">
                       <span className="text-white/30">Projeto</span>
                       <span className="text-emerald font-bold">{formData.categoria}</span>
                    </div>
                    <div className="flex justify-between border-b border-white/5 pb-2">
                       <span className="text-white/30">Segmento</span>
                       <span className="text-white">{formData.segmento}</span>
                    </div>
                    <div className="flex justify-between border-b border-white/5 pb-2">
                       <span className="text-white/30">Situação</span>
                       <span className="text-white/60">{formData.situacao}</span>
                    </div>
                    <div className="flex justify-between border-b border-white/5 pb-2">
                       <span className="text-white/30">Investimento</span>
                       <span className="text-white font-medium">{formData.orcamento}</span>
                    </div>
                    <div className="flex justify-between border-b border-white/5 pb-2">
                       <span className="text-white/30">Prazo</span>
                       <span className="text-white">{formData.prazo}</span>
                    </div>
                  </div>
                  <div className="mt-8 p-4 bg-white/[0.03] rounded-xl">
                    <span className="text-[10px] uppercase tracking-widest text-white/20 font-bold block mb-2">Descrição</span>
                    <p className="text-white/50 text-xs italic">"{formData.descricao || 'Nenhuma descrição detalhada fornecida.'}"</p>
                  </div>
                </div>

                <div className="flex flex-col items-center gap-6">
                  <a 
                    href={generateWppLink()}
                    target="_blank"
                    className="w-full md:w-auto px-12 py-4 bg-[#25D366] text-white rounded-2xl font-bold flex items-center justify-center gap-3 hover:scale-105 transition-all shadow-[0_0_30px_rgba(37,211,102,0.2)]"
                  >
                    <MessageSquare size={20} /> Enviar para WhatsApp
                  </a>
                  <button 
                    onClick={() => setStep(1)}
                    className="text-white/20 hover:text-white transition-colors text-xs uppercase tracking-widest font-bold"
                  >
                    Recomeçar Formulário
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
