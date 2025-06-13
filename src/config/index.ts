import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Ullas Basavapatna Chandrashekar — Software Engineer",
  author: "Ullas Basavapatna Chandrashekar",
  description:
    "Software Engineer and GWU Master's student skilled in data structures, algorithms, and system design, building scalable and performant web applications through impactful projects.",
  lang: "en",
  siteLogo: "/ullas-small.jpg",
  navLinks: [
    { text: "Experience", href: "#experience" },
    { text: "Projects", href: "#projects" },
    { text: "About", href: "#about" },
    { text: "Skills", href: "#skills" },
    { text: "Education", href: "#education" },
  ],
  socialLinks: [
    { text: "LinkedIn", href: "https://www.linkedin.com/in/ullasbc/" },
    { text: "Github", href: "https://github.com/ullasbc02" },
    { text: "Email", href: "mailto:ullasbc02@gmail.com" },
    { text: "LeetCode", href: "https://leetcode.com/u/ullasbc/" },
  ],
  socialImage: "/zen-og.png",
  canonicalURL: "https://astro-zen.vercel.app",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Ullas Basavapatna Chandrashekar",
    specialty: "Software Engineer",
    summary:
      "Software Engineer and GWU Master's student skilled in data structures, algorithms, and system design, building scalable and performant web applications through impactful projects.",
    email: "ullasbc02@gmail.com",
  },
  experience: [
    {
      company: "Infosys",
      position: "Systems Engineer",
      startDate: "Aug 2022",
      endDate: "Jun 2024",
      summary: [
        "Designed and deployed modular microservices tailored for Belgium and UEFA-specific features, enabling dynamic rollout across 6 European countries; managing 12+ region-based feature flags and accelerated time-to-market by 2 weeks per release",
        "Developed internal developer tools and backend data validation scripts to streamline integration testing across ~30K simulated user sessions per environment; decreased pre-release QA overhead by 60+ engineering hours per cycle and improved sprint reliability",
        "Refactored legacy configuration modules and environment properties for over 22 microservices, cutting manual intervention in release workflows; led to near-zero configuration mismatches and consistent rollout across 6 test beds, supporting ~1.2M weekly active users",
      ],
    },
    {
      company: "Transo",
      position: "Software Intern",
      startDate: "Aug 2021",
      endDate: "Oct 2021",
      summary: [
        "Built a real-time analytics dashboard for a logistics firm, integrating APIs to track 5,000+ daily shipments. Enabled deep insights into delivery status, driver scores, route efficiency, and inventory trends, cutting down transit delays by 18% through dynamic visualisations",
        "Led R&D on carbon footprint reduction, developing a predictive ML model (accuracy: 0.87), analysing vehicle age and engine efficiency. Informed fleet upgrades cut CO₂ emissions by 200+ metric tons/year, equivalent to 50 delivery trucks",
      ],
    },
  ],
  projects: [
    {
      name: "Catg Programming Language",
      summary: "Collaborating first-class functions and list operations in an imperative style. Built a full compiler pipeline (lexer, parser, runtime) and ran 100+ test programs, reducing code verbosity by ~30% for functional-style tasks",
      //linkPreview: "/",
      linkSource: "https://github.com/ullasbc02/catg",
      image: "/catg.png",
    },
    {
      name: "Multi-Client Text Chat System",
      summary: "A chat application supporting multiple clients and real-time messaging.",
      //linkPreview: "/",
      //linkSource: "https://github.com/immois/astro-zen",
      image: "/multichat.jpg",
    },
    {
      name: "MediMate",
      summary: "Developing an AI-driven system analyses patient data to provide diagnostic suggestions, aimed at minimizing documentation time and boosting assessment accuracy by 10 – 15%",
      //linkPreview: "/",
      linkSource: "https://github.com/shrnik/medimate",
      image: "/medimate.webp",
    },
    {
      name: "Design of Animal Intrusion Detection and Rescue System",
      summary: "Developed an AI-driven system to detect and respond to animal intrusions in real-time, aimed at protecting wildlife and minimizing human-wildlife conflict.",
      linkPreview: "https://ijsrset.com/home/issue/view/article.php?id=IJSRSET22991513",
      linkSource: "https://github.com/ullasbc02/Yolo-custom-Object-detection-Animal-Class-",
      image: "/animal.png",
    },
    {
      name: "DevConnector",
      summary: "Created a Social Network application for developers allows to create profiles, view and interact with other developers and post discussions. Used MongoDB indexing to optimise database search queries",
      //linkPreview: "/",
      //linkSource: "https://github.com/ullasbc02/Yolo-custom-Object-detection-Animal-Class-",
      image: "/devConnector.png",
    },

  ],
  about: {
    description: `
      Hi, I’m Ullas Basavapatna Chandrashekar, a software developer and computer science graduate student at George Washington University, with a strong foundation in backend systems, compiler design, and full-stack development. Previously at Infosys, I contributed to telecom-scale microservice rollouts across 6 European regions, where I built internal tools and streamlined backend workflows that improved engineering efficiency and release consistency.

      My work spans a diverse tech stack—Java, Python, C++, React, Node.js, AWS—and includes projects such as developing a custom programming language, building a concurrent chat server, and deploying real-time analytics for logistics operations. I enjoy solving system-level problems, automating complex workflows, and building products that scale.

      Currently, I’m looking for full-time opportunities in software engineering where I can apply my experience to build impactful products and grow alongside innovative teams.
    `,
    image: "/ullas-big.jpg",
  },
  skills: [
    "Java", "Python", "C++", "TypeScript", "JavaScript",
    "React", "Node.js", "Express", "REST APIs",
    "MongoDB", "PostgreSQL", "MySQL",
    "AWS", "Bash", "Git", "Docker",
    "System Design", "OOP", "DSA",
    "Machine Learning (CNN, YOLO, NLP)"
  ],
  education: [
    {
      degree: "M.S. in Computer Science",
      institution: "George Washington University",
      graduation: "May 2026",
    },
    {
      degree: "B.E. in Electronics & Communication",
      institution: "Visvesvaraya Technological University",
      graduation: "July 2022",
    }
  ]
};

// #5755ff
