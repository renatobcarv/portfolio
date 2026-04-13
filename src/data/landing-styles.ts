export interface LandingStyle {
  name: string;
  thumbnail: string;
  category: 'Dark & Editorial' | 'Brutalist' | 'Luxury' | 'SaaS & Tech' | 'Clean & Bold';
  tags: string[];
}

export const landingStyles: LandingStyle[] = [
  // DARK & EDITORIAL
  {
    name: "Neural Noir Interface",
    thumbnail: "https://vgbujcuwptvheqijyjbe.supabase.co/storage/v1/object/public/hmac-uploads/screenshots/drafts/3fb83fbd-a6f3-44a0-af74-b3afca0b7682/1768518296768.png",
    category: "Dark & Editorial",
    tags: ["SaaS", "Infoproduto", "Lançamento"]
  },
  {
    name: "Midnight Editorial",
    thumbnail: "https://vgbujcuwptvheqijyjbe.supabase.co/storage/v1/object/public/hmac-uploads/screenshots/components/a36ad1fa-6ed0-4a22-b24c-c64c863d9a71/fd7824aa-041a-4b80-9447-60e1f2383c37/1767926755858.png",
    category: "Dark & Editorial",
    tags: ["Serviço Premium", "Infoproduto"]
  },
  {
    name: "Cinematic Noir",
    thumbnail: "https://vgbujcuwptvheqijyjbe.supabase.co/storage/v1/object/public/hmac-uploads/screenshots/components/f469e754-9ab1-4071-aac9-fd6e5a1a91cf/81e774c1-4ed9-44fc-9146-624702a86e1e/1767950354316.png",
    category: "Dark & Editorial",
    tags: ["Lançamento", "Serviço Premium"]
  },
  {
    name: "Minimalist Beta Capture",
    thumbnail: "https://vgbujcuwptvheqijyjbe.supabase.co/storage/v1/object/public/hmac-uploads/screenshots/drafts/ace14be0-7bef-49c3-bdc1-c13fd975c283/1768799284980.png",
    category: "Dark & Editorial",
    tags: ["SaaS", "Lançamento"]
  },
  {
    name: "Superdesign Editorial Waitlist",
    thumbnail: "https://vgbujcuwptvheqijyjbe.supabase.co/storage/v1/object/public/hmac-uploads/screenshots/drafts/7f390f1f-3d3d-4b30-a8b2-669a9c6c0e3b/1770860214775.png",
    category: "Dark & Editorial",
    tags: ["SaaS", "Infoproduto"]
  },

  // BRUTALIST & HIGH ENERGY
  {
    name: "High Contrast Landing",
    thumbnail: "https://vgbujcuwptvheqijyjbe.supabase.co/storage/v1/object/public/preview-artifacts/prompt-library/36133045-75cc-4611-bdbb-0ec16bdc76fd/thumbnails/87ff6929-9218-400c-8e53-29de4297f821.png",
    category: "Brutalist",
    tags: ["E-commerce", "Lançamento"]
  },
  {
    name: "Brutalist E-commerce",
    thumbnail: "https://vgbujcuwptvheqijyjbe.supabase.co/storage/v1/object/public/hmac-uploads/screenshots/drafts/da34d4ac-cb7e-4391-af07-ec9085970f46/1770867822164.png",
    category: "Brutalist",
    tags: ["E-commerce", "Infoproduto"]
  },
  {
    name: "Kinetic Orange",
    thumbnail: "https://vgbujcuwptvheqijyjbe.supabase.co/storage/v1/object/public/hmac-uploads/screenshots/components/723c8592-5795-43de-8068-05f205f21660/9bba597a-d171-450b-b5d0-a3a737433136/1767934028801.png",
    category: "Brutalist",
    tags: ["Infoproduto", "Lançamento"]
  },
  {
    name: "Disruptor Beta Launch",
    thumbnail: "https://vgbujcuwptvheqijyjbe.supabase.co/storage/v1/object/public/preview-artifacts/prompt-library/36133045-75cc-4611-bdbb-0ec16bdc76fd/thumbnails/e01ba607-08eb-4cdb-9d84-f48f12f32523.jpeg",
    category: "Brutalist",
    tags: ["SaaS", "Lançamento"]
  },
  {
    name: "Neo-Brutalism",
    thumbnail: "https://vgbujcuwptvheqijyjbe.supabase.co/storage/v1/object/public/hmac-uploads/screenshots/components/b5573e2d-2194-4798-a4d5-ffa15cd6fed5/1c76921c-a946-4613-b0f7-46285265389f/1767677704841.png",
    category: "Brutalist",
    tags: ["E-commerce", "Serviço Premium"]
  },
  {
    name: "Neon Velocity",
    thumbnail: "https://vgbujcuwptvheqijyjbe.supabase.co/storage/v1/object/public/hmac-uploads/screenshots/drafts/28f49947-e9f9-46a7-86e2-97b9f2c7bb36/1768799839183.png",
    category: "Brutalist",
    tags: ["Infoproduto", "Lançamento"]
  },

  // LUXURY & PREMIUM
  {
    name: "Luxury-focused Design",
    thumbnail: "https://vgbujcuwptvheqijyjbe.supabase.co/storage/v1/object/public/preview-artifacts/prompt-library/36133045-75cc-4611-bdbb-0ec16bdc76fd/thumbnails/9047e64c-e86a-4b2b-a37d-3107c69b717d.png",
    category: "Luxury",
    tags: ["Serviço Premium", "E-commerce"]
  },
  {
    name: "Bold Editorial Design",
    thumbnail: "https://vgbujcuwptvheqijyjbe.supabase.co/storage/v1/object/public/preview-artifacts/prompt-library/36133045-75cc-4611-bdbb-0ec16bdc76fd/thumbnails/2496cb47-2505-4817-b7be-7baeb6e4ecc6.png",
    category: "Luxury",
    tags: ["Infoproduto", "Serviço Premium"]
  },
  {
    name: "Organic Modern",
    thumbnail: "https://vgbujcuwptvheqijyjbe.supabase.co/storage/v1/object/public/hmac-uploads/screenshots/components/bb5f3bf4-d2cf-416b-9a78-968733cd644f/614e0b67-c42f-4ba2-9151-e6e650714496/1767671098222.png",
    category: "Luxury",
    tags: ["Serviço Premium", "E-commerce"]
  },
  {
    name: "Cyber Serif",
    thumbnail: "https://vgbujcuwptvheqijyjbe.supabase.co/storage/v1/object/public/hmac-uploads/screenshots/components/887a5a37-769d-48aa-a0aa-0e077e0ad749/4a04a7c3-74ae-413c-a504-e727a63c9960/1767674937427.png",
    category: "Luxury",
    tags: ["SaaS", "Serviço Premium"]
  },

  // SAAS & TECH
  {
    name: "SaaS Developer Tool",
    thumbnail: "https://vgbujcuwptvheqijyjbe.supabase.co/storage/v1/object/public/hmac-uploads/screenshots/drafts/a8f544ea-ba22-4214-ade4-4cbd56118443/1770866149216.png",
    category: "SaaS & Tech",
    tags: ["SaaS", "Lançamento"]
  },
  {
    name: "Futuristic SaaS",
    thumbnail: "https://vgbujcuwptvheqijyjbe.supabase.co/storage/v1/object/public/preview-artifacts/prompt-library/efa2aaa5-0358-40b7-b524-ba300874c206/thumbnails/67685751-a2ef-41d0-b06f-04641e4f7eb4.png",
    category: "SaaS & Tech",
    tags: ["SaaS", "Infoproduto"]
  },
  {
    name: "Glassmorphism",
    thumbnail: "https://vgbujcuwptvheqijyjbe.supabase.co/storage/v1/object/public/hmac-uploads/screenshots/components/285ed12a-0b4a-435d-b212-b2dc30cee0cb/8ba9a623-981c-49ae-8ce7-679d477ef084/1767756243811.png",
    category: "SaaS & Tech",
    tags: ["SaaS", "Serviço Premium"]
  },
  {
    name: "Chrome Extension",
    thumbnail: "https://vgbujcuwptvheqijyjbe.supabase.co/storage/v1/object/public/hmac-uploads/screenshots/drafts/95042290-b1e0-4e07-b82c-97067b6aa457/1769311875518.png",
    category: "SaaS & Tech",
    tags: ["SaaS"]
  },
  {
    name: "Mosaic Grid Architecture",
    thumbnail: "https://vgbujcuwptvheqijyjbe.supabase.co/storage/v1/object/public/hmac-uploads/screenshots/drafts/d920e8cf-1030-472b-92cc-5bf9453149b5/1769428363698.png",
    category: "SaaS & Tech",
    tags: ["SaaS", "E-commerce"]
  },

  // CLEAN & BOLD
  {
    name: "Bold Editorial Style",
    thumbnail: "https://vgbujcuwptvheqijyjbe.supabase.co/storage/v1/object/public/preview-artifacts/prompt-library/36133045-75cc-4611-bdbb-0ec16bdc76fd/thumbnails/4cbe9ac1-be61-4114-917f-caaa1a7fa235.png",
    category: "Clean & Bold",
    tags: ["Infoproduto", "E-commerce"]
  },
  {
    name: "Lumina SaaS",
    thumbnail: "https://vgbujcuwptvheqijyjbe.supabase.co/storage/v1/object/public/hmac-uploads/screenshots/drafts/7c559ec1-83bb-46c6-bd4b-3e0cf404de62/1770779920155.png",
    category: "Clean & Bold",
    tags: ["SaaS", "Lançamento"]
  },
  {
    name: "Warm Industrial Gray",
    thumbnail: "https://vgbujcuwptvheqijyjbe.supabase.co/storage/v1/object/public/hmac-uploads/screenshots/components/22cc4f72-49fd-4a31-a0aa-b915da00f618/a46ada4e-ce09-4f5b-a5b8-04542e5c0af0/1767694364315.png",
    category: "Clean & Bold",
    tags: ["E-commerce", "Serviço Premium"]
  },
  {
    name: "Deep Red",
    thumbnail: "https://vgbujcuwptvheqijyjbe.supabase.co/storage/v1/object/public/hmac-uploads/screenshots/components/c0ee9faa-a4c2-422b-a59b-35216d817ee9/9930e9a0-b26d-4609-912b-2c24eb68242e/1768258746034.png",
    category: "Clean & Bold",
    tags: ["Infoproduto", "Lançamento"]
  },
];

export const categories = [
  "Todos",
  "Dark & Editorial",
  "Brutalist",
  "Luxury",
  "SaaS & Tech",
  "Clean & Bold",
] as const;

export const categoryColors: Record<string, string> = {
  "Dark & Editorial": "bg-white/10 text-white/70",
  "Brutalist": "bg-orange-500/10 text-orange-400/80",
  "Luxury": "bg-amber-500/10 text-amber-400/80",
  "SaaS & Tech": "bg-emerald/10 text-emerald/80",
  "Clean & Bold": "bg-blue-500/10 text-blue-400/80",
};
