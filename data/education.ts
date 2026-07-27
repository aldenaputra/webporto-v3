import type { EducationEntry } from "./types";

export const education: EducationEntry[] = [
  {
    institution: "SMA Regina Pacis Bogor",
    degree: "Math & Natural Science Major",
    startDate: "2018",
    endDate: "2021",
    honors: ["Best Male Student", "Youth Science Club"],
    gpa: "93.47/100.00",
    activities: [
      "Regina Pacis Youth Science Club Former Chairman",
      "Regina Pacis Band & Orchestra",
      "OSN Astronomi",
      "Lomba Karya Ilmiah Remaja LIPI 2019",
      "National Folklore Festival FEB Universitas Indonesia Choir Competition Silver Medalist",
    ],
  },
  {
    institution: "BINUS University",
    degree: "Computer Science: Database Technology Streaming",
    startDate: "2021",
    endDate: "2025",
    honors: ["Summa Cum Laude", "Outstanding Graduate"],
    gpa: "3.92/4.00",
    activities: [
      "Teaching & Mentoring",
      "Band",
      "Teach for Indonesia social volunteer campaign at Lentera School Indonesia",
    ],
    courses: [
      { name: "Artificial Intelligence", code: "COMP6065001" },
      { name: "Big Data Processing", code: "COMP6579001" },
      { name: "Computer Networks", code: "CPEN6247001" },
      { name: "Data Mining", code: "COMP6140001" },
      { name: "Database Design", code: "COMP6481001" },
      { name: "Database Technology", code: "COMP6799001" },
    ],
  },
  {
    institution: "BINUS Graduate Program",
    degree: "Magister Teknik Informatika — Information Security Management Streaming",
    startDate: "2024",
    endDate: "2026",
    honors: ["Completed. Awaiting graduation"],
    gpa: "3.99/4.00",
    activities: [
      "Social volunteer and English teacher through myfundaction",
      "Teaching volunteer about AI and digital marketing through Bina Nusantara Computer Club",
    ],
    courses: [
      { name: "Fundamental of Cybersecurity", code: "COMP8046041" },
      { name: "Network and Cyber Security", code: "CPEN8005041" },
      { name: "IT Risk Management and Audit", code: "COMP8042041" },
      { name: "Enterprise Network", code: "CPEN8006041" },
      { name: "Internet of Things (IoT)", code: "COMP8041041" },
    ],
  },
];
