import { PortfolioData } from '../types';

export const portfolioData: PortfolioData = {
  personal: {
    url: "/pic2.png",
    name: "Hi, I'm Alden!",
    title: "Master's in Computer Science",
    description: "Bridging data science, analytics, and engineering with security-aware data practices.",
    email: "alden.aputra@gmail.com",
    location: "Jakarta, Indonesia",
    headshotUrl: "/pic2.png"
  },

  about: {
    bio: "I’m a Computer Science graduate with a Bachelor’s specialization in Database Technology and a Master’s specialization in Information Security Management, currently awaiting graduation. My background sits at the intersection of analytics, business intelligence, data operations, and security-aware information management.",
    bio1: "Across roles as an HR Data Scientist, Reporting Analyst, and Data Analyst, I’ve built dashboards, developed predictive models, automated reporting workflows, translated SQL/HiveQL logic into DAX, supported risk-monitoring dashboards, and improved operational data processes across financial services and logistics environments.",
    bio2: "Beyond my technical work, I’m someone who thrives on curiosity, creativity, and continuous improvement. I enjoy building data and IT security solutions, exploring new technologies, and expressing myself through music and art. I’m adaptable, collaborative, and driven by the desire to create meaningful work, whether it’s solving analytical challenges, safeguarding information systems, or contributing to impactful projects that help people and organizations make better decisions.",
    mobileBio: "Computer Science graduate focused on data analytics, BI, automation, and security-aware information management across finance and logistics environments.",
    skills: [
      { name: "JavaScript", level: "Advanced", category: "Frontend" },
      { name: "TypeScript", level: "Advanced", category: "Frontend" },
      { name: "React", level: "Advanced", category: "Frontend" },
      { name: "Next.js", level: "Intermediate", category: "Frontend" },
      { name: "Node.js", level: "Intermediate", category: "Backend" },
      { name: "Python", level: "Intermediate", category: "Backend" },
      { name: "PostgreSQL", level: "Intermediate", category: "Database" },
      { name: "Git", level: "Advanced", category: "Tools" }
    ],
    hardSkills: [
      {
        category: "Data Science",
        skills: ["Python", "R", "Deep Learning", "AI", "Predictive Modeling", "Time Series Forecasting"],
      },
      {
        category: "Data Analytics & Reporting",
        skills: ["Power BI", "DAX", "Tableau", "Looker Studio", "Excel", "Google Sheets"],
      },
      {
        category: "Data Engineering",
        skills: ["SQL", "HiveQL", "Spark", "Hadoop", "Bash", "Apps Script", "Workflow Automation", "Cron"],
      },
      {
        category: "Information Security Management",
        skills: ["IT Risk Management & Audit", "Data Governance"],
      },
    ],
    softSkills: [
      { skill: "Data Storytelling" },
      { skill: "Stakeholder Management" },
      { skill: "Strategic Negotiation" },
      { skill: "Project Leadership" },
      { skill: "Cross-Dept Collaboration" },
      { skill: "Pitching" },
    ],
    certifications: [
      { name: "Alibaba Cloud Certified Associate (ACA)" },
      { name: "SQL (Advanced) by HackerRank" },
      { name: "SAP Analytics Cloud Training by ASEAN DSE" },
    ],
    cvUrl: "/CV Alden Ardiwinata Putra 2026.pdf",
    // domainsOfInterest: [
    //   "Data Science",
    //   "Data Analytics",
    //   "Data Engineering",
    //   "Financial Services",
    //   "Risk Management",
    //   "Information Security",
    //   "IT Audit",
    //   "Data Governance",
    //   "Human Resource Information Systems"      
    // ]
  },

  projects: [
    {
      id: "1",
      title: "WSTGv4 OWASP Scripting and Testing Project, Fundamental of Cybersecurity Project",
      shortTitle: "OWASP WSTG Security Testing",
      description: "Developed comprehensive Python scripts and AI-assisted security tools to systematically execute the entire OWASP Web Security Testing Guide (WSTGv4) checklist. Automated end-to-end security testing procedures, vulnerability detection, and generated detailed testing reports to validate web application security posture.",
      mobileDescription: "Automated OWASP WSTG security checks with Python and AI-assisted tooling.",
      mobileHighlights: ["Built scripted security test workflows", "Mapped checks to WSTGv4 coverage", "Generated structured testing reports"],
      technologies: ["Python", "OWASP", "Cybersecurity", "Security Testing", "Web Security"],
      featuredTechnologies: ["Python", "OWASP", "Security Testing"],
      githubUrl: "https://github.com/aldenaputra/WSTG-Script-and-Master-Report-by-Alden-and-Kenneth.git",
      imageUrl: "/wstg.png"
    },
    {
      id: "2",
      title: "Network and Cybersecurity Projects",
      shortTitle: "Network & Cybersecurity Labs",
      description: "Completed four in-depth cybersecurity assignments: (1) Penetration Testing Report on Kioptrix Level 1 System with vulnerability findings and remediation recommendations; (2) Memory Forensics Analysis on Cridex Malware using Volatility 2.0 for malware isolation and documentation; (3) TLS/SSL Decryption Analysis using Wireshark demonstrating protocol decryption techniques; (4) Hands-on Pyshark CLI-based Wireshark documentation and practical implementation.",
      mobileDescription: "Four security labs covering penetration testing, forensics, TLS analysis, and Pyshark workflows.",
      mobileHighlights: ["Documented findings and remediation", "Analyzed malware memory artifacts", "Practiced packet decryption workflows"],
      technologies: ["Penetration Testing", "Wireshark", "Pyshark", "Volatility", "Memory Forensics", "TLS/SSL", "Cybersecurity", "Network Analysis"],
      featuredTechnologies: ["Wireshark", "Volatility", "Pyshark", "Penetration Testing"],
      driveUrl: "https://docs.google.com/document/d/1cTU-OmhIXidmQCD88Kr6X7nnrVfiO_LB0pyc3Ld5EoE/edit?usp=sharing",
      imageUrl: "/network.png"
    },
    {
      id: "3",
      title: "Enterprise Network Project & Simulation, Advanced Network Design",
      shortTitle: "Enterprise Network Simulation",
      description: "Designed and simulated an enterprise-level network architecture with comprehensive metrics calculation including MTTR (Mean Time To Repair). Implemented GNS3 network environment with DHCP server configuration using keepalived, integrated DNS backup mechanisms, and implemented network security measures to simulate real-world enterprise infrastructure.",
      mobileDescription: "Designed a simulated enterprise network with redundancy, security, and operational metrics.",
      mobileHighlights: ["Built GNS3 enterprise topology", "Configured DHCP and DNS backup", "Calculated infrastructure recovery metrics"],
      technologies: ["GNS3", "Network Design", "Network Security", "Cisco Packet Tracer"],
      featuredTechnologies: ["GNS3", "Network Design", "Network Security"],
      driveUrl: "https://docs.google.com/document/d/1nxVayDarPnyCfkl1QgNnpFR8zBuHkz8d_IhB1w4vN0E/edit?usp=sharing",
      imageUrl: "/gns.png"
    },
    {
      id: "4",
      title: "Data Clustering & Classification on Multiple Datasets, Big Data Processing Project",
      shortTitle: "Clustering & Classification",
      description: "Performing data clustering (trash pollution dataset) using k-means model projected onto scatter plot and classification model (airplane schedule delay dataset) in Cloudera Quickstart VM (Jupyter Notebook).",
      mobileDescription: "Applied clustering and classification models in a Cloudera big data environment.",
      mobileHighlights: ["Modeled trash pollution clusters", "Classified flight delay data", "Visualized results in notebooks"],
      technologies: ["SQL", "Jupyter Notebook", "Cloudera Quickstart VM", "Machine Learning", "Apache Spark", "VMware Workstation"],
      featuredTechnologies: ["Machine Learning", "Apache Spark", "Jupyter"],
      githubUrl: "https://github.com/aldenaputra/clustering-and-classification.git",
      imageUrl: "/vis.png"
    },
    {
      id: "5",
      title: "SARIMAX Prediction Model on Online Retail Dataset using Python (Google Colaboratory)",
      shortTitle: "SARIMAX Sales Forecasting",
      description: "Conducted exploratory data analysis (EDA) of an online retail dataset and executing model training to predict sales using SARIMAX algorithm in python (Google Colaboratory).",
      mobileDescription: "Forecasted online retail sales with EDA and SARIMAX model training in Python.",
      mobileHighlights: ["Prepared retail time-series data", "Trained SARIMAX forecasting model", "Worked in Google Colab"],
      technologies: ["Python", "Pandas", "Machine Learning", "Google Colab"],
      featuredTechnologies: ["Python", "Pandas", "SARIMAX"],
      githubUrl: "https://github.com/aldenaputra/SARIMAX-prediction-model.git",
      imageUrl: "/sarimax.png"
    },
    {
      id: "6",
      title: "Comparison of 4 SVM Kernels Performances in Aviation Satisfaction Dataset, Data Mining Project",
      shortTitle: "SVM Kernel Comparison",
      description: "Conducted a complete process of KDD (Knowledge Discovery in Databases): exploratory data analysis (EDA), data preprocessing, outlier analysis, model fitting (classification prediction analysis), model evaluation, and permutation importance between SVM kernels (linear, RBF, polynomial, and sigmoid), of an aviation satisfaction dataset using python (Google Colaboratory).",
      mobileDescription: "Compared four SVM kernels for aviation satisfaction classification.",
      mobileHighlights: ["Ran full KDD workflow", "Evaluated four SVM kernels", "Used permutation importance"],
      technologies: ["Python", "Pandas", "Machine Learning", "Google Colab"],
      featuredTechnologies: ["Python", "SVM", "Data Mining"],
      githubUrl: "https://github.com/aldenaputra/svm-4-kernel-comparison.git",
      imageUrl: "/datamining.png"
    },
    {
      id: "7",
      title: "Basic Data Visualization in Jupyter Notebook, Utilizing SparkSQL on Cloudera Quickstart VM, Big Data Processing Project",
      shortTitle: "SparkSQL Data Visualization",
      description: "Performing basic data visualization and queries (farm dataset) using SparkSQL (pySpark) in Jupyter Notebook on Cloudera Quickstart Virtual Machine.",
      mobileDescription: "Queried and visualized farm data using SparkSQL in Jupyter Notebook.",
      mobileHighlights: ["Used SparkSQL queries", "Visualized dataset patterns", "Worked inside Cloudera VM"],
      technologies: ["SQL", "Jupyter Notebook", "Cloudera", "Virtual Machine", "Apache Spark", "VMware Workstation", "Python"],
      featuredTechnologies: ["SparkSQL", "Jupyter", "Python"],
      githubUrl: "https://github.com/aldenaputra/data-visualization-in-jupyter-spark-cloudera.git",
      imageUrl: "/clasclus.png"
    },
    {
      id: "8",
      title: "PlaTo UI/UX Prototyping, Human & Computer Interaction Project",
      shortTitle: "PlaTo UI/UX Prototype",
      description: "Designing UI and conducting UX testing (via survey and prototype testing) for IoT application that featured to perform automatic plant nursery remotely.",
      mobileDescription: "Designed and tested an IoT plant nursery app prototype.",
      mobileHighlights: ["Created UI prototype in Figma", "Ran survey and prototype testing", "Focused on remote nursery control"],
      technologies: ["UI Prototyping", "UX Testing", "Figma"],
      featuredTechnologies: ["Figma", "UX Testing", "UI Prototype"],
      demoUrl: "https://www.figma.com/file/UQahPrf3riu2UKva5k0csY/HCI---AoL-Case?type=design&node-id=101%3A2&mode=design&t=QbNj488Xs4JhnUr4-1",
      imageUrl: "/plato.png"
    },
    {
      id: "9",
      title: "Travail: Travel and Rail. A Laravel Full-Stack E-Ticketing Website, Software Engineering Project",
      shortTitle: "Travail E-Ticketing Website",
      description: "Entrusted to lead a software engineering project, Travail: Travel & Rail. Built a fully functional (full-stack) train e-ticketing website using Laravel's framework.",
      mobileDescription: "Led a Laravel full-stack train e-ticketing website project.",
      mobileHighlights: ["Led the software engineering project", "Built booking and ticketing flow", "Used Laravel with Vue and MySQL"],
      technologies: ["MySQL", "Laravel", "Vue.js", "Apache XAMPP", "HTML", "CSS", "JavaScript", "Git", "Figma"],
      featuredTechnologies: ["Laravel", "MySQL", "Vue.js"],
      githubUrl: "https://github.com/VzGarnet/Travail.git",
      imageUrl: "/travail.png"
    },
    {
      id: "10",
      title: "Portfolio Website Project using Next.js Framework",
      shortTitle: "Next.js Portfolio Website",
      description: "Created and deployed a portfolio website using the Next.js framework and free hosting services from Vercel.",
      mobileDescription: "Built and deployed a personal portfolio website with Next.js and Vercel.",
      mobileHighlights: ["Developed responsive portfolio UI", "Used Next.js and TypeScript", "Deployed through Vercel"],
      technologies: ["Next.js", "HTML", "Tailwind CSS", "TypeScript", "Git", "Vercel"],
      featuredTechnologies: ["Next.js", "TypeScript", "Vercel"],
      githubUrl: "https://github.com/aldenaputra/webportoexercise.git",
      imageUrl: "/porto.png"
    },
    {
      id: "11",
      title: "KarenJET, Database Design Project",
      shortTitle: "KarenJET Database Design",
      description: "Entrusted to lead a database design project, KarenJET. Designing a database for enterprise scenarios and developing a mitigation plan for system alteration and recovery for specific scenarios that involve database transactions. Performed a strict normalization from 1NF to 5NF and created diagrams to elaborate the database system.",
      mobileDescription: "Led an enterprise database design project with normalization and recovery planning.",
      mobileHighlights: ["Designed enterprise database model", "Normalized schema from 1NF to 5NF", "Created alteration and recovery plan"],
      technologies: ["Visual Paradigm", "Database Design", "Excel", "Figma"],
      featuredTechnologies: ["Database Design", "Visual Paradigm", "Figma"],
      driveUrl: "https://binusianorg-my.sharepoint.com/personal/alden_putra_binus_ac_id/_layouts/15/guestaccess.aspx?share=Ea_I6XQHFexNo-1RpLEk5MwBu3iwi47HMqHfiuZeruUoZg&e=zqngRY",
      imageUrl: "/Database Design.png"
    },
    {
      id: "12",
      title: "Java CRUD + Search Text-Based Application, Object Oriented Programming Final Project",
      shortTitle: "Java CRUD + Search App",
      description: "Design a java text-based application that implements the 4 main principles of object-oriented programming, input validation, and CRUD + search algorithm.",
      mobileDescription: "Built a Java text-based CRUD app with validation and search.",
      mobileHighlights: ["Implemented OOP principles", "Added CRUD and search logic", "Validated user input"],
      technologies: ["Java", "Eclipse IDE"],
      featuredTechnologies: ["Java", "OOP", "CRUD"],
      githubUrl: "https://github.com/aldenaputra/java-crud-search.git",
      imageUrl: "/javacruds.png"
    },
    {
      id: "13",
      title: "Algorithm Design in C, Algorithm & Programming Project",
      shortTitle: "Algorithm Design in C",
      description: "Constructing several algorithms in C to solve logical problems and creating each flowchart to describe further the algorithm scheme.",
      mobileDescription: "Solved logic problems with C algorithms and flowchart documentation.",
      mobileHighlights: ["Designed multiple algorithms", "Documented logic with flowcharts", "Practiced C problem solving"],
      technologies: ["C/C++", "Dev-C++"],
      featuredTechnologies: ["C/C++", "Algorithms", "Flowcharts"],
      githubUrl: "https://github.com/aldenaputra/algoprog_AoL.git",
      imageUrl: "/algoprog.png"
    },
    {
      id: "14",
      title: "Computer Network Design & Prototyping, Computer Network Case Study & Project",
      shortTitle: "Computer Network Prototype",
      description: "Prototyping a computer network for specific case study and performing a comprehensive network simulation using Cisco Packet Tracer.",
      mobileDescription: "Prototyped and simulated a case-study computer network.",
      mobileHighlights: ["Designed network topology", "Simulated in Cisco Packet Tracer", "Documented case-study requirements"],
      technologies: ["Cisco Packet Tracer", "Figma"],
      featuredTechnologies: ["Cisco Packet Tracer", "Network Design", "Figma"],
      driveUrl: "https://binusianorg-my.sharepoint.com/personal/alden_putra_binus_ac_id/_layouts/15/guestaccess.aspx?share=EW2O2MDH3w1Nofp_3QBWyzsBNHT_M0GTICEKxs568-y1Bg&e=z31jAs",
      imageUrl: "/cn.png"
    },
  ],

  publications: [
    {
      id: "1",
      title: "Practical Uncertainty Estimation for IHSG Forecasting Using Deep Ensembles, Residual-Based Intervals, and Evidential Regression",
      shortTitle: "IHSG Forecasting Uncertainty",
      description: "Part of my thesis publication, which, in this paper I explored existing vs. novel-proposed practical uncertainty quantification for Indonesian stock exchange forecasting. Accepted and presented in the 2026 International Seminar on Intelligent Business and Edge-Computing Research (ISIBER).",
      mobileDescription: "Thesis publication on practical uncertainty estimation for Indonesian stock index forecasting.",
      mobileMeta: "ISIBER 2026",
      technologies: ["Research", "Mendeley", "Deep Learning", "Uncertainty Quantification", "Stock Market Forecasting"],
      featuredTechnologies: ["Research", "Deep Learning", "Forecasting"],
      driveUrl: "https://doi.org/10.1109/ISIBER68248.2026.11470012",
      imageUrl: "/thesis_pub.png"
    },
    {
      id: "2",
      title: "Systematic Literature Review on IT Strategic Workspaces: Approach to Develop an Ideal Environment",
      shortTitle: "IT Strategic Workspaces SLR",
      description: "Conducted a SLR research (first author) regarding IT workspaces in order to find tangible metrics and method to develop an ideal environment for IT human resources. Accepted and presented in The 9th International Conference on Computing, Engineering and Design (ICCED 2023).",
      mobileDescription: "First-author SLR on tangible metrics for designing better IT workspaces.",
      mobileMeta: "ICCED 2023",
      technologies: ["Research", "Mendeley", "Systematic Literature Review", "IT Workspaces", "Information Systems"],
      featuredTechnologies: ["Research", "SLR", "Information Systems"],
      driveUrl: "https://doi.org/10.1109/ICCED60214.2023.10425467",
      imageUrl: "/rmcs.png"
    },
  ],

  education: [
    {
      id: 1,
      level: 'High School Diploma',
      school: 'SMA Regina Pacis Bogor',
      degree: 'Math & Natural Science Major',
      duration: 'Jul 2018 - Jul 2021',
      achievements: ['Best Male Student', 'Youth Science Club'],
      gpa: '93.47/100.00',
      getdotcolor: 'blue-500',
      activities: [
        'Regina Pacis Youth Science Club Former Chairman',
        'Regina Pacis Band & Orchestra',
        'OSN Astronomi',
        'Lomba Karya Ilmiah Remaja LIPI 2019',
        'National Folklore Festival FEB Universitas Indonesia Choir Competition Silver Medalist'
      ]
    },
    {
      id: 2,
      level: "Bachelor's Degree",
      school: 'BINUS University',
      degree: 'Computer Science: Database Technology Streaming',
      duration: 'Sept 2021 - Aug 2025',
      achievements: ['Summa Cum Laude', 'Outstanding Graduate'],
      gpa: '3.92/4.00',
      getdotcolor: 'violet-500',
      activities: [
        'Teaching & Mentoring',
        'Band',
        'Teach for Indonesia (Social Volunteer): Social Awareness Campaign at Lentera School Indonesia'
      ],
      courses: [
        { name: 'Artificial Intelligence', code: 'COMP6065001' },
        { name: 'Big Data Processing', code: 'COMP6579001' },
        { name: 'Computer Networks', code: 'CPEN6247001' },
        { name: 'Data Mining', code: 'COMP6140001' },
        { name: 'Database Design', code: 'COMP6481001' },
        { name: 'Database Technology', code: 'COMP6799001' },
        { name: 'Distributed Cloud Computing', code: 'COMP6710001' },
        { name: 'Geographical Information System', code: 'COMP6590001' },
        { name: 'Scientific Computing', code: 'MATH183001' }
      ]
    },
    {
      id: 3,
      level: "Master's Degree",
      school: 'BINUS Graduate Program',
      degree: 'Magister Teknik Informatika - Fast Track Programme: Information Security Management Streaming',
      duration: 'Sept 2024 - Aug 2026',
      achievements: ['Completed. Awaiting graduation'],
      gpa: '3.99/4.00',
      getdotcolor: 'fuchsia-600',
      volunteering: [
        'Social Volunteer, English Teacher collaborating with myfundaction',
        'Teaching Volunteer about AI and Digital Marketing by Bina Nusantara Computer Club in Massive Online Open Course format'
      ],
      courses: [
        { name: 'Cases on Forensic Accounting and Corporate Governance', code: 'ACCT8008044' },
        { name: 'Enterprise Network', code: 'CPEN8006041' },
        { name: 'Fundamental of Cybersecurity', code: 'COMP8046041' },
        { name: 'IT Risk Management and Audit', code: 'COMP8042041' },
        { name: 'Network and Cyber Security', code: 'CPEN8005041' },
        { name: 'Internet of Things (IoT)', code: 'COMP8041041' }
      ]
    },
  ],

  workExperiences: [
    {
      name: "Data Analyst at Shopee (SPX) Express",
      shortName: "Data Analyst, Shopee SPX Express",
      desc: "I worked as a Data Analyst under the SPX Express business unit, supporting logistics operations across First Mile, Middle Mile, Last Mile, and non-courier fulfillment processes. My responsibilities involved automating operational reports, maintaining Python and Apps Script workflows, managing nationwide trackers, and resolving cross-functional data issues. During this role, I gained hands-on exposure to operational data engineering, logistics analytics, workflow automation, cloud-based script deployment, and stakeholder coordination in a fast-paced environment.",
      mobileDesc: "Supported logistics analytics and automation across SPX Express operations.",
      mobileHighlights: ["Automated operational reports", "Maintained Python and Apps Script workflows", "Resolved cross-functional data issues"],
      image: "/spx.jpg",
      techstack: ["Python", "Data Engineering", "Apps Script", "Deepnote", "Hex", "Scripting & Automation", "Reporting & Analysis", "Data Analytics", "Linux/Bash", "GCP"],
      featuredTechstack: ["Python", "Apps Script", "Data Analytics", "Automation"],
      link: "https://www.linkedin.com/in/aldenaputra",
    },
    {
      name: "Reporting Analyst Intern at Toyota Astra Financial Services (TAFS)",
      shortName: "Reporting Analyst Intern, TAFS",
      desc: "I continued my internship at TAFS as a reporting analyst for approximately 3 months. My responsibilities were in the final stage of data engineering & collection, which involved reporting using the Microsoft Power BI platform and DAX. During this extension, I also deepened my understanding of data governance, data security access, semantic modeling, and data reconciliation.",
      mobileDesc: "Built reporting and semantic analysis work with Power BI and DAX.",
      mobileHighlights: ["Created Power BI reporting outputs", "Worked with DAX and semantic modeling", "Supported data governance and reconciliation"],
      image: "/RATAFS.png",
      techstack: ["Microsoft Power BI", "Reporting & Analysis", "Data Analytics", "DAX", "Data Reconciliation"],
      featuredTechstack: ["Power BI", "DAX", "Data Reconciliation"],
      link: "https://www.linkedin.com/in/aldenaputra",
    },
    {
      name: "Data Scientist Intern at Toyota Astra Financial Services (TAFS) - MSIB Kampus Merdeka",
      shortName: "Data Scientist Intern, TAFS MSIB",
      desc: "As an awardee of the MSIB Kampus Merdeka Batch 6, I was part of PT. Astra International Tbk. in the TAFS subsidiary for approximately 5 months. My project revolved around the HR system and the development of data science & analytics for the company's internal operations.",
      mobileDesc: "Developed HR-focused data science and analytics work during MSIB Batch 6.",
      mobileHighlights: ["Built internal HR analytics outputs", "Applied machine learning workflows", "Used Power BI, Python, and Excel"],
      image: "/msib.jpg",
      techstack: ["Python", "Jupyter Notebook", "Microsoft Power BI", "Machine Learning", "Data Analytics", "DAX", "Microsoft Excel"],
      featuredTechstack: ["Python", "Power BI", "Machine Learning"],
      link: "https://www.linkedin.com/posts/aldenaputra_astracareer-astrakampusmerdeka-msib6-activity-7163822170203258881-tVzq?utm_source=share&utm_medium=member_desktop",
    },
  ],

  socialLinks: {
    github: "https://github.com/aldenaputra",
    linkedin: "https://www.linkedin.com/in/aldenaputra/",
  }
};
