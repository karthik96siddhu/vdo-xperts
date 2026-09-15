import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PROJECTS_DATA } from '../data/projects';
import { Project } from '../types';
import { VideoModal } from './VideoModal';
import { Play, Sparkles, MapPin, Clock, Camera, ArrowRight } from 'lucide-react';

interface PortfolioProps {
  onSelectProjectForInquiry: (projectName: string) => void;
}

export const Portfolio: React.FC<PortfolioProps> = ({ onSelectProjectForInquiry }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [activeVideoProject, setActiveVideoProject] = useState<Project | null>(null);

  const categories = [
    { id: 'all', label: 'ALL FILMS' },
    { id: 'highlights', label: 'HIGHLIGHTS' },
    { id: 'feature', label: 'FEATURE FILMS' },
    { id: 'teasers', label: 'TEASERS & REELS' },
    { id: 'documentary', label: 'DOCUMENTARY' },
    { id: 'commercial', label: 'COMMERCIAL' },
  ];

  const filteredProjects =
    activeCategory === 'all'
      ? PROJECTS_DATA
      : PROJECTS_DATA.filter((p) => p.category === activeCategory);

  return (
    <section id="portfolio" className="py-28 bg-[#09090B] relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-mono tracking-[0.2em] uppercase text-[#FF2A6D]">
              <span>// Cinematic Portfolio</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl font-extrabold text-[#F5F5F2] tracking-tight uppercase">
              THE WORK SPEAKS.
            </h2>
            <p className="font-body text-base sm:text-lg text-[#A1A1AA] max-w-2xl">
              Every wedding has a different rhythm. Every couple has a different story. Every film deserves a different edit.
            </p>
          </div>

          {/* Editorial statement pill */}
          <div className="hidden lg:block font-editorial italic text-lg text-[#FF4D7E] text-right font-serif max-w-xs">
            "We don't cut to fill time. We cut to create emotion."
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-12 border-b border-white/10 pb-4 overflow-x-auto">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 text-xs font-heading font-semibold tracking-[0.14em] uppercase transition-all duration-300 rounded-sm cursor-pointer whitespace-nowrap ${
                activeCategory === cat.id
                  ? 'bg-[#E5094C] text-white shadow-md shadow-[#E5094C]/30'
                  : 'bg-white/5 text-[#A1A1AA] hover:text-white hover:bg-white/10'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Asymmetrical Editorial Projects Layout */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project, idx) => {
              // Create dynamic spans for asymmetric editorial feel
              const isLarge = idx === 0 && activeCategory === 'all';

              return (
                <motion.div
                  layout
                  key={project.id}
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.4 }}
                  className={`group relative rounded-xl overflow-hidden bg-[#141418] border border-white/10 hover:border-[#E5094C]/50 transition-all duration-500 shadow-xl hover:shadow-2xl hover:shadow-[#E5094C]/15 flex flex-col justify-between cursor-pointer ${
                    isLarge ? 'md:col-span-2 lg:col-span-2' : 'col-span-1'
                  }`}
                  onClick={() => setActiveVideoProject(project)}
                  data-cursor="PLAY"
                >
                  {/* Thumbnail Image Container with Zoom Effect */}
                  <div
                    className={`relative w-full overflow-hidden bg-black ${
                      isLarge ? 'aspect-[16/9]' : 'aspect-[16/10]'
                    }`}
                  >
                    <img
                      src={project.thumbnail}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 opacity-90"
                      loading="lazy"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#09090B] via-[#09090B]/30 to-transparent"></div>

                    {/* Top Badges */}
                    <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                      <span className="text-[11px] font-mono text-[#F5F5F2] bg-[#09090B]/85 backdrop-blur-md px-2.5 py-1 rounded border border-white/10 uppercase tracking-wider">
                        {project.categoryLabel}
                      </span>
                      <span className="text-[11px] font-mono text-[#FF4D7E] bg-[#09090B]/85 backdrop-blur-md px-2.5 py-1 rounded border border-white/10 font-bold">
                        {project.duration}
                      </span>
                    </div>

                    {/* Center Floating Play Button */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <div className="w-14 h-14 rounded-full bg-[#E5094C] text-white flex items-center justify-center shadow-2xl shadow-[#E5094C]/50 transition-all duration-300 group-hover:scale-110 group-hover:bg-[#FF1E56]">
                        <Play className="w-6 h-6 fill-current translate-x-0.5" />
                      </div>
                    </div>
                  </div>

                  {/* Film Details Footer */}
                  <div className="p-6 space-y-3 bg-[#141418]">
                    <div className="flex items-center justify-between text-xs font-mono text-[#71717A]">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-[#FF2A6D]" />
                        {project.location}
                      </span>
                      <span>{project.aspectRatio}</span>
                    </div>

                    <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#F5F5F2] group-hover:text-[#FF4D7E] transition-colors">
                      {project.title}
                    </h3>

                    <p className="font-body text-xs sm:text-sm text-[#A1A1AA] line-clamp-2">
                      {project.description}
                    </p>

                    <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs">
                      <span className="font-mono text-[#71717A] text-[11px]">
                        Grade: {project.colorGrade}
                      </span>
                      <span className="font-heading font-semibold text-[#FF2A6D] uppercase tracking-wider flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                        <span>Watch Film</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Video Modal Player */}
      <VideoModal
        project={activeVideoProject}
        onClose={() => setActiveVideoProject(null)}
        onStartSimilarProject={onSelectProjectForInquiry}
      />
    </section>
  );
};
