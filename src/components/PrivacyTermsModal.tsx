import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Shield, FileText } from 'lucide-react';

interface PrivacyTermsModalProps {
  type: 'privacy' | 'terms' | null;
  onClose: () => void;
}

export const PrivacyTermsModal: React.FC<PrivacyTermsModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  const isPrivacy = type === 'privacy';

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/85 backdrop-blur-md"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-2xl bg-[#141418] border border-white/15 rounded-xl p-8 shadow-2xl z-10 space-y-6 max-h-[85vh] overflow-y-auto"
        >
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <div className="flex items-center gap-3">
              {isPrivacy ? (
                <Shield className="w-5 h-5 text-[#FF2A6D]" />
              ) : (
                <FileText className="w-5 h-5 text-[#FF2A6D]" />
              )}
              <h3 className="font-heading text-xl font-bold text-[#F5F5F2]">
                {isPrivacy ? 'Privacy & Confidentiality Policy' : 'Terms of Post-Production Service'}
              </h3>
            </div>
            <button
              onClick={onClose}
              className="p-1 rounded text-[#A1A1AA] hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="space-y-4 text-xs sm:text-sm text-[#A1A1AA] leading-relaxed font-body">
            {isPrivacy ? (
              <>
                <p>
                  At <strong className="text-white">VDO XPERTS</strong>, we understand that client wedding footage and audio recordings contain intimate and sensitive personal moments. We treat all media with strict non-disclosure security.
                </p>
                <h4 className="font-heading font-bold text-white uppercase text-xs tracking-wider pt-2">
                  1. Footage Ownership & Non-Disclosure
                </h4>
                <p>
                  You and your clients retain 100% intellectual property and copyright ownership of all raw footage, project files, and rendered master videos. We never publish or publicly share any client film without your express written consent.
                </p>
                <h4 className="font-heading font-bold text-white uppercase text-xs tracking-wider pt-2">
                  2. Secure Storage & Retention
                </h4>
                <p>
                  Raw footage is transferred via encrypted cloud channels and stored on secure local RAID storage arrays. We maintain a complimentary 90-day archive of your final exports before permanent deletion unless a longer retainer is arranged.
                </p>
              </>
            ) : (
              <>
                <p>
                  Welcome to <strong className="text-white">VDO XPERTS</strong>. By contracting our post-production services, you agree to our standard operating parameters:
                </p>
                <h4 className="font-heading font-bold text-white uppercase text-xs tracking-wider pt-2">
                  1. Revision Rounds & Feedback
                </h4>
                <p>
                  Standard packages include up to 2 creative revision rounds (3 rounds for Extended Feature Film). Revisions must be submitted with frame-accurate notes within 14 days of receiving your review link.
                </p>
                <h4 className="font-heading font-bold text-white uppercase text-xs tracking-wider pt-2">
                  2. First Project Satisfaction Guarantee
                </h4>
                <p>
                  Our risk-free first project trial guarantees that if you are genuinely unsatisfied after our standard revision process on your first trial film, you will not be invoiced for that project.
                </p>
                <h4 className="font-heading font-bold text-white uppercase text-xs tracking-wider pt-2">
                  3. Turnaround Timelines
                </h4>
                <p>
                  Standard turnaround starts once all necessary raw footage, audio tracks, and music preferences are fully verified and downloaded.
                </p>
              </>
            )}
          </div>

          <div className="pt-4 border-t border-white/10 flex justify-end">
            <button
              onClick={onClose}
              className="px-5 py-2 rounded-sm bg-[#E5094C] hover:bg-[#FF1E56] text-white font-heading font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer"
            >
              Close
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
