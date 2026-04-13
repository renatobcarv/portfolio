import type { Metadata } from "next";
import { Newsreader, Inter, Space_Grotesk, Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import SmoothScroll from "@/components/providers/SmoothScroll";

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-newsreader",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: "Renato Barros de Carvalho | Revenue Engineer",
  description: "Desenvolvedor que constrói sistemas com impacto real. Foco em performance, automação e soluções escaláveis.",
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
