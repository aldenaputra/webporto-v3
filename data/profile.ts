import type { NavigationItem, Profile } from "./types";
export const navigationItems: NavigationItem[] = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "education", label: "Education" },
  { id: "experience", label: "Experience" },
  { id: "publications", label: "Publications" },
  { id: "projects", label: "Projects" },
];
export const profile: Profile = {
  name: "Avery Chen",
  roles: ["Software Engineer", "Data Practitioner"],
  tagline: "Building dependable, thoughtful digital systems.",
  bio: "A computer science practitioner focused on clear systems, useful interfaces, and steady technical growth.",
  image: { src: "/images/profile/pic2.png", alt: "Portrait of Avery Chen" },
  softSkills: ["Collaboration", "Clear communication", "Continuous learning"],
  technicalSkills: [
    { category: "Languages", items: ["TypeScript", "Python", "SQL"] },
    { category: "Frameworks", items: ["Next.js", "React"] },
    { category: "Tools", items: ["Git", "Vercel"] },
  ],
  certifications: [
    {
      name: "Cloud Fundamentals Certification",
      issuer: "Placeholder issuer",
      date: "2025",
    },
  ],
  socials: [
    { label: "GitHub", url: "https://github.com", icon: "github" },
    { label: "LinkedIn", url: "https://www.linkedin.com", icon: "linkedin" },
  ],
  contact: { email: "hello@example.com" },
  footer: { signOff: "Built with care and curiosity.", copyrightName: "Avery Chen" },
};
