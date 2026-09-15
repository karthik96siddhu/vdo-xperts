import React from 'react';
import { motion } from 'motion/react';
import { Film, Sparkles, CheckCircle2 } from 'lucide-react';

export const IntroSection: React.FC = () => {
  return (
    <section id="about" className="py-28 bg-[#09090B] relative overflow-hidden">
      {/* Background visual accents */}
      <div className="absolute right-0 top-1/4 w-[450px] h-[450px] bg-[#E5094C]/8 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Narrative Content & Large Editorial Statement */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 space-y-8"
          >
            <div className="inline-flex items-center gap-2 text-xs font-mono tracking-[0.2em] uppercase text-[#FF2A6D]">
              <span>// Brand Positioning</span>
            </div>

            <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl font-extrabold text-[#F5F5F2] tracking-tight leading-[1.12]">
              Your Footage. <br />
              <span className="font-editorial italic font-normal text-[#FF4D7E]">
                Our Storytelling.
              </span>
            </h2>

            <p className="font-body text-base sm:text-lg text-[#A1A1AA] leading-relaxed max-w-2xl font-normal">
              We specialize in professional video editing and post-production for wedding filmmakers, production houses, brands, and content creators. Whatever style or tone you’re looking for, we’re here to help. We transform raw footage into stunning, story-driven films, saving you valuable time while delivering exceptional quality.
            </p>

            {/* Editorial Highlight Quote Box */}
            <div className="relative pl-6 border-l-2 border-[#E5094C] py-3 my-6 bg-white/[0.02] rounded-r-md">
              <span className="font-heading text-xl sm:text-2xl font-bold tracking-tight text-[#F5F5F2] uppercase block">
                MORE THAN EDITING. IT’S STORYTELLING.
              </span>
              <span className="text-xs text-[#71717A] font-mono mt-1 block">
                "You focus on capturing the moments. We focus on turning those moments into films."
              </span>
            </div>

            {/* Highlights List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#E5094C] shrink-0 mt-0.5" />
                <span className="text-sm text-[#F5F5F2]">Signature Color Science & LUT Matching</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#E5094C] shrink-0 mt-0.5" />
                <span className="text-sm text-[#F5F5F2]">Multi-Camera Sync & Audio Repair</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#E5094C] shrink-0 mt-0.5" />
                <span className="text-sm text-[#F5F5F2]">Licensed Music & Bespoke Sound Design</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#E5094C] shrink-0 mt-0.5" />
                <span className="text-sm text-[#F5F5F2]">Dedicated Lead Editor Workflow</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Cinematic Film Frame Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-lg overflow-hidden border border-white/10 shadow-2xl bg-[#141418] group">
              {/* Film frame aspect container */}
              <div className="aspect-[4/5] relative overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1000&auto=format&fit=crop"
                  alt="Cinematic Wedding Storytelling"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#09090B] via-transparent to-black/20"></div>

                {/* Overlaid Film Slate details */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-md bg-[#09090B]/90 backdrop-blur-md border border-[#E5094C]/30 space-y-1">
                  <div className="flex items-center justify-between text-[11px] font-mono text-[#FF2A6D]">
                    <span>TAKE // POST-PROD</span>
                    <span>FPS // 24.00</span>
                  </div>
                  <div className="font-heading font-bold text-sm text-[#F5F5F2]">
                    Emotional Story Arc & Narrative Cut
                  </div>
                  <div className="text-xs text-[#A1A1AA]">
                    Preserving laughter, tears, and unscripted intimacy.
                  </div>
                </div>
              </div>
            </div>

            {/* Subtle decorative background border offset */}
            <div className="absolute -inset-2 rounded-lg border border-[#E5094C]/25 -z-10 translate-x-3 translate-y-3 pointer-events-none hidden sm:block"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
