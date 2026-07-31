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
  name: "Alden",
  roles: ["Analytics Engineer", "Security-aware Analyst", "Decision Intelligence"],
  availableForWork: true,
  tagline:
    "Bridging data science, analytics, and engineering with security-aware data practices.",
  bio: [
    "A Computer Science graduate with a bachelor’s specialization in Database Technology and a master’s specialization in Information Security Management. My work sits at the intersection of analytics, business intelligence, data operations, and security-aware information management.",
    "Across roles in analytics, reporting, and security-aware operations, I have built dashboards, automated reporting workflows, translated SQL and HiveQL logic into analytics models, and supported risk-monitoring and governance-focused data processes in finance and logistics contexts.",
    "Beyond the technical work, I am motivated by curiosity, continuous improvement, and building solutions that help people and organizations make better decisions with confidence.",
  ],
  image: { src: "/pic3.png", alt: "Portrait of me" },
  softSkills: [
    "Data storytelling",
    "Stakeholder management",
    "Strategic negotiation",
    "Project leadership",
    "Cross-department collaboration",
    "Pitching",
  ],
  technicalSkills: [
    {
      category: "Data Science",
      items: ["Python", "R", "Deep Learning", "AI", "Predictive Modeling"],
    },
    {
      category: "Data Analytics & Reporting",
      items: ["Power BI", "DAX", "Tableau", "Looker Studio", "Excel"],
    },
    {
      category: "Data Engineering",
      items: ["SQL", "HiveQL", "Spark", "Hadoop", "Bash", "Apps Script"],
    },
    {
      category: "Information Security Management",
      items: ["IT Risk Management", "Data Governance", "Security Auditing"],
    },
  ],
  certifications: [
    { name: "Alibaba Cloud Certified Associate (ACA)" },
    { name: "SQL (Advanced) by HackerRank" },
    { name: "SAP Analytics Cloud Training by ASEAN DSE" },
  ],
  socials: [
    { label: "GitHub", url: "https://github.com/aldenaputra", icon: "github" },
    {
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/aldenaputra/",
      icon: "linkedin",
    },
  ],
  contact: { email: "alden.aputra@gmail.com" },
  footer: {
    signOff: "Built with care, curiosity, and a systems mindset.",
    copyrightName: "Alden Ardiwinata Putra",
  },
};
