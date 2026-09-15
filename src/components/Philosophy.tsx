import React from 'react';
import { motion } from 'motion/react';
import { Sparkles } from 'lucide-react';

export const Philosophy: React.FC = () => {
  return (
    <section id="philosophy" className="py-32 bg-[#09090B] relative overflow-hidden border-t border-white/5">
      {/* Background radial crimson glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#E5094C]/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-6 md:px-12 text-center relative z-10 space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 text-xs font-mono tracking-[0.2em] uppercase text-[#FF2A6D]"
        >
          <span>// Our Core Philosophy</span>
        </motion.div>

        {/* Large Statement */}
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-[#F5F5F2] tracking-tight uppercase leading-[1.12]"
        >
          WE DON’T JUST EDIT FOOTAGE. <br />
          <span className="font-editorial italic font-normal text-[#FF4D7E] font-serif capitalize">
            We build stories.
          </span>
        </motion.h2>

        {/* Three Editorial Anchors */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 max-w-4xl mx-auto border-t border-white/10"
        >
          <div className="space-y-2 p-4">
            <span className="font-mono text-xs text-[#FF2A6D] uppercase tracking-wider block">01 / Intent</span>
            <p className="font-heading text-lg sm:text-xl font-bold text-[#F5F5F2]">
              Every cut has a purpose.
            </p>
            <p className="text-xs text-[#A1A1AA]">
              No filler shots or mindless montage assembly.
            </p>
          </div>

          <div className="space-y-2 p-4 border-t md:border-t-0 md:border-x border-white/10">
            <span className="font-mono text-xs text-[#FF2A6D] uppercase tracking-wider block">02 / Atmosphere</span>
            <p className="font-heading text-lg sm:text-xl font-bold text-[#F5F5F2]">
              Every sound has a place.
            </p>
            <p className="text-xs text-[#A1A1AA]">
              Meticulous dialogue clarity and acoustic resonance.
            </p>
          </div>

          <div className="space-y-2 p-4">
            <span className="font-mono text-xs text-[#FF2A6D] uppercase tracking-wider block">03 / Emotion</span>
            <p className="font-heading text-lg sm:text-xl font-bold text-[#F5F5F2]">
              Every frame has a feeling.
            </p>
            <p className="text-xs text-[#A1A1AA]">
              Color science that evokes nostalgia and romance.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
