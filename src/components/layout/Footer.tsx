"use client";

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.03] bg-[#020202] py-8 px-6 lg:px-12 relative z-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
        <div>
          <span className="text-xs font-sans text-white/40">
            &copy; {new Date().getFullYear()} Renato B. Carvalho · Brasília, BR
          </span>
        </div>
        
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-emerald animate-pulse" />
          <span className="text-[9px] text-emerald uppercase tracking-[0.2em] font-mono">Disponível</span>
        </div>
      </div>
    </footer>
  );
}
