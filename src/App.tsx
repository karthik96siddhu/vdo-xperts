import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { RiskFreeTrial } from './components/RiskFreeTrial';
import { Packages } from './components/Packages';
import { BeforeAfter } from './components/BeforeAfter';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Philosophy } from './components/Philosophy';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';

export function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const [prefilledProject, setPrefilledProject] = useState<string | null>(null);

  // Fast cinematic intro animation (600ms)
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 600);
    return () => clearTimeout(timer);
  }, []);

  const scrollToContact = (projectFocus?: string) => {
    if (projectFocus) {
      setPrefilledProject(projectFocus);
    }
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToPackages = () => {
    const packagesSection = document.querySelector('#packages');
    if (packagesSection) {
      packagesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#09090B] text-[#F5F5F2] selection:bg-[#E5094C]/30 selection:text-[#FFFFFF]">
      {/* Custom Contextual Cursor for Desktop */}
      <CustomCursor />

      {/* Cinematic Intro Splash Screen */}
      <AnimatePresence>
        {loading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="fixed inset-0 z-50 bg-[#09090B] flex flex-col items-center justify-center space-y-4 pointer-events-none"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="text-center space-y-2 flex flex-col items-center"
            >
              <div>
                <div className="font-heading text-2xl sm:text-3xl font-extrabold text-[#F5F5F2] tracking-tight">
                  VDO<span className="text-[#FF2A6D] ml-1">XPERTS</span>
                </div>
                <div className="text-[10px] font-mono tracking-[0.25em] text-[#A1A1AA] uppercase mt-1">
                  POST-PRODUCTION FOR FILMMAKERS
                </div>
              </div>
            </motion.div>
            <div className="w-28 h-[2px] bg-white/10 overflow-hidden relative rounded-full">
              <motion.div
                initial={{ x: '-100%' }}
                animate={{ x: '100%' }}
                transition={{ repeat: Infinity, duration: 0.8, ease: 'easeInOut' }}
                className="w-full h-full bg-[#E5094C]"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 1. STICKY NAVIGATION */}
      <Navbar onStartProjectClick={() => scrollToContact()} />

      {/* MAIN CONTENT RUNTIME */}
      <main>
        {/* 2. CINEMATIC HERO SECTION */}
        <Hero
          onStartProject={() => scrollToContact()}
          onExplorePackages={scrollToPackages}
        />

        {/* 3. RISK-FREE TRIAL SECTION */}
        <RiskFreeTrial onStartTrial={() => scrollToContact('Risk-Free First Trial Project')} />

        {/* 4. WEDDING EDITING PACKAGES ("THE FILM, YOUR WAY") */}
        <Packages onSelectPackageForQuote={(name) => scrollToContact(name)} />

        {/* 5. THE RIGHT EDITOR (RAW VS GRADED BEFORE/AFTER SLIDER) */}
        <BeforeAfter />

        {/* 6. WHY VDO XPERTS (7 CORE ADVANTAGES) */}
        <WhyChooseUs />

        {/* 7. OUR PHILOSOPHY ("WE DON'T JUST EDIT FOOTAGE. WE BUILD STORIES.") */}
        <Philosophy />

        {/* 8. CONTACT & PROJECT INQUIRY FORM */}
        <ContactForm
          prefilledProject={prefilledProject}
          onClearPrefill={() => setPrefilledProject(null)}
        />
      </main>

      {/* 9. FOOTER */}
      <Footer />
    </div>
  );
}

export default App;
