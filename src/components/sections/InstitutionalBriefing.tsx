"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowRight, 
  ArrowLeft,
  CheckCircle2,
  MessageSquare,
  User,
  Phone,
  Building,
  Target,
  FileText,
  Layout,
  Settings,
  Wallet
} from "lucide-react";

const WPP_NUMBER = '5561996381002';

const budgets = [
  "R$ 5.000 – R$ 10.000",
  "R$ 10.000 – R$ 20.000",
  "R$ 20.000+",
  "Prefiro discutir na conversa"
];

const stepsConfig = [
  { id: 1, title: "Identidade", icon: Building },
  { id: 2, title: "Público", icon: Target },
  { id: 3, title: "Conteúdo", icon: FileText },
  { id: 4, title: "Visual & Marca", icon: Layout },
  { id: 5, title: "Técnico", icon: Settings },
  { id: 6, title: "Prazo & Investimento", icon: Wallet },
];

export default function InstitutionalBriefing() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    // Step 1: Identidade
    empresa_nome: "",
    empresa_tamanho: "",
    diferencial: "",
    missao_valores: "",
    
    // Step 2: Público
    cliente_ideal: "",
    tipo_cliente: "",
    acao_visitante: "",

    // Step 3: Conteúdo
    servicos_produtos: "",
    cases_depoimentos: "",
    conteudo_pronto: "",
    blog_conteudo: "",

    // Step 4: Visual e marca
    identidade_visual: "",
    refs_gosta: "",
    refs_odeia: "",
    tom_marca: "",

    // Step 5: Técnico e funcional
    funcionalidades: "",
    integracoes: "",
    dominio_hospedagem: "",
    area_restrita: "",
    idiomas: "",

    // Step 6: Prazo, investimento e Contato
    data_limite: "",
    orcamento: "",
    tentativa_anterior: "",
    
    contato_nome: "",
    contato_wpp: ""
  });

  const updateData = (key: string, value: string) => {
    setFormData(prev => ({ ...prev, [key]: value }));
  };

  const nextStep = () => setStep(s => Math.min(s + 1, 7));
  const prevStep = () => setStep(s => Math.max(s - 1, 1));

  const generateWppLink = () => {
    const text = `Olá, Renato! Preenchi o formulário de orçamento para Site Institucional.\n\n` +
      `*CLIENTE & CONTATO*\n` +
      `Nome: ${formData.contato_nome || '—'}\n` +
      `Contato: ${formData.contato_wpp || '—'}\n\n` +
      `*1. IDENTIDADE*\n` +
      `Empresa: ${formData.empresa_nome || '—'}\n` +
      `Tamanho: ${formData.empresa_tamanho || '—'}\n` +
      `Diferencial:\n${formData.diferencial || '—'}\n` +
      `Missão/Valores: ${formData.missao_valores || '—'}\n\n` +
      `*2. PÚBLICO*\n` +
      `Cliente Ideal:\n${formData.cliente_ideal || '—'}\n` +
      `Tipo B2B/B2C: ${formData.tipo_cliente || '—'}\n` +
      `Ação principal: ${formData.acao_visitante || '—'}\n\n` +
      `*3. CONTEÚDO*\n` +
      `Serviços/Produtos:\n${formData.servicos_produtos || '—'}\n` +
      `Possui Cases: ${formData.cases_depoimentos || '—'}\n` +
      `Conteúdo Pronto: ${formData.conteudo_pronto || '—'}\n` +
      `Terá Blog: ${formData.blog_conteudo || '—'}\n\n` +
      `*4. VISUAL E MARCA*\n` +
      `Id. Visual: ${formData.identidade_visual || '—'}\n` +
      `Tom da Marca: ${formData.tom_marca || '—'}\n` +
      `Refs Positivas:\n${formData.refs_gosta || '—'}\n` +
      `Refs Negativas:\n${formData.refs_odeia || '—'}\n\n` +
      `*5. TÉCNICO E FUNCIONAL*\n` +
      `Funcionalidades extras:\n${formData.funcionalidades || '—'}\n` +
      `Integrações (Wpp/CRM): ${formData.integracoes || '—'}\n` +
      `Domínio/Hospedagem: ${formData.dominio_hospedagem || '—'}\n` +
      `Área Restrita/Login: ${formData.area_restrita || '—'}\n` +
      `Idiomas: ${formData.idiomas || '—'}\n\n` +
      `*6. PRAZO & INVESTIMENTO*\n` +
      `Data limite: ${formData.data_limite || '—'}\n` +
      `Orçamento: ${formData.orcamento || '—'}\n` +
      `Tentativa Anterior:\n${formData.tentativa_anterior || '—'}\n`;
    
    return `https://wa.me/${WPP_NUMBER}?text=${encodeURIComponent(text)}`;
  };

  const stepVariants = {
    initial: { opacity: 0, x: 20 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -20 }
  };

  const renderButtons = (field: string, options: string[]) => (
    <div className="flex flex-wrap gap-2">
      {options.map(opt => (
        <button
          key={opt}
          onClick={() => updateData(field, opt)}
          className={`px-4 py-2 rounded-full text-xs transition-all ${
            (formData as any)[field] === opt 
              ? "bg-emerald text-black font-bold" 
              : "bg-white/[0.02] border border-white/10 text-white/40 hover:border-white/30"
          }`}
        >
          {opt}
        </button>
      ))}
    </div>
  );

  return (
    <section className="py-24 px-6 relative overflow-hidden bg-[#020202]">
      {/* Background elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute top-[20%] -right-[10%] w-[40%] h-[60%] bg-emerald/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-3xl mx-auto relative z-10">
        <div className="mb-12 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald/10 border border-emerald/20 mb-4"
          >
            <span className="text-[10px] font-mono tracking-widest text-emerald uppercase font-bold">Diagnóstico Institucional</span>
          </motion.div>
          <h2 className="text-3xl md:text-5xl font-serif text-white tracking-tightest mb-4">
            Briefing de <span className="italic gradient-text">Alta Performance</span>
          </h2>
          <p className="text-white/40 font-sans text-sm max-w-xl mx-auto">
            Para construirmos um ativo e não apenas um site, preciso entender fundo o seu negócio. Responda detalhadamente.
          </p>
        </div>

        {/* Progress Bar */}
        <div className="flex justify-between items-center mb-12 relative max-w-2xl mx-auto hidden md:flex">
          <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/5 -z-10" />
          {stepsConfig.map((config) => {
            const Icon = config.icon;
            const isCompleted = step > config.id;
            const isCurrent = step === config.id;
            
            return (
              <div key={config.id} className="flex flex-col items-center gap-2">
                <div 
                  className={`w-10 h-10 rounded-full flex items-center justify-center border transition-all duration-500 ${
                    isCompleted || isCurrent
                      ? "bg-emerald border-emerald text-black shadow-[0_0_15px_rgba(16,185,129,0.3)]" 
                      : "bg-[#050505] border-white/10 text-white/40"
                  }`}
                >
                  {isCompleted ? <CheckCircle2 size={18} /> : <Icon size={16} />}
                </div>
                <span className={`text-[9px] font-mono uppercase tracking-widest ${isCurrent || isCompleted ? 'text-emerald' : 'text-white/20'}`}>
                  {config.title}
                </span>
              </div>
            );
          })}
        </div>

        {/* Mobile Progress Text */}
        <div className="md:hidden text-center mb-8 text-[10px] font-mono text-emerald uppercase tracking-widest">
           Passo {Math.min(step, 6)} de 6
        </div>

        <div className="min-h-[450px]">
          <AnimatePresence mode="wait">
            
            {/* ETAPA 1 */}
            {step === 1 && (
              <motion.div key="step1" {...stepVariants} className="space-y-8">
                <div>
                  <h3 className="text-xl font-serif text-white mb-6 border-b border-white/10 pb-4">Identidade da Empresa</h3>
                  <div className="space-y-6">
                    <div>
                      <label className="text-xs uppercase tracking-widest text-white/30 font-bold mb-3 block">1. Nome da empresa e o que ela faz em uma frase?</label>
                      <input 
                        className="w-full bg-white/[0.02] border border-white/5 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald/50 transition-colors text-sm"
                        placeholder="Ex: Valence, somos uma plataforma de..."
                        value={formData.empresa_nome}
                        onChange={(e) => updateData("empresa_nome", e.target.value)}
                      />
                    </div>
                    <div>
                      <label className="text-xs uppercase tracking-widest text-white/30 font-bold mb-3 block">2. Há quanto tempo existe e tamanho (equipe, filiais)?</label>
                      <input 
                        className="w-full bg-white/[0.02] border border-white/5 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald/50 transition-colors text-sm"
                        placeholder="Ex: 5 anos, equipe de 10 pessoas, sem sede física"
                        value={formData.empresa_tamanho}
                        onChange={(e) => updateData("empresa_tamanho", e.target.value)}
                      />
                    </div>
                    <div>
                      <label className="text-xs uppercase tracking-widest text-white/30 font-bold mb-3 block">3. Diferencial real em relação aos concorrentes?</label>
                      <textarea 
                        rows={3}
                        className="w-full bg-white/[0.02] border border-white/5 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald/50 transition-colors resize-none text-sm"
                        placeholder="Por que o seu cliente compra com você e não com o vizinho?"
                        value={formData.diferencial}
                        onChange={(e) => updateData("diferencial", e.target.value)}
                      />
                    </div>
                    <div>
                      <label className="text-xs uppercase tracking-widest text-white/30 font-bold mb-3 block">4. Tem missão, visão e valores definidos?</label>
                      {renderButtons("missao_valores", ["Sim, documentados", "Temos, mas precisa de ajuste", "Não temos formalizado"])}
                    </div>
                  </div>
                </div>
                <div className="flex justify-end pt-4">
                  <button onClick={nextStep} className="px-8 py-3 bg-white text-black rounded-xl font-bold flex items-center gap-2 hover:bg-emerald transition-colors">
                    Continuar <ArrowRight size={16} />
                  </button>
                </div>
              </motion.div>
            )}

            {/* ETAPA 2 */}
            {step === 2 && (
              <motion.div key="step2" {...stepVariants} className="space-y-8">
                <div>
                  <h3 className="text-xl font-serif text-white mb-6 border-b border-white/10 pb-4">Público Alvo</h3>
                  <div className="space-y-6">
                    <div>
                      <label className="text-xs uppercase tracking-widest text-white/30 font-bold mb-3 block">5. Quem é o cliente ideal (perfil, dor principal)?</label>
                      <textarea 
                        rows={3}
                        className="w-full bg-white/[0.02] border border-white/5 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald/50 transition-colors resize-none text-sm"
                        placeholder="Ex: Donos de negócio entre 30-50 anos, que sofrem com falta de processos..."
                        value={formData.cliente_ideal}
                        onChange={(e) => updateData("cliente_ideal", e.target.value)}
                      />
                    </div>
                    <div>
                      <label className="text-xs uppercase tracking-widest text-white/30 font-bold mb-3 block">6. O site vai falar com quem?</label>
                      {renderButtons("tipo_cliente", ["Apenas Pessoa Física (B2C)", "Apenas Pessoa Jurídica (B2B)", "Ambos (B2C e B2B)"])}
                    </div>
                    <div>
                      <label className="text-xs uppercase tracking-widest text-white/30 font-bold mb-3 block">7. Decisão principal do visitante no site?</label>
                      {renderButtons("acao_visitante", ["Chamar no WhatsApp", "Preencher formulário de orçamento", "Ligação telefônica", "Agendar reunião"])}
                    </div>
                  </div>
                </div>
                <div className="flex justify-between pt-4">
                  <button onClick={prevStep} className="flex items-center gap-2 text-white/40 hover:text-white transition-colors">
                    <ArrowLeft size={16} /> Voltar
                  </button>
                  <button onClick={nextStep} className="px-8 py-3 bg-white text-black rounded-xl font-bold flex items-center gap-2 hover:bg-emerald transition-colors">
                    Continuar <ArrowRight size={16} />
                  </button>
                </div>
              </motion.div>
            )}

            {/* ETAPA 3 */}
            {step === 3 && (
              <motion.div key="step3" {...stepVariants} className="space-y-8">
                <div>
                  <h3 className="text-xl font-serif text-white mb-6 border-b border-white/10 pb-4">Conteúdo do Site</h3>
                  <div className="space-y-6">
                    <div>
                      <label className="text-xs uppercase tracking-widest text-white/30 font-bold mb-3 block">8. Quais serviços/produtos precisam estar no site?</label>
                      <textarea 
                        rows={3}
                        className="w-full bg-white/[0.02] border border-white/5 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald/50 transition-colors resize-none text-sm"
                        placeholder="Liste os produtos ou serviços principais..."
                        value={formData.servicos_produtos}
                        onChange={(e) => updateData("servicos_produtos", e.target.value)}
                      />
                    </div>
                    <div>
                      <label className="text-xs uppercase tracking-widest text-white/30 font-bold mb-3 block">9. Tem cases, depoimentos ou resultados?</label>
                      {renderButtons("cases_depoimentos", ["Sim, muitos", "Alguns depoimentos", "Não temos ou não podemos mostrar"])}
                    </div>
                    <div>
                      <label className="text-xs uppercase tracking-widest text-white/30 font-bold mb-3 block">10. Textos e Fotos estão prontos?</label>
                      {renderButtons("conteudo_pronto", ["Tudo pronto (Textos e Imagens)", "Tenho as fotos, precisa fazer os textos.", "Preciso de ajuda com tudo."])}
                    </div>
                    <div>
                      <label className="text-xs uppercase tracking-widest text-white/30 font-bold mb-3 block">11. Terá blog ou área de conteúdo/notícias?</label>
                      {renderButtons("blog_conteudo", ["Sim, fundamental", "Não é necessário no momento", "Talvez no futuro"])}
                    </div>
                  </div>
                </div>
                <div className="flex justify-between pt-4">
                  <button onClick={prevStep} className="flex items-center gap-2 text-white/40 hover:text-white transition-colors">
                    <ArrowLeft size={16} /> Voltar
                  </button>
                  <button onClick={nextStep} className="px-8 py-3 bg-white text-black rounded-xl font-bold flex items-center gap-2 hover:bg-emerald transition-colors">
                    Continuar <ArrowRight size={16} />
                  </button>
                </div>
              </motion.div>
            )}

            {/* ETAPA 4 */}
            {step === 4 && (
              <motion.div key="step4" {...stepVariants} className="space-y-8">
                <div>
                  <h3 className="text-xl font-serif text-white mb-6 border-b border-white/10 pb-4">Visual e Marca</h3>
                  <div className="space-y-6">
                    <div>
                      <label className="text-xs uppercase tracking-widest text-white/30 font-bold mb-3 block">12. Tem Identidade Visual pronta?</label>
                      {renderButtons("identidade_visual", ["Sim, manual completo (Cores, Fontes)", "Apenas o Logotipo", "Preciso recriar/criar do zero"])}
                    </div>
                    <div>
                      <label className="text-xs uppercase tracking-widest text-white/30 font-bold mb-3 block">13. Quais sites/concorrentes você admira?</label>
                      <textarea 
                        rows={2}
                        className="w-full bg-white/[0.02] border border-white/5 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald/50 transition-colors resize-none text-sm"
                        placeholder="Links e por que gosta deles..."
                        value={formData.refs_gosta}
                        onChange={(e) => updateData("refs_gosta", e.target.value)}
                      />
                    </div>
                    <div>
                      <label className="text-xs uppercase tracking-widest text-white/30 font-bold mb-3 block">14. O que você NÃO GOSTA ou não quer?</label>
                      <input 
                        className="w-full bg-white/[0.02] border border-white/5 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald/50 transition-colors text-sm"
                        placeholder="Ex: Não gosto de muito texto, odeio a cor azul, etc."
                        value={formData.refs_odeia}
                        onChange={(e) => updateData("refs_odeia", e.target.value)}
                      />
                    </div>
                    <div>
                      <label className="text-xs uppercase tracking-widest text-white/30 font-bold mb-3 block">15. Tom da Marca</label>
                      {renderButtons("tom_marca", ["Extremamente Formal E Corporativo", "Moderno, Descolado e Jovem", "Altamente Técnico e Científico", "Atendimento Amigável e Próximo"])}
                    </div>
                  </div>
                </div>
                <div className="flex justify-between pt-4">
                  <button onClick={prevStep} className="flex items-center gap-2 text-white/40 hover:text-white transition-colors">
                    <ArrowLeft size={16} /> Voltar
                  </button>
                  <button onClick={nextStep} className="px-8 py-3 bg-white text-black rounded-xl font-bold flex items-center gap-2 hover:bg-emerald transition-colors">
                    Continuar <ArrowRight size={16} />
                  </button>
                </div>
              </motion.div>
            )}

            {/* ETAPA 5 */}
            {step === 5 && (
              <motion.div key="step5" {...stepVariants} className="space-y-8">
                <div>
                  <h3 className="text-xl font-serif text-white mb-6 border-b border-white/10 pb-4">Técnico e Funcional</h3>
                  <div className="space-y-6">
                    <div>
                      <label className="text-xs uppercase tracking-widest text-white/30 font-bold mb-3 block">16. Necessidades de Interação</label>
                      <input 
                        className="w-full bg-white/[0.02] border border-white/5 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald/50 transition-colors text-sm"
                        placeholder="Ex: Forms complexo com anexo, apenas contato simples..."
                        value={formData.funcionalidades}
                        onChange={(e) => updateData("funcionalidades", e.target.value)}
                      />
                    </div>
                    <div>
                      <label className="text-xs uppercase tracking-widest text-white/30 font-bold mb-3 block">17. Vai integrar com sistemas (CRM, ERP, ZAP)?</label>
                      <input 
                        className="w-full bg-white/[0.02] border border-white/5 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald/50 transition-colors text-sm"
                        placeholder="Ex: Hubspot, RD Station, ActiveCampaign..."
                        value={formData.integracoes}
                        onChange={(e) => updateData("integracoes", e.target.value)}
                      />
                    </div>
                    <div>
                      <label className="text-xs uppercase tracking-widest text-white/30 font-bold mb-3 block">18. Já tem Domínio e Hospedagem?</label>
                      {renderButtons("dominio_hospedagem", ["Tenho Ambos", "Tenho apenas Domínio (.com.br)", "Não tenho nada ainda"])}
                    </div>
                    <div>
                      <label className="text-xs uppercase tracking-widest text-white/30 font-bold mb-3 block">19. Precisa de área restrita (Login de Cliente/Membro)?</label>
                      {renderButtons("area_restrita", ["Não, apenas institucional", "Sim, portal de cliente", "Sim, painel administrativo meu"])}
                    </div>
                    <div>
                      <label className="text-xs uppercase tracking-widest text-white/30 font-bold mb-3 block">20. Idiomas?</label>
                      {renderButtons("idiomas", ["Apenas Português", "Português + Inglês", "Português + Inglês + Espanhol"])}
                    </div>
                  </div>
                </div>
                <div className="flex justify-between pt-4">
                  <button onClick={prevStep} className="flex items-center gap-2 text-white/40 hover:text-white transition-colors">
                    <ArrowLeft size={16} /> Voltar
                  </button>
                  <button onClick={nextStep} className="px-8 py-3 bg-white text-black rounded-xl font-bold flex items-center gap-2 hover:bg-emerald transition-colors">
                    Continuar <ArrowRight size={16} />
                  </button>
                </div>
              </motion.div>
            )}

            {/* ETAPA 6 */}
            {step === 6 && (
              <motion.div key="step6" {...stepVariants} className="space-y-8">
                <div>
                  <h3 className="text-xl font-serif text-white mb-6 border-b border-white/10 pb-4">Prazo, Investimento e Confirmação</h3>
                  <div className="space-y-6">
                    <div>
                      <label className="text-xs uppercase tracking-widest text-white/30 font-bold mb-3 block">21. Qual é a data limite ideal para o lançamento?</label>
                      <input 
                        className="w-full bg-white/[0.02] border border-white/5 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald/50 transition-colors text-sm"
                        placeholder="Ex: Entre novembro e dezembro deste ano"
                        value={formData.data_limite}
                        onChange={(e) => updateData("data_limite", e.target.value)}
                      />
                    </div>
                    <div>
                      <label className="text-xs uppercase tracking-widest text-white/30 font-bold mb-3 block">22. Orçamento Parametrizado</label>
                      {renderButtons("orcamento", budgets)}
                    </div>
                    <div>
                      <label className="text-xs uppercase tracking-widest text-white/30 font-bold mb-3 block">23. Já tentou fazer antes? Tem frustrações com o site antigo?</label>
                      <textarea 
                        rows={2}
                        className="w-full bg-white/[0.02] border border-white/5 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald/50 transition-colors resize-none text-sm"
                        placeholder="Ex: Contratei um dev que sumiu, site atual não carrega..."
                        value={formData.tentativa_anterior}
                        onChange={(e) => updateData("tentativa_anterior", e.target.value)}
                      />
                    </div>
                    
                    <div className="pt-8 border-t border-white/10">
                      <h4 className="font-serif text-lg mb-4 text-emerald">Com quem vamos falar?</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="relative">
                          <User className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20 w-4 h-4" />
                          <input 
                            className="w-full bg-white/[0.02] border border-emerald/20 rounded-xl pl-12 pr-4 py-4 text-white focus:outline-none focus:border-emerald shadow-[0_0_15px_rgba(16,185,129,0.05)] transition-colors text-sm"
                            placeholder="Seu Nome Completo"
                            value={formData.contato_nome}
                            onChange={(e) => updateData("contato_nome", e.target.value)}
                          />
                        </div>
                        <div className="relative">
                          <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20 w-4 h-4" />
                          <input 
                            className="w-full bg-white/[0.02] border border-emerald/20 rounded-xl pl-12 pr-4 py-4 text-white focus:outline-none focus:border-emerald shadow-[0_0_15px_rgba(16,185,129,0.05)] transition-colors text-sm"
                            placeholder="WhatsApp (com DDD)"
                            value={formData.contato_wpp}
                            onChange={(e) => updateData("contato_wpp", e.target.value)}
                          />
                        </div>
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
                    disabled={!formData.contato_nome || !formData.contato_wpp || !formData.orcamento}
                    className="px-8 py-3 bg-emerald text-black rounded-xl font-bold flex items-center gap-2 hover:bg-emerald-bright transition-all disabled:opacity-20 shadow-[0_0_20px_rgba(16,185,129,0.2)] hover:shadow-[0_0_30px_rgba(16,185,129,0.4)]"
                  >
                    Analisar Briefing <ArrowRight size={16} />
                  </button>
                </div>
              </motion.div>
            )}

            {/* ETAPA 7: SUCESSO / RESUMO */}
            {step === 7 && (
              <motion.div key="step7" {...stepVariants} className="space-y-8 text-center max-w-2xl mx-auto">
                <div className="bg-white/[0.02] border border-emerald/20 rounded-3xl p-10 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-emerald/10 blur-[80px] -z-10" />
                  
                  <div className="w-20 h-20 bg-emerald/20 rounded-full flex items-center justify-center mx-auto mb-6 text-emerald border border-emerald/30 shadow-[0_0_30px_rgba(16,185,129,0.3)]">
                     <CheckCircle2 size={40} />
                  </div>
                  
                  <h3 className="text-3xl font-serif text-white mb-4">Briefing Quase Concluído!</h3>
                  <p className="text-white/60 mb-10 leading-relaxed font-sans text-sm">
                    {formData.contato_nome}, o seu briefing possui dados suficientes para montarmos uma arquitetura de projeto de alta performance. 
                    Clique no botão abaixo para enviar essas respostas diretamente para nosso WhatsApp oficial.
                  </p>

                  <div className="flex flex-col items-center gap-6">
                    <a 
                      href={generateWppLink()}
                      target="_blank"
                      className="w-full md:w-auto px-12 py-5 bg-[#25D366] text-white rounded-2xl font-bold flex items-center justify-center gap-3 hover:scale-105 transition-all shadow-[0_0_40px_rgba(37,211,102,0.3)] text-lg uppercase tracking-wider"
                    >
                      <MessageSquare size={24} /> Enviar Briefing via WhatsApp
                    </a>
                  </div>
                </div>
                
                <button 
                  onClick={() => setStep(1)}
                  className="text-white/20 hover:text-white transition-colors text-[10px] uppercase tracking-widest font-bold"
                >
                  Voltar ou Corrigir Respostas
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
