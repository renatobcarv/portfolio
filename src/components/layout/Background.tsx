"use client";

import { motion } from "framer-motion";

export default function Background() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Aurora Blobs - Liquid Lava Aesthetic */}
      <motion.div 
        className="aurora-blob absolute top-[-10%] left-[-5%] w-[60vw] h-[60vw] bg-[#FC3B00]/20 rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(252,59,0,0.15) 0%, transparent 70%)' }}
      />
      
      <motion.div 
        className="aurora-blob absolute bottom-[-10%] right-[-5%] w-[50vw] h-[50vw] bg-[#E30000]/10 rounded-full"
        style={{ 
          background: 'radial-gradient(circle, rgba(227,0,0,0.12) 0%, transparent 70%)',
          animationDelay: '-5s' 
        }}
      />
      
      <motion.div 
        className="aurora-blob absolute top-[20%] right-[10%] w-[40vw] h-[40vw] bg-[#FC3B00]/5 rounded-full"
        style={{ 
          background: 'radial-gradient(circle, rgba(252,59,0,0.08) 0%, transparent 70%)',
          animationDelay: '-12s' 
        }}
      />

      {/* Spotlight Effect for Hero Focus */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[100vw] h-[100vh] bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.03)_0%,transparent_50%)]" />
    </div>
  );
}
