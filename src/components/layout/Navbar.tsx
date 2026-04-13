"use client";

import { useState, useEffect } from "react";
import { Command } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 cyber-bezier ${
        scrolled ? "bg-[#050505]/80 backdrop-blur-md py-4 border-b border-white/[0.05]" : "bg-transparent py-8"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Left: Logo */}
        <Link href="/" className="flex items-center gap-3 group cursor-pointer">
          <div className="w-10 h-10 bg-cyber-white text-cyber-black rounded-lg flex items-center justify-center transition-transform duration-700 ease-out group-hover:rotate-[360deg]">
            <Command size={20} strokeWidth={2.5} />
          </div>
          <span className="font-mono text-[10px] tracking-widest uppercase opacity-70">
            RBC.Studio
          </span>
        </Link>

        {/* Center: Links */}
        <nav className="hidden md:block">
          <ul className="flex items-center gap-8 text-[13px] font-sans text-cyber-white">
            {["Sobre", "Projetos", "Experiência", "Contato"].map((item) => (
              <li key={item}>
                <Link 
                  href={`/#${item.toLowerCase()}`} 
                  className="relative group/link py-2"
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-0 h-px bg-emerald transition-all duration-300 ease-out group-hover/link:w-full" />
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right: CTA */}
        <div className="flex items-center gap-6">
          <Link href="/#contato">
            <button className="px-6 py-2.5 bg-cyber-white text-cyber-black rounded-full text-xs font-bold transition-transform hover:scale-105 shadow-[0_0_0_0_rgba(16,185,129,0.4)] animate-pulse-emerald">
              Contato
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
}
