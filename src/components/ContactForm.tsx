import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ProjectInquiryData } from '../types';
import { submitProjectInquiry, INQUIRY_CONFIG } from '../config/inquiryConfig';
import { Mail, Send, CheckCircle2, Copy, Check } from 'lucide-react';

interface ContactFormProps {
  prefilledProject?: string | null;
  onClearPrefill?: () => void;
}

export const ContactForm: React.FC<ContactFormProps> = ({ prefilledProject, onClearPrefill }) => {
  const [formData, setFormData] = useState<ProjectInquiryData>({
    name: '',
    company: '',
    email: '',
    phone: '',
    website: '',
    projectType: 'Wedding Highlight (3–5 min)',
    deliverables: ['3–5 Min Highlight Film', 'Color Grading & Audio Master'],
    estimatedVolume: '1–3 projects / month',
    turnaroundSpeed: 'Fast Turnaround',
    footageLink: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submittedSuccess, setSubmittedSuccess] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [copiedEmail, setCopiedEmail] = useState<boolean>(false);

  // If a package or service was selected from elsewhere, update projectType
  useEffect(() => {
    if (prefilledProject) {
      setFormData((prev) => ({
        ...prev,
        projectType: prefilledProject,
        message: prev.message || `Inquiry specifically for: ${prefilledProject}`,
      }));
    }
  }, [prefilledProject]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email) {
      setErrorMessage('Please provide your email address.');
      return;
    }

    setIsSubmitting(true);
    setErrorMessage('');

    try {
      const result = await submitProjectInquiry(formData);
      if (result.success) {
        setSubmittedSuccess(true);
      } else {
        setErrorMessage(result.message);
      }
    } catch (err: any) {
      setErrorMessage(err?.message || 'Something went wrong. Please email us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(INQUIRY_CONFIG.contactEmail);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" className="py-28 bg-[#0C0C0F] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Direct Info & Editorial Brand Pitch */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 text-xs font-mono tracking-[0.2em] uppercase text-[#FF2A6D]">
                <span>// Start A Project</span>
              </div>
              <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-[#F5F5F2] tracking-tight uppercase leading-[1.12]">
                LET’S CREATE <br />
                <span className="font-editorial italic font-normal text-[#FF4D7E]">
                  Something Incredible.
                </span>
              </h2>
              <p className="font-body text-base text-[#A1A1AA] leading-relaxed">
                Ready to outsource your editing and reclaim your weekends? Tell us about your upcoming weddings or creative projects.
              </p>
            </div>

            {/* Direct Contact Card */}
            <div className="p-6 rounded-xl bg-[#141418] border border-white/10 space-y-4">
              <div className="text-xs font-mono uppercase tracking-wider text-[#71717A]">
                Direct Inquiries
              </div>

              <div className="flex items-center justify-between p-3 rounded-lg bg-[#0E0E12] border border-white/5">
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-[#FF2A6D]" />
                  <span className="text-sm font-mono text-[#F5F5F2]">
                    {INQUIRY_CONFIG.contactEmail}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={copyEmailToClipboard}
                  className="p-1.5 text-xs text-[#A1A1AA] hover:text-[#FF2A6D] transition-colors cursor-pointer"
                  title="Copy email address"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              <p className="text-xs text-[#71717A]">
                We typically respond within 12–24 business hours with custom quote options and cloud upload onboarding.
              </p>
            </div>

            {/* Confidence Bullets */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3 text-xs text-[#A1A1AA]">
                <CheckCircle2 className="w-4 h-4 text-[#FF2A6D] shrink-0" />
                <span>100% Risk-Free trial on your first project</span>
              </div>
              <div className="flex items-center gap-3 text-xs text-[#A1A1AA]">
                <CheckCircle2 className="w-4 h-4 text-[#FF2A6D] shrink-0" />
                <span>NDA & complete client privacy strictly protected</span>
              </div>
              <div className="flex items-center gap-3 text-xs text-[#A1A1AA]">
                <CheckCircle2 className="w-4 h-4 text-[#FF2A6D] shrink-0" />
                <span>ProRes 4K & multi-platform deliverables included</span>
              </div>
            </div>
          </div>

          {/* Right Column: Inquiry Form or Success Message */}
          <div className="lg:col-span-7">
            <div className="rounded-xl bg-[#141418] border border-white/10 p-8 sm:p-10 shadow-2xl relative">
              <AnimatePresence mode="wait">
                {submittedSuccess ? (
                  <motion.div
                    key="success-screen"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="py-12 text-center space-y-6"
                  >
                    <div className="w-16 h-16 rounded-full bg-[#E5094C]/15 border border-[#E5094C] flex items-center justify-center text-[#FF2A6D] mx-auto shadow-lg shadow-[#E5094C]/25">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>

                    <div className="space-y-2">
                      <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-[#F5F5F2] uppercase tracking-tight">
                        THANK YOU. YOUR PROJECT IS NOW ON OUR RADAR.
                      </h3>
                      <p className="font-body text-base text-[#A1A1AA] max-w-md mx-auto">
                        We’ve logged your specifications. A senior post-production lead will review your details and reach out via email within 24 hours.
                      </p>
                    </div>

                    <div className="p-4 rounded bg-[#0E0E12] border border-white/5 max-w-md mx-auto text-left text-xs font-mono space-y-1">
                      <div className="text-[#FF2A6D] font-bold">Submission Details Summary:</div>
                      <div className="text-[#A1A1AA]">Studio: {formData.company || formData.name}</div>
                      <div className="text-[#A1A1AA]">Project Type: {formData.projectType}</div>
                      <div className="text-[#A1A1AA]">Email: {formData.email}</div>
                    </div>

                    <button
                      onClick={() => {
                        setSubmittedSuccess(false);
                        if (onClearPrefill) onClearPrefill();
                      }}
                      className="px-6 py-2.5 rounded-sm bg-white/5 hover:bg-white/10 text-xs font-mono uppercase text-[#A1A1AA] hover:text-white transition-colors cursor-pointer"
                    >
                      Submit Another Inquiry
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Active Pre-fill Notification if any */}
                    {prefilledProject && (
                      <div className="flex items-center justify-between p-3 rounded bg-[#E5094C]/15 border border-[#E5094C]/30 text-xs font-mono text-[#FF4D7E]">
                        <span>Selected Package / Focus: {prefilledProject}</span>
                        {onClearPrefill && (
                          <button
                            type="button"
                            onClick={onClearPrefill}
                            className="underline hover:text-white ml-2 cursor-pointer"
                          >
                            Reset
                          </button>
                        )}
                      </div>
                    )}

                    {/* Row 1: Email & WhatsApp / Phone */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-xs font-mono text-[#A1A1AA] uppercase tracking-wider">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="hello@yourstudio.com"
                          className="w-full px-4 py-3 rounded-sm bg-[#0E0E12] border border-white/10 focus:border-[#E5094C] focus:outline-none text-sm text-[#F5F5F2] placeholder-[#555] transition-colors"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-mono text-[#A1A1AA] uppercase tracking-wider">
                          WhatsApp / Phone
                        </label>
                        <input
                          type="text"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+1 (555) 000-0000"
                          className="w-full px-4 py-3 rounded-sm bg-[#0E0E12] border border-white/10 focus:border-[#E5094C] focus:outline-none text-sm text-[#F5F5F2] placeholder-[#555] transition-colors"
                        />
                      </div>
                    </div>

                    {/* Row 3: Website or Instagram */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-[#A1A1AA] uppercase tracking-wider">
                        Studio Website / Instagram Portfolio Link
                      </label>
                      <input
                        type="text"
                        value={formData.website}
                        onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                        placeholder="https://instagram.com/yourstudiocinema"
                        className="w-full px-4 py-3 rounded-sm bg-[#0E0E12] border border-white/10 focus:border-[#E5094C] focus:outline-none text-sm text-[#F5F5F2] placeholder-[#555] transition-colors"
                      />
                    </div>

                    {errorMessage && (
                      <div className="p-3 rounded bg-red-900/30 border border-red-500/40 text-xs font-mono text-red-200">
                        {errorMessage}
                      </div>
                    )}

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      data-cursor="SUBMIT"
                      className="w-full py-4 rounded-sm bg-[#E5094C] hover:bg-[#FF1E56] disabled:opacity-50 text-white font-heading font-bold text-xs tracking-[0.14em] uppercase transition-all duration-300 shadow-xl shadow-[#E5094C]/25 flex items-center justify-center gap-2 cursor-pointer"
                    >
                      {isSubmitting ? (
                        <span>TRANSMITTING INQUIRY...</span>
                      ) : (
                        <>
                          <span>SEND PROJECT INQUIRY</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
