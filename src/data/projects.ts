export interface ProjectMetric {
  label: string;
  value: string;
}

export interface ProjectSection {
  title: string;
  content: string;
}

export interface ProjectData {
  id: string;
  name: string;
  role: string;
  thumbnail?: string;
  summary: string;
  metrics: ProjectMetric[];
  stack: string[];
  github?: string;
  link: string;
  liveUrl?: string;
  accent: string;
  details: {
    challenge: string;
    solution: string;
    architecture: string;
    impact: string;
  };
  gallery?: {
    estampas: string[];
    social: string[];
    videos: string[];
  };
  strategy?: {
    philosophy: string;
    pdfPath: string;
    levels: {
      name: string;
      requirement: string;
      rewards: string[];
      commission?: string;
    }[];
  };
  architecture?: {
    pillars: { title: string; description: string; tech: string }[];
    principles: { title: string; content: string }[];
    codeSnippet?: string;
  };
  designSystem?: {
    philosophy: { title: string; description: string }[];
    palette: { name: string; hex: string; role: string; type: 'base' | 'accent' | 'border' }[];
    typography: { family: string; role: string; rules: string[]; sample: string }[];
    components: { name: string; description: string; visual?: string }[];
  };
  infoproducts?: {
    process: { step: string; description: string }[];
    products: { name: string; status: 'active' | 'deprecated'; image: string; link?: string }[];
    chapters: { title: string; content: string }[];
  }
}

export const projects: ProjectData[] = [
  {
    id: "valence",
    name: "Valence 2.0",
    role: "Revenue Intelligence & SaaS Architecture",
    thumbnail: "/images/valence/dashboard/1.png",
    summary: "O sistema operacional de inteligência de receita que detecta e recupera lucro morto de forma automatizada.",
    metrics: [
      { label: "ROI MÉDIO", value: "12X" },
      { label: "RECUPERAÇÃO", value: "85%" },
      { label: "PROCESSAMENTO", value: "<60s" }
    ],
    stack: [
      "Next.js 14", "FastAPI", "PostgreSQL", "Supabase", 
      "Stripe", "n8n", "Framer Motion", "Recharts"
    ],
    github: "https://github.com/renatobcarv/portfolio", 
    link: "/projetos/valence",
    liveUrl: "https://www.valencepro.com/",
    accent: "EMERALD",
    details: {
      challenge: "Empresas perdem milhões diariamente por leads ignorados, carrinhos abandonados e falta de visibilidade nos funis. O desafio era criar uma plataforma que detectasse esses 'vazamentos' e os recuperasse sem intervenção humana constante.",
      solution: "Construí um SaaS completo baseado no Apex Noir 2.0, integrando Next.js no frontend e FastAPI no backend. A solução utiliza automações inteligentes via n8n e webhooks do Stripe para reagir a eventos de receita em tempo real.",
      architecture: "Arquitetura orientada a eventos e tenant-isolated via Supabase RLS. O 'Radar de Oportunidades' serve como a única fonte da verdade, consolidando dados de ingestão manual, CSV e integrações automáticas em dashboards reativos.",
      impact: "Transformação de dados brutos em faturamento real. A plataforma não apenas exibe métricas, mas operacionaliza a recuperação, garantindo que nenhuma empresa perca receita por falta de inteligência determinística."
    },
    gallery: {
      estampas: [
        "/images/valence/landingpage/1.png",
      ],
      social: [
        "/images/valence/dashboard/1.png",
        "/images/valence/dashboard/2.png",
        "/images/valence/dashboard/3.png",
      ],
      videos: []
    },
    architecture: {
      pillars: [
        { 
          title: "Ingestion Hub", 
          description: "Normalização e ingestão em bulk de dados fragmentados (CSV, Webhooks, Manual) em menos de 60s.",
          tech: "FastAPI + PapaParse"
        },
        { 
          title: "Revenue Engine", 
          description: "Motor determinístico de detecção de oportunidades baseado em eventos de negócio em tempo real.",
          tech: "Python + n8n"
        },
        { 
          title: "Recovery Radar", 
          description: "Interface reativa para monitoramento e ação imediata sobre receita pendente.",
          tech: "Next.js + Supabase"
        }
      ],
      principles: [
        { 
          title: "Fonte Única de Verdade", 
          content: "O Radar de Oportunidades é a origem soberana de todas as métricas agregadas da plataforma." 
        },
        { 
          title: "Determinismo", 
          content: "Regras de negócio explícitas e previsíveis. Zero automação baseada em 'caixa preta'." 
        },
        { 
          title: "Backend como Lei", 
          content: "Toda lógica de validação e inteligência reside no motor Python, garantindo integridade absoluta." 
        }
      ],
      codeSnippet: `def process_revenue_event(payload: EventPayload):
    # Deterministic recovery logic
    opportunity = opportunity_service.evaluate(payload)
    if opportunity.is_recoverable:
        automation_engine.trigger_recovery(
            channel=opportunity.best_channel,
            delay=opportunity.optimal_wait_time
        )
    return opportunity.status`
    },
    designSystem: {
      philosophy: [
        { 
          title: "Hiper-Precisão", 
          description: "Remoção cirúrgica de ruído visual. Cada elemento serve a um KPI ou ação imediata." 
        },
        { 
          title: "Editorial Noir", 
          description: "Contraste de escala extremo e tipografia inspirada em terminais profissionais de luxo." 
        },
        { 
          title: "Profundidade Líquida", 
          description: "Hierarquia construída com camadas espaciais e transparência, não apenas cor." 
        }
      ],
      palette: [
        { name: "Preto Absoluto", hex: "#000000", role: "Background Primário — elimina ambiguidade.", type: "base" },
        { name: "Deep Surface", hex: "#050505", role: "Superfícies secundárias e cards.", type: "base" },
        { name: "Lava Gradient", hex: "linear-gradient(135deg, #FC3B00, #E30000)", role: "Urgência, Receita em Risco e Alertas.", type: "accent" },
        { name: "Emerald", hex: "#34d399", role: "Sucesso, Crescimento e Dinheiro Recuperado.", type: "accent" },
        { name: "Borda Noir", hex: "rgba(255,255,255,0.08)", role: "Separação sutil sem poluição visual.", type: "border" }
      ],
      typography: [
        { 
          family: "Montserrat", 
          role: "Display & Títulos", 
          rules: ["Black Italic", "Tracking: -0.06em", "Alma do Apex Noir"],
          sample: "REVENUE"
        },
        { 
          family: "Lastica", 
          role: "Branding Técnico", 
          rules: ["Geométrica Ultra-Moderna", "Detalhes de Engenharia"],
          sample: "VALENCE"
        },
        { 
          family: "Melodrame", 
          role: "Serifada de Contraste", 
          rules: ["Respiro Clássico", "Pontos Editoriais"],
          sample: "the noir stack"
        },
        { 
          family: "Host Grotesk", 
          role: "Corpo & Dados", 
          rules: ["Leitura Limpa", "Densidade de Informação"],
          sample: "Inteligência Determinística"
        },
        { 
          family: "SF Pro", 
          role: "Interface & Sistema", 
          rules: ["Precisão OS-Nativa", "Menus, Botões, Labels"],
          sample: "Settings → Revenue"
        }
      ],
      components: [
        { name: "Liquid Glass Noir", description: "rgba(20,20,20,0.4) + Backdrop Blur 20px. Separação perceptual sem bordas pesadas." },
        { name: "Bento Grid", description: "Layouts assimétricos agrupados por relevância operacional." },
        { name: "Lava Glow", description: "Sombra avermelhada para componentes de altíssima prioridade." }
      ]
    }
  },
  {
    id: "voydra",
    name: "VØYDRA",
    role: "Branding & Estratégia Orgânica",
    thumbnail: "/images/voydra/8.jpeg",
    summary: "Escalabilidade infinita via posicionamento de marca, tráfego orgânico e rede de patrocínios proprietária.",
    metrics: [
      { label: "STATUS", value: "DEPRECATED" },
      { label: "CRESCIMENTO", value: "100% ORG" },
      { label: "RETENÇÃO", value: "EXTREMA" }
    ],
    stack: ["Branding", "Organic Growth", "Social Strategy"],
    link: "/projetos/voydra",
    accent: "WHITE",
    details: {
      challenge: "VØYDRA não foi construída sobre código, mas sobre um posicionamento visceral. O desafio era criar uma marca de elite no nicho de Powerlifting sem depender de anúncios pagos, focando na aura de exclusividade e pertencimento.",
      solution: "A estratégia central foi baseada em branding profundo e tráfego 100% orgânico. Estabelecemos uma cultura de 'Soldados', onde a marca não é apenas vestuário, mas um símbolo de rank e dedicação ao treino pesado.",
      architecture: "A 'arquitetura' do projeto foi fundamentada na 'Escada de Patrocínio': um ecossistema meritocrático que transformou a base de clientes em uma força de vendas ativa e altamente engajada.",
      impact: "Criação de um legado de marca com receita estável e escala infinita, provando que uma estratégia de posicionamento poderosa supera a infraestrutura técnica.",
    },
    gallery: {
      estampas: [
        "/images/voydra/Estampas/4.png",
        "/images/voydra/Estampas/5.png",
        "/images/voydra/Estampas/7.png",
        "/images/voydra/Estampas/9.png",
        "/images/voydra/Estampas/11.png",
        "/images/voydra/Estampas/Creep Mockup.png",
        "/images/voydra/Estampas/Divina insanidade.png",
        "/images/voydra/Estampas/aaa.png",
        "/images/voydra/Estampas/ksdkddcks.png",
        "/images/voydra/Estampas/sdmkdnksdm.png",
        "/images/voydra/Estampas/sdnkdncs.png"
      ],
      social: [
        "/images/voydra/1(1).jpeg",
        "/images/voydra/2.jpeg",
        "/images/voydra/3.jpeg",
        "/images/voydra/4.jpeg",
        "/images/voydra/5.jpeg",
        "/images/voydra/6.jpeg",
        "/images/voydra/7.jpeg",
        "/images/voydra/8.jpeg",
        "/images/voydra/9.jpeg",
        "/images/voydra/10.jpeg",
        "/images/voydra/11.jpeg",
        "/images/voydra/12.jpeg"
      ],
      videos: [
        "/images/voydra/Estampas/Videos/Felipe de Melo 200kg.mp4",
        "/images/voydra/Estampas/Videos/HUMILHADOS.mp4",
        "/images/voydra/Estampas/Videos/Marca de Powerlifting.mp4",
        "/images/voydra/Estampas/Videos/PROVES.mp4",
        "/images/voydra/Estampas/Videos/a.mp4"
      ],
    },
    strategy: {
      philosophy: "A VØYDRA não patrocina vitrines; procuramos soldados. Gente com sede de vitória que ama levantar peso quando ninguém está olhando. Aqui, o patrocínio é conquistado no campo de batalha, não solicitado por formulários.",
      pdfPath: "/images/voydra/Estrategia Principal/Processo de Patrocinio - VØYDRA.pdf",
      levels: [
        {
          name: "DEADGRIP",
          requirement: "1 VENDA",
          rewards: ["1 camiseta exclusiva do drop atual", "Primeira marca no campo de batalha", "Início do reconhecimento oficial"],
        },
        {
          name: "BLACKBAR",
          requirement: "5 VENDAS",
          rewards: ["2 camisetas de sua preferência", "Acesso ao grupo fechado dos Patrocinados", "VØYDRA Level 2 Bracelet"],
          commission: "5% (R$27,25/un)"
        },
        {
          name: "REPCHAIN",
          requirement: "20 VENDAS",
          rewards: ["Camiseta da Escada (Exclusiva Nível 3+)", "Presença em conteúdos oficiais", "Acesso antecipado a peças experimentais"],
          commission: "15% (R$327,00 total)"
        },
        {
          name: "TRENCHLORD",
          requirement: "50 VENDAS",
          rewards: ["2 peças de qualquer drop/mês", "Entrada na Sala Tática (decisões internas)", "Crédito mensal de R$200"],
          commission: "20% (R$1.090,00 total)"
        },
        {
          name: "MONOLITH",
          requirement: "+100 VENDAS",
          rewards: ["3 peças por mês (Sem limite de drop)", "Voz ativa no recrutamento e cultura", "Voz vitalícia na criação da marca"],
          commission: "30% (R$3.270,00 total)"
        }
      ]
    }
  },
  {
    id: "growth-engine",
    name: "Growth Engine",
    role: "Automações & Pipelines de Dados",
    thumbnail: "/images/infoprodutos/area de membros/1.png",
    summary: "Pipelines de dados estratégicos que operam no pulso do tráfego pago para maximizar conversão.",
    metrics: [
      { label: "DATA POINTS", value: "1M+" },
      { label: "EFFICIENCY", value: "+40%" },
      { label: "UPTIME", value: "99.9%" }
    ],
    stack: ["Python", "Pandas", "React", "Docker"],
    github: "https://github.com/renatobcarvalho/growth-engine", 
    link: "/projetos/growth-engine",
    accent: "EMERALD",
    details: {
      challenge: "Gestores de tráfego muitas vezes tomam decisões baseadas em painéis de anúncios com delay. O desafio era capturar dados brutos diretamente dos pixels e APIs de anúncios para gerar insights preditivos de escala.",
      solution: "Construção de pipelines em Python que normalizam dados de múltiplas fontes em um data lake centralizado. A visualização é feita através de um dashboard React otimizado para análise de métricas de performance (LTV, CAC, ROAS).",
      architecture: "Pipeline de ETL (Extract, Transform, Load) rodando em containers Docker, garantindo escalabilidade e isolamento. O processamento de dados utiliza Pandas para manipulação massiva de data points em janelas deslizantes de tempo.",
      impact: "Aumento de 40% na eficiência de alocação de orçamento publicitário e redução drástica no tempo de decisão estratégica para os times de growth."
    }
  },
  {
    id: "apex-noir",
    name: "Apex Noir 2.0",
    role: "Design System Architect",
    thumbnail: "/images/valence/landingpage/1.png",
    summary: "O design system de alta autoridade que define a identidade visual da Valence e o padrão de SaaS B2B premium.",
    metrics: [
      { label: "COMPONENTES", value: "40+" },
      { label: "CONSISTÊNCIA", value: "100%" },
      { label: "DESIGN OPS", value: "SCALE" }
    ],
    stack: ["Design Tokens", "Framer Motion", "Tailwind", "Next.js"],
    link: "/projetos/apex-noir",
    accent: "EMERALD",
    details: {
      challenge: "A maioria dos SaaS B2B herda estética genérica que não comunica autoridade. O desafio era criar um sistema que transmitisse precisão, urgência e controle desde o primeiro pixel.",
      solution: "Construção do Apex Noir 2.0: um sistema baseado em hiperpreecisão, tipografia editorial e profundidade líquida, transformando o design em uma ferramenta estratégica de conversão.",
      architecture: "Arquitetura de tokens semânticos e componentes desacoplados, focada em performance e hierarquia visual extrema através de Glassmorphism e layers espaciais.",
      impact: "Diferenciação imediata no mercado. O sistema elevou a percepção de valor da Valence, aproximando a experiência de uso de um terminal profissional de alta performance."
    },
    gallery: {
      estampas: ["/images/valence/landingpage/1.png"],
      social: [
        "/images/valence/dashboard/1.png",
        "/images/valence/dashboard/2.png"
      ],
      videos: []
    },
    designSystem: {
      philosophy: [
        { 
          title: "Hiper-Precisão", 
          description: "Remoção cirúrgica de ruído visual. Cada elemento serve a um KPI ou ação imediata." 
        },
        { 
          title: "Editorial Noir", 
          description: "Contraste de escala extremo e tipografia inspirada em terminais profissionais de luxo." 
        },
        { 
          title: "Profundidade Líquida", 
          description: "Hierarquia construída com camadas espaciais e transparência, não apenas cor." 
        }
      ],
      palette: [
        { name: "Preto Absoluto", hex: "#000000", role: "Background Primário — elimina ambiguidade.", type: "base" },
        { name: "Deep Surface", hex: "#050505", role: "Superfícies secundárias e cards.", type: "base" },
        { name: "Lava Gradient", hex: "linear-gradient(135deg, #FC3B00, #E30000)", role: "Urgência, Receita em Risco e Alertas.", type: "accent" },
        { name: "Emerald", hex: "#34d399", role: "Sucesso, Crescimento e Dinheiro Recuperado.", type: "accent" },
        { name: "Borda Noir", hex: "rgba(255,255,255,0.08)", role: "Separação sutil sem poluição visual.", type: "border" }
      ],
      typography: [
        { 
          family: "Montserrat", 
          role: "Display & Títulos", 
          rules: ["Black Italic", "Tracking: -0.06em", "Alma do Apex Noir"],
          sample: "REVENUE"
        },
        { 
          family: "Lastica", 
          role: "Branding Técnico", 
          rules: ["Geométrica Ultra-Moderna", "Detalhes de Engenharia"],
          sample: "VALENCE"
        },
        { 
          family: "Melodrame", 
          role: "Serifada de Contraste", 
          rules: ["Respiro Clássico", "Pontos Editoriais"],
          sample: "the noir stack"
        },
        { 
          family: "Host Grotesk", 
          role: "Corpo & Dados", 
          rules: ["Leitura Limpa", "Densidade de Informação"],
          sample: "Inteligência Determinística"
        },
        { 
          family: "SF Pro", 
          role: "Interface & Sistema", 
          rules: ["Precisão OS-Nativa", "Menus, Botões, Labels"],
          sample: "Settings → Revenue"
        }
      ],
      components: [
        { name: "Liquid Glass Noir", description: "rgba(20,20,20,0.4) + Backdrop Blur 20px. Separação perceptual sem bordas pesadas." },
        { name: "Bento Grid", description: "Layouts assimétricos agrupados por relevância operacional." },
        { name: "Lava Glow", description: "Sombra avermelhada para componentes de altíssima prioridade." }
      ]
    }
  },
  {
    id: "infoprodutos",
    name: "Infoprodutos",
    role: "Operador de Produtos Digitais",
    thumbnail: "/images/infoprodutos/Desafio Selva Completo.png",
    summary: "Validation, construction e escala de produtos digitais com lógica de operador — não de creator.",
    metrics: [
      { label: "PRODUTOS", value: "7+" },
      { label: "MODELO", value: "MVP" },
      { label: "OPERAÇÃO", value: "FULL" }
    ],
    stack: ["Meta Ads", "Google Ads", "Kiwify", "Hotmart", "Copy", "Funil"],
    link: "/projetos/infoprodutos",
    accent: "EMERALD",
    details: {
      challenge: "A maioria dos infoprodutores constrói o produto antes de validar o mercado. Meses de gravação, design e investimento jogados fora porque ninguém testou a demanda antes. O mercado brasileiro de infoprodutos é brutalmente competitivo e tem ciclo de vida curto. Estratégias que geravam 8x de ROAS em 2021 hoje geram prejuízo se aplicadas sem adaptação. O que funcionou não é receita — é referência histórica.",
      solution: "Cada produto seguiu um processo cirurgicamente definido: Validar → Estruturar → Converter → Escalar. Nenhum produto entrou em produção completa sem sinal de mercado. MVP não é versão ruim do produto — é inteligência barata antes do investimento pesado.",
      architecture: "Página de vendas não é design. É arquitetura de decisão. Long form com VSL, quiz de segmentação, página curta com CTA único para tráfego quente, modelo 1x1 para ticket médio/alto. Cada modelo escolhido com base no nível de consciência do lead, não por preferência estética.",
      impact: "Qualquer um cria um infoproduto. Poucos sabem quando lançar, como converter e quando parar. Os produtos que não existem mais ensinaram mais do que os que escalaram."
    },
    gallery: {
      estampas: [
        "/images/infoprodutos/2026 © Athena Power System.png",
        "/images/infoprodutos/Flow Prime.png",
        "/images/infoprodutos/Uma vida em 30 dias.png",
        "/images/infoprodutos/Desafio Selva Completo.png",
        "/images/infoprodutos/COMO GANHAR 10KG DE MASSA MUSCULAR.pdf.pdf.png",
        "/images/infoprodutos/Carisma Sedutor.png",
        "/images/infoprodutos/BÔNUS - A Arte da Linguagem Corporal.pdf.png"
      ],
      social: [
        "/images/infoprodutos/area de membros/1.png",
        "/images/infoprodutos/area de membros/2.png"
      ],
      videos: []
    },
    infoproducts: {
      process: [
        { step: "VALIDAR", description: "Teste de headline e ângulo de copy com tráfego pago mínimo. CTR como primeiro sinal: se o criativo não para o scroll, o produto não existe." },
        { step: "ESTRUTURAR", description: "Página de captura enxuta para medir CPL antes de construir VSL. Conversas 1x1 com leads quentes antes de automatizar." },
        { step: "CONVERTER", description: "Arquitetura de página de vendas baseada no nível de consciência do lead. Prova social no ponto exato de maior objeção." },
        { step: "ESCALAR", description: "Escala só após CAC validado e LTV mapeado. ROAS como métrica de saúde, não de vaidade." }
      ],
      products: [
        { name: "Athena Power System", status: "deprecated", image: "/images/infoprodutos/2026 © Athena Power System.png", link: "https://drive.google.com/drive/folders/1YoXNv3kqs_csaPzxZxQcLFssBwSTfjUL?usp=sharing" },
        { name: "Flow Prime", status: "deprecated", image: "/images/infoprodutos/Flow Prime.png", link: "https://drive.google.com/drive/folders/1YoXNv3kqs_csaPzxZxQcLFssBwSTfjUL?usp=sharing" },
        { name: "Uma Vida em 30 Dias", status: "deprecated", image: "/images/infoprodutos/Uma vida em 30 dias.png", link: "https://drive.google.com/drive/folders/1YoXNv3kqs_csaPzxZxQcLFssBwSTfjUL?usp=sharing" },
        { name: "Desafio Selva", status: "deprecated", image: "/images/infoprodutos/Desafio Selva Completo.png", link: "https://drive.google.com/drive/folders/1YoXNv3kqs_csaPzxZxQcLFssBwSTfjUL?usp=sharing" },
        { name: "10KG de Massa Muscular", status: "deprecated", image: "/images/infoprodutos/COMO GANHAR 10KG DE MASSA MUSCULAR.pdf.pdf.png", link: "https://drive.google.com/drive/folders/1YoXNv3kqs_csaPzxZxQcLFssBwSTfjUL?usp=sharing" },
        { name: "Carisma Sedutor", status: "deprecated", image: "/images/infoprodutos/Carisma Sedutor.png", link: "https://drive.google.com/drive/folders/1YoXNv3kqs_csaPzxZxQcLFssBwSTfjUL?usp=sharing" },
        { name: "A Arte da Linguagem Corporal", status: "deprecated", image: "/images/infoprodutos/BÔNUS - A Arte da Linguagem Corporal.pdf.png", link: "https://drive.google.com/drive/folders/1YoXNv3kqs_csaPzxZxQcLFssBwSTfjUL?usp=sharing" }
      ],
      chapters: [
        {
          title: "Validação — MVP Antes de Tudo",
          content: "Validação de demanda antes de gravar uma aula sequer. Teste de headline e ângulo de copy com tráfego pago mínimo via Meta Ads e Google Ads — orçamento de teste, não de escala. CTR como primeiro sinal: se o criativo não para o scroll, o produto não existe. Página de captura enxuta para medir CPL antes de construir VSL. Conversas 1x1 com leads quentes antes de automatizar qualquer coisa. Métricas de corte: CTR mínimo viável, CPL máximo aceitável por nicho, taxa de resposta em abordagem direta, engajamento orgânico como sinal de autoridade."
        },
        {
          title: "Página de Vendas — Sistema, Não Site",
          content: "Long form com VSL no topo para atenção, desejo e decisão. Quiz de segmentação para elevar conversão via personalização. Página curta com CTA único para tráfego quente. Modelo 1x1 para ticket médio/alto: conversão por conversa, não por página. Prova social posicionada no meio do funil, no ponto exato de maior objeção — não no rodapé."
        },
        {
          title: "Tráfego — Orgânico para Validar, Pago para Escalar",
          content: "Orgânico como prova de autoridade e aquecimento de audiência. SEO e tráfego de busca para produtos com demanda latente. Nunca dependência exclusiva — orgânico é ativo de longo prazo, não canal de escala rápida. Tráfego pago frio para validação de ângulo. Escala só após CAC validado e LTV mapeado. Funil de retargeting para leads que não converteram na primeira visita. Criativo em rotação constante — fadiga de anúncio mata ROAS antes da concorrência."
        },
        {
          title: "Ciclo de Vida — A Parte que Ninguém Fala",
          content: "Infoproduto tem janela de oportunidade. O que escalou em 2021 com tráfego barato e baixa concorrência exige estrutura completamente diferente hoje. Descontinuar um produto não é fracasso — é gestão de portfólio. Os produtos que não existem mais ensinaram mais do que os que escalaram. Isso é intencional — faz parte do processo."
        },
        {
          title: "Área de Membros — Entrega como Extensão da Conversão",
          content: "Área de membros não é depósito de aula. É continuação da promessa de venda. Onboarding que reduz churn nos primeiros 7 dias. Progressão de conteúdo que gera percepção de avanço. Design e UX que comunica valor antes do aluno consumir qualquer aula. Suporte e comunidade como alavanca de retenção e upsell."
        }
      ]
    }
  }
];
