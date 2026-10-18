import {
  Code2,
  Palette,
  Plug,
  Wrench,
  GraduationCap,
  Award,
  Languages,
} from 'lucide-react';

export const portfolioData = {
  personalInfo: {
    name: 'Eudes',
    lastName: 'HODONOU',
    title: 'Développeur Front-end & Créateur de solutions africaines',
    location: 'Cotonou, Bénin',
    status: 'Disponible pour des opportunités',
    yearsExperience: '3+',
    projectsDelivered: '5+',
    industriesServed: '1',
    email: 'hodonoueudeshdn@gmail.com',
    tagline:
      'Je conçois des interfaces web modernes et fidèles aux maquettes, pensées pour les besoins du terrain africain.',
    designedBy: 'Eudes HDN',
  },
  expertise: [
    {
      icon: Code2,
      title: 'Frameworks',
      color: 'from-emerald-500 to-teal-500',
      skills: [
        'Vue 3 (Composition API, TypeScript)',
        'Nuxt 3',
        'React',
        'Architecture de composants réutilisables',
        'Rendu côté serveur (SSR)',
      ],
    },
    {
      icon: Palette,
      title: 'UI & Styling',
      color: 'from-pink-500 to-rose-500',
      skills: [
        'Tailwind CSS & design tokens personnalisés',
        'Intégration fidèle de maquettes Figma',
        'Chart.js (graphiques et tableaux de bord)',
        'Animations et interactions UI',
        'Modales et composants accessibles',
      ],
    },
    {
      icon: Plug,
      title: 'API & Gestion d’état',
      color: 'from-blue-500 to-cyan-500',
      skills: [
        'Pinia (gestion d’état)',
        'Intégration d’API REST',
        'Gestion des erreurs API (401, 429)',
        'Authentification côté client et SSR',
        'Communication front-end / back-end',
      ],
    },
    {
      icon: Wrench,
      title: 'Outils & Workflow',
      color: 'from-violet-500 to-purple-500',
      skills: [
        'Git & gestion de versions',
        'VS Code (configuration et extensions)',
        'Assistants IA de code',
        'Organisation et documentation de projet',
        'Création de supports pédagogiques',
      ],
    },
  ],
  experiences: [
    {
      title: 'Développeur Front-end',
      company: 'HDN & .beldev — Projets clients',
      location: 'Cotonou, Bénin',
      period: '2026 - Présent',
      current: true,
      responsibilities: [
        'Développement de DOOMU, une application Nuxt 3 de paiements et transactions, fidèle aux maquettes Figma',
        'Création d’EDCE, une application de gestion de l’école du dimanche de l’Église de Yénawa (Nuxt 3 + Django)',
        'Réalisation du site web du programme d’entrepreneuriat des jeunes SAPEN',
        'Mise en place de design systems avec Tailwind CSS et design tokens',
        'Intégration d’API et gestion de l’état avec Pinia',
      ],
    },
    {
      title: 'Formateur en informatique',
      company: 'ISRA Informatique Tech',
      location: 'Bénin',
      period: 'À compléter',
      current: false,
      responsibilities: [
        'Conception de supports pédagogiques pour les étudiants',
        'Formation au développement web front-end',
        'Accompagnement des étudiants dans leurs projets pratiques',
      ],
    },
    {
      title: 'Développeur Front-end',
      company: 'RADAR — Audit de sécurité web',
      location: 'Bénin',
      period: 'À compléter',
      current: false,
      responsibilities: [
        'Développement de l’interface de RADAR, application web d’audit de sécurité de sites web',
        'Présentation claire des résultats d’audit pour les utilisateurs',
        'Intégration des API de l’application',
      ],
    },
  ],
  skillCategories: [
    {
      category: 'Frameworks',
      color: 'from-emerald-500 to-teal-500',
      skills: [
        { name: 'Vue 3', level: 60 },
        { name: 'Nuxt 3', level: 75 },
        { name: 'React', level: 65 },
      ],
    },
    {
      category: 'UI & Styling',
      color: 'from-pink-500 to-rose-500',
      skills: [
        { name: 'Tailwind CSS', level: 75 },
        { name: 'Intégration Figma', level: 60 },
        { name: 'Chart.js', level: 70 },
      ],
    },
    {
      category: 'API & État',
      color: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'Pinia', level: 85 },
        { name: 'API REST', level: 85 },
      ],
    },
    {
      category: 'Outils & Workflow',
      color: 'from-violet-500 to-purple-500',
      skills: [
        { name: 'Git', level: 85 },
        { name: 'VS Code', level: 85 },
        { name: 'Assistants IA', level: 85 },
      ],
    },
  ],
  education: [
    {
      degree: 'Diplôme Technique Industrielle (DTI)',
      institution: 'À compléter',
      year: 'À compléter',
    },
    {
      degree: 'Formation autodidacte en développement web',
      institution: 'Auto-formation continue',
      year: 'En cours',
    },
  ],
  languages: [
  { name: 'Français', level: 'Natif', percent: 100 },
  { name: 'Fon', level: 'Courant', percent: 75 },
  { name: 'Anglais', level: 'Intermédiaire', percent: 65 },
],
};