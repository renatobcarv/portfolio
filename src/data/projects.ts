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
    id: "voydra",
    name: "VOYDRA",
    role: "Marca digital · Projeto próprio",
    thumbnail: "/images/voydra/8.jpeg",
    summary: "Marca de powerlifting que operei sozinho durante 6 meses. Cuidei de tudo: branding, site, tráfego pago, lançamentos, comunidade e um sistema de patrocínio com rede comissionada e contratos.\n\nO melhor mês fechou em torno de R$6.000 de faturamento. Operei remoto e sozinho durante 6 meses, e depois decidi descontinuar pra focar nos estudos de programação.\n\nFoi onde aprendi, na prática, como funciona a parte operacional de um produto digital — desde a oferta até a entrega.",
    metrics: [
      { label: "MELHOR MÊS", value: "R$6k" },
      { label: "DURAÇÃO", value: "6 meses" },
      { label: "OPERAÇÃO", value: "Solo" },
    ],
    stack: ["Branding", "Organic Growth", "Social Strategy"],
    link: "/projetos/voydra",
    accent: "WHITE",
    details: {
      challenge: "Criar e operar uma marca de elite no nicho de Powerlifting do zero, sem equipe e sem capital de terceiros. O desafio incluía branding, produção, logística, tráfego e construção de comunidade — tudo simultâneo.",
      solution: "Estratégia baseada em branding profundo e tráfego orgânico. Criei uma cultura de pertencimento com a 'Escada de Patrocínio': um ecossistema meritocrático que transformou clientes em promotores da marca.",
      architecture: "Do branding ao site, da rede de patrocínio aos lançamentos. Operação completa com funil de vendas, gestão de estoque sob demanda e contratos de patrocínio com comissionamento por nível.",
      impact: "Faturamento de R$6k no melhor mês, operando 100% solo. A experiência me ensinou na prática como um produto digital funciona de ponta a ponta — e me fez perceber que precisava aprender a programar.",
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
        "/images/voydra/Estampas/Videos/Felipe_de_Melo_200kg.mp4",
        "/images/voydra/Estampas/Videos/HUMILHADOS.mp4",
        "/images/voydra/Estampas/Videos/Marca_de_Powerlifting.mp4",
        "/images/voydra/Estampas/Videos/PROVES.mp4",
        "/images/voydra/Estampas/Videos/a.mp4"
      ],
    },
    strategy: {
      philosophy: "A VOYDRA não patrocina vitrines; procuramos soldados. Gente com sede de vitória que ama levantar peso quando ninguém está olhando. Aqui, o patrocínio é conquistado no campo de batalha, não solicitado por formulários.",
      pdfPath: "https://drive.google.com/file/d/1XlnVwopCba3QzsT65g7pnQO5D14rOdQh/view?usp=sharing",
      levels: [
        {
          name: "DEADGRIP",
          requirement: "1 VENDA",
          rewards: ["1 camiseta exclusiva do drop atual", "Primeira marca no campo de batalha", "Início do reconhecimento oficial"],
        },
        {
          name: "BLACKBAR",
          requirement: "5 VENDAS",
          rewards: ["2 camisetas de sua preferência", "Acesso ao grupo fechado dos Patrocinados", "VOYDRA Level 2 Bracelet"],
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
    id: "infoprodutos",
    name: "Infoprodutos",
    role: "Produtos digitais · Operação",
    thumbnail: "/images/infoprodutos/Desafio Selva Completo.png",
    summary: "Mais de 7 produtos digitais operados antes da VOYDRA. Cada um foi uma oportunidade de testar página de vendas, copy, funil e tráfego pago.\n\nFoi o caminho que me fez aprender marketing digital de forma prática, e onde percebi o quanto a parte de software impacta o resultado final de um produto.",
    metrics: [
      { label: "PRODUTOS", value: "7+" },
      { label: "TIPO", value: "Validação" },
      { label: "STATUS", value: "Concluído" },
    ],
    stack: ["Meta Ads", "Google Ads", "Kiwify", "Hotmart", "Copy", "Funil"],
    link: "/projetos/infoprodutos",
    accent: "EMERALD",
    details: {
      challenge: "A maioria dos infoprodutores constrói o produto antes de validar o mercado. O desafio era testar demanda real antes de investir tempo e dinheiro em produção completa.",
      solution: "Cada produto seguiu um processo: Validar → Estruturar → Converter → Escalar. Nenhum produto entrou em produção completa sem sinal de mercado. MVP como inteligência barata antes do investimento pesado.",
      architecture: "Páginas de vendas, funis de conversão e tráfego pago como sistema integrado. Cada modelo escolhido com base no nível de consciência do lead, não por preferência estética.",
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
          content: "Validação de demanda antes de gravar uma aula sequer. Teste de headline e ângulo de copy com tráfego pago mínimo via Meta Ads e Google Ads — orçamento de teste, não de escala. CTR como primeiro sinal: se o criativo não para o scroll, o produto não existe. Página de captura enxuta para medir CPL antes de construir VSL. Conversas 1x1 com leads quentes antes de automatizar qualquer coisa."
        },
        {
          title: "Página de Vendas — Sistema, Não Site",
          content: "Long form com VSL no topo para atenção, desejo e decisão. Quiz de segmentação para elevar conversão via personalização. Página curta com CTA único para tráfego quente. Modelo 1x1 para ticket médio/alto: conversão por conversa, não por página. Prova social posicionada no meio do funil, no ponto exato de maior objeção — não no rodapé."
        },
        {
          title: "Tráfego — Orgânico para Validar, Pago para Escalar",
          content: "Orgânico como prova de autoridade e aquecimento de audiência. Tráfego pago frio para validação de ângulo. Escala só após CAC validado e LTV mapeado. Funil de retargeting para leads que não converteram na primeira visita."
        },
        {
          title: "Ciclo de Vida — A Parte que Ninguém Fala",
          content: "Infoproduto tem janela de oportunidade. Descontinuar um produto não é fracasso — é gestão de portfólio. Os produtos que não existem mais ensinaram mais do que os que escalaram. Isso é intencional — faz parte do processo."
        },
        {
          title: "Área de Membros — Entrega como Extensão da Conversão",
          content: "Área de membros não é depósito de aula. É continuação da promessa de venda. Onboarding que reduz churn nos primeiros 7 dias. Progressão de conteúdo que gera percepção de avanço."
        }
      ]
    }
  }
];
