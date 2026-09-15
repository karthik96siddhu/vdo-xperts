import React from 'react';
import { motion } from 'motion/react';
import { STATS_DATA } from '../data/stats';

export const Stats: React.FC = () => {
  return (
    <section className="py-20 bg-[#09090B] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
          {STATS_DATA.map((item, idx) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="pt-6 sm:pt-0 sm:px-6 first:pl-0 last:pr-0 space-y-2 text-center sm:text-left"
            >
              <div className="font-mono text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#F5F5F2] tracking-tight">
                <span className="text-[#FF2A6D]">{item.value}</span>
              </div>
              <div className="font-heading font-bold text-sm uppercase tracking-wider text-[#F5F5F2]">
                {item.label}
              </div>
              <p className="text-xs text-[#A1A1AA] leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
