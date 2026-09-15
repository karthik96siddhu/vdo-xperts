import React from 'react';
import { motion } from 'motion/react';
import { Clock, Layers, Flame, UserX, SlidersHorizontal, ArrowUpRight, CheckCircle } from 'lucide-react';

interface PainPointsProps {
  onFixBacklog: () => void;
}

export const PainPoints: React.FC<PainPointsProps> = ({ onFixBacklog }) => {
  const painItems = [
    {
      icon: Clock,
      title: 'Endless Hours in the Edit Suite',
      desc: 'Spending 30–50 hours per wedding cut inside timeline suites instead of shooting, pitching, or taking time off.'
    },
    {
      icon: Layers,
      title: 'Crushing Peak-Season Backlogs',
      desc: 'Shooting 3–4 weddings a month during peak season creates a compounding queue that leads to delayed deliveries and stressed couples.'
    },
    {
      icon: SlidersHorizontal,
      title: 'Tedious Audio & Color Prep',
      desc: 'Hours wasted removing wind noise from vows, balancing soundboards with lapels, and matching mixed Sony, Canon, and RED camera profiles.'
    },
    {
      icon: UserX,
      title: 'Unreliable Freelancers',
      desc: 'Disappointing freelancer cuts that miss the emotional nuance, lack music licensing, or ignore your studio’s custom editing brief.'
    }
  ];

  return (
    <section className="py-28 bg-[#101014] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-[0.2em] uppercase text-[#FF2A6D]">
            <span>// The Filmmaker Dilemma</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl font-extrabold text-[#F5F5F2] tracking-tight leading-tight">
            You captured the story. <br />
            <span className="font-editorial italic font-normal text-[#FF4D7E]">
              Now let us shape it.
            </span>
          </h2>

          <p className="font-body text-base sm:text-lg text-[#A1A1AA] leading-relaxed">
            Your footage deserves more than an editor. It deserves a post-production partner who understands emotional pacing, audio clarity, and cinematic color.
          </p>
        </div>

        {/* 4 Pain Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-16">
          {painItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-8 rounded-lg bg-[#18181D] border border-white/5 hover:border-[#E5094C]/30 transition-all duration-300 group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-sm bg-white/5 border border-white/10 flex items-center justify-center text-[#FF2A6D] shrink-0 group-hover:bg-[#E5094C]/15 group-hover:border-[#E5094C]/40 transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-heading text-lg font-bold text-[#F5F5F2] tracking-wide">
                      {item.title}
                    </h3>
                    <p className="text-sm text-[#A1A1AA] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Solution Callout Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-lg bg-gradient-to-r from-[#18181D] via-[#24151B] to-[#18181D] border border-[#E5094C]/30 p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left shadow-xl shadow-black/60"
        >
          <div className="space-y-2 max-w-2xl">
            <div className="font-heading text-xl sm:text-2xl font-bold text-[#F5F5F2] tracking-tight">
              Your editing backlog shouldn’t stop you from booking your next wedding.
            </div>
            <p className="text-sm text-[#A1A1AA]">
              Hand off the time-consuming timeline assembly, color grading, and audio cleanup to dedicated senior storytellers.
            </p>
          </div>

          <button
            onClick={onFixBacklog}
            data-cursor="FIX"
            className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-sm bg-[#E5094C] hover:bg-[#FF1E56] text-white font-heading font-bold text-xs tracking-[0.14em] uppercase transition-all duration-300 shrink-0 cursor-pointer shadow-lg shadow-[#E5094C]/25 hover:shadow-[#E5094C]/40"
          >
            <span>LET’S FIX YOUR BACKLOG</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};
