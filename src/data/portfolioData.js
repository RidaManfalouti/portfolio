export const personalInfo = {
  name: "Rida MANFALOUTI",
  role: "Ingénieur Logiciel Full Stack & IA",
  location: "Rabat–Salé–Kénitra, Maroc",
  email: "Rida.Manfalouti@outlook.com",
  phone: "+212 653 780 825",
  github: "https://github.com/RidaManfalouti",
  linkedin: "https://linkedin.com/in/rida-manfalouti-992b83389",
  cvPath: "/cv-rida-manfalouti.pdf",
  tagline: "Conception de solutions logicielles robustes, d'architectures modernes et intégration d'Intelligence Artificielle.",
  bio: "Ingénieur diplômé de l’EMSI, spécialisé en Full Stack (Spring Boot, .NET Core, React) et en IA (RAG, LLM, OCR). Passionné par la conception de systèmes distribués fiables, la Clean Architecture et les agents intelligents qui résolvent des problématiques métiers concrètes."
};

export const skillsData = {
  backend: {
    title: "Back-End",
    icon: "Server",
    color: "from-blue-500 to-cyan-400",
    skills: [
      { name: "Spring Boot", level: "Avancé", tag: "Java" },
      { name: ".NET Core 8", level: "Avancé", tag: "C#" },
      { name: "Django", level: "Intermédiaire", tag: "Python" },
      { name: "Laravel", level: "Intermédiaire", tag: "PHP" },
      { name: "Clean Architecture & CQRS", level: "Avancé", tag: "Architecture" },
      { name: "MediatR & Repository Pattern", level: "Avancé", tag: "Design Patterns" }
    ]
  },
  frontend: {
    title: "Front-End",
    icon: "Layout",
    color: "from-cyan-400 to-blue-600",
    skills: [
      { name: "ReactJS", level: "Avancé", tag: "Framework" },
      { name: "TypeScript", level: "Avancé", tag: "Language" },
      { name: "Tailwind CSS", level: "Avancé", tag: "Styling" },
      { name: "JavaScript (ES6+)", level: "Avancé", tag: "Language" },
      { name: "Responsive UI & Animations", level: "Avancé", tag: "UX/UI" },
      { name: "Bootstrap & CSS3", level: "Intermédiaire", tag: "Styling" }
    ]
  },
  aiData: {
    title: "IA & Data",
    icon: "Cpu",
    color: "from-violet-500 to-fuchsia-500",
    skills: [
      { name: "Architecture RAG", level: "Avancé", tag: "GenAI" },
      { name: "LLM (Qwen, Gemini 2.5)", level: "Avancé", tag: "IA" },
      { name: "OCR & Document AI", level: "Avancé", tag: "Extraction" },
      { name: "ChromaDB & Vector Search", level: "Avancé", tag: "Vector DB" },
      { name: "Python", level: "Avancé", tag: "Language" },
      { name: "Ollama & Nomics Embeddings", level: "Avancé", tag: "Local LLM" }
    ]
  },
  databasesTools: {
    title: "Bases de données & Outils",
    icon: "Database",
    color: "from-purple-500 to-indigo-500",
    skills: [
      { name: "SQL Server", level: "Avancé", tag: "RDBMS" },
      { name: "MySQL", level: "Avancé", tag: "RDBMS" },
      { name: "Docker", level: "Intermédiaire", tag: "DevOps" },
      { name: "Git & GitHub", level: "Avancé", tag: "Version Control" },
      { name: "PL/SQL", level: "Intermédiaire", tag: "Database" },
      { name: "VS Code / IntelliJ", level: "Avancé", tag: "IDE" }
    ]
  }
};

export const experiences = [
  {
    period: "Février 2026 – Septembre 2026",
    role: "Stagiaire Développeur .NET Core & Intelligence Artificielle",
    company: "Algo Consulting Group",
    location: "Rabat, Maroc",
    type: "Stage de Fin d'Études",
    featured: true,
    description: "Conception et déploiement de solutions d'intelligence artificielle et d'architectures d'entreprise à haute valeur ajoutée.",
    achievements: [
      {
        title: "Validation automatisée de documents (IA)",
        detail: "Conception et implémentation d'un module d'extraction (OCR) et de conformité documentaire hybride combinant règles déterministes C# et l'API Google Gemini 2.5 Flash, réduisant drastiquement le temps de traitement des dossiers consulaires."
      },
      {
        title: "Chatbot intelligent RAG d'entreprise",
        detail: "Développement d'un assistant conversationnel basé sur Qwen 3 (via Ollama) et base vectorielle ChromaDB, enrichi par une stratégie de repli relationnel sur SQL Server et des flux asynchrones SSE en temps réel."
      },
      {
        title: "Dashboard décisionnel réactif",
        detail: "Interface de pilotage dynamique et d'indicateurs de performance en React / TypeScript interfacée avec une API ASP.NET Core 8."
      },
      {
        title: "Architecture logicielle robuste",
        detail: "Application rigoureuse de la Clean Architecture, CQRS avec MediatR, Repository Pattern, injection de dépendances et orchestration asynchrone d'arrière-plan."
      }
    ],
    techs: [".NET Core 8", "React", "TypeScript", "Gemini 2.5 Flash", "Ollama (Qwen 3)", "ChromaDB", "SQL Server", "MediatR", "Docker", "Git"]
  },
  {
    period: "Juillet 2025 – Août 2025",
    role: "Stagiaire Développeur Full Stack",
    company: "ZAHRI METAL",
    location: "Maroc",
    type: "Stage Technique",
    featured: false,
    description: "Digitalisation des opérations opérationnelles et suivi de production.",
    achievements: [
      {
        title: "Application de gestion & affectation des tâches",
        detail: "Développement d'une plateforme web interne pour la planification, le suivi en direct et l'attribution des tâches aux équipes d'atelier."
      }
    ],
    techs: ["Spring Boot", "React JS", "MySQL", "REST API", "Tailwind CSS"]
  },
  {
    period: "Juillet 2024 – Août 2024",
    role: "Stagiaire Développeur Web",
    company: "Bureau de Comptabilité",
    location: "Maroc",
    type: "Stage Pratique",
    featured: false,
    description: "Modernisation des flux comptables internes.",
    achievements: [
      {
        title: "Outil de gestion comptable & facturation",
        detail: "Création d'un outil web complet pour la centralisation des dossiers clients, l'émission et le pointage automatisé des factures."
      }
    ],
    techs: ["PHP", "Bootstrap", "JavaScript", "MySQL"]
  },
  {
    period: "Avril 2023",
    role: "Stagiaire Développeur",
    company: "Faculté d’Économie – Beni Mellal",
    location: "Beni Mellal, Maroc",
    type: "Stage Académique",
    featured: false,
    description: "Transformation numérique des services universitaires.",
    achievements: [
      {
        title: "Digitalisation des processus administratifs",
        detail: "Mise en place d'un portail intranet pour dématérialiser les demandes d'étudiants et le suivi administratif interne."
      }
    ],
    techs: ["Laravel", "HTML/CSS", "JavaScript", "MySQL"]
  }
];

export const projects = [
  {
    id: "doc-ai-validation",
    title: "Validation automatisée de documents avec IA",
    subtitle: "Système Hybride OCR + LLM (Gemini 2.5 Flash)",
    category: "AI & Full Stack",
    description: "Module de contrôle documentaire et d'extraction automatisée haute précision pour dossiers consulaires. Combine une validation déterministe C# stricte avec le raisonnement multimodal de Google Gemini 2.5 Flash.",
    highlights: [
      "Vérification de conformité en moins de 3 secondes",
      "Architecture hybride C# déterministe + API Gemini 2.5",
      "Traitement asynchrone des flux de documents volumineux"
    ],
    techs: ["C#", ".NET Core 8", "Gemini 2.5 Flash", "OCR", "Clean Architecture", "Docker"],
    featured: true,
    github: "https://github.com/RidaManfalouti",
    liveDemo: null
  },
  {
    id: "rag-assistant",
    title: "Assistant Conversationnel RAG Multi-Sources",
    subtitle: "Chatbot d'entreprise Qwen 3 + ChromaDB",
    category: "AI & Data",
    description: "Assistant RAG connecté à un pipeline d'ingestion documentaire continu. Interroge une base vectorielle ChromaDB couplée au modèle local Qwen 3 (Ollama), avec fallback dynamique sur base relationnelle SQL Server et streaming SSE.",
    highlights: [
      "Recherche sémantique vectorielle augmentée de nomic-embed-text",
      "Streaming en temps réel via Server-Sent Events (SSE)",
      "Stratégie de repli sur SQL Server garantissant 100% de disponibilité"
    ],
    techs: ["Python", "Ollama (Qwen 3)", "ChromaDB", "SQL Server", "SSE", "Docker"],
    featured: true,
    github: "https://github.com/RidaManfalouti",
    liveDemo: null
  },
  {
    id: "analytics-dashboard",
    title: "Dashboard Décisionnel & Pilotage Statistique",
    subtitle: "Supervision Métier en Temps Réel",
    category: "Front-End & Architecture",
    description: "Interface moderne pour l'analyse des métriques d'activité et performances opérationnelles. Connectée à une API ASP.NET Core 8 optimisée via CQRS et MediatR.",
    highlights: [
      "Graphiques interactifs et filtres multi-critères en direct",
      "Séparation stricte des responsabilités (CQRS / MediatR)",
      "Typage strict avec TypeScript et design réactif Tailwind CSS"
    ],
    techs: ["React", "TypeScript", "ASP.NET Core 8", "MediatR", "Tailwind CSS"],
    featured: true,
    github: "https://github.com/RidaManfalouti",
    liveDemo: null
  },
  {
    id: "finance-platform",
    title: "Plateforme de Gestion Financière",
    subtitle: "Suivi Budgétaire & Reporting Automatisé (EMSI)",
    category: "Full Stack",
    description: "Solution web pour la planification financière, le suivi des flux de trésorerie, la ventilation des dépenses et la génération automatique de bilans téléchargeables.",
    highlights: [
      "Calcul dynamique d'indicateurs de rentabilité et alertes budgétaires",
      "Génération automatique de rapports d'audit au format PDF/Excel",
      "Modélisation relationnelle robuste sous MySQL"
    ],
    techs: ["Django", "Python", "MySQL", "JavaScript", "Bootstrap"],
    featured: false,
    github: "https://github.com/RidaManfalouti",
    liveDemo: null
  },
  {
    id: "task-management",
    title: "Gestion & Affectation des Tâches Industrielles",
    subtitle: "Workflow de production d'atelier (ZAHRI METAL)",
    category: "Full Stack",
    description: "Application web interne facilitant le dispatching des ordres de fabrication, l'assignation de tâches aux techniciens et le monitoring des délais de livraison.",
    highlights: [
      "Tableau kanban interactif d'avancement des commandes",
      "Sécurité des rôles (Admin, Chef d'atelier, Opérateur)",
      "Backend Spring Boot modulaire avec API REST documentée"
    ],
    techs: ["Spring Boot", "React JS", "MySQL", "REST API"],
    featured: false,
    github: "https://github.com/RidaManfalouti",
    liveDemo: null
  },
  {
    id: "construction-platform",
    title: "Application Web de Construction & BTP",
    subtitle: "Portail de commande de prestations et matériaux (OFPPT)",
    category: "Web & E-Commerce",
    description: "Plateforme digitale intuitive permettant aux clients de configurer des devis, commander des prestations d'ingénierie et suivre les chantiers en temps réel.",
    highlights: [
      "Tunnel de commande devis/prestation interactif",
      "Gestionnaire de catalogue et suivi de facturation",
      "Intégration fluide Laravel API et frontend React"
    ],
    techs: ["Laravel", "ReactJS", "MySQL", "Bootstrap"],
    featured: false,
    github: "https://github.com/RidaManfalouti",
    liveDemo: null
  }
];

export const education = [
  {
    period: "2023 – 2026",
    school: "EMSI – Rabat",
    diploma: "Ingénierie en Informatique et Réseaux",
    description: "Formation d'ingénieur d'État : architectures logicielles, systèmes distribués, IA, Cloud & DevOps, sécurité des réseaux."
  },
  {
    period: "2021 – 2023",
    school: "ISTA NTIC – Beni Mellal (OFPPT)",
    diploma: "Technicien Spécialisé en Développement Digital",
    description: "Fondations en développement logiciel, algorithmique, programmation web et bases de données relationnelles."
  }
];

export const certifications = [
  { name: "Oracle Certified Professional: Java SE 17 Developer", issuer: "Oracle", badge: "OCP Java" },
  { name: "L'essentiel de Spring Boot", issuer: "LinkedIn Learning", badge: "Spring" },
  { name: "Git & GitHub", issuer: "Google (Coursera)", badge: "DevOps" },
  { name: "React Native / React Basics / Android", issuer: "Meta (Coursera)", badge: "Mobile & Web" },
  { name: "Java Object-Oriented Programming", issuer: "University of Pennsylvania (Coursera)", badge: "OOP" }
];
