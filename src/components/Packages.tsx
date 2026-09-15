import React from 'react';
import { motion } from 'motion/react';
import { PACKAGES_DATA } from '../data/packages';
import { ArrowUpRight, Check, Clock } from 'lucide-react';

interface PackagesProps {
  onSelectPackageForQuote: (packageName: string) => void;
}

export const Packages: React.FC<PackagesProps> = ({ onSelectPackageForQuote }) => {
  return (
    <section id="packages" className="py-28 bg-[#101014] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-[0.2em] uppercase text-[#FF2A6D]">
            <span>// Wedding Editing Packages</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl font-extrabold text-[#F5F5F2] tracking-tight uppercase">
            THE FILM, YOUR WAY.
          </h2>

          <p className="font-body text-base sm:text-lg text-[#A1A1AA] leading-relaxed">
            From a 60-second teaser to a full-length wedding story, we shape every edit around the footage, emotion, and your studio’s creative vision.
          </p>
        </div>

        {/* 6 Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {PACKAGES_DATA.map((pkg, idx) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="group relative rounded-xl bg-[#18181D] border border-white/10 hover:border-[#E5094C]/40 p-8 flex flex-col justify-between transition-all duration-500 hover:-translate-y-1.5 shadow-xl hover:shadow-2xl hover:shadow-[#E5094C]/10"
            >
              {/* Package Tag & Duration */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-sm font-bold text-[#FF2A6D] bg-[#E5094C]/15 px-2.5 py-1 rounded-sm">
                    PACKAGE {pkg.number}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs font-mono text-[#71717A]">
                    <Clock className="w-3.5 h-3.5 text-[#FF2A6D]" />
                    <span>{pkg.duration}</span>
                  </div>
                </div>

                {/* Package Name */}
                <h3 className="font-heading text-2xl font-bold text-[#F5F5F2] mb-2 group-hover:text-white transition-colors">
                  {pkg.name}
                </h3>

                {/* Tagline */}
                <p className="font-editorial italic text-base text-[#FF4D7E] mb-4">
                  {pkg.tagline}
                </p>

                {/* Description */}
                <p className="font-body text-xs sm:text-sm text-[#A1A1AA] leading-relaxed mb-6">
                  {pkg.description}
                </p>

                {/* Key Deliverables sample */}
                <div className="space-y-2 mb-6 border-t border-white/5 pt-4">
                  {pkg.deliverables.slice(0, 3).map((item) => (
                    <div key={item} className="flex items-start gap-2 text-xs text-[#F5F5F2]/85">
                      <Check className="w-3.5 h-3.5 text-[#FF2A6D] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Actions */}
              <div className="pt-6 border-t border-white/5">
                <button
                  onClick={() => onSelectPackageForQuote(pkg.name)}
                  data-cursor="QUOTE"
                  className="w-full py-3 rounded-sm bg-[#E5094C] hover:bg-[#FF1E56] text-white font-heading font-bold text-xs uppercase tracking-[0.14em] flex items-center justify-center gap-2 transition-all shadow-md shadow-[#E5094C]/25 cursor-pointer"
                >
                  <span>GET A CUSTOM QUOTE</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
