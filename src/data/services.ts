import { Service } from '../types';

// ==========================================
// EDITABLE CONTENT: SERVICES
// Edit service cards, toolsets, and specifications here.
// ==========================================
export const SERVICES_DATA: Service[] = [
  {
    id: 'service-01',
    number: '01',
    title: 'Wedding Video Editing',
    shortDesc: 'Cinematic highlights, teasers, feature films, documentary edits, and social media reels crafted with narrative intention.',
    fullDesc: 'We take your multi-camera raw logs, ceremony lavalier tracks, and drone aerials, meticulously crafting an emotional narrative tailored to your studio’s signature pacing and storytelling style.',
    deliverables: [
      'Teasers (60s)',
      'Highlights (3–5 min)',
      'Feature Films (10–20 min)',
      'Full Multi-Cam Ceremonies & Speeches',
      'Vertical Social Reels (9:16)'
    ],
    software: ['Adobe Premiere Pro', 'Professional Grading Suite', 'Final Cut Pro'],
    turnaround: 'Fast Turnaround'
  },
  {
    id: 'service-02',
    number: '02',
    title: 'Commercial Video Editing',
    shortDesc: 'Promotional videos, high-fashion bridal advertisements, luxury venue films, and commercial brand narratives.',
    fullDesc: 'Fast-paced, conversion-focused, and visually captivating commercial edits that highlight product craftsmanship, venue grandeur, or brand lifestyle campaigns.',
    deliverables: [
      'Brand Commercials & Promos',
      'Luxury Venue & Resort Showcases',
      'Bridal Fashion & Designer Films',
      'Event After-Movies',
      'Multi-Platform Ad Deliverables (16:9, 1:1, 9:16)'
    ],
    software: ['Professional Grading Suite', 'Premiere Pro', 'After Effects'],
    turnaround: 'Fast Turnaround'
  },
  {
    id: 'service-03',
    number: '03',
    title: 'YouTube & Creator Editing',
    shortDesc: 'Engaging pacing, bespoke motion titles, dynamic subtitles, visual zooms, and seamless retention-optimized editing.',
    fullDesc: 'Elevate your filmmaker YouTube channel, behind-the-scenes vlogs, gear reviews, and educational tutorials with high-retention editing techniques and soundscapes.',
    deliverables: [
      'YouTube Long-Form Videos (10–30 min)',
      'Custom Chapter Animations & Lower Thirds',
      'Shorts & TikTok Snippets',
      'Sound Effects & Foley Polish',
      'Thumbnail-Optimized Video Frames'
    ],
    software: ['Premiere Pro', 'After Effects', 'Photoshop'],
    turnaround: '3–5 Business Days'
  },
  {
    id: 'service-04',
    number: '04',
    title: 'Color Correction & Grading',
    shortDesc: 'Transform flat Log profiles into lush, consistent cinematic film aesthetics with perfect skin tone fidelity.',
    fullDesc: 'We match disparate cameras (e.g., Sony FX3 with Canon R5 and RED Komodo), perform exposure normalization, isolate natural skin tones, and apply custom film print emulations.',
    deliverables: [
      'Multi-Camera Color Matching & Balancing',
      'Kodak / Fuji Film Print Emulation',
      'Skin Tone Isolation & Hue Perfection',
      'Exposure, Contrast & HDR Optimization',
      'Custom Studio LUT Creation'
    ],
    software: ['Advanced Color Node Suite', 'Dehancer Pro'],
    turnaround: 'Fast Turnaround'
  },
  {
    id: 'service-05',
    number: '05',
    title: 'Audio Enhancement & Sound Design',
    shortDesc: 'Clean dialogue, wind rumble removal, music ducking, ambient foley soundscapes, and final LUFS mastering.',
    fullDesc: 'Wedding audio can be chaotic — wind during outdoor vows, microphone drops, or echoey reception halls. We repair, clean, and enrich your audio into broadcast-quality sound.',
    deliverables: [
      'Dialogue Spectral De-Noise & De-Reverb',
      'Music Track Layering & Key Transitions',
      'Ambient Foley & Environmental Sound Effects',
      'Vocal EQ, Compression & Level Leveling',
      '-14 LUFS Broadcast / Web Audio Mastering'
    ],
    software: ['iZotope RX Advanced', 'Adobe Audition', 'Studio Fairlight Engine'],
    turnaround: 'Fast Turnaround'
  },
  {
    id: 'service-06',
    number: '06',
    title: 'Motion Graphics & Title Design',
    shortDesc: 'Elegant typography titles, minimalist wedding monograms, lower thirds, chapter cards, and logo animations.',
    fullDesc: 'Add high-end editorial flair with tasteful, non-distracting typography animations, couple monograms, vintage film overlays, and customized chapter titles.',
    deliverables: [
      'Custom Film Title Cards & Intros',
      'Couple Monogram & Date Animations',
      'Timecode & Film Burn Overlays',
      'Lower Thirds for Speeches & Introductions',
      'Custom Studio End-Credits'
    ],
    software: ['Adobe After Effects', 'Cinema 4D', 'Illustrator'],
    turnaround: '2–3 Business Days'
  }
];
