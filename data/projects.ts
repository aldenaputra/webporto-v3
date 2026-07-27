import type { Project } from "./types";
export const projects: Project[] = [
  {
    slug: "example-platform",
    title: "Example Platform",
    description:
      "A placeholder project that keeps the final project data contract ready.",
    image: {
      src: "/images/projects/example-platform.png",
      alt: "Example platform interface",
    },
    stack: ["Next.js", "TypeScript"],
    featured: true,
    links: [],
  },
];
