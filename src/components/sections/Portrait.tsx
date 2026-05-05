"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Portrait() {
  return (
    <section className="bg-[#e5e5e5] text-black rounded-t-[4rem] py-24 px-8 relative z-20 -mt-10">
      <div className="max-w-[1400px] mx-auto flex flex-col items-center justify-center gap-8">
        {/* Foto circular */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative w-[250px] h-[250px] md:w-[350px] md:h-[350px]"
        >
          <div className="w-full h-full rounded-full overflow-hidden filter grayscale contrast-125 border-8 border-white shadow-2xl">
            <Image
              src="/images/perfilimage.jpeg"
              alt="Renato B. Carvalho"
              fill
              className="object-cover"
            />
          </div>
        </motion.div>

        {/* Nome e localização */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-center"
        >
          <div className="text-black font-bold text-2xl md:text-3xl font-serif tracking-tight mb-2">
            Renato B. Carvalho
          </div>
          <p className="text-black/50 text-sm font-sans">
            Desenvolvedor · Brasília, BR
          </p>
        </motion.div>
      </div>
    </section>
  );
}
