import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, ArrowRight, Sparkles } from 'lucide-react';

interface RiskFreeTrialProps {
  onStartTrial: () => void;
}

export const RiskFreeTrial: React.FC<RiskFreeTrialProps> = ({ onStartTrial }) => {
  return (
    <section id="trial-section" className="relative py-20 bg-[#0E0E11] border-y border-white/5 overflow-hidden">
      {/* Subtle crimson glow behind card */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[250px] bg-[#E5094C]/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative rounded-xl bg-gradient-to-b from-[#18181D] to-[#121215] border border-[#E5094C]/30 p-8 sm:p-12 md:p-14 shadow-2xl shadow-black/80 overflow-hidden"
        >
          {/* Top Decorative Crimson Accent Line */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#E5094C] to-transparent"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Column: Trial Badge & Content */}
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-[#E5094C]/15 border border-[#E5094C]/30 text-[#FF2A6D] text-xs font-mono font-semibold tracking-[0.2em] uppercase">
                <Sparkles className="w-3.5 h-3.5 text-[#FF2A6D]" />
                <span>FIRST PROJECT GUARANTEE</span>
              </div>

              <h2 className="font-heading text-2xl sm:text-4xl md:text-5xl font-extrabold text-[#F5F5F2] tracking-tight leading-tight">
                Experience the magic of <br className="hidden sm:inline" />
                <span className="font-editorial italic font-normal text-[#FF4D7E]">just one project.</span>
              </h2>

              <p className="font-heading text-lg sm:text-xl font-medium text-[#F5F5F2]">
                Let our expertise leave you speechless.
              </p>

              <p className="font-body text-base text-[#A1A1AA] leading-relaxed max-w-2xl">
                Send us your first wedding video editing project. If you’re not 100% satisfied with the results, you don’t pay. Zero risk, no obligations — just pure cinematic storytelling.
              </p>
            </div>

            {/* Right Column: High-Impact Call to Action Card */}
            <div className="lg:col-span-4 flex flex-col items-start lg:items-end justify-center">
              <div className="w-full sm:w-auto p-6 rounded-lg bg-[#1E1E24] border border-white/10 flex flex-col items-center text-center space-y-4 shadow-xl">
                <div className="w-12 h-12 rounded-full bg-[#E5094C]/15 border border-[#E5094C]/30 flex items-center justify-center text-[#FF2A6D]">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-heading text-xl font-bold text-[#F5F5F2] tracking-wider uppercase">
                    100% Risk-Free
                  </div>
                  <div className="text-xs text-[#71717A] font-mono mt-0.5">
                    No Upfront Commitment
                  </div>
                </div>
                <button
                  onClick={onStartTrial}
                  data-cursor="START"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-sm bg-[#E5094C] hover:bg-[#FF1E56] text-white font-heading font-bold text-xs tracking-[0.14em] uppercase transition-all duration-300 shadow-md cursor-pointer hover:shadow-[#E5094C]/30 hover:scale-[1.02] active:scale-95"
                >
                  <span>START YOUR FIRST PROJECT</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

