import type { Project } from "./types";

export const projects: Project[] = [
  {
    slug: "data-security-portfolio",
    title: "Security Testing and Automation Portfolio",
    description:
      "A practical security-focused project that combines scripting, testing workflows, and structured reporting for a modern web security review process.",
    image: {
      src: "/wstg.png",
      alt: "Security testing workflow interface",
    },
    stack: ["Python", "OWASP", "Cybersecurity", "Automation"],
    featured: true,
    links: [],
  },
  {
    slug: "enterprise-network-simulation",
    title: "Enterprise Network Simulation",
    description:
      "A network design and simulation project focused on redundancy, resilience, and operational metrics for enterprise infrastructure planning.",
    image: {
      src: "/gns.png",
      alt: "Enterprise network diagram",
    },
    stack: ["GNS3", "Networking", "Security", "Simulation"],
    featured: false,
    links: [],
  },
];
