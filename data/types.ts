export type SocialIconName = "github" | "linkedin";
export interface SocialLink {
  label: string;
  url: string;
  icon: SocialIconName;
}
export interface NavigationItem {
  id: "hero" | "about" | "education" | "experience" | "publications" | "projects";
  label: string;
}
export interface Profile {
  name: string;
  roles: string[];
  availableForWork: boolean;
  tagline: string;
  bio: string;
  image: { src: string; alt: string };
  softSkills: string[];
  technicalSkills: { category: string; items: string[] }[];
  certifications: { name: string; issuer?: string; date?: string; url?: string }[];
  socials: SocialLink[];
  contact: { email: string; githubUrl?: string; linkedinUrl?: string };
  footer: { signOff: string; copyrightName: string };
}
export interface EducationEntry {
  institution: string;
  degree: string;
  startDate: string;
  endDate: string;
  honors?: string[];
  gpa?: string;
  activities?: string[];
  courses?: { name: string; code: string }[];
}
export interface ExperienceEntry {
  company: string;
  role: string;
  startDate?: string;
  endDate?: string | "present";
  bullets: string[];
  stack: string[];
}
export interface Publication {
  title: string;
  venue: string;
  year: number;
  abstract: string;
  links: { label: string; url: string }[];
}
export interface Project {
  slug: string;
  title: string;
  description: string;
  image: { src: string; alt: string };
  stack: string[];
  featured: boolean;
  links: { label: string; url: string }[];
}
