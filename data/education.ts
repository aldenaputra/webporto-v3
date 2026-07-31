import type { EducationEntry } from "./types";

export const education: EducationEntry[] = [
  {
    level: "High School Diploma",
    institution: "SMA Regina Pacis Bogor",
    degree: "Mathematics, Natural Science, and Mandarin Major",
    startDate: "Jul 2018",
    endDate: "Jul 2021",
    honors: ["Best Male Student Graduate"],
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
    level: "Bachelor's Degree",
    institution: "BINUS University",
    degree: "Computer Science: Database Technology Streaming",
    startDate: "Sept 2021",
    endDate: "Aug 2025",
    honors: ["Summa Cum Laude"],
    gpa: "3.92/4.00",
    activities: [
      "Teaching & Mentoring",
      "UKM Band BINUS",
      "Teach for Indonesia (Social Volunteer): Social Awareness Campaign at Lentera School Indonesia",
    ],
    courses: [
      { name: "Artificial Intelligence", code: "COMP6065001" },
      { name: "Big Data Processing", code: "COMP6579001" },
      { name: "Computer Networks", code: "CPEN6247001" },
      { name: "Data Mining", code: "COMP6140001" },
      { name: "Database Design", code: "COMP6481001" },
      { name: "Database Technology", code: "COMP6799001" },
      { name: "Distributed Cloud Computing", code: "COMP6710001" },
      { name: "Geographical Information System", code: "COMP6590001" },
      { name: "Scientific Computing", code: "MATH183001" },
    ],
  },
  {
    level: "Master's Degree",
    institution: "BINUS Graduate Program",
    degree:
      "Magister Teknik Informatika (Fast-Track): Information Security Management Streaming",
    startDate: "Sept 2024",
    endDate: "Aug 2026",
    honors: ["Summa Cum Laude"],
    gpa: "3.99/4.00",
    activities: [
      "Teach for Indonesia (Social Volunteer): Volunteered as an English teacher in collaboration with MyFundAction.",
      "Teaching Volunteer about AI and Digital Marketing by Bina Nusantara Computer Club (BNCC) in Massive Online Open Course format",
    ],
    courses: [
      {
        name: "Cases on Forensic Accounting and Corporate Governance",
        code: "ACCT8008044",
      },
      { name: "Enterprise Network", code: "CPEN8006041" },
      { name: "Fundamental of Cybersecurity", code: "COMP8046041" },
      { name: "IT Risk Management and Audit", code: "COMP8042041" },
      { name: "Network and Cyber Security", code: "CPEN8005041" },
      { name: "Internet of Things (IoT)", code: "COMP8041041" },
    ],
  },
];
