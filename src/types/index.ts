export interface Project {
  id: string;
  title: string;
  filmmaker: string;
  location: string;
  category: "highlights" | "feature" | "teasers" | "documentary" | "commercial";
  categoryLabel: string;
  duration: string;
  camera: string;
  colorGrade: string;
  aspectRatio: string;
  thumbnail: string;
  videoUrl?: string; // YouTube, Vimeo, or MP4 URL
  description: string;
  featured?: boolean;
}

export interface Package {
  id: string;
  number: string;
  name: string;
  duration: string;
  tagline: string;
  description: string;
  idealFor: string;
  turnaroundTime: string;
  deliverables: string[];
  features: string[];
  revisions: string;
  aspectRatios: string[];
  rawFootageLimit: string;
}

export interface Service {
  id: string;
  number: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  deliverables: string[];
  software: string[];
  turnaround: string;
}

export interface Testimonial {
  id: string;
  filmmakerName: string;
  studioName: string;
  location: string;
  projectType: string;
  quote: string;
  rating: number;
  avatarUrl?: string;
}

export interface StatItem {
  value: string;
  label: string;
  description: string;
}

export interface WorkflowStep {
  step: string;
  title: string;
  subtitle: string;
  description: string;
  details: string[];
  iconName: string;
}

export interface Industry {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  typicalDeliverables: string[];
}

export interface ContactInquiryData {
  email: string;
  phone: string;
  website: string;
}
