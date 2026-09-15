import React from 'react';
import { motion } from 'motion/react';
import { WHY_CHOOSE_US_DATA } from '../data/whyChooseUs';

export const WhyChooseUs: React.FC = () => {
  return (
    <section id="why-us" className="py-28 bg-[#09090B] relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono tracking-[0.2em] uppercase text-[#FF2A6D]">
              <span>// The VDO XPERTS Advantage</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl font-extrabold text-[#F5F5F2] tracking-tight uppercase">
              WHY FILMMAKERS CHOOSE US.
            </h2>
            <p className="font-body text-base sm:text-lg text-[#A1A1AA]">
              Built by creatives for creatives. We provide the stability, speed, and craftsmanship needed to scale your filmmaking business.
            </p>
          </div>

          <div className="hidden md:block font-mono text-xs text-[#71717A] text-right">
            <span>[ 07 CORE STANDARDS ]</span>
          </div>
        </div>

        {/* 7 Benefits List Layout with Editorial Line Separators */}
        <div className="divide-y divide-white/10 border-y border-white/10">
          {WHY_CHOOSE_US_DATA.map((item, idx) => (
            <motion.div
              key={item.number}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="py-6 sm:py-8 group hover:bg-white/[0.02] transition-colors px-4 sm:px-6 rounded-md"
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-start md:items-center">
                {/* Number */}
                <div className="md:col-span-2 font-mono text-2xl sm:text-3xl font-bold text-[#FF2A6D] group-hover:translate-x-1 transition-transform">
                  {item.number}
                </div>

                {/* Title */}
                <div className="md:col-span-4 font-heading text-xl sm:text-2xl font-bold text-[#F5F5F2] group-hover:text-[#FF4D7E] transition-colors">
                  {item.title}
                </div>

                {/* Explanation */}
                <div className="md:col-span-6 font-body text-sm sm:text-base text-[#A1A1AA] leading-relaxed">
                  {item.explanation}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
