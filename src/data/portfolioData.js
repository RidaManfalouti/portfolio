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
    description: "Conception, architecture et déploiement en production d'une plateforme d'intelligence artificielle et d'automatisation de processus consulaires à forte volumétrie.",
    achievements: [
      {
        title: "Validation automatisée de documents par OCR & IA Multimodale",
        detail: "Conception et implémentation d'un moteur hybride de vérification documentaire associant l'API Google Gemini 2.5 Flash pour l'extraction sémantique complexe et des règles déterministes strictes en C# (.NET 8). Réduction de 70% du temps de traitement des dossiers consulaires et fiabilisation de la conformité légale."
      },
      {
        title: "Assistant RAG souverain & Recherche Vectorielle d'entreprise",
        detail: "Mise en place d'un chatbot RAG d'entreprise basé sur le LLM Qwen 3 orchestré localement via Ollama, adossé à la base vectorielle ChromaDB pour l'indexation sémantique (Cosine Similarity) et connecté à SQL Server pour la persistance et le fallback relationnel."
      },
      {
        title: "Streaming SSE & Dashboard Décisionnel Temps Réel",
        detail: "Développement des flux de streaming temps réel via Server-Sent Events (SSE) entre l'API ASP.NET Core et l'interface React 18 / TypeScript, incluant un tableau de bord analytique des indicateurs de performance (KPIs) et des taux d'erreur OCR."
      },
      {
        title: "Architecture Découplée & Patterns d'Entreprise",
        detail: "Application rigoureuse des principes Clean Architecture et Domain-Driven Design (DDD). Séparation stricte des commandes et requêtes via le pattern CQRS avec MediatR, Repository Pattern, injection de dépendances et orchestration asynchrone d'arrière-plan."
      },
      {
        title: "Conteneurisation, Résilience & Pipeline DevOps",
        detail: "Conteneurisation modulaire de l'ensemble des briques applicatives avec Docker & Docker Compose (API, ChromaDB, Ollama, SQL Server) et gestion rigoureuse des versions sous Gitflow."
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
    description: "Digitalisation intégrale des opérations d'atelier, ordonnancement de la production industrielle et automatisation de la gestion des stocks métallurgiques.",
    achievements: [
      {
        title: "Plateforme de gestion & d'ordonnancement de production",
        detail: "Conception et développement d'un système web de planification industrielle permettant l'affectation dynamique des ordres de fabrication (OF) aux équipes d'atelier et le suivi en direct de l'avancement de la production."
      },
      {
        title: "Architecture Back-End Spring Boot & API REST sécurisée",
        detail: "Création d'une API RESTful robuste sous Spring Boot 3 et Spring Data JPA, intégrant l'authentification et l'autorisation par tokens JWT (JSON Web Tokens) et une modélisation relationnelle MySQL optimisée pour les requêtes à forte fréquence."
      },
      {
        title: "Interface utilisateur ergonomique & Tableau de bord interactif",
        detail: "Conception d'un tableau de bord de type Kanban interactif sous ReactJS et Tailwind CSS, offrant un suivi visuel des étapes de fabrication, des temps passés et des goulots d'étranglement par poste de travail."
      },
      {
        title: "Gestion des stocks & Traçabilité des matières premières",
        detail: "Mise en œuvre d'un module de suivi des stocks de bobines et métaux avec alertes automatiques de seuil critique et génération d'états d'inventaire détaillés exportables au format Excel et PDF."
      }
    ],
    techs: ["Spring Boot", "React JS", "MySQL", "JWT", "Spring Data JPA", "Tailwind CSS"]
  },
  {
    period: "Juillet 2024 – Août 2024",
    role: "Stagiaire Développeur Web",
    company: "Bureau de Comptabilité",
    location: "Maroc",
    type: "Stage Pratique",
    featured: false,
    description: "Conception et déploiement d'une application de gestion comptable et d'automatisation de la facturation pour un cabinet fiduciaire.",
    achievements: [
      {
        title: "Module de facturation & Calcul automatisé des écritures",
        detail: "Développement d'un générateur de factures normalisées avec calcul dynamique des montants HT/TTC, gestion automatique des taux de TVA et génération instantanée de factures au format PDF."
      },
      {
        title: "Gestion et centralisation des dossiers clients",
        detail: "Création d'un annuaire centralisé des clients et des tiers avec historique complet des transactions financières, suivi des états de paiement (payé, en attente, impayé) et rapprochement comptable."
      },
      {
        title: "Interface utilisateur accessible & Ergonomie métier",
        detail: "Élaboration d'une interface responsive et accessible développée en PHP, JavaScript et Bootstrap 5, optimisée pour une prise en main rapide par les gestionnaires comptables."
      },
      {
        title: "Sécurisation & Maintenance de la base de données",
        detail: "Conception du schéma de base de données sous MySQL avec mise en place de transactions ACID pour garantir l'intégrité des écritures comptables et scripts automatisés de sauvegarde quotidienne."
      }
    ],
    techs: ["PHP", "Bootstrap 5", "JavaScript", "MySQL", "FPDF"]
  },
  {
    period: "Avril 2023",
    role: "Stagiaire Développeur",
    company: "Faculté d’Économie – Beni Mellal",
    location: "Beni Mellal, Maroc",
    type: "Stage Académique",
    featured: false,
    description: "Modernisation des services universitaires et dématérialisation des démarches administratives pour les étudiants et le corps professoral.",
    achievements: [
      {
        title: "Portail intranet de dématérialisation administrative",
        detail: "Conception et développement d'un portail intranet sous Laravel permettant aux étudiants de formuler en ligne leurs demandes d'attestations de scolarité, relevés de notes et conventions de stage."
      },
      {
        title: "Workflow de validation & Espace d'administration",
        detail: "Mise en place d'un workflow d'approbation hiérarchique avec tableau de bord administratif permettant aux agents de traiter, valider ou rejeter les demandes avec signature numérique et horodatage."
      },
      {
        title: "Modélisation MVC & Base de données relationnelle",
        detail: "Structuration du projet selon le patron de conception MVC (Modèle-Vue-Contrôleur) avec Laravel Eloquent ORM, relations polymorphiques et optimisations des requêtes MySQL."
      },
      {
        title: "Système de notifications & Suivi en temps réel",
        detail: "Intégration d'un système d'alerte par email notifiant automatiquement les étudiants à chaque changement de statut de leur dossier, réduisant de 60% les files d'attente aux guichets."
      }
    ],
    techs: ["Laravel", "Blade", "MySQL", "JavaScript", "HTML/CSS"]
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
