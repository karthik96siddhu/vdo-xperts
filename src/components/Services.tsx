import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SERVICES_DATA } from '../data/services';
import { Service } from '../types';
import { ArrowUpRight, Check, Sparkles, X, Layers, Clock } from 'lucide-react';

interface ServicesProps {
  onSelectServiceForQuote: (serviceTitle: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectServiceForQuote }) => {
  const [activeServiceModal, setActiveServiceModal] = useState<Service | null>(null);

  return (
    <section id="services" className="py-28 bg-[#09090B] relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-mono tracking-[0.2em] uppercase text-[#FF2A6D]">
              <span>// Specialized Post-Production</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl font-extrabold text-[#F5F5F2] tracking-tight uppercase">
              MORE THAN JUST CUTS.
            </h2>
            <p className="font-body text-base sm:text-lg text-[#A1A1AA] max-w-xl">
              Every project receives the attention it deserves. Tailored creative workflows designed specifically for filmmakers and visual storytellers.
            </p>
          </div>

          <div className="hidden md:block font-mono text-xs text-[#71717A] text-right">
            <span>[ 06 POST-PRODUCTION DISCIPLINES ]</span>
          </div>
        </div>

        {/* 6 Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {SERVICES_DATA.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group relative rounded-lg bg-[#141418] border border-white/10 hover:border-[#E5094C]/40 p-8 flex flex-col justify-between transition-all duration-500 hover:-translate-y-1.5 shadow-xl hover:shadow-2xl hover:shadow-[#E5094C]/10"
            >
              {/* Expanding Accent Line on Hover */}
              <div className="absolute top-0 left-0 w-0 h-[2px] bg-[#E5094C] transition-all duration-500 group-hover:w-full"></div>

              <div>
                {/* Number & Service Tag */}
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-xl font-bold text-[#FF2A6D] transition-colors">
                    {service.number}
                  </span>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#71717A] group-hover:text-[#A1A1AA] transition-colors">
                    {service.turnaround}
                  </span>
                </div>

                {/* Service Title */}
                <h3 className="font-heading text-xl font-bold text-[#F5F5F2] tracking-wide mb-3 group-hover:text-white transition-colors">
                  {service.title}
                </h3>

                {/* Short Description */}
                <p className="font-body text-sm text-[#A1A1AA] leading-relaxed mb-6">
                  {service.shortDesc}
                </p>

                {/* Deliverables List (3 bullets) */}
                <div className="space-y-2 mb-6 border-t border-white/5 pt-4">
                  {service.deliverables.slice(0, 3).map((item) => (
                    <div key={item} className="flex items-center gap-2 text-xs text-[#F5F5F2]/85">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#E5094C]"></span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Bottom: Trigger Modal & Quote Action */}
              <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                <button
                  onClick={() => setActiveServiceModal(service)}
                  className="text-xs font-mono text-[#A1A1AA] hover:text-[#FF2A6D] uppercase tracking-wider transition-colors cursor-pointer"
                >
                  View Details +
                </button>

                <button
                  onClick={() => onSelectServiceForQuote(service.title)}
                  className="inline-flex items-center gap-1.5 text-xs font-heading font-semibold text-[#FF2A6D] hover:text-[#FF4D7E] uppercase tracking-wider transition-colors cursor-pointer"
                >
                  <span>Inquire</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Service Detail Modal */}
      <AnimatePresence>
        {activeServiceModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveServiceModal(null)}
              className="absolute inset-0 bg-black/85 backdrop-blur-md"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-2xl bg-[#141418] border border-[#E5094C]/40 rounded-xl p-8 shadow-2xl shadow-black/90 z-10 space-y-6 max-h-[90vh] overflow-y-auto"
            >
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-sm font-bold text-[#FF2A6D] bg-[#E5094C]/15 px-2.5 py-1 rounded-sm">
                    SERVICE {activeServiceModal.number}
                  </span>
                  <h3 className="font-heading text-2xl font-bold text-[#F5F5F2]">
                    {activeServiceModal.title}
                  </h3>
                </div>
                <button
                  onClick={() => setActiveServiceModal(null)}
                  className="p-1.5 rounded-full text-[#A1A1AA] hover:text-white hover:bg-white/10 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-4 text-sm text-[#A1A1AA] leading-relaxed">
                <p className="text-[#F5F5F2] font-medium text-base">
                  {activeServiceModal.fullDesc}
                </p>

                <div className="space-y-3 pt-2">
                  <div className="text-xs font-mono uppercase tracking-wider text-[#FF2A6D]">
                    Key Deliverables Included:
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {activeServiceModal.deliverables.map((deliv) => (
                      <div key={deliv} className="flex items-center gap-2 text-xs text-[#F5F5F2] bg-white/[0.03] p-2.5 rounded border border-white/5">
                        <Check className="w-3.5 h-3.5 text-[#FF2A6D] shrink-0" />
                        <span>{deliv}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-white/10 text-xs font-mono text-[#71717A]">
                  <div className="flex items-center gap-1.5">
                    <Layers className="w-4 h-4 text-[#FF2A6D]" />
                    <span>Tools: {activeServiceModal.software.join(' • ')}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-[#FF2A6D]" />
                    <span>Typical Turnaround: {activeServiceModal.turnaround}</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-end gap-3 border-t border-white/10">
                <button
                  onClick={() => setActiveServiceModal(null)}
                  className="w-full sm:w-auto px-5 py-2.5 text-xs uppercase tracking-wider text-[#A1A1AA] hover:text-white font-heading"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    const title = activeServiceModal.title;
                    setActiveServiceModal(null);
                    onSelectServiceForQuote(title);
                  }}
                  className="w-full sm:w-auto px-6 py-3 rounded-sm bg-[#E5094C] hover:bg-[#FF1E56] text-white font-heading font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2 shadow-lg shadow-[#E5094C]/25"
                >
                  <span>Request Quote for this Service</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
