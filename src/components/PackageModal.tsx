import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Package } from '../types';
import { X, Check, Clock, Film, RefreshCw, HardDrive, ArrowUpRight } from 'lucide-react';

interface PackageModalProps {
  pkg: Package | null;
  onClose: () => void;
  onSelectForQuote: (pkgName: string) => void;
}

export const PackageModal: React.FC<PackageModalProps> = ({ pkg, onClose, onSelectForQuote }) => {
  if (!pkg) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/85 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 25 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 25 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-3xl bg-[#141418] border border-[#E5094C]/40 rounded-xl p-6 sm:p-10 shadow-2xl shadow-black/90 z-10 space-y-6 max-h-[90vh] overflow-y-auto"
        >
          {/* Header */}
          <div className="flex items-start justify-between border-b border-white/10 pb-6">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-[#FF2A6D] uppercase tracking-wider">
                <span>PACKAGE {pkg.number}</span>
                <span>•</span>
                <span>{pkg.duration}</span>
              </div>
              <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-[#F5F5F2]">
                {pkg.name}
              </h3>
              <p className="font-editorial italic text-[#FF4D7E] text-lg font-serif">
                {pkg.tagline}
              </p>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-full text-[#A1A1AA] hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Description & Ideal For */}
          <div className="space-y-4">
            <p className="text-sm sm:text-base text-[#F5F5F2] leading-relaxed">
              {pkg.description}
            </p>

            <div className="p-4 rounded-lg bg-white/[0.03] border border-white/5 space-y-1">
              <span className="text-xs font-mono uppercase tracking-wider text-[#FF2A6D] block">
                Best Suited For:
              </span>
              <span className="text-sm text-[#A1A1AA] block">
                {pkg.idealFor}
              </span>
            </div>
          </div>

          {/* Deliverables Grid */}
          <div className="space-y-3">
            <div className="text-xs font-mono uppercase tracking-wider text-[#FF2A6D]">
              Included Master Deliverables:
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {pkg.deliverables.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-2.5 text-xs text-[#F5F5F2] bg-[#0E0E12] p-3 rounded border border-white/5"
                >
                  <Check className="w-4 h-4 text-[#FF2A6D] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Specs Footer */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-4 border-y border-white/10 text-xs font-mono text-[#A1A1AA]">
            <div className="space-y-1">
              <div className="text-[#71717A] flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-[#FF2A6D]" /> Turnaround
              </div>
              <div className="text-[#F5F5F2] font-semibold">{pkg.turnaroundTime}</div>
            </div>

            <div className="space-y-1">
              <div className="text-[#71717A] flex items-center gap-1">
                <RefreshCw className="w-3.5 h-3.5 text-[#FF2A6D]" /> Revisions
              </div>
              <div className="text-[#F5F5F2] font-semibold">{pkg.revisions}</div>
            </div>

            <div className="space-y-1">
              <div className="text-[#71717A] flex items-center gap-1">
                <Film className="w-3.5 h-3.5 text-[#FF2A6D]" /> Ratios
              </div>
              <div className="text-[#F5F5F2] font-semibold">{pkg.aspectRatios[0]}</div>
            </div>

            <div className="space-y-1">
              <div className="text-[#71717A] flex items-center gap-1">
                <HardDrive className="w-3.5 h-3.5 text-[#FF2A6D]" /> Footage
              </div>
              <div className="text-[#F5F5F2] font-semibold truncate">{pkg.rawFootageLimit}</div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-end gap-4 pt-2">
            <button
              onClick={onClose}
              className="w-full sm:w-auto px-6 py-3 text-xs uppercase tracking-wider text-[#A1A1AA] hover:text-white font-heading cursor-pointer"
            >
              Close
            </button>
            <button
              onClick={() => {
                const name = pkg.name;
                onClose();
                onSelectForQuote(name);
              }}
              data-cursor="QUOTE"
              className="w-full sm:w-auto px-8 py-3.5 rounded-sm bg-[#E5094C] hover:bg-[#FF1E56] text-white font-heading font-bold text-xs tracking-[0.14em] uppercase transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-[#E5094C]/25 cursor-pointer"
            >
              <span>GET A CUSTOM QUOTE</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
