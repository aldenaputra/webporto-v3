import type { Project } from "./types";

export const projects: Project[] = [
  // Featured Projects
  {
    slug: "wstg-security-testing",
    title: "WSTGv4 OWASP Scripting and Testing Project",
    description:
      "Developed comprehensive Python scripts and AI-assisted security tools to systematically execute the entire OWASP Web Security Testing Guide (WSTGv4) checklist. Automated end-to-end security testing procedures, vulnerability detection, and generated detailed testing reports to validate web application security posture.",
    mobileDescription:
      "Automated OWASP WSTG security checks with Python and AI-assisted tooling.",
    mobileHighlights: [
      "Built scripted security test workflows",
      "Mapped checks to WSTGv4 coverage",
      "Generated structured testing reports",
    ],
    image: {
      src: "/wstg.png",
      alt: "OWASP WSTG Security Testing workflow interface",
    },
    stack: [
      "Python",
      "OWASP",
      "Cybersecurity",
      "Security Testing",
      "Web Security",
      "AI-Assisted Tools",
    ],
    featured: true,
    links: [
      {
        label: "GitHub",
        url: "https://github.com/aldenaputra/WSTG-Script-and-Master-Report-by-Alden-and-Kenneth.git",
      },
    ],
  },
  {
    slug: "network-cybersecurity-labs",
    title: "Network and Cybersecurity Labs",
    description:
      "Completed four in-depth cybersecurity assignments: (1) Penetration Testing Report on Kioptrix Level 1 System with vulnerability findings and remediation recommendations; (2) Memory Forensics Analysis on Cridex Malware using Volatility 2.0 for malware isolation and documentation; (3) TLS/SSL Decryption Analysis using Wireshark demonstrating protocol decryption techniques; (4) Hands-on Pyshark CLI-based Wireshark documentation and practical implementation.",
    mobileDescription:
      "Four security labs covering penetration testing, forensics, TLS analysis, and Pyshark workflows.",
    mobileHighlights: [
      "Documented findings and remediation",
      "Analyzed malware memory artifacts",
      "Practiced packet decryption workflows",
    ],
    image: {
      src: "/network.png",
      alt: "Network and cybersecurity lab analysis",
    },
    stack: [
      "Penetration Testing",
      "Wireshark",
      "Pyshark",
      "Volatility",
      "Memory Forensics",
      "TLS/SSL",
      "Network Analysis",
    ],
    featured: true,
    links: [
      {
        label: "Documentation",
        url: "https://docs.google.com/document/d/1cTU-OmhIXidmQCD88Kr6X7nnrVfiO_LB0pyc3Ld5EoE/edit?usp=sharing",
      },
    ],
  },
  {
    slug: "enterprise-network-simulation",
    title: "Enterprise Network Simulation",
    description:
      "Designed and simulated an enterprise-level network architecture with comprehensive metrics calculation including MTTR (Mean Time To Repair). Implemented GNS3 network environment with DHCP server configuration using keepalived, integrated DNS backup mechanisms, and implemented network security measures to simulate real-world enterprise infrastructure.",
    mobileDescription:
      "Designed a simulated enterprise network with redundancy, security, and operational metrics.",
    mobileHighlights: [
      "Built GNS3 enterprise topology",
      "Configured DHCP and DNS backup",
      "Calculated infrastructure recovery metrics",
    ],
    image: {
      src: "/gns.png",
      alt: "Enterprise network topology diagram",
    },
    stack: [
      "GNS3",
      "Network Design",
      "Network Security",
      "DHCP",
      "DNS",
      "Cisco Packet Tracer",
    ],
    featured: true,
    links: [
      {
        label: "Documentation",
        url: "https://docs.google.com/document/d/1nxVayDarPnyCfkl1QgNnpFR8zBuHkz8d_IhB1w4vN0E/edit?usp=sharing",
      },
    ],
  },
  // Other Projects
  {
    slug: "clustering-classification-bigdata",
    title: "Data Clustering & Classification on Multiple Datasets",
    description:
      "Performed data clustering on trash pollution dataset using k-means model projected onto scatter plot and classification model on airplane schedule delay dataset in Cloudera Quickstart VM (Jupyter Notebook).",
    mobileDescription:
      "Applied clustering and classification models in a Cloudera big data environment.",
    mobileHighlights: [
      "Modeled trash pollution clusters",
      "Classified flight delay data",
      "Visualized results in notebooks",
    ],
    image: {
      src: "/vis.png",
      alt: "Data clustering and classification visualization",
    },
    stack: [
      "Python",
      "Jupyter Notebook",
      "Cloudera",
      "Machine Learning",
      "Apache Spark",
      "K-Means",
      "Classification",
    ],
    featured: false,
    links: [
      {
        label: "GitHub",
        url: "https://github.com/aldenaputra/clustering-and-classification.git",
      },
    ],
  },
  {
    slug: "sarimax-sales-forecasting",
    title: "SARIMAX Prediction Model on Online Retail Dataset",
    description:
      "Conducted exploratory data analysis (EDA) of an online retail dataset and executed model training to predict sales using SARIMAX algorithm in Python (Google Colaboratory).",
    mobileDescription:
      "Forecasted online retail sales with EDA and SARIMAX model training in Python.",
    mobileHighlights: [
      "Prepared retail time-series data",
      "Trained SARIMAX forecasting model",
      "Worked in Google Colab",
    ],
    image: {
      src: "/sarimax.png",
      alt: "SARIMAX sales forecasting model results",
    },
    stack: [
      "Python",
      "Pandas",
      "Machine Learning",
      "Time Series",
      "SARIMAX",
      "Google Colab",
      "EDA",
    ],
    featured: false,
    links: [
      {
        label: "GitHub",
        url: "https://github.com/aldenaputra/SARIMAX-prediction-model.git",
      },
    ],
  },
  {
    slug: "svm-kernel-comparison",
    title: "Comparison of 4 SVM Kernels Performances in Aviation Satisfaction Dataset",
    description:
      "Conducted a complete process of KDD (Knowledge Discovery in Databases): exploratory data analysis (EDA), data preprocessing, outlier analysis, model fitting (classification prediction analysis), model evaluation, and permutation importance between SVM kernels (linear, RBF, polynomial, and sigmoid) on an aviation satisfaction dataset using Python.",
    mobileDescription:
      "Compared four SVM kernels for aviation satisfaction classification.",
    mobileHighlights: [
      "Ran full KDD workflow",
      "Evaluated four SVM kernels",
      "Used permutation importance",
    ],
    image: {
      src: "/datamining.png",
      alt: "SVM kernel comparison analysis visualization",
    },
    stack: [
      "Python",
      "Pandas",
      "Machine Learning",
      "SVM",
      "Data Mining",
      "KDD",
      "Classification",
    ],
    featured: false,
    links: [
      {
        label: "GitHub",
        url: "https://github.com/aldenaputra/svm-4-kernel-comparison.git",
      },
    ],
  },
  {
    slug: "sparksql-data-visualization",
    title: "SparkSQL Data Visualization in Jupyter Notebook",
    description:
      "Performed basic data visualization and queries on farm dataset using SparkSQL (PySpark) in Jupyter Notebook on Cloudera Quickstart Virtual Machine.",
    mobileDescription:
      "Queried and visualized farm data using SparkSQL in Jupyter Notebook.",
    mobileHighlights: [
      "Used SparkSQL queries",
      "Visualized dataset patterns",
      "Worked inside Cloudera VM",
    ],
    image: {
      src: "/clasclus.png",
      alt: "SparkSQL data visualization charts",
    },
    stack: [
      "Python",
      "SparkSQL",
      "PySpark",
      "Jupyter Notebook",
      "Cloudera",
      "Big Data",
      "Data Visualization",
    ],
    featured: false,
    links: [
      {
        label: "GitHub",
        url: "https://github.com/aldenaputra/data-visualization-in-jupyter-spark-cloudera.git",
      },
    ],
  },
  {
    slug: "plato-ui-ux-prototype",
    title: "PlaTo UI/UX Prototyping",
    description:
      "Designed UI and conducted UX testing via survey and prototype testing for an IoT application featuring automatic plant nursery remote control functionality.",
    mobileDescription: "Designed and tested an IoT plant nursery app prototype.",
    mobileHighlights: [
      "Created UI prototype in Figma",
      "Ran survey and prototype testing",
      "Focused on remote nursery control",
    ],
    image: {
      src: "/plato.png",
      alt: "PlaTo IoT app UI/UX prototype",
    },
    stack: ["Figma", "UI Prototyping", "UX Testing", "IoT", "User Research"],
    featured: false,
    links: [
      {
        label: "Figma",
        url: "https://www.figma.com/file/UQahPrf3riu2UKva5k0csY/HCI---AoL-Case?type=design&node-id=101%3A2&mode=design&t=QbNj488Xs4JhnUr4-1",
      },
    ],
  },
  {
    slug: "travail-e-ticketing",
    title: "Travail: Travel and Rail E-Ticketing Website",
    description:
      "Led a software engineering project building a fully functional full-stack train e-ticketing website using Laravel framework with Vue.js frontend and MySQL database.",
    mobileDescription: "Led a Laravel full-stack train e-ticketing website project.",
    mobileHighlights: [
      "Led the software engineering project",
      "Built booking and ticketing flow",
      "Used Laravel with Vue and MySQL",
    ],
    image: {
      src: "/travail.png",
      alt: "Travail e-ticketing website interface",
    },
    stack: [
      "Laravel",
      "Vue.js",
      "MySQL",
      "PHP",
      "HTML",
      "CSS",
      "JavaScript",
      "Git",
      "Figma",
    ],
    featured: false,
    links: [
      {
        label: "GitHub",
        url: "https://github.com/VzGarnet/Travail.git",
      },
    ],
  },
  {
    slug: "nextjs-portfolio-website",
    title: "Portfolio Website using Next.js",
    description:
      "Created and deployed a portfolio website using the Next.js framework and free hosting services from Vercel.",
    mobileDescription:
      "Built and deployed a personal portfolio website with Next.js and Vercel.",
    mobileHighlights: [
      "Developed responsive portfolio UI",
      "Used Next.js and TypeScript",
      "Deployed through Vercel",
    ],
    image: {
      src: "/porto.png",
      alt: "Next.js portfolio website preview",
    },
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel", "Git"],
    featured: false,
    links: [
      {
        label: "GitHub",
        url: "https://github.com/aldenaputra/webportoexercise.git",
      },
    ],
  },
  {
    slug: "karenjet-database-design",
    title: "KarenJET Database Design Project",
    description:
      "Led an enterprise database design project, developing a mitigation plan for system alteration and recovery for specific scenarios involving database transactions. Performed strict normalization from 1NF to 5NF and created diagrams to elaborate the database system.",
    mobileDescription:
      "Led an enterprise database design project with normalization and recovery planning.",
    mobileHighlights: [
      "Designed enterprise database model",
      "Normalized schema from 1NF to 5NF",
      "Created alteration and recovery plan",
    ],
    image: {
      src: "/Database Design.png",
      alt: "KarenJET database design diagrams",
    },
    stack: [
      "Database Design",
      "Normalization",
      "Visual Paradigm",
      "Excel",
      "Figma",
      "ERD",
    ],
    featured: false,
    links: [
      {
        label: "Documentation",
        url: "https://binusianorg-my.sharepoint.com/personal/alden_putra_binus_ac_id/_layouts/15/guestaccess.aspx?share=Ea_I6XQHFexNo-1RpLEk5MwBu3iwi47HMqHfiuZeruUoZg&e=zqngRY",
      },
    ],
  },
  {
    slug: "java-crud-application",
    title: "Java CRUD + Search Text-Based Application",
    description:
      "Designed a Java text-based application implementing the 4 main principles of object-oriented programming, input validation, and CRUD + search algorithm.",
    mobileDescription: "Built a Java text-based CRUD app with validation and search.",
    mobileHighlights: [
      "Implemented OOP principles",
      "Added CRUD and search logic",
      "Validated user input",
    ],
    image: {
      src: "/javacruds.png",
      alt: "Java CRUD application console interface",
    },
    stack: [
      "Java",
      "OOP",
      "CRUD",
      "Eclipse IDE",
      "Input Validation",
      "Search Algorithm",
    ],
    featured: false,
    links: [
      {
        label: "GitHub",
        url: "https://github.com/aldenaputra/java-crud-search.git",
      },
    ],
  },
  {
    slug: "algorithm-design-c",
    title: "Algorithm Design in C",
    description:
      "Constructed several algorithms in C to solve logical problems and created flowcharts to describe the algorithm schemes.",
    mobileDescription:
      "Solved logic problems with C algorithms and flowchart documentation.",
    mobileHighlights: [
      "Designed multiple algorithms",
      "Documented logic with flowcharts",
      "Practiced C problem solving",
    ],
    image: {
      src: "/algoprog.png",
      alt: "Algorithm flowchart and C code",
    },
    stack: ["C/C++", "Algorithms", "Flowcharts", "Problem Solving", "Dev-C++"],
    featured: false,
    links: [
      {
        label: "GitHub",
        url: "https://github.com/aldenaputra/algoprog_AoL.git",
      },
    ],
  },
  {
    slug: "computer-network-prototype",
    title: "Computer Network Design & Prototyping",
    description:
      "Prototyped a computer network for a specific case study and performed comprehensive network simulation using Cisco Packet Tracer.",
    mobileDescription: "Prototyped and simulated a case-study computer network.",
    mobileHighlights: [
      "Designed network topology",
      "Simulated in Cisco Packet Tracer",
      "Documented case-study requirements",
    ],
    image: {
      src: "/cn.png",
      alt: "Computer network topology prototype",
    },
    stack: ["Cisco Packet Tracer", "Network Design", "Network Prototyping", "Figma"],
    featured: false,
    links: [
      {
        label: "Documentation",
        url: "https://binusianorg-my.sharepoint.com/personal/alden_putra_binus_ac_id/_layouts/15/guestaccess.aspx?share=EW2O2MDH3w1Nofp_3QBWyzsBNHT_M0GTICEKxs568-y1Bg&e=z31jAs",
      },
    ],
  },
];
