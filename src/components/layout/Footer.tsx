"use client";

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.03] bg-[#020202] py-8 px-6 lg:px-12 relative z-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
        <div className="md:w-1/3">
          <div className="text-white font-serif tracking-tighter text-xl mb-1">
            APEX NOIR <span className="text-emerald italic">2.0</span>
          </div>
          <p className="text-[9px] text-white/30 uppercase tracking-[0.2em] font-mono">
            Designed & Built in Brasília, BR.
          </p>
        </div>
        
        <div className="flex gap-16">
          <div className="flex flex-col gap-2">
            <span className="text-[9px] text-emerald uppercase tracking-[0.2em] font-mono">Copyright</span>
            <span className="text-xs font-sans text-white/40">&copy; {new Date().getFullYear()} RBC. Reservados.</span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-[9px] text-emerald uppercase tracking-[0.2em] font-mono">Status</span>
            <span className="text-xs font-sans text-white/40">Disponível</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
