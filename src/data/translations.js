export const translations = {
  fr: {
    // Navbar
    nav: {
      home: 'Accueil',
      skills: 'Compétences',
      experience: 'Expériences & Architecture',
      projects: 'Projets',
      contact: 'Contact',
      role: 'Ingénieur Full Stack & IA',
      cv: 'CV',
      lightMode: 'Mode Clair',
      darkMode: 'Mode Sombre',
      openMenu: 'Ouvrir le menu',
      closeMenu: 'Fermer le menu',
    },
    // Hero
    hero: {
      availability: 'Disponible pour un poste d’ingénieur logiciel',
      greeting: 'Rida Manfalouti',
      role: 'Ingénieur Full Stack & Intelligence Artificielle',
      tagline: 'Diplômé de l\'EMSI Rabat, je conçois des architectures logicielles modulaires et performantes, enrichies par des intégrations d\'intelligence artificielle appliquées aux besoins métier.',
      exploreProjects: 'Explorer mes projets',
      downloadCV: 'Télécharger le CV',
      profileTitle: 'Diplôme d\'Ingénieur d\'État',
      school: 'EMSI Rabat — Promo 2026',
      degreeLevel: 'Bac + 5',
      presentation: 'Fraîchement diplômé en génie informatique, j’allie de solides compétences en développement logiciel à une expérience concrète acquise en stage. Orienté qualité et maintenabilité, je conçois des systèmes découplés et fiables, prêts à être déployés en production.',
      pillarStackLabel: 'Stack de référence :',
      pillarStackValue: '.NET Core, Spring Boot, React',
      pillarAiLabel: 'Spécialisation IA :',
      pillarAiValue: 'Pipelines RAG, LLM & OCR',
      pillarStatusLabel: 'Disponibilité :',
      pillarStatusValue: 'Immédiate pour opportunité CDI',
      readyToJoin: 'Prêt à intégrer vos équipes',
      mobility: 'Mobilité nationale',
    },
    // Skills
    skills: {
      badge: 'Stack Technologique',
      title: 'Compétences Techniques',
      subtitle: 'Une expertise combinant la rigueur du développement back-end d\'entreprise, l\'ergonomie front-end moderne et l\'intégration de modèles d\'IA générative avancés.',
      allFilter: 'Tout',
      categories: {
        back: 'Back-End',
        front: 'Front-End',
        ai: 'IA & Data',
        db: 'Bases de données & Outils',
      },
      centerRole: 'Full Stack & IA',
      level: 'Niveau',
      productionReady: 'Production Ready',
      certBadge: 'Accréditations & Certifications',
      certTitle: 'Validations Officielles',
      certSubtitle: 'Des certifications reconnues mondialement validant des compétences en Java, Spring Boot, architecture objet et pratiques Git.',
    },
    // Experience
    experience: {
      badge: 'Parcours & Architecture',
      title: 'Expériences Professionnelles',
      subtitle: 'Mise en œuvre d\'architectures Clean Architecture, déploiement d\'agents RAG et développement d\'applications d\'entreprise robustes.',
      featuredRibbon: 'Stage Clé IA & .NET',
      architectureDiagram: 'Diagramme d\'Architecture',
      missionsAndDetails: 'Missions & Détails',
      techVisualization: 'Visualisation Technique :',
      stackLabel: 'Stack :',
      educationTitle: 'Formation Académique',
      stages: [
        {
          period: 'Février 2026 – Septembre 2026',
          role: 'Stagiaire Développeur .NET Core & Intelligence Artificielle',
          company: 'Algo Consulting Group',
          location: 'Rabat, Maroc',
          type: 'Stage de Fin d\'Études (PFE)',
          description: 'Conception, architecture et déploiement en production d\'une plateforme d\'intelligence artificielle et d\'automatisation de processus consulaires à forte volumétrie.',
          achievements: [
            {
              title: 'Validation automatisée de documents par OCR & IA Multimodale',
              detail: 'Conception et implémentation d\'un moteur hybride de vérification documentaire associant l\'API Google Gemini 2.5 Flash pour l\'extraction sémantique complexe et des règles déterministes strictes en C# (.NET 8). Réduction de 70% du temps de traitement des dossiers consulaires et fiabilisation de la conformité légale.'
            },
            {
              title: 'Assistant RAG souverain & Recherche Vectorielle d\'entreprise',
              detail: 'Mise en place d\'un chatbot RAG d\'entreprise basé sur le LLM Qwen 3 orchestré localement via Ollama, adossé à la base vectorielle ChromaDB pour l\'indexation sémantique (Cosine Similarity) et connecté à SQL Server pour la persistance et le fallback relationnel.'
            },
            {
              title: 'Streaming SSE & Dashboard Décisionnel Temps Réel',
              detail: 'Développement des flux de streaming temps réel via Server-Sent Events (SSE) entre l\'API ASP.NET Core et l\'interface React 18 / TypeScript, incluant un tableau de bord analytique des indicateurs de performance (KPIs) et des taux d\'erreur OCR.'
            },
            {
              title: 'Architecture Découplée & Patterns d\'Entreprise',
              detail: 'Application rigoureuse des principes Clean Architecture et Domain-Driven Design (DDD). Séparation stricte des commandes et requêtes via le pattern CQRS avec MediatR, Repository Pattern, injection de dépendances et orchestration asynchrone d\'arrière-plan.'
            },
            {
              title: 'Conteneurisation, Résilience & Pipeline DevOps',
              detail: 'Conteneurisation modulaire de l\'ensemble des briques applicatives avec Docker & Docker Compose (API, ChromaDB, Ollama, SQL Server) et gestion rigoureuse des versions sous Gitflow.'
            }
          ],
          techs: ['.NET Core 8', 'React', 'TypeScript', 'Gemini 2.5 Flash', 'Ollama (Qwen 3)', 'ChromaDB', 'SQL Server', 'MediatR', 'Docker', 'Git']
        },
        {
          period: 'Juillet 2025 – Août 2025',
          role: 'Stagiaire Développeur Full Stack',
          company: 'ZAHRI METAL',
          location: 'Maroc',
          type: 'Stage Technique',
          description: 'Digitalisation intégrale des opérations d\'atelier, ordonnancement de la production industrielle et automatisation de la gestion des stocks métallurgiques.',
          achievements: [
            {
              title: 'Plateforme de gestion & d\'ordonnancement de production',
              detail: 'Conception et développement d\'un système web de planification industrielle permettant l\'affectation dynamique des ordres de fabrication (OF) aux équipes d\'atelier et le suivi en direct de l\'avancement de la production.'
            },
            {
              title: 'Architecture Back-End Spring Boot & API REST sécurisée',
              detail: 'Création d\'une API RESTful robuste sous Spring Boot 3 et Spring Data JPA, intégrant l\'authentification et l\'autorisation par tokens JWT (JSON Web Tokens) et une modélisation relationnelle MySQL optimisée pour les requêtes à forte fréquence.'
            },
            {
              title: 'Interface utilisateur ergonomique & Tableau de bord interactif',
              detail: 'Conception d\'un tableau de bord de type Kanban interactif sous ReactJS et Tailwind CSS, offrant un suivi visuel des étapes de fabrication, des temps passés et des goulots d\'étranglement par poste de travail.'
            },
            {
              title: 'Gestion des stocks & Traçabilité des matières premières',
              detail: 'Mise en œuvre d\'un module de suivi des stocks de bobines et métaux avec alertes automatiques de seuil critique et génération d\'états d\'inventaire détaillés exportables au format Excel et PDF.'
            }
          ],
          techs: ['Spring Boot', 'React JS', 'MySQL', 'JWT', 'Spring Data JPA', 'Tailwind CSS']
        },
        {
          period: 'Juillet 2024 – Août 2024',
          role: 'Stagiaire Développeur Web',
          company: 'Bureau de Comptabilité',
          location: 'Maroc',
          type: 'Stage Pratique',
          description: 'Conception et déploiement d\'une application de gestion comptable et d\'automatisation de la facturation pour un cabinet fiduciaire.',
          achievements: [
            {
              title: 'Module de facturation & Calcul automatisé des écritures',
              detail: 'Développement d\'un générateur de factures normalisées avec calcul dynamique des montants HT/TTC, gestion automatique des taux de TVA et génération instantanée de factures au format PDF.'
            },
            {
              title: 'Gestion et centralisation des dossiers clients',
              detail: 'Création d\'un annuaire centralisé des clients et des tiers avec historique complet des transactions financières, suivi des états de paiement (payé, en attente, impayé) et rapprochement comptable.'
            },
            {
              title: 'Interface utilisateur accessible & Ergonomie métier',
              detail: 'Élaboration d\'une interface responsive et accessible développée en PHP, JavaScript et Bootstrap 5, optimisée pour une prise en main rapide par les gestionnaires comptables.'
            },
            {
              title: 'Sécurisation & Maintenance de la base de données',
              detail: 'Conception du schéma de base de données sous MySQL avec mise en place de transactions ACID pour garantir l\'intégrité des écritures comptables et scripts automatisés de sauvegarde quotidienne.'
            }
          ],
          techs: ['PHP', 'Bootstrap 5', 'JavaScript', 'MySQL', 'FPDF']
        },
        {
          period: 'Avril 2023',
          role: 'Stagiaire Développeur',
          company: 'Faculté d’Économie – Beni Mellal',
          location: 'Beni Mellal, Maroc',
          type: 'Stage Académique',
          description: 'Modernisation des services universitaires et dématérialisation des démarches administratives pour les étudiants et le corps professoral.',
          achievements: [
            {
              title: 'Portail intranet de dématérialisation administrative',
              detail: 'Conception et développement d\'un portail intranet sous Laravel permettant aux étudiants de formuler en ligne leurs demandes d\'attestations de scolarité, relevés de notes et conventions de stage.'
            },
            {
              title: 'Workflow de validation & Espace d\'administration',
              detail: 'Mise en place d\'un workflow d\'approbation hiérarchique avec tableau de bord administratif permettant aux agents de traiter, valider ou rejeter les demandes avec signature numérique et horodatage.'
            },
            {
              title: 'Modélisation MVC & Base de données relationnelle',
              detail: 'Structuration du projet selon le patron de conception MVC (Modèle-Vue-Contrôleur) avec Laravel Eloquent ORM, relations polymorphiques et optimisations des requêtes MySQL.'
            },
            {
              title: 'Système de notifications & Suivi en temps réel',
              detail: 'Intégration d\'un système d\'alerte par email notifiant automatiquement les étudiants à chaque changement de statut de leur dossier, réduisant de 60% les files d\'attente aux guichets.'
            }
          ],
          techs: ['Laravel', 'Blade', 'MySQL', 'JavaScript', 'HTML/CSS']
        }
      ]
    },
    // Projects
    projects: {
      badge: 'Portfolio & Prototypes',
      title: 'Projets Phares & Architectures',
      subtitle: 'Chaque projet dispose de son diagramme d\'architecture interactif complet détaillant les couches logicielles, les flux de données et le rôle de chaque technologie.',
      openExplorer: 'Ouvrir l\'Explorateur d\'Architecture Global (6 Projets)',
      allCategories: 'Tous les projets',
      aiCategory: 'IA & Data',
      fullstackCategory: 'Full Stack',
      frontendCategory: 'Front-End',
      archBtn: 'Architecture & Flux Technique',
    },
    // Contact
    contact: {
      badge: 'Entrons en contact',
      title: 'Discutons de vos projets',
      subtitle: 'Vous avez un projet innovant, une opportunité de poste ou souhaitez échanger autour d\'architectures Full Stack et d\'IA ? Envoyez-moi un message.',
      directContact: 'Coordonnées Directes',
      email: 'Email',
      location: 'Localisation',
      phone: 'Téléphone',
      networks: 'Réseaux professionnels :',
      nameLabel: 'Votre nom',
      emailLabel: 'Votre email',
      subjectLabel: 'Sujet',
      messageLabel: 'Message',
      namePlaceholder: 'ex: Jean Dupont',
      emailPlaceholder: 'jean.dupont@example.com',
      subjectPlaceholder: 'Opportunité de poste / Collaboration projet',
      messagePlaceholder: 'Décrivez votre besoin, projet ou offre...',
      sendBtn: 'Envoyer le message',
      successTitle: 'Message préparé avec succès !',
      successDesc: 'Votre client de messagerie s\'est ouvert pour transmettre le message directement à Rida.',
      sendAnother: 'Envoyer un autre message',
    },
    // Footer
    footer: {
      copyright: 'Tous droits réservés.',
      builtWith: 'Développé avec',
    }
  },

  en: {
    // Navbar
    nav: {
      home: 'Home',
      skills: 'Skills',
      experience: 'Experience & Architecture',
      projects: 'Projects',
      contact: 'Contact',
      role: 'Full Stack & AI Engineer',
      cv: 'Resume',
      lightMode: 'Light Mode',
      darkMode: 'Dark Mode',
      openMenu: 'Open menu',
      closeMenu: 'Close menu',
    },
    // Hero
    hero: {
      availability: 'Available for Software Engineering positions',
      greeting: 'Rida Manfalouti',
      role: 'Full Stack & Artificial Intelligence Engineer',
      tagline: 'Engineering graduate from EMSI Rabat, specializing in modular and high-performance software architectures, enriched by real-world AI integrations.',
      exploreProjects: 'Explore my projects',
      downloadCV: 'Download Resume',
      profileTitle: 'State Engineering Degree',
      school: 'EMSI Rabat — Class of 2026',
      degreeLevel: 'Master\'s Equiv.',
      presentation: 'Freshly graduated in Computer Science and Networks, I combine rigorous software engineering fundamentals with hands-on enterprise internship experience. Focused on quality and maintainability, I design decoupled and resilient systems ready for production.',
      pillarStackLabel: 'Core Stack:',
      pillarStackValue: '.NET Core, Spring Boot, React',
      pillarAiLabel: 'AI Specialization:',
      pillarAiValue: 'RAG Pipelines, LLMs & OCR',
      pillarStatusLabel: 'Availability:',
      pillarStatusValue: 'Immediate for Full-Time Roles',
      readyToJoin: 'Ready to contribute from Day 1',
      mobility: 'Nationwide & Remote mobility',
    },
    // Skills
    skills: {
      badge: 'Technology Stack',
      title: 'Technical Skills',
      subtitle: 'Expertise combining enterprise back-end rigor, modern front-end ergonomics, and advanced generative AI integrations.',
      allFilter: 'All',
      categories: {
        back: 'Back-End',
        front: 'Front-End',
        ai: 'AI & Data',
        db: 'Databases & Tools',
      },
      centerRole: 'Full Stack & AI',
      level: 'Level',
      productionReady: 'Production Ready',
      certBadge: 'Accreditations & Certifications',
      certTitle: 'Official Certifications',
      certSubtitle: 'Globally recognized credentials validating expertise in Java, Spring Boot, Object-Oriented Architecture, and Git practices.',
    },
    // Experience
    experience: {
      badge: 'Career & Architecture',
      title: 'Professional Experience',
      subtitle: 'Implementation of Clean Architecture, deployment of RAG agents, and development of robust enterprise applications.',
      featuredRibbon: 'Key AI & .NET Internship',
      architectureDiagram: 'Architecture Flowchart',
      missionsAndDetails: 'Missions & Details',
      techVisualization: 'Technical Visualization:',
      stackLabel: 'Stack:',
      educationTitle: 'Academic Education',
      stages: [
        {
          period: 'February 2026 – September 2026',
          role: '.NET Core & Artificial Intelligence Intern',
          company: 'Algo Consulting Group',
          location: 'Rabat, Morocco',
          type: 'Final Year Internship (PFE)',
          description: 'Design, architecture, and production deployment of an AI-driven platform for high-volume consular document processing automation.',
          achievements: [
            {
              title: 'Automated Document Verification with Multimodal OCR & AI',
              detail: 'Architected and built a hybrid document verification engine pairing Google Gemini 2.5 Flash API for semantic analysis with strict deterministic C# (.NET 8) business rules. Cut consular dossier processing turnaround by 70% with high compliance.'
            },
            {
              title: 'Enterprise Sovereign RAG Assistant & Vector Search',
              detail: 'Built an enterprise RAG assistant powered by Qwen 3 (orchestrated via local Ollama), ChromaDB vector database (Cosine Similarity), and SQL Server relational fallback.'
            },
            {
              title: 'Real-Time SSE Streaming & Executive Dashboard',
              detail: 'Developed real-time streaming pipelines via Server-Sent Events (SSE) between ASP.NET Core API and React 18 / TypeScript frontend, including analytics for OCR accuracy and KPIs.'
            },
            {
              title: 'Decoupled Architecture & Enterprise Patterns',
              detail: 'Rigorous implementation of Clean Architecture and DDD. Strict command/query separation via CQRS pattern with MediatR, Repository Pattern, and asynchronous background queues.'
            },
            {
              title: 'Containerization, Resilience & DevOps Pipeline',
              detail: 'Containerized all microservices using Docker & Docker Compose (API, ChromaDB, Ollama, SQL Server) with version control under Gitflow.'
            }
          ],
          techs: ['.NET Core 8', 'React', 'TypeScript', 'Gemini 2.5 Flash', 'Ollama (Qwen 3)', 'ChromaDB', 'SQL Server', 'MediatR', 'Docker', 'Git']
        },
        {
          period: 'July 2025 – August 2025',
          role: 'Full Stack Developer Intern',
          company: 'ZAHRI METAL',
          location: 'Morocco',
          type: 'Technical Internship',
          description: 'Full digitization of workshop operations, industrial production scheduling, and automated metallurgical inventory management.',
          achievements: [
            {
              title: 'Production Scheduling & Workshop Management System',
              detail: 'Designed and deployed an industrial web platform for real-time manufacturing order dispatching and operational progress tracking across factory teams.'
            },
            {
              title: 'Secure Spring Boot Backend Architecture & REST API',
              detail: 'Constructed an enterprise-grade REST API with Spring Boot 3, Spring Data JPA, JWT authentication, and MySQL relational modeling tuned for high concurrency.'
            },
            {
              title: 'Interactive Kanban Dashboard & UI Ergonomics',
              detail: 'Engineered a real-time Kanban dashboard in ReactJS & Tailwind CSS, displaying production stages, machine cycle times, and operational bottlenecks.'
            },
            {
              title: 'Raw Material Inventory & Traceability Control',
              detail: 'Built an inventory module tracking metal coil consumption with threshold alarms and automated Excel/PDF stock ledger exports.'
            }
          ],
          techs: ['Spring Boot', 'React JS', 'MySQL', 'JWT', 'Spring Data JPA', 'Tailwind CSS']
        },
        {
          period: 'July 2024 – August 2024',
          role: 'Web Developer Intern',
          company: 'Accounting Firm',
          location: 'Morocco',
          type: 'Practical Internship',
          description: 'Design and deployment of an internal accounting management and billing automation web application for a fiduciary firm.',
          achievements: [
            {
              title: 'Automated Billing & Ledger Calculation Engine',
              detail: 'Created a standardized billing generator calculating dynamic pre-tax/tax-inclusive totals, automatic VAT application, and automated PDF invoices.'
            },
            {
              title: 'Centralized Client Dossier & Settlement Tracking',
              detail: 'Centralized customer database maintaining chronological transaction ledgers, settlement statuses (paid, pending, overdue), and reconciliation tools.'
            },
            {
              title: 'Intuitive & Accessible Business UI',
              detail: 'Designed a responsive and accessible interface in PHP, JavaScript, and Bootstrap 5, optimized for quick adoption by financial auditors.'
            },
            {
              title: 'Database Security & Automated Backups',
              detail: 'Structured relational MySQL schema with ACID transaction isolation, parameterized queries against SQL injections, and automated daily backup cron jobs.'
            }
          ],
          techs: ['PHP', 'Bootstrap 5', 'JavaScript', 'MySQL', 'FPDF']
        },
        {
          period: 'April 2023',
          role: 'Developer Intern',
          company: 'Faculty of Economics – Beni Mellal',
          location: 'Beni Mellal, Morocco',
          type: 'Academic Internship',
          description: 'Digital transformation of university student services and paperless administrative request processing.',
          achievements: [
            {
              title: 'Administrative Digitalization Portal',
              detail: 'Architected and built a Laravel intranet portal enabling students to submit online requests for transcripts, enrollment certificates, and internship conventions.'
            },
            {
              title: 'Multi-Level Approval Workflow & Admin Dashboard',
              detail: 'Engineered a tiered validation workflow with administrative dashboards for officers to process, digitally approve, sign, and timestamp documents.'
            },
            {
              title: 'MVC Architectural Design & Eloquent ORM',
              detail: 'Structured code following Model-View-Controller patterns with Laravel Eloquent ORM, polymorphic relationships, and indexing optimizations.'
            },
            {
              title: 'Automated Email Notifications & Real-Time Tracking',
              detail: 'Implemented automated notification mailers alerting students on each stage update, lowering counter inquiry queues by over 60%.'
            }
          ],
          techs: ['Laravel', 'Blade', 'MySQL', 'JavaScript', 'HTML/CSS']
        }
      ]
    },
    // Projects
    projects: {
      badge: 'Portfolio & Prototypes',
      title: 'Featured Projects & Architectures',
      subtitle: 'Each project features a complete interactive architecture diagram detailing software layers, data flows, and technical roles.',
      openExplorer: 'Open Global Architecture Explorer (6 Projects)',
      allCategories: 'All Projects',
      aiCategory: 'AI & Data',
      fullstackCategory: 'Full Stack',
      frontendCategory: 'Front-End',
      archBtn: 'Architecture & Technical Flow',
    },
    // Contact
    contact: {
      badge: 'Get In Touch',
      title: 'Let\'s Discuss Your Projects',
      subtitle: 'Have an innovative project, job opportunity, or want to exchange ideas on Full Stack and AI architectures? Send me a message.',
      directContact: 'Direct Contact Info',
      email: 'Email',
      location: 'Location',
      phone: 'Phone',
      networks: 'Professional Networks:',
      nameLabel: 'Your Name',
      emailLabel: 'Your Email',
      subjectLabel: 'Subject',
      messageLabel: 'Message',
      namePlaceholder: 'e.g. John Doe',
      emailPlaceholder: 'john.doe@example.com',
      subjectPlaceholder: 'Job Opportunity / Project Collaboration',
      messagePlaceholder: 'Describe your project, need, or opportunity...',
      sendBtn: 'Send Message',
      successTitle: 'Message Prepared Successfully!',
      successDesc: 'Your default mail client has opened to send the message directly to Rida.',
      sendAnother: 'Send Another Message',
    },
    // Footer
    footer: {
      copyright: 'All rights reserved.',
      builtWith: 'Developed with',
    }
  },

  ar: {
    // Navbar
    nav: {
      home: 'الرئيسية',
      skills: 'المهارات',
      experience: 'الخبرات والهندسة',
      projects: 'المشاريع',
      contact: 'اتصل بي',
      role: 'مهندس Full Stack والذكاء الاصطناعي',
      cv: 'السيرة الذاتية',
      lightMode: 'الوضع الفاتح',
      darkMode: 'الوضع الداكن',
      openMenu: 'فتح القائمة',
      closeMenu: 'إغلاق القائمة',
    },
    // Hero
    hero: {
      availability: 'متاح لفرص عمل كمهندس برمجيات',
      greeting: 'رضا المنفلوطي',
      role: 'مهندس Full Stack والذكاء الاصطناعي',
      tagline: 'خريج المدرسة المغربية لعلوم المهندس (EMSI) بالرباط، متخصص في تصميم معماريات برمجية نموذجية وعالية الأداء، مدمجة بحلول الذكاء الاصطناعي التطبيقي.',
      exploreProjects: 'استكشف مشاريعي',
      downloadCV: 'تحميل السيرة الذاتية',
      profileTitle: 'دبلوم مهندس دولة',
      school: 'EMSI الرباط — دفعة 2026',
      degreeLevel: 'باك + 5',
      presentation: 'مهندس خريج في الهندسة المعلوماتية والشبكات، أجمع بين الأساس الأكاديمي المتين والخبرة العملية المكتسبة في المشاريع الحقيقية. أركز على جودة الكود والمعمارية النظيفة Clean Architecture لتطوير أنظمة قوية وقابلة للتوسع.',
      pillarStackLabel: 'المكدس البرمجي الأساسي:',
      pillarStackValue: '.NET Core 8, Spring Boot, React',
      pillarAiLabel: 'تخصص الذكاء الاصطناعي:',
      pillarAiValue: 'نماذج RAG، النماذج اللغوية (LLM) واستخراج النصوص (OCR)',
      pillarStatusLabel: 'حالة التوفر:',
      pillarStatusValue: 'متاح فوراً لعقود العمل (CDI)',
      readyToJoin: 'جاهز لتقديم القيمة المضافة من اليوم الأول',
      mobility: 'جاهزية للتنقل والعمل عن بعد',
    },
    // Skills
    skills: {
      badge: 'المكدس التقني',
      title: 'المهارات والتقنيات',
      subtitle: 'خبرة تقنية تجمع بين صرامة تطوير الواجهات الخلفية للمؤسسات وسلاسة الواجهات الأمامية الحديثة وتكامل نماذج الذكاء الاصطناعي التوليدي.',
      allFilter: 'الكل',
      categories: {
        back: 'الواجهة الخلفية',
        front: 'الواجهة الأمامية',
        ai: 'الذكاء الاصطناعي والبيانات',
        db: 'قواعد البيانات والأدوات',
      },
      centerRole: 'Full Stack والذكاء الاصطناعي',
      level: 'المستوى',
      productionReady: 'جاهز للإنتاج',
      certBadge: 'الشهادات والاعتمادات',
      certTitle: 'شهادات مهنية معتمدة',
      certSubtitle: 'شهادات دولية معتمدة تثبت الكفاءة في جافا، Spring Boot، هندسة الكائنات وممارسات Git.',
    },
    // Experience
    experience: {
      badge: 'المسار والهندسة البرمجية',
      title: 'الخبرات المهنية والتدريب',
      subtitle: 'تطبيق Clean Architecture ونشر وكلاء RAG وتطوير تطبيقات مؤسسية متقدمة.',
      featuredRibbon: 'مشروع التخرج في الذكاء الاصطناعي و .NET',
      architectureDiagram: 'مخطط الهندسة البرمجية',
      missionsAndDetails: 'المهام والتفاصيل التقنية',
      techVisualization: 'المعاينة التقنية:',
      stackLabel: 'التقنيات:',
      educationTitle: 'المسار الأكاديمي',
      stages: [
        {
          period: 'فبراير 2026 – سبتمبر 2026',
          role: 'مهندس متدرب في .NET Core والذكاء الاصطناعي',
          company: 'Algo Consulting Group',
          location: 'الرباط، المغرب',
          type: 'مشروع نهاية الدراسة (PFE)',
          description: 'تصميم وبناء ونشر منصة ذكاء اصطناعي وأتمتة معالجة الوثائق القنصلية ذات الكثافة العالية.',
          achievements: [
            {
              title: 'التحقق الآلي من الوثائق عبر الذكاء الاصطناعي واستخراج النصوص (OCR)',
              detail: 'تصميم وتطوير محرك هجين للتحقق من الوثائق يجمع بين Google Gemini 2.5 Flash للتحليل الدلالي المعقد وقواعد محددة صارمة بلغة C# (.NET 8). تقليص مدة المعالجة بنسبة 70% وضمان المطابقة الدقيقة.'
            },
            {
              title: 'مساعد ذكي RAG للبحث الدلالي في بيانات المؤسسة',
              detail: 'بناء مساعد محادثة مؤسسي يعتمد على نموذج Qwen 3 (عبر Ollama المحلي) وقاعدة البيانات المتجهة ChromaDB للبحث الدلالي مع نظام استرجاع احتياطي على SQL Server.'
            },
            {
              title: 'بث تدفق البيانات الحية SSE ولوحة مؤشرات الأداء',
              detail: 'تطوير قنوات البث المباشر بتقنية Server-Sent Events (SSE) بين واجهة برمجة التطبيقات ASP.NET Core وواجهة React 18 / TypeScript لمراقبة الأداء ومعدلات الدقة فورياً.'
            },
            {
              title: 'معمارية نظيفة مفككة وأنماط برمجية مؤسسية',
              detail: 'تطبيق مبادئ Clean Architecture و Domain-Driven Design (DDD)، وفصل الأوامر عن الاستعلامات عبر نمط CQRS باستخدام MediatR والحقن البرمجي للتبعيات.'
            },
            {
              title: 'الحاويات البرمجية وسلسلة DevOps',
              detail: 'حزم جميع المكونات في حاويات Docker و Docker Compose (الواجهة الخلفية، ChromaDB، Ollama، SQL Server) وإدارة الإصدارات عبر Gitflow.'
            }
          ],
          techs: ['.NET Core 8', 'React', 'TypeScript', 'Gemini 2.5 Flash', 'Ollama (Qwen 3)', 'ChromaDB', 'SQL Server', 'MediatR', 'Docker', 'Git']
        },
        {
          period: 'يوليو 2025 – أغسطس 2025',
          role: 'مطور Full Stack متدرب',
          company: 'ZAHRI METAL',
          location: 'المغرب',
          type: 'تدريب تقني',
          description: 'رقمنة عمليات الورشة وتخطيط الإنتاج الصناعي وأتمتة إدارة المخزون المعدني.',
          achievements: [
            {
              title: 'منصة إدارة وتخطيط الإنتاج الصناعي',
              detail: 'تصميم وتطوير نظام ويب لتخطيط وجدولة أوامر التصنيع وتعيينها ديناميكياً لفرق الورشة ومتابعة الإنجاز لحظياً.'
            },
            {
              title: 'واجهة خلفية آمنة بـ Spring Boot وواجهة REST API',
              detail: 'تطوير واجهة برمجية متينة باستخدام Spring Boot 3 و Spring Data JPA مع تأمين المسارات عبر رموز JWT ونمذجة قواعد بيانات MySQL للأداء العالي.'
            },
            {
              title: 'لوحة تحكم تفاعلية بنظام Kanban',
              detail: 'بناء لوحة تحكم تفاعلية باستخدام ReactJS و Tailwind CSS لمراقبة مراحل التصنيع وتحديد مواضع الاختناق في خطوط الإنتاج.'
            },
            {
              title: 'تتبع المخزون والمواد الأولية',
              detail: 'تطوير وحدة تتبع استهلاك المعادن مع تنبيهات عند الوصول إلى الحدود الحرجة وتصدير تقارير الجرد بصيغتي Excel و PDF.'
            }
          ],
          techs: ['Spring Boot', 'React JS', 'MySQL', 'JWT', 'Spring Data JPA', 'Tailwind CSS']
        },
        {
          period: 'يوليو 2024 – أغسطس 2024',
          role: 'مطور ويب متدرب',
          company: 'مكتب المحاسبة والاستشارة',
          location: 'المغرب',
          type: 'تدريب عملي',
          description: 'تطوير تطبيق لإدارة المحاسبة وأتمتة الفواتير لمكتب استشارات محاسبية ومالية.',
          achievements: [
            {
              title: 'وحدة الفوترة وحساب القيود المحاسبية آلياً',
              detail: 'برمجة محرك لتوليد الفواتير النظامية مع الحساب التلقائي للضرائب (TVA) وتوليد المستندات فورياً بصيغة PDF.'
            },
            {
              title: 'إدارة ملفات الزبائن وتتبع المعاملات المالية',
              detail: 'إنشاء قاعدة بيانات مركزية للعملاء مع سجل زمني كامل للحركات المالية ومتابعة حالات السداد والمطابقة البنكية.'
            },
            {
              title: 'واجهة مستخدم سهلة وسريعة الاستخدام',
              detail: 'تطوير واجهة متجاوبة بتقنيات PHP و JavaScript و Bootstrap 5 مصممة لتيسير العمل اليومي للمحاسبين.'
            },
            {
              title: 'تأمين وحماية قاعدة البيانات والنسخ الاحتياطي',
              detail: 'بناء مخطط قاعدة البيانات MySQL مع ضمان شروط المعاملات ACID والنسخ الاحتياطي الآلي الدوري.'
            }
          ],
          techs: ['PHP', 'Bootstrap 5', 'JavaScript', 'MySQL', 'FPDF']
        },
        {
          period: 'أبريل 2023',
          role: 'مطور متدرب',
          company: 'كلية الاقتصاد – بني ملال',
          location: 'بني ملال، المغرب',
          type: 'تدريب أكاديمي',
          description: 'التحول الرقمي للخدمات الجامعية وتجريد المعاملات الإدارية للطلاب من الطابع الورقي.',
          achievements: [
            {
              title: 'بوابة إلكترونية لرقمنة المعاملات الطلابية',
              detail: 'تطوير بوابة داخلية باستخدام إطار العمل Laravel تتيح للطلاب تقديم طلبات الشواهد المدرسية وبيانات النقط والاتفاقيات عبر الإنترنت.'
            },
            {
              title: 'سير عمل إداري للمصادقة وتوقيع الطلبات',
              detail: 'تنفيذ نظام تدريجي لمراجعة الطلبات والمصادقة عليها إلكترونياً مع التوقيع الرقمي وتتبع التوقيت.'
            },
            {
              title: 'معمارية MVC وقواعد بيانات علائقية',
              detail: 'هيكلة المشروع وفق نمط Model-View-Controller باستخدام Laravel Eloquent ORM وتحسين استعلامات MySQL.'
            },
            {
              title: 'نظام إشعارات وتتبع مباشر للطلبات',
              detail: 'إرسال تنبيهات تلقائية عبر البريد الإلكتروني عند كل تغيير في حالة الملف، مما خفض طوابير الانتظار بنسبة 60%.'
            }
          ],
          techs: ['Laravel', 'Blade', 'MySQL', 'JavaScript', 'HTML/CSS']
        }
      ]
    },
    // Projects
    projects: {
      badge: 'معرض المشاريع',
      title: 'المشاريع البارزة وهندسة النظم',
      subtitle: 'يتضمن كل مشروع مخطط هندسة برمجية تفاعلي يوضح طبقات النظام وتدفق البيانات ودور كل تقنية.',
      openExplorer: 'فتح مستكشف الهندسة التقنية الشامل (6 مشاريع)',
      allCategories: 'جميع المشاريع',
      aiCategory: 'الذكاء الاصطناعي والبيانات',
      fullstackCategory: 'Full Stack',
      frontendCategory: 'الواجهة الأمامية',
      archBtn: 'مخطط الهندسة وتدفق البيانات',
    },
    // Contact
    contact: {
      badge: 'تواصل معي',
      title: 'لنناقش مشاريعكم المستقبلية',
      subtitle: 'هل لديكم مشروع مبتكر، فرصة عمل، أو ترغبون في تبادل الأفكار حول معماريات Full Stack والذكاء الاصطناعي؟ لا تترددوا في مراسلتي.',
      directContact: 'بيانات الاتصال المباشر',
      email: 'البريد الإلكتروني',
      location: 'الموقع الجغرافي',
      phone: 'الهاتف',
      networks: 'الشبكات المهنية:',
      nameLabel: 'الاسم الكامل',
      emailLabel: 'البريد الإلكتروني',
      subjectLabel: 'الموضوع',
      messageLabel: 'الرسالة',
      namePlaceholder: 'مثال: محمد العلوي',
      emailPlaceholder: 'name@example.com',
      subjectPlaceholder: 'فرصة عمل / تعاون في مشروع',
      messagePlaceholder: 'اكتب تفاصيل طلبك أو مشروعك هنا...',
      sendBtn: 'إرسال الرسالة',
      successTitle: 'تم إعداد الرسالة بنجاح!',
      successDesc: 'تم فتح برنامج البريد الإلكتروني الخاص بك لإرسال الرسالة مباشرة إلى رضا.',
      sendAnother: 'إرسال رسالة أخرى',
    },
    // Footer
    footer: {
      copyright: 'جميع الحقوق محفوظة.',
      builtWith: 'تم التطوير باستخدام',
    }
  }
};
