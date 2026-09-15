import React from 'react';
import timelineImg from '../assets/images/premiere_timeline_1788243590820.jpg';

export const BeforeAfter: React.FC = () => {
  return (
    <section className="py-28 bg-[#101014] relative border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-[0.2em] uppercase text-[#FF2A6D]">
            <span>// The Difference</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl font-extrabold text-[#F5F5F2] tracking-tight uppercase">
            THE RIGHT EDITOR
          </h2>

          <p className="font-editorial italic text-xl sm:text-2xl text-[#FF4D7E] font-serif">
            Because the right edit can change everything.
          </p>

          <p className="font-body text-base text-[#A1A1AA] leading-relaxed max-w-2xl mx-auto">
            Great footage captures the moment. Great editing gives it meaning. We carefully shape every frame, sound, and transition to create films that feel natural, engaging, and true to the story.
          </p>
        </div>

        {/* Clean Timeline Image Showcase */}
        <div className="max-w-5xl mx-auto">
          <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden border border-white/10 shadow-2xl bg-black group">
            <img
              src={timelineImg}
              alt="Professional Wedding Edit Multi-Cam Master Timeline"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.01]"
            />
            {/* Ambient vignette & subtle border glow */}
            <div className="absolute inset-0 ring-1 ring-inset ring-white/10 pointer-events-none rounded-xl" />
          </div>
        </div>
      </div>
    </section>
  );
};
