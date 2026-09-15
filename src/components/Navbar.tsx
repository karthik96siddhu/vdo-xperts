import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { INQUIRY_CONFIG } from '../config/inquiryConfig';

interface NavbarProps {
  onStartProjectClick?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onStartProjectClick }) => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'PACKAGES', href: '#packages' },
    { label: 'ADVANTAGE', href: '#why-us' },
    { label: 'PHILOSOPHY', href: '#philosophy' },
    { label: 'CONTACT', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCtaClick = () => {
    setMobileMenuOpen(false);
    if (onStartProjectClick) {
      onStartProjectClick();
    } else {
      const contactSection = document.querySelector('#contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled
            ? 'bg-[#09090B]/92 backdrop-blur-md border-b border-white/10 py-3.5 shadow-2xl shadow-black/80'
            : 'bg-transparent py-5 border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Brand Wordmark */}
          <a
            href="#"
            className="group flex items-center focus:outline-none"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <div className="flex flex-col">
              <div className="flex items-center gap-1 leading-none">
                <span className="font-heading font-extrabold text-lg sm:text-xl tracking-tight text-[#FFFFFF]">
                  VDO
                </span>
                <span className="font-heading font-extrabold text-lg sm:text-xl tracking-wider text-[#E5094C] group-hover:text-[#FF2A6D] transition-colors">
                  XPERTS
                </span>
              </div>
              <span className="text-[9px] font-mono tracking-[0.22em] text-[#8E8E93] uppercase mt-0.5">
                POST-PRODUCTION
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8 text-[13px] uppercase tracking-[0.14em] font-medium text-[#A1A1AA]">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="hover:text-white transition-colors relative py-1 group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#E5094C] transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Right Action CTA & Mobile Menu Toggle */}
          <div className="flex items-center gap-4">
            <button
              onClick={handleCtaClick}
              data-cursor="START"
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-sm bg-[#E5094C] hover:bg-[#FF1E56] text-white font-heading font-semibold text-xs tracking-[0.12em] uppercase transition-all duration-300 shadow-lg shadow-[#E5094C]/25 hover:shadow-xl hover:shadow-[#E5094C]/40 active:scale-95 cursor-pointer"
            >
              <span>START A PROJECT</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-[#F5F5F2] hover:text-[#E5094C] transition-colors focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-30 bg-[#09090B]/98 backdrop-blur-xl lg:hidden flex flex-col justify-between pt-28 pb-10 px-8"
          >
            <div className="flex flex-col space-y-6">
              <span className="text-xs uppercase tracking-[0.2em] text-[#FF2A6D] font-mono">
                // Navigation
              </span>
              {navLinks.map((link, idx) => (
                <motion.a
                  key={link.label}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * idx, duration: 0.3 }}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="font-heading text-2xl font-bold tracking-tight text-[#F5F5F2] hover:text-[#FF2A6D] transition-colors flex items-center justify-between border-b border-white/5 pb-3"
                >
                  <span>{link.label}</span>
                  <span className="text-xs font-mono text-[#71717A]">0{idx + 1}</span>
                </motion.a>
              ))}
            </div>

            <div className="space-y-4 pt-8">
              <button
                onClick={handleCtaClick}
                className="w-full py-4 rounded-sm bg-[#E5094C] hover:bg-[#FF1E56] text-white font-heading font-bold text-sm tracking-[0.14em] uppercase flex items-center justify-center gap-2 transition-colors shadow-lg shadow-[#E5094C]/30 cursor-pointer"
              >
                <span>START A PROJECT</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
              <div className="text-center text-xs text-[#71717A] font-mono">
                {INQUIRY_CONFIG.contactEmail}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
