import { Package } from '../types';

// ==========================================
// EDITABLE CONTENT: WEDDING EDITING PACKAGES
// Modify descriptions, duration specs, and inclusions here.
// ==========================================
export const PACKAGES_DATA: Package[] = [
  {
    id: 'pkg-01',
    number: '01',
    name: 'Highlight Film',
    duration: '3–5 min',
    tagline: 'The timeless cinematic centerpiece.',
    description: 'A concise, emotionally engaging film that captures the soul of the wedding day, seamlessly blending heartfelt speech audio with cinematic visuals and bespoke sound design.',
    idealFor: 'Couples and filmmakers looking for a dynamic, high-impact film perfect for sharing online and celebrating the emotional peaks of the celebration.',
    turnaroundTime: '5–7 Business Days',
    deliverables: [
      '3–5 Minute 4K Cinematic Master (ProRes & H.264)',
      'Multi-source audio cleanup & dialogue mastering',
      'Full Color Grading & Camera Matching',
      'Licensed premium soundtrack curation',
      '1x 60s Social Media Cut (Optional Add-on)'
    ],
    features: [
      'Story-driven pacing synced to curated soundtrack',
      'Dialogue & vow integration',
      'Up to 2 rounds of creative revisions',
      'LUT matching to your studio’s signature aesthetic'
    ],
    revisions: '2 Full Revision Passes Included',
    aspectRatios: ['16:9 Cinema Wide', '2.39:1 Anamorphic', '9:16 Social Cut'],
    rawFootageLimit: 'Up to 300GB / 4 Hours Raw Footage'
  },
  {
    id: 'pkg-02',
    number: '02',
    name: 'Extended Highlight',
    duration: '5–8 min',
    tagline: 'More moments, deeper emotional breathing room.',
    description: 'A more expansive narrative cut that allows for additional moments, nuanced emotions, and secondary speeches while maintaining an irresistible cinematic flow.',
    idealFor: 'Weddings with extensive traditions, personal speeches, and multi-location celebrations that need more time to breathe naturally.',
    turnaroundTime: '6–8 Business Days',
    deliverables: [
      '5–8 Minute 4K Extended Master Film',
      'Complete Vow, Toast, & Letter Audio Sync',
      'Advanced Color Grading with Film Grain Emulation',
      'Multi-track Sound Effects & Ambience Design',
      'Clean Web Delivery + Archival ProRes Export'
    ],
    features: [
      'Deep multi-character narrative structure',
      'Dual-song or triple-song dynamic score blending',
      'Ambient foley layering (ocean waves, applause, glasses)',
      'Up to 2 rounds of collaborative revisions'
    ],
    revisions: '2 Full Revision Passes Included',
    aspectRatios: ['16:9 Cinema Wide', '2.39:1 Anamorphic'],
    rawFootageLimit: 'Up to 500GB / 6 Hours Raw Footage'
  },
  {
    id: 'pkg-03',
    number: '03',
    name: 'Feature Film',
    duration: '10–15 min',
    tagline: 'The comprehensive cinematic story.',
    description: 'A full story-driven film that explores key moments, emotional dialogues, personal letters, family interactions, and reception speeches in rich narrative detail.',
    idealFor: 'Full-day multi-camera destination weddings with rich dialogue and deep storytelling requirements.',
    turnaroundTime: '8–10 Business Days',
    deliverables: [
      '10–15 Minute 4K Narrative Masterpiece',
      'Full speech & dialogue narrative backbone',
      'Studio-grade Color Pass & Dynamic Contrast Matching',
      'Comprehensive Sound Design & Foley Integration',
      'Chapter Markers & Final Archival Exports'
    ],
    features: [
      'Rich non-linear or chronological storytelling',
      'Extensive multi-mic audio syncing (lapels, DJ board, ambient)',
      'Drone footage stabilization & lens correction',
      'Dedicated lead editor for consistent vision'
    ],
    revisions: '2 Full Revision Passes Included',
    aspectRatios: ['16:9 Master Cinema'],
    rawFootageLimit: 'Up to 800GB / 8 Hours Raw Footage'
  },
  {
    id: 'pkg-04',
    number: '04',
    name: 'Extended Feature Film',
    duration: '15–20+ min',
    tagline: 'An immersive cinematic heirloom.',
    description: 'A longer-form edit that gives the wedding story complete room to unfold, incorporating comprehensive speeches, full ceremony moments, and extended reception festivities.',
    idealFor: 'Luxury weddings, multi-day cultural events, and couples who want every major interaction preserved with cinematic pacing.',
    turnaroundTime: '10–12 Business Days',
    deliverables: [
      '15–20+ Minute 4K Extended Feature Film',
      'Complete Multi-Cam Ceremony & Speeches Backbone',
      'Bespoke Color Science Matching Across Multi-Brand Cameras',
      'Stereo & Surround Sound Mixing',
      'ProRes 422 HQ + H.265/H.264 Master Delivery'
    ],
    features: [
      'Comprehensive multi-segment chapter structure',
      'Full speech integration without feeling rushed',
      'Custom motion typography & intro title card',
      '3 full revision passes included'
    ],
    revisions: '3 Full Revision Passes Included',
    aspectRatios: ['16:9 Master Cinema'],
    rawFootageLimit: 'Up to 1.2TB / 12 Hours Raw Footage'
  },
  {
    id: 'pkg-05',
    number: '05',
    name: 'Documentary / Full-Length Film',
    duration: '30–60+ min',
    tagline: 'The complete archive of the day.',
    description: 'A complete, immersive multi-camera edit that preserves the entire ceremony, toasts, first dances, and party in chronological order with smooth broadcast-quality transitions.',
    idealFor: 'Filmmakers who need full-length documentary deliverables delivered to their clients without spending dozens of hours syncing multi-cam angles.',
    turnaroundTime: '7–10 Business Days',
    deliverables: [
      'Full Multi-Cam Ceremony Cut (Full audio & video sync)',
      'Full Speeches & Toasts Cut with crowd reactions',
      'Full First Dances & Traditions Master Cut',
      'Chapter Navigation & Clean Broadcast Audio Pass',
      'Archival 4K / 1080p Deliverables'
    ],
    features: [
      'Multi-camera angle switching (Sony, Canon, RED, Lumix)',
      'Clean audio mixing from lavaliers and DJ soundboard',
      'Consistent exposure and white balance correction',
      'Seamless timeline organization'
    ],
    revisions: '2 Revision Passes Included',
    aspectRatios: ['16:9 Standard Master'],
    rawFootageLimit: 'Unlimited Multi-Cam Angles'
  },
  {
    id: 'pkg-06',
    number: '06',
    name: 'Teaser / Social Reel',
    duration: 'Up to 60 sec',
    tagline: 'High-impact social showcase.',
    description: 'A punchy, cinematic teaser designed to capture instant attention on Instagram, TikTok, and YouTube Shorts, generating immediate hype while the long edit is underway.',
    idealFor: 'Quick turnaround social delivery for couples and studios looking to maintain momentum within 48-72 hours of the wedding date.',
    turnaroundTime: '2–3 Business Days (Express Available)',
    deliverables: [
      'Up to 60-Second Vertical 9:16 Ultra HD Master',
      'Optional 16:9 Horizontal Cut for YouTube/Web',
      'Fast-Paced Sound Design & Trending Beat Sync',
      'Modern Typography & Aesthetic Captions'
    ],
    features: [
      'Optimized for mobile viewing & social algorithms',
      'High-energy beat drops & emotional vocal hooks',
      'Quick delivery to delight couples immediately',
      '1 round of quick turnaround revisions'
    ],
    revisions: '1 Revision Pass Included',
    aspectRatios: ['9:16 Vertical Reel', '1:1 Square', '16:9 Widescreen'],
    rawFootageLimit: 'Up to 200GB Raw Footage'
  }
];
