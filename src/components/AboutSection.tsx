import React from 'react';
import { motion } from 'motion/react';
import { Film, ArrowRight, Award, Globe, HeartHandshake } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const steps = [
    { label: 'FOOTAGE', desc: 'Raw Log & Multi-Track Audio' },
    { label: 'STORY', desc: 'Emotional Arc & Vow Culling' },
    { label: 'EDIT', desc: 'Pacing, Color & Sound Polish' },
    { label: 'FILM', desc: 'Timeless Master Deliverable' },
  ];

  return (
    <section id="about" className="py-28 bg-[#101014] relative border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Brand Story & Purpose */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="inline-flex items-center gap-2 text-xs font-mono tracking-[0.2em] uppercase text-[#FF2A6D]">
              <span>// Studio Identity</span>
            </div>

            <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-[#F5F5F2] tracking-tight uppercase leading-tight">
              YOUR TRUSTED <br />
              <span className="font-editorial italic font-normal text-[#FF4D7E]">
                POST-PRODUCTION PARTNER.
              </span>
            </h2>

            <p className="font-body text-base text-[#A1A1AA] leading-relaxed">
              At VDO Xperts, we believe every video deserves expert storytelling and flawless editing. Our experienced editors work closely with filmmakers and creators worldwide to deliver cinematic, high-quality videos that exceed expectations.
            </p>

            <p className="font-body text-base text-[#A1A1AA] leading-relaxed">
              Whether you need an intimate wedding highlight, full feature film, commercial, or social media content, we ensure every project receives the meticulous attention it deserves.
            </p>

            {/* Core Values / Stats */}
            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/10">
              <div className="space-y-1">
                <div className="font-mono text-xl font-bold text-[#FF2A6D]">GLOBAL</div>
                <div className="text-xs text-[#A1A1AA]">Supporting filmmakers across US, UK, Europe & Australia</div>
              </div>
              <div className="space-y-1">
                <div className="font-mono text-xl font-bold text-[#FF2A6D]">DEDICATED</div>
                <div className="text-xs text-[#A1A1AA]">Direct communication with lead post-production directors</div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Visual Pipeline (FOOTAGE → STORY → EDIT → FILM) */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6"
          >
            <div className="rounded-xl bg-[#18181D] border border-white/10 p-8 sm:p-10 space-y-6 shadow-2xl relative">
              <div className="text-xs font-mono uppercase tracking-[0.2em] text-[#FF2A6D]">
                // The Post-Production Transformation
              </div>

              <div className="space-y-4">
                {steps.map((step, idx) => (
                  <div key={step.label} className="relative">
                    <div className="flex items-center justify-between p-4 rounded-lg bg-[#0F0F14] border border-white/5 group hover:border-[#E5094C]/40 transition-colors">
                      <div className="flex items-center gap-4">
                        <span className="font-mono text-sm font-bold text-[#FF2A6D]">
                          0{idx + 1}
                        </span>
                        <div>
                          <div className="font-heading font-bold text-base text-[#F5F5F2]">
                            {step.label}
                          </div>
                          <div className="text-xs text-[#71717A]">
                            {step.desc}
                          </div>
                        </div>
                      </div>
                      <ArrowRight className="w-4 h-4 text-[#71717A] group-hover:text-[#FF2A6D] group-hover:translate-x-1 transition-all" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
