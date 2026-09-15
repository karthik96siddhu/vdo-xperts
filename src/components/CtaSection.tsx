import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Play, Sparkles } from 'lucide-react';

interface CtaSectionProps {
  onInquireNow: () => void;
  onExplorePackages: () => void;
}

export const CtaSection: React.FC<CtaSectionProps> = ({ onInquireNow, onExplorePackages }) => {
  return (
    <section className="relative py-32 bg-[#09090B] overflow-hidden border-t border-white/5">
      {/* Background Image / Ambient Backdrop */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1800&auto=format&fit=crop"
          alt="Cinematic Wedding Filmmaking"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#09090B] via-[#09090B]/85 to-[#09090B]"></div>
        <div className="absolute inset-0 film-grain opacity-40"></div>
        {/* Crimson glow backdrop */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#E5094C]/15 blur-[120px] rounded-full pointer-events-none"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12 text-center space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 text-xs font-mono tracking-[0.2em] uppercase text-[#FF2A6D]"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>// Start Your Partnership</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-heading text-4xl sm:text-6xl md:text-7xl font-extrabold text-[#F5F5F2] tracking-tight uppercase leading-[1.08]"
        >
          YOUR NEXT FILM <br />
          <span className="font-editorial italic font-normal text-[#FF4D7E] font-serif capitalize">
            Starts here.
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-body text-base sm:text-xl text-[#A1A1AA] max-w-2xl mx-auto"
        >
          Ready to spend less time inside Premiere Pro and more time doing what you love most? Let's turn your raw footage into an unforgettable wedding film.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
        >
          <button
            onClick={onInquireNow}
            data-cursor="INQUIRE"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-sm bg-[#E5094C] hover:bg-[#FF1E56] text-white font-heading font-bold text-xs tracking-[0.14em] uppercase transition-all duration-300 shadow-xl shadow-[#E5094C]/25 cursor-pointer hover:scale-105"
          >
            <span>INQUIRE NOW</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>

          <button
            onClick={onExplorePackages}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-sm bg-white/5 hover:bg-white/10 text-[#F5F5F2] border border-white/10 hover:border-[#E5094C]/40 font-heading font-medium text-xs tracking-[0.14em] uppercase transition-all duration-300 cursor-pointer"
          >
            <Play className="w-3.5 h-3.5 fill-current text-[#FF2A6D]" />
            <span>VIEW PACKAGES</span>
          </button>
        </motion.div>
      </div>
    </section>
  );
};
