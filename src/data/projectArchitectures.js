import {
  Layout,
  Server,
  Database,
  Cpu,
  Workflow,
  FileSearch,
  Box,
  GitBranch,
  ShieldCheck,
  Zap,
  BarChart3,
  Code2,
  Lock,
  Layers,
  FileSpreadsheet
} from 'lucide-react';

export const projectArchitectures = {
  'doc-ai-validation': {
    id: 'doc-ai-validation',
    title: 'Validation automatisée de documents avec IA',
    subtitle: 'Architecture Hybride C# .NET 8 & Google Gemini 2.5 Flash',
    badge: 'OCR & AI Pipeline',
    flowSummary: 'React ➔ ASP.NET Core 8 ➔ Moteur de Règles C# ➔ API Gemini 2.5 Flash ➔ SQL Server',
    layers: [
      {
        name: 'Couche 1 : Présentation & Téléversement',
        nodes: [
          {
            id: 'react-ts',
            name: 'React & TypeScript',
            role: 'Client SPA & Monitoring',
            badge: 'Frontend',
            icon: Layout,
            color: 'from-cyan-500 to-blue-500',
            borderColor: 'border-cyan-500',
            glowColor: 'rgba(6, 182, 212, 0.4)',
            tooltip: "Interface utilisateur Frontend. Téléversement glisser-déposer et visualisation en direct des statuts de conformité.",
            howWhy: "Permet aux agents consulaires de soumettre des lots de documents et d'obtenir un feedback visuel immédiat avec surlignage des anomalies détectées."
          }
        ],
        connectorText: 'HTTPS Multipart / Payload Chiffré'
      },
      {
        name: 'Couche 2 : Orchestration & Clean Architecture',
        nodes: [
          {
            id: 'dotnet-8',
            name: 'ASP.NET Core 8',
            role: 'API Gateway & Pipeline',
            badge: 'Backend Core',
            icon: Server,
            color: 'from-blue-600 to-indigo-600',
            borderColor: 'border-blue-500',
            glowColor: 'rgba(59, 130, 246, 0.4)',
            tooltip: "API Backend robuste structurée en Clean Architecture.",
            howWhy: "Coordonne le pipeline de validation de documents, gère les queues asynchrones d'ingestion et assure l'isolation entre la logique métier et les services tiers."
          },
          {
            id: 'csharp-rules',
            name: 'Moteur de Règles C#',
            role: 'Validation Déterministe',
            badge: 'Business Rules',
            icon: ShieldCheck,
            color: 'from-amber-500 to-orange-500',
            borderColor: 'border-amber-500',
            glowColor: 'rgba(245, 158, 11, 0.4)',
            tooltip: "Validation déterministe stricte des critères légaux et règles métier.",
            howWhy: "Vérifie les critères non-négociables (formats de dates, validité des numéros de passeport, cohérence des totaux) en quelques millisecondes avant d'invoquer l'IA."
          }
        ],
        connectorText: 'Appels Multimodaux & Extraction Sémantique'
      },
      {
        name: 'Couche 3 : Intelligence Artificielle & Persistance',
        nodes: [
          {
            id: 'gemini-flash',
            name: 'Gemini 2.5 Flash',
            role: 'Vision & OCR Multimodal',
            badge: 'Cloud AI',
            icon: FileSearch,
            color: 'from-emerald-400 to-teal-500',
            borderColor: 'border-emerald-400',
            glowColor: 'rgba(52, 211, 153, 0.4)',
            tooltip: "IA Cloud utilisée pour le module d'extraction (OCR) et la validation automatisée des documents consulaires.",
            howWhy: "Extrait le texte multilingue des pièces justificatives, détecte l'authenticité visuelle des cachets et signatures, et génère un rapport de conformité normé."
          },
          {
            id: 'sql-server',
            name: 'SQL Server',
            role: 'Persistance & Audit Log',
            badge: 'RDBMS',
            icon: Database,
            color: 'from-rose-500 to-red-600',
            borderColor: 'border-rose-500',
            glowColor: 'rgba(244, 63, 94, 0.4)',
            tooltip: "Stockage relationnel principal assurant la traçabilité complète des dossiers vérifiés.",
            howWhy: "Conserve l'historique immuable des validations, les scores de confiance attribués et les métadonnées pour répondre aux exigences d'audit réglementaires."
          }
        ],
        connectorText: 'Déploiement Conteneurisé'
      },
      {
        name: 'Couche 4 : DevOps & Infrastructure',
        nodes: [
          {
            id: 'docker',
            name: 'Docker',
            role: 'Conteneurisation',
            badge: 'DevOps',
            icon: Box,
            color: 'from-sky-500 to-blue-600',
            borderColor: 'border-sky-500',
            glowColor: 'rgba(14, 165, 233, 0.4)',
            tooltip: "Conteneurisation de l'ensemble des micro-services (API, Front, Base vectorielle) pour faciliter le déploiement.",
            howWhy: "Permet de packager l'API ASP.NET Core et les workers de validation dans des images légères et reproductibles entre staging et production."
          }
        ]
      }
    ]
  },

  'rag-assistant': {
    id: 'rag-assistant',
    title: 'Assistant Conversationnel RAG Multi-Sources',
    subtitle: 'Pipeline RAG Souverain : Qwen 3 (Ollama) & ChromaDB avec Fallback SQL',
    badge: 'GenAI & Vector Pipeline',
    flowSummary: 'React (SSE) ➔ API Orchestrateur ➔ ChromaDB (Vector Search) ➔ Ollama Qwen 3 ➔ Fallback SQL Server',
    layers: [
      {
        name: 'Couche 1 : Interface Conversationnelle Temps Réel',
        nodes: [
          {
            id: 'react-chat',
            name: 'React & Streaming SSE',
            role: 'Frontend Conversationnel',
            badge: 'Client Web',
            icon: Layout,
            color: 'from-cyan-500 to-blue-500',
            borderColor: 'border-cyan-500',
            glowColor: 'rgba(6, 182, 212, 0.4)',
            tooltip: "Interface utilisateur Frontend. Création d'un dashboard décisionnel dynamique et interactif.",
            howWhy: "Affiche la réponse du chatbot mot par mot en streaming grâce aux Server-Sent Events (SSE), offrant un ressenti instantané sans temps d'attente bloquant."
          }
        ],
        connectorText: 'Requêtes Langage Naturel & Streaming SSE'
      },
      {
        name: 'Couche 2 : Orchestration RAG & Ingestion',
        nodes: [
          {
            id: 'rag-orchestrator',
            name: 'Python & Pipeline RAG',
            role: 'Orchestration Sémantique',
            badge: 'RAG Core',
            icon: Workflow,
            color: 'from-violet-500 to-purple-600',
            borderColor: 'border-violet-500',
            glowColor: 'rgba(139, 92, 246, 0.4)',
            tooltip: "Moteur d'orchestration responsable du découpage de documents, des embeddings et de la construction des prompts.",
            howWhy: "Prend en charge l'ingestion documentaire, le chunking dynamique et formule la requête enrichie avec le contexte récupéré avant d'appeler le modèle."
          }
        ],
        connectorText: 'Recherche Vectorielle par Similarité Cosinus'
      },
      {
        name: 'Couche 3 : Mémoire Vectorielle & Modèle Local',
        nodes: [
          {
            id: 'chromadb',
            name: 'ChromaDB',
            role: 'Base Vectorielle',
            badge: 'Vector DB',
            icon: Database,
            color: 'from-purple-500 to-indigo-500',
            borderColor: 'border-purple-500',
            glowColor: 'rgba(168, 85, 247, 0.4)',
            tooltip: "Base de données vectorielle utilisée pour l'architecture RAG (Retrieval-Augmented Generation) du chatbot.",
            howWhy: "Stocke les vecteurs denses générés par nomic-embed-text pour restituer les 3 à 5 extraits documentaires les plus pertinents en moins de 15 millisecondes."
          },
          {
            id: 'ollama-qwen',
            name: 'Ollama (Qwen 3)',
            role: 'Inférence LLM Locale',
            badge: 'Local AI',
            icon: Cpu,
            color: 'from-fuchsia-500 to-pink-600',
            borderColor: 'border-fuchsia-500',
            glowColor: 'rgba(217, 70, 239, 0.4)',
            tooltip: "LLM local déployé pour propulser l'assistant conversationnel sans exposer de données sensibles.",
            howWhy: "Synthétise la réponse finale en français/anglais/arabe directement sur les serveurs internes sans jamais transférer les documents vers le cloud public."
          },
          {
            id: 'sql-server',
            name: 'SQL Server',
            role: 'Repli & Historique',
            badge: 'Fallback RDBMS',
            icon: Database,
            color: 'from-rose-500 to-red-600',
            borderColor: 'border-rose-500',
            glowColor: 'rgba(244, 63, 94, 0.4)',
            tooltip: "Base de données relationnelle agissant comme stockage principal et fallback pour le système.",
            howWhy: "Assure un repli relationnel sur les données structurées lorsque le modèle LLM manque de données contextuelles, garantissant 100% de réponses fiables."
          }
        ],
        connectorText: 'Déploiement Conteneurs Multi-Services'
      },
      {
        name: 'Couche 4 : Environnement & DevOps',
        nodes: [
          {
            id: 'docker',
            name: 'Docker',
            role: 'Conteneurs Isolés',
            badge: 'DevOps',
            icon: Box,
            color: 'from-sky-500 to-blue-600',
            borderColor: 'border-sky-500',
            glowColor: 'rgba(14, 165, 233, 0.4)',
            tooltip: "Conteneurisation de l'ensemble des micro-services (API, Front, Base vectorielle) pour faciliter le déploiement.",
            howWhy: "Isole l'instance Ollama avec support GPU, la base ChromaDB et le service Python dans un réseau Docker sécurisé."
          }
        ]
      }
    ]
  },

  'analytics-dashboard': {
    id: 'analytics-dashboard',
    title: 'Dashboard Décisionnel & Pilotage Statistique',
    subtitle: 'Architecture Réactive : React TypeScript & ASP.NET Core 8 avec CQRS',
    badge: 'Enterprise Dashboard',
    flowSummary: 'React TypeScript ➔ ASP.NET Core 8 ➔ MediatR (CQRS) ➔ SQL Server Analytics',
    layers: [
      {
        name: 'Couche 1 : Présentation & Visualisation Analytique',
        nodes: [
          {
            id: 'react-ts',
            name: 'React & TypeScript',
            role: 'Interface Graphique & DataViz',
            badge: 'Frontend',
            icon: Layout,
            color: 'from-cyan-500 to-blue-500',
            borderColor: 'border-cyan-500',
            glowColor: 'rgba(6, 182, 212, 0.4)',
            tooltip: "Interface utilisateur Frontend. Création d'un dashboard décisionnel dynamique et interactif.",
            howWhy: "Offre des diagrammes interactifs, des filtres croisés en direct et des calculs de tendances grâce à la robustesse du typage TypeScript."
          },
          {
            id: 'tailwind-css',
            name: 'Tailwind CSS',
            role: 'Design System & Thèmes',
            badge: 'Styling',
            icon: Code2,
            color: 'from-teal-400 to-cyan-500',
            borderColor: 'border-teal-400',
            glowColor: 'rgba(45, 212, 191, 0.4)',
            tooltip: "Système de design utilitaire pour une ergonomie sur-mesure et réactive.",
            howWhy: "Assure un affichage fluide en mode sombre et clair, avec des grilles CSS optimisées pour les résolutions allant du mobile aux écrans 4K."
          }
        ],
        connectorText: 'Requêtes REST API & Mise en Cache'
      },
      {
        name: 'Couche 2 : Contrôleurs & Médiation Métier (CQRS)',
        nodes: [
          {
            id: 'dotnet-8',
            name: '.NET Core 8',
            role: 'Backend API Haute Performance',
            badge: 'Backend Core',
            icon: Server,
            color: 'from-blue-600 to-indigo-600',
            borderColor: 'border-blue-500',
            glowColor: 'rgba(59, 130, 246, 0.4)',
            tooltip: "API Backend robuste structurée en Clean Architecture.",
            howWhy: "Prend en charge les requêtes de données analytiques avec un temps de réponse moyen inférieur à 50ms grâce à Kestrel et la compilation AOT."
          },
          {
            id: 'mediatr',
            name: 'MediatR',
            role: 'Pattern CQRS',
            badge: 'Architecture',
            icon: Workflow,
            color: 'from-amber-500 to-orange-500',
            borderColor: 'border-amber-500',
            glowColor: 'rgba(245, 158, 11, 0.4)',
            tooltip: "Implémentation du pattern CQRS pour découpler les commandes et les requêtes dans l'API.",
            howWhy: "Isole les calculs statistiques lourds (queries) des opérations de saisie métier (commands), évitant tout goulot d'étranglement de verrouillage."
          }
        ],
        connectorText: 'Requêtes Analytiques Dapper / EF Core'
      },
      {
        name: 'Couche 3 : Stockage Analytique & Indexation',
        nodes: [
          {
            id: 'sql-server',
            name: 'SQL Server',
            role: 'Data Warehouse Relational',
            badge: 'Database',
            icon: Database,
            color: 'from-rose-500 to-red-600',
            borderColor: 'border-rose-500',
            glowColor: 'rgba(244, 63, 94, 0.4)',
            tooltip: "Base de données relationnelle agissant comme stockage principal et fallback pour le système.",
            howWhy: "Exploite des index columnstore et des vues matérialisées pour agréger des millions de lignes de métriques en quelques fractions de seconde."
          }
        ]
      }
    ]
  },

  'finance-platform': {
    id: 'finance-platform',
    title: 'Plateforme de Gestion Financière',
    subtitle: 'Architecture Web Django & MySQL pour le Suivi Budgétaire (EMSI)',
    badge: 'FinTech & Analytics',
    flowSummary: 'HTML5 / JS / Bootstrap ➔ Django Framework ➔ Moteur d’Analyse Python ➔ MySQL',
    layers: [
      {
        name: 'Couche 1 : Interface Utilisateur & Saisie Budgétaire',
        nodes: [
          {
            id: 'bootstrap-js',
            name: 'HTML5, CSS3, JS & Bootstrap',
            role: 'Interface Responsive',
            badge: 'Frontend',
            icon: Layout,
            color: 'from-blue-500 to-indigo-500',
            borderColor: 'border-blue-500',
            glowColor: 'rgba(59, 130, 246, 0.4)',
            tooltip: "Interface ergonomique dédiée à la saisie des dépenses, des prévisions et des transferts.",
            howWhy: "Fournit des formulaires interactifs avec validation instantanée côté client et des tableaux récapitulatifs clairs."
          }
        ],
        connectorText: 'Requêtes HTTP Sécurisées CSRF'
      },
      {
        name: 'Couche 2 : Framework Web & Moteur Comptable',
        nodes: [
          {
            id: 'django',
            name: 'Django (Python)',
            role: 'Serveur MVC & Moteur Métier',
            badge: 'Backend Core',
            icon: Server,
            color: 'from-emerald-600 to-teal-700',
            borderColor: 'border-emerald-600',
            glowColor: 'rgba(5, 150, 105, 0.4)',
            tooltip: "Framework web Python garantissant la sécurité des transactions et la logique financière.",
            howWhy: "Prend en charge l'authentification multi-niveaux, la modélisation des entités comptables et le respect des règles d'intégrité financière."
          },
          {
            id: 'python-reporting',
            name: 'Reporting Python Engine',
            role: 'Génération de Rapports PDF & Excel',
            badge: 'Analytics',
            icon: FileSpreadsheet,
            color: 'from-amber-500 to-yellow-500',
            borderColor: 'border-amber-500',
            glowColor: 'rgba(245, 158, 11, 0.4)',
            tooltip: "Moteur de calcul analytique pour les bilans de trésorerie.",
            howWhy: "Calcule les écarts budgétaires prévisionnels vs réels et exporte automatiquement des synthèses certifiées prêtes pour l'audit."
          }
        ],
        connectorText: 'Django ORM & Transactions ACID'
      },
      {
        name: 'Couche 3 : Persistance & Intégrité Relationnelle',
        nodes: [
          {
            id: 'mysql',
            name: 'MySQL',
            role: 'Base de Données Relationnelle',
            badge: 'RDBMS',
            icon: Database,
            color: 'from-sky-600 to-blue-700',
            borderColor: 'border-sky-600',
            glowColor: 'rgba(2, 132, 199, 0.4)',
            tooltip: "Base de données relationnelle assurant la cohérence stricte des écritures financières.",
            howWhy: "Garantit des transactions conformes aux principes ACID pour empêcher toute divergence entre le solde calculé et les écritures de débit/crédit."
          }
        ]
      }
    ]
  },

  'task-management': {
    id: 'task-management',
    title: 'Gestion & Affectation des Tâches Industrielles',
    subtitle: 'Architecture Micro-Services Spring Boot & React (ZAHRI METAL)',
    badge: 'Industrial Workflow',
    flowSummary: 'React JS (Kanban) ➔ Spring Boot REST API ➔ Spring Security (JWT) ➔ MySQL Data Layer',
    layers: [
      {
        name: 'Couche 1 : Interface Métier Atelier & Tablette',
        nodes: [
          {
            id: 'react-kanban',
            name: 'React JS',
            role: 'Interface Kanban & Opérateur',
            badge: 'Frontend',
            icon: Layout,
            color: 'from-cyan-400 to-blue-600',
            borderColor: 'border-cyan-400',
            glowColor: 'rgba(34, 211, 238, 0.4)',
            tooltip: "Tableau de bord Kanban d'atelier pour le suivi en temps réel des ordres de fabrication.",
            howWhy: "Permet aux chefs d'équipe d'assigner les tâches d'usinage par glisser-déposer et aux techniciens de valider l'avancement depuis des postes d'atelier."
          }
        ],
        connectorText: 'JWT Bearer & Appels REST JSON'
      },
      {
        name: 'Couche 2 : Logique Métier & Sécurité d’Entreprise',
        nodes: [
          {
            id: 'spring-boot',
            name: 'Spring Boot (Java)',
            role: 'Backend Micro-Services',
            badge: 'Backend Core',
            icon: Server,
            color: 'from-green-500 to-emerald-700',
            borderColor: 'border-green-500',
            glowColor: 'rgba(34, 197, 94, 0.4)',
            tooltip: "Backend d'entreprise modulaire basé sur l'écosystème Spring.",
            howWhy: "Implémente la logique d'ordonnancement des tâches industrielles, l'injection de dépendances et la gestion des exceptions métier centralisée."
          },
          {
            id: 'spring-security',
            name: 'Spring Security & JWT',
            role: 'Contrôle d’Accès & Autorisations',
            badge: 'Security',
            icon: Lock,
            color: 'from-red-500 to-rose-600',
            borderColor: 'border-red-500',
            glowColor: 'rgba(239, 68, 68, 0.4)',
            tooltip: "Gestion granulaire des rôles (Opérateur, Chef d'Atelier, Direction).",
            howWhy: "Protège les endpoints REST en s'assurant que seules les personnes habilitées peuvent modifier les priorités des machines et clôturer des lots."
          }
        ],
        connectorText: 'Spring Data JPA & Hibernate'
      },
      {
        name: 'Couche 3 : Persistance des Données de Production',
        nodes: [
          {
            id: 'mysql-zahri',
            name: 'MySQL',
            role: 'Stockage Données Industrielles',
            badge: 'RDBMS',
            icon: Database,
            color: 'from-sky-600 to-blue-700',
            borderColor: 'border-sky-600',
            glowColor: 'rgba(2, 132, 199, 0.4)',
            tooltip: "Base relationnelle modélisant le parc machines, les pièces et les temps d'exécution.",
            howWhy: "Conserve l'historique de productivité des équipes et les temps de passage par machine pour le calcul des indicateurs de rendement."
          }
        ]
      }
    ]
  },

  'construction-platform': {
    id: 'construction-platform',
    title: 'Application Web de Construction & BTP',
    subtitle: 'Portail E-Commerce & Suivi de Chantier (Laravel & React - OFPPT)',
    badge: 'BTP & E-Commerce',
    flowSummary: 'React JS (Catalogue & Devis) ➔ API Laravel ➔ Eloquent ORM ➔ MySQL',
    layers: [
      {
        name: 'Couche 1 : Expérience Client & Configuration de Devis',
        nodes: [
          {
            id: 'react-btp',
            name: 'ReactJS',
            role: 'Tunnel de Commande & Devis',
            badge: 'Frontend',
            icon: Layout,
            color: 'from-cyan-400 to-blue-500',
            borderColor: 'border-cyan-400',
            glowColor: 'rgba(6, 182, 212, 0.4)',
            tooltip: "Portail client interactif pour la sélection des matériaux et des services de construction.",
            howWhy: "Permet de configurer un devis interactif en calculant automatiquement les métrés et coûts de main d'œuvre selon les choix du client."
          }
        ],
        connectorText: 'API REST JSON & Sessions Sécurisées'
      },
      {
        name: 'Couche 2 : Framework PHP & Moteur Métier',
        nodes: [
          {
            id: 'laravel',
            name: 'Laravel (PHP)',
            role: 'API REST & Logique Commerciale',
            badge: 'Backend Core',
            icon: Server,
            color: 'from-red-500 to-rose-600',
            borderColor: 'border-red-500',
            glowColor: 'rgba(239, 68, 68, 0.4)',
            tooltip: "Framework web moderne avec architecture MVC élégante.",
            howWhy: "Gère le catalogue de produits BTP, les commandes en ligne, la facturation automatique et les notifications de progression de chantier."
          },
          {
            id: 'eloquent-orm',
            name: 'Eloquent ORM',
            role: 'Mapping Relationnel Objet',
            badge: 'Data Access',
            icon: Workflow,
            color: 'from-amber-500 to-orange-600',
            borderColor: 'border-amber-500',
            glowColor: 'rgba(245, 158, 11, 0.4)',
            tooltip: "Gestion des relations complexes entre prestations, prestataires et clients.",
            howWhy: "Simplifie les requêtes de disponibilité des équipes et l'approvisionnement des matériaux sur chantier."
          }
        ],
        connectorText: 'Requêtes Indexées & Transactions'
      },
      {
        name: 'Couche 3 : Persistance & Données Catalogue',
        nodes: [
          {
            id: 'mysql-btp',
            name: 'MySQL',
            role: 'Base de Données Produits & Chantiers',
            badge: 'RDBMS',
            icon: Database,
            color: 'from-sky-600 to-blue-700',
            borderColor: 'border-sky-600',
            glowColor: 'rgba(2, 132, 199, 0.4)',
            tooltip: "Persistance centralisée des devis, commandes et profils artisans.",
            howWhy: "Assure un stockage fiable des bordereaux de prix unitaires et le suivi temporel des jalons de livraison de chantier."
          }
        ]
      }
    ]
  }
};
