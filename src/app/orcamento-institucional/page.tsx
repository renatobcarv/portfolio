import InstitutionalBriefing from "@/components/sections/InstitutionalBriefing";

export const metadata = {
  title: "Orçamento de Site Institucional | RBC.Studio",
  description: "Briefing estratégico para desenvolvimento de sites institucionais de alta performance e autoridade.",
};

export default function OrcamentoInstitucionalPage() {
  return (
    <main className="min-h-screen bg-cyber-black text-cyber-white">
      <div className="pt-20">
        <InstitutionalBriefing />
      </div>
    </main>
  );
}
