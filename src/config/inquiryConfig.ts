import { ProjectInquiryData } from '../types';

// ==========================================
// CONFIGURATION: PROJECT INQUIRY FORM ENDPOINT
// Connect your backend, Formspree, Make/Zapier webhook,
// or custom server endpoint here.
// ==========================================
export const INQUIRY_CONFIG = {
  // Brand contact information
  brandName: 'VDO XPERTS',
  tagline: 'Professional Wedding Video Editing & Post-Production',
  contactEmail: 'vdoxperts@gmail.com',
  whatsappNumber: '+1 (555) 019-2834', // Editable contact number

  // Form submission endpoint (e.g., 'https://formspree.io/f/your_id' or '/api/inquiry')
  // When set to null, simulated submission with client confirmation is used.
  submissionEndpoint: null as string | null,

  // Social Links
  socials: {
    instagram: 'https://instagram.com/vdoxperts',
    youtube: 'https://youtube.com/@vdoxperts',
    vimeo: 'https://vimeo.com/vdoxperts',
    linkedin: 'https://linkedin.com/company/vdoxperts',
  }
};

/**
 * Handles the project inquiry submission.
 * Replace or enhance this function when connecting an API.
 */
export async function submitProjectInquiry(data: ProjectInquiryData): Promise<{ success: boolean; message: string }> {
  // If an external endpoint is configured, send the payload
  if (INQUIRY_CONFIG.submissionEndpoint) {
    try {
      const response = await fetch(INQUIRY_CONFIG.submissionEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error(`Server returned status ${response.status}`);
      }

      return {
        success: true,
        message: 'Your project inquiry has been transmitted successfully.'
      };
    } catch (err: any) {
      console.error('Inquiry submission error:', err);
      return {
        success: false,
        message: err.message || 'Submission failed. Please email us directly at vdoxperts@gmail.com'
      };
    }
  }

  // Default simulated local resolution for initial setup
  // Logs the payload to console for development verification
  console.log('[VDO XPERTS INQUIRY RECEIVED]:', data);
  await new Promise((resolve) => setTimeout(resolve, 800));

  return {
    success: true,
    message: 'Project details received on radar. We will reach out within 24 hours.'
  };
}
