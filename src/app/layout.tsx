import type { Metadata } from "next";
import { Newsreader, Inter, Space_Grotesk, Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: 'swap',
});

import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import SmoothScroll from "@/components/providers/SmoothScroll";

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-newsreader",
  display: 'swap',
  adjustFontFallback: false,
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.renatobdev.pro"),
  title: "Renato B. Carvalho | Desenvolvedor Back-End & Front-End",
  description: "Desenvolvedor em formação, focado em back-end com Java e Spring. Estudante de ADS, 19 anos, Brasília. Em busca da primeira oportunidade formal como estagiário ou júnior.",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://www.renatobdev.pro",
    title: "Renato B. Carvalho | Desenvolvedor",
    description: "Desenvolvedor em formação, focado em back-end com Java e Spring. Estudante de ADS, 19 anos, Brasília. Em busca da primeira oportunidade formal como estagiário ou júnior.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Renato B. Carvalho | Desenvolvedor",
    description: "Desenvolvedor em formação, focado em back-end com Java e Spring. Estudante de ADS, 19 anos, Brasília. Em busca da primeira oportunidade formal como estagiário ou júnior.",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`scroll-smooth ${newsreader.variable} ${inter.variable} ${spaceGrotesk.variable} ${montserrat.variable}`}>
      <head>
        <link rel="stylesheet" type='text/css' href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />
      </head>
      <body className="antialiased bg-cyber-black text-cyber-white font-sans relative">
        <SmoothScroll>
          <div className="morphing-blob top-[10%] left-[10%]"></div>
          <div className="morphing-blob bottom-[20%] right-[5%]" style={{ animationDelay: '2s' }}></div>
          <Navbar />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
