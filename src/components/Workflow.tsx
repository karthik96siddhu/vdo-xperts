import React, { useState } from 'react';
import { motion } from 'motion/react';
import { WORKFLOW_STEPS } from '../data/workflow';
import { UploadCloud, Film, Sliders, CheckCircle2, ArrowRight } from 'lucide-react';

interface WorkflowProps {
  onStartWorkflow: () => void;
}

export const Workflow: React.FC<WorkflowProps> = ({ onStartWorkflow }) => {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);

  const icons = [UploadCloud, Film, Sliders, CheckCircle2];

  return (
    <section id="workflow" className="py-28 bg-[#101014] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-[0.2em] uppercase text-[#FF2A6D]">
            <span>// Seamless Post-Production Pipeline</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl font-extrabold text-[#F5F5F2] tracking-tight uppercase">
            FROM FOOTAGE TO FINAL FILM.
          </h2>

          <p className="font-body text-base sm:text-lg text-[#A1A1AA] leading-relaxed">
            A transparent, frictionless workflow designed to integrate directly into your studio's existing client delivery schedule.
          </p>
        </div>

        {/* 4 Interactive Workflow Steps (Horizontal on Desktop, Stacked on Mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {WORKFLOW_STEPS.map((step, idx) => {
            const Icon = icons[idx] || Film;
            const isActive = activeStepIndex === idx;

            return (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                onClick={() => setActiveStepIndex(idx)}
                className={`relative rounded-xl p-8 transition-all duration-300 flex flex-col justify-between cursor-pointer border ${
                  isActive
                    ? 'bg-[#1C1C22] border-[#E5094C] shadow-xl shadow-[#E5094C]/15 -translate-y-1'
                    : 'bg-[#141418] border-white/10 hover:border-white/20'
                }`}
              >
                {/* Step Number & Connector Indicator */}
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-2xl font-bold text-[#FF2A6D]">
                      0{idx + 1}
                    </span>
                    <div
                      className={`w-10 h-10 rounded-sm flex items-center justify-center transition-colors ${
                        isActive
                          ? 'bg-[#E5094C] text-white shadow-md shadow-[#E5094C]/30'
                          : 'bg-white/5 text-[#A1A1AA]'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="font-heading text-xl font-bold text-[#F5F5F2] uppercase mb-2">
                    {step.title}
                  </h3>

                  <div className="font-editorial italic text-xs text-[#FF4D7E] mb-4">
                    {step.subtitle}
                  </div>

                  <p className="font-body text-xs sm:text-sm text-[#A1A1AA] leading-relaxed mb-6">
                    {step.description}
                  </p>
                </div>

                {/* Micro Details Accordion/Bullets */}
                <div className="space-y-2 border-t border-white/5 pt-4">
                  {step.details.slice(0, 2).map((detail, dIdx) => (
                    <div key={dIdx} className="flex items-start gap-2 text-[11px] text-[#F5F5F2]/80 leading-snug">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#E5094C] mt-1 shrink-0"></span>
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Workflow Bottom Bar */}
        <div className="mt-16 text-center">
          <button
            onClick={onStartWorkflow}
            data-cursor="START"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-sm bg-[#E5094C] hover:bg-[#FF1E56] text-white font-heading font-bold text-xs tracking-[0.14em] uppercase transition-all duration-300 shadow-xl shadow-[#E5094C]/25 cursor-pointer hover:scale-105"
          >
            <span>SEND YOUR FIRST PROJECT</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
