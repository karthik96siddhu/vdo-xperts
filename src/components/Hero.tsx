import React from 'react';
import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import weddingHeroImg from '../assets/images/wedding_hero_cinematic_1788246762883.jpg';

interface HeroProps {
  onStartProject?: () => void;
  onExplorePackages?: () => void;
}

export const Hero: React.FC<HeroProps> = () => {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#09090B] pt-24 pb-16">
      {/* Background Cinematic Video / Ambient Visual Layer */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
        {/* Cinematic Video Layer */}
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1600&auto=format&fit=crop"
          className="w-full h-full object-cover opacity-30 scale-105 animate-[pulse_10s_ease-in-out_infinite]"
        >
          {/* High performance ambient preview video */}
          <source
            src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"
            type="video/mp4"
          />
        </video>

        {/* Cinematic Vignette, Dark Gradients & Film Grain */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#09090B] via-[#09090B]/75 to-[#09090B]/50"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#09090B]/90 via-transparent to-[#09090B]/90"></div>
        <div className="absolute inset-0 film-grain pointer-events-none opacity-40"></div>

        {/* Dynamic Crimson Red Radial Glow in center/bottom */}
        <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#E5094C]/12 rounded-full blur-3xl pointer-events-none"></div>
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12 text-center flex flex-col items-center justify-center">
        {/* Top Eyebrow Pill */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-[#E5094C]/30 text-xs tracking-[0.18em] uppercase text-[#A1A1AA] mb-8 backdrop-blur-sm shadow-lg shadow-[#E5094C]/10"
        >
          <span className="font-heading font-bold text-white">VDO XPERTS</span>
          <span className="text-[#71717A]">•</span>
          <span className="text-[#FF2A6D] font-mono font-medium">POST-PRODUCTION FOR FILMMAKERS</span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="font-heading text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.08] max-w-4xl"
        >
          Video Editing <br className="hidden sm:inline" />
          <span className="font-editorial italic font-normal text-[#F4F4F6] font-serif">for</span>{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#FF4D7E] to-[#E5094C]">
            Wedding Filmmakers
          </span>
        </motion.h1>

        {/* Supporting Copy */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 md:mt-8 font-body text-base sm:text-lg md:text-xl text-[#A1A1AA] max-w-2xl font-normal leading-relaxed text-balance"
        >
          We transform raw wedding footage into cinematic, story-driven films — helping filmmakers save time, maintain consistent quality, and deliver work their couples will treasure forever.
        </motion.p>

        {/* Professional Cinematic Wedding Image Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 w-full max-w-3xl group relative"
        >
          {/* Soft Crimson Ambient Backlight */}
          <div className="absolute -inset-2 bg-gradient-to-r from-[#E5094C]/30 via-[#FF2A6D]/20 to-[#E5094C]/30 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition duration-700"></div>

          {/* Master Frame Container */}
          <div className="relative rounded-xl overflow-hidden border border-white/15 bg-[#101014] shadow-2xl">
            <div className="relative aspect-[16/9] w-full overflow-hidden">
              <img
                src={weddingHeroImg}
                alt="Cinematic Wedding Filmmaking Master Frame"
                className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-out"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#09090B] via-transparent to-black/30 opacity-70"></div>

              {/* Top Film Slate Badges */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-[11px] font-mono uppercase tracking-widest text-white/90 pointer-events-none">
                <span className="flex items-center gap-2 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-sm border border-white/10 shadow-md">
                  <span className="w-2 h-2 rounded-full bg-[#E5094C] animate-pulse"></span>
                  CINEMATIC FILM EDITING
                </span>
                <span className="bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-sm border border-white/10 text-white/80">
                  4K MASTER • 24 FPS
                </span>
              </div>

              {/* Bottom Film Details Bar */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs font-mono">
                <span className="text-[#F5F5F2] font-heading font-medium tracking-wide drop-shadow-md">
                  STORY-DRIVEN POST-PRODUCTION
                </span>
                <span className="text-[#FF2A6D] text-[11px] font-bold tracking-wider">
                  35MM WARM FILM EMULATION
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Small Trust Statement */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-y-2 gap-x-4 text-xs font-mono text-[#71717A] tracking-wider uppercase border-t border-white/10 pt-6 w-full max-w-2xl"
        >
          <span>Professional Editing</span>
          <span>•</span>
          <span>Color Grading</span>
          <span>•</span>
          <span>Audio Mastering</span>
          <span>•</span>
          <span>Storytelling</span>
          <span>•</span>
          <span>Post-Production</span>
        </motion.div>
      </div>

      {/* Hero Micro Interaction: Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.8 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#71717A] hover:text-[#FF2A6D] transition-colors cursor-pointer"
        onClick={() => {
          const trialSection = document.querySelector('#trial-section');
          if (trialSection) trialSection.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        <span className="text-[10px] font-mono tracking-[0.2em] uppercase">SCROLL TO EXPLORE</span>
        <ChevronDown className="w-4 h-4 animate-bounce text-[#FF2A6D]" />
      </motion.div>
    </section>
  );
};
