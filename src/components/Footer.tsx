import React, { useState } from 'react';
import { INQUIRY_CONFIG } from '../config/inquiryConfig';
import { PrivacyTermsModal } from './PrivacyTermsModal';
import { ArrowUp, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  const [modalType, setModalType] = useState<'privacy' | 'terms' | null>(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Packages', href: '#packages' },
    { label: 'Advantage', href: '#why-us' },
    { label: 'Philosophy', href: '#philosophy' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#070709] text-[#A1A1AA] pt-20 pb-12 border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center">
              <div className="flex flex-col">
                <div className="flex items-center gap-1 leading-none">
                  <span className="font-heading font-extrabold text-xl tracking-tight text-[#FFFFFF]">
                    VDO
                  </span>
                  <span className="font-heading font-extrabold text-xl tracking-wider text-[#FF2A6D]">
                    XPERTS
                  </span>
                </div>
                <span className="text-[9px] font-mono tracking-[0.2em] text-[#71717A] uppercase mt-0.5">
                  POST-PRODUCTION
                </span>
              </div>
            </div>

            <p className="text-sm text-[#A1A1AA] max-w-sm leading-relaxed">
              Wedding Video Editing & Post-Production for Filmmakers. Transforming raw footage into cinematic, story-driven films.
            </p>

            <div className="font-editorial italic text-base text-[#FF4D7E]">
              "You shoot the moments. We shape the story."
            </div>
          </div>

          {/* Navigation Links Column */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-mono text-[#F5F5F2] uppercase tracking-wider">
              Quick Navigation
            </div>
            <ul className="space-y-2 text-sm">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="hover:text-[#FF2A6D] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Socials Column */}
          <div className="md:col-span-4 space-y-4">
            <div className="text-xs font-mono text-[#F5F5F2] uppercase tracking-wider">
              Connect & Inquiries
            </div>

            <a
              href={`mailto:${INQUIRY_CONFIG.contactEmail}`}
              className="inline-flex items-center gap-2 text-sm text-[#F5F5F2] hover:text-[#FF2A6D] transition-colors font-mono"
            >
              <Mail className="w-4 h-4 text-[#FF2A6D]" />
              <span>{INQUIRY_CONFIG.contactEmail}</span>
            </a>
          </div>
        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#71717A]">
          <div>
            © {new Date().getFullYear()} VDO XPERTS. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={() => setModalType('privacy')}
              className="hover:text-[#F5F5F2] transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => setModalType('terms')}
              className="hover:text-[#F5F5F2] transition-colors cursor-pointer"
            >
              Terms of Service
            </button>
            <button
              onClick={scrollToTop}
              className="hover:text-[#FF2A6D] transition-colors flex items-center gap-1 cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Privacy / Terms Modal */}
      <PrivacyTermsModal
        type={modalType}
        onClose={() => setModalType(null)}
      />
    </footer>
  );
};
