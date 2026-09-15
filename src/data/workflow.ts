import { WorkflowStep } from '../types';

// ==========================================
// EDITABLE CONTENT: OUR WORKFLOW
// ==========================================
export const WORKFLOW_STEPS: WorkflowStep[] = [
  {
    step: '01',
    title: 'Upload Footage',
    subtitle: 'Share your raw footage securely.',
    description: 'Send us your raw footage, audio files, and brief via Google Drive, Dropbox, MASV, or Frame.io. Include your preferred music references or studio style guidelines.',
    details: [
      'Accepting all major camera formats: Sony XAVC-S, Canon Cinema RAW Lite, REDCODE, ProRes, Apple ProRes Log',
      'Upload project brief, couple vows text, and music license preferences (Musicbed / Artlist)',
      'We verify all folder structures and audio sync integrity before culling'
    ],
    iconName: 'UploadCloud'
  },
  {
    step: '02',
    title: 'Editing Begins',
    subtitle: 'Narrative crafting, color grading, and sound design.',
    description: 'Our lead editors curate the best moments, build a cohesive emotional arc, color grade to match your signature look, and design an immersive audio experience.',
    details: [
      'Curating emotional beats: Vows, letters, speeches, intimate glance b-roll',
      'Multi-source dialogue mastering, wind reduction, and spectral audio repair',
      'Node-based color grading with bespoke film emulation',
      'Rhythmic soundtrack sync and custom sound design layering'
    ],
    iconName: 'Film'
  },
  {
    step: '03',
    title: 'Review & Refine',
    subtitle: 'Collaborative, timecoded preview links.',
    description: 'Receive a high-resolution preview link where you can leave frame-accurate comments, request minor timing tweaks, or approve the cut.',
    details: [
      'Frame-accurate timecode feedback on Frame.io or private review portal',
      'Fast turnaround on revision notes (usually within 24–48 hours)',
      'Direct communication with your designated editing team'
    ],
    iconName: 'Sliders'
  },
  {
    step: '04',
    title: 'Final Delivery',
    subtitle: 'Master files ready for your clients.',
    description: 'Download your polished films in uncompressed 4K ProRes 422 HQ, web-optimized H.264/H.265, and social 9:16 cuts ready to impress your couples.',
    details: [
      'Master 4K / 1080p exports + high-bitrate web versions',
      'Optional raw NLE project file handover',
      'Secure 90-day cloud backup of your completed project files'
    ],
    iconName: 'CheckCircle2'
  }
];
