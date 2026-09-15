import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Project } from '../types';
import { X, Film, Sparkles, MapPin, Camera, Palette } from 'lucide-react';

interface VideoModalProps {
  project: Project | null;
  onClose: () => void;
  onStartSimilarProject: (projectTitle: string) => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({
  project,
  onClose,
  onStartSimilarProject,
}) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-10">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/92 backdrop-blur-lg"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 25 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 25 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-5xl bg-[#141418] border border-[#E5094C]/40 rounded-xl overflow-hidden shadow-2xl shadow-black/90 z-10 flex flex-col max-h-[92vh]"
        >
          {/* Top Bar */}
          <div className="p-4 sm:p-5 bg-[#0D0D11] border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono text-[#FF2A6D] uppercase tracking-wider bg-[#E5094C]/15 px-2.5 py-1 rounded-sm">
                {project.categoryLabel}
              </span>
              <h3 className="font-heading text-lg sm:text-xl font-bold text-[#F5F5F2] truncate max-w-md">
                {project.title}
              </h3>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 rounded-full text-[#A1A1AA] hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Video Player Container */}
          <div className="relative aspect-video bg-black flex items-center justify-center overflow-hidden">
            {project.videoUrl && project.videoUrl.includes('embed') ? (
              <iframe
                src={project.videoUrl}
                title={project.title}
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <div className="relative w-full h-full flex items-center justify-center">
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-full object-cover opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
                <div className="absolute flex flex-col items-center gap-3 text-center px-4">
                  <div className="w-16 h-16 rounded-full bg-[#E5094C] text-white flex items-center justify-center font-heading font-bold text-sm shadow-xl shadow-[#E5094C]/40 animate-pulse">
                    CINEMA
                  </div>
                  <div className="font-heading text-xl font-bold text-white">
                    {project.title}
                  </div>
                  <p className="text-xs text-[#A1A1AA] font-mono">
                    [ Demo Player • Ready for Vimeo / YouTube / MP4 Embedding ]
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Film Details & Metadata */}
          <div className="p-6 sm:p-8 bg-[#141418] overflow-y-auto space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-xs font-mono text-[#A1A1AA]">
                  <MapPin className="w-3.5 h-3.5 text-[#FF2A6D]" />
                  <span>{project.location}</span>
                  <span>•</span>
                  <span>Duration: {project.duration}</span>
                </div>
                <p className="text-sm text-[#F5F5F2] font-medium">
                  {project.description}
                </p>
              </div>

              <button
                onClick={() => {
                  const title = project.title;
                  onClose();
                  onStartSimilarProject(title);
                }}
                className="px-6 py-3 rounded-sm bg-[#E5094C] hover:bg-[#FF1E56] text-white font-heading font-bold text-xs uppercase tracking-wider transition-colors shrink-0 cursor-pointer shadow-md shadow-[#E5094C]/25"
              >
                Inquire With Similar Style
              </button>
            </div>

            {/* Technical Film Slate */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-mono text-[#A1A1AA]">
              <div className="flex items-start gap-2 bg-[#0E0E12] p-3 rounded border border-white/5">
                <Camera className="w-4 h-4 text-[#FF2A6D] shrink-0 mt-0.5" />
                <div>
                  <span className="text-[#71717A] block">Camera Package:</span>
                  <span className="text-[#F5F5F2]">{project.camera}</span>
                </div>
              </div>

              <div className="flex items-start gap-2 bg-[#0E0E12] p-3 rounded border border-white/5">
                <Palette className="w-4 h-4 text-[#FF2A6D] shrink-0 mt-0.5" />
                <div>
                  <span className="text-[#71717A] block">Color Grading:</span>
                  <span className="text-[#F5F5F2]">{project.colorGrade}</span>
                </div>
              </div>

              <div className="flex items-start gap-2 bg-[#0E0E12] p-3 rounded border border-white/5">
                <Film className="w-4 h-4 text-[#FF2A6D] shrink-0 mt-0.5" />
                <div>
                  <span className="text-[#71717A] block">Aspect Ratio:</span>
                  <span className="text-[#F5F5F2]">{project.aspectRatio}</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
