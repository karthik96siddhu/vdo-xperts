import React, { useState } from 'react';
import { motion } from 'motion/react';
import { INDUSTRIES_DATA } from '../data/industries';
import { ArrowUpRight, Sparkles } from 'lucide-react';

interface IndustriesProps {
  onSelectIndustry: (title: string) => void;
}

export const Industries: React.FC<IndustriesProps> = ({ onSelectIndustry }) => {
  const [activeId, setActiveId] = useState<string>(INDUSTRIES_DATA[0].id);

  return (
    <section className="py-28 bg-[#09090B] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-[0.2em] uppercase text-[#FF2A6D]">
            <span>// Tailored Partnerships</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl font-extrabold text-[#F5F5F2] tracking-tight uppercase">
            BUILT FOR CREATIVES.
          </h2>
          <p className="font-body text-base sm:text-lg text-[#A1A1AA]">
            From independent boutique cinematographers to high-volume commercial production houses.
          </p>
        </div>

        {/* Large Typography Interactive List */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Industry Selector List */}
          <div className="lg:col-span-6 space-y-2">
            {INDUSTRIES_DATA.map((ind) => {
              const isSelected = activeId === ind.id;
              return (
                <div
                  key={ind.id}
                  onMouseEnter={() => setActiveId(ind.id)}
                  onClick={() => setActiveId(ind.id)}
                  className={`p-5 rounded-lg transition-all duration-300 cursor-pointer border ${
                    isSelected
                      ? 'bg-[#18181D] border-[#E5094C]/60 translate-x-2'
                      : 'bg-transparent border-transparent hover:bg-white/[0.02] hover:border-white/5'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <span className="font-mono text-xs text-[#FF2A6D]">
                        {ind.number}
                      </span>
                      <h3
                        className={`font-heading text-xl sm:text-2xl font-bold transition-colors ${
                          isSelected ? 'text-[#F5F5F2]' : 'text-[#71717A]'
                        }`}
                      >
                        {ind.title}
                      </h3>
                    </div>
                    <ArrowUpRight
                      className={`w-4 h-4 transition-transform ${
                        isSelected ? 'text-[#FF2A6D] rotate-45' : 'text-[#71717A]'
                      }`}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Selected Industry Details Preview Panel */}
          <div className="lg:col-span-6">
            {INDUSTRIES_DATA.filter((i) => i.id === activeId).map((activeInd) => (
              <motion.div
                key={activeInd.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="rounded-xl bg-[#141418] border border-white/10 p-8 sm:p-10 space-y-6 shadow-2xl relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none">
                  <span className="font-mono text-8xl font-extrabold text-white">
                    {activeInd.number}
                  </span>
                </div>

                <div className="inline-flex items-center gap-2 text-xs font-mono text-[#FF2A6D] uppercase tracking-wider">
                  <span>SPECIALIZED SECTOR</span>
                </div>

                <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-[#F5F5F2]">
                  {activeInd.title}
                </h3>

                <p className="font-editorial italic text-lg text-[#FF4D7E] font-serif">
                  "{activeInd.tagline}"
                </p>

                <p className="font-body text-sm sm:text-base text-[#A1A1AA] leading-relaxed">
                  {activeInd.description}
                </p>

                <div className="space-y-3 pt-4 border-t border-white/10">
                  <span className="text-xs font-mono uppercase tracking-wider text-[#71717A] block">
                    Typical Deliverables for this sector:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {activeInd.typicalDeliverables.map((del) => (
                      <span
                        key={del}
                        className="px-3 py-1.5 rounded-sm bg-white/5 border border-white/10 text-xs font-mono text-[#F5F5F2]"
                      >
                        {del}
                      </span>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => onSelectIndustry(activeInd.title)}
                  className="w-full mt-4 py-3 rounded-sm bg-[#E5094C] hover:bg-[#FF1E56] text-white font-heading font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer flex items-center justify-center gap-2 shadow-lg shadow-[#E5094C]/25"
                >
                  <span>Inquire for {activeInd.title}</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
