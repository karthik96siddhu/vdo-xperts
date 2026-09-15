import React from 'react';
import { motion } from 'motion/react';
import { TESTIMONIALS_DATA } from '../data/testimonials';
import { Star, Quote, MapPin } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-28 bg-[#101014] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-[0.2em] uppercase text-[#FF2A6D]">
            <span>// Filmmaker Partnerships</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-[#F5F5F2] tracking-tight uppercase">
            TRUSTED BY CINEMATOGRAPHERS.
          </h2>

          <p className="font-body text-base sm:text-lg text-[#A1A1AA]">
            Hear what wedding filmmakers say about delegating their post-production to VDO XPERTS.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS_DATA.map((t, idx) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="rounded-xl bg-[#18181D] border border-white/10 p-8 flex flex-col justify-between space-y-6 relative group hover:border-[#E5094C]/40 transition-colors shadow-xl hover:shadow-2xl hover:shadow-[#E5094C]/10"
            >
              {/* Star Rating & Quote Icon */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#FF2A6D] text-[#FF2A6D]" />
                  ))}
                </div>
                <Quote className="w-6 h-6 text-[#71717A] opacity-40" />
              </div>

              {/* Quote Body */}
              <p className="font-body text-sm sm:text-base text-[#F5F5F2] leading-relaxed italic">
                "{t.quote}"
              </p>

              {/* Filmmaker Info Footer */}
              <div className="pt-4 border-t border-white/5 flex items-center gap-3.5">
                {t.avatarUrl && (
                  <img
                    src={t.avatarUrl}
                    alt={t.filmmakerName}
                    className="w-11 h-11 rounded-full object-cover border border-[#E5094C]/40"
                  />
                )}
                <div>
                  <h4 className="font-heading font-bold text-sm text-[#F5F5F2]">
                    {t.filmmakerName}
                  </h4>
                  <div className="text-xs text-[#A1A1AA]">
                    {t.studioName}
                  </div>
                  <div className="text-[11px] font-mono text-[#71717A] flex items-center gap-1 mt-0.5">
                    <MapPin className="w-3 h-3 text-[#FF2A6D]" />
                    {t.location}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
