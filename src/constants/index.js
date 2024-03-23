import portfolioImage from "../assets/portfolio.png";
import jeuBoule from "../assets/jeuboule.jpg";
import backpackHero from "../assets/backPack.jpeg";
import scemantic from "../assets/scemantic.png";
import jquery from "../assets/tech/jquery.png";
import bank from "../assets/bank.jpeg";
import graph from "../assets/oriented_graph.png";
import djikstra from "../assets/djikstra.png";
import medic from "../assets/medic.jpeg";
import unesco from "../assets/unesco.png";
import ihm from "../assets/ihm.jpeg";


import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";

  import {
    
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "A propos",
    },
    {
      id: "work",
      title: "Mon travail",
    },
    {
      id: "contact",
      title: "Me contacter",
    },
  ];
  
  const services = [
    {
      title: "Frontend Developer ",
      icon: web,
    },
    {
      title: "Java Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Chef de projet",
      icon: creator,
    },
  ];
  const img = document.createElement('img');
  //Bootsrap
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
      percent : "100%",
    },
    {
      name: "CSS 3",
      icon: css,
      percent : "95%",

    },
    {
      name: "JavaScript",
      icon: javascript,
      percent : "95%",

    },
    {
      name: "PHP",
      icon: typescript,
      percent : "95%",

    },
    {
      name: "SQL",
      icon: redux,
      percent : "95%",

    },
    {
      name: "Jquery",
      icon: jquery,
      percent : "70%",

    },
    {
      name: "React JS",
      icon: reactjs,
      percent : "75%",

    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
      percent : "40%",

    },
    {
      name: "Three JS",
      icon: threejs,
      percent : "30%",

    },
    {
      name: "docker", //c
      icon: docker,
      percent : "80%",

    },
    {
      name: "Node JS",//Python
      icon: nodejs,
      percent : "80%",

    },
    {
      name: "MongoDB",
      icon: mongodb,
      percent : "85%",

    },
    {
      name: "git",
      icon: git,
      percent : "100%",

    },
  ];
  
  const experiences = [
    {
      title: "Vendeur Polyvalent",
      company_name: "Primark",
      icon: meta,
      iconBg: "#383E56",
      date: "Juin 2021 - Septemnbre 2021",
      points: [
      "Relationnel Client", "Travail en équipe",      ],
    },
    {
      title: "Hôte d'acceuil",
      company_name: "Auchan",
      icon: starbucks,
      iconBg: "#E6DEDD",
      date: "Octobre 2021 - Décembre 2023",
      points: [
        "Relationnel Client",        "Gestion et travail en équipe",    "Organisation d'un espace de travail partagé",
      ],
    },
    {
      title: "Développeur web fullstack",
      company_name: "eBrigade",
      icon: shopify,
      iconBg: "#383E56",
      date: "Décembre 2023 - Maintenant",
      points: [
        "Maintenance corrective",        "Développement de nouvelles fonctionnalités",
        "Développement de modules complémentaires",        "Développement d'une application en utilisant la méthode agile",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "Les tentatives de création de machines pensantes nous seront d’une grande aide pour découvrir comment nous pensons nous-mêmes.",
      name: "Alan Turing",
      designation: "",
      company: "",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "Les programmes doivent être faits pour être lus par des gens, et occasionnellement pour être exécutés par des machines.",
      name: "Hal Abelson",
      designation: "",
      company: "",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "There will be two kinds of people in the world, those who tell computers what to do, and those who’re told by computers what to do.",
      name: "Marc Andreesen",
      designation: "",
      company: "",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  const projects = [
    {
      name: "Ce Portfolio",
      description:
        "Le portfolio que vous visitez actuellement.",
      tags: [
        {
          name: "Projet Personnel",
          color: "green-text-gradient",
        },
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "three.js",
          color: "pink-text-gradient",
        },
        {
          name: "tailwind",
          color: "purple-text-gradient",
        },
      ],
      image: portfolioImage,
      source_code_link: "https://github.com/abdelrkb/portfolio",
    },
    {
      name: "Jeu Bataille des Boules",
      description:
        "Jeu vidéo codé dans le cadre d'un projet universitaire, en python qui consistait à une bataille de surface",
      tags: [
        {
          name: "Projet Universitaire",
          color: "green-text-gradient",
        },
        {
          name: "python",
          color: "blue-text-gradient",
        },

      ],
      image: jeuBoule,
      source_code_link: "https://github.com/abdelrkb/jeuBoule",
    },
    {
      name: "Backpack Hero",
      description:
        "Jeu Vidéo codé dans le cadre d'un projet universitaire",
      tags: [
        {
          name: "Projet Universitaire",
          color: "green-text-gradient",
        },
        {
          name: "Java21",
          color: "blue-text-gradient",
        },

      ],
      image: backpackHero,
      source_code_link: "https://github.com/abdelrkb/backpack_hero",
    },
    {
      name: "Scemantic",
      description:
        "Jeu Vidéo sur un serveur en ligne développé dans le cadre d'un projet universitaire avec un groupe",
      tags: [
        {
          name: "Projet Universitaire",
          color: "green-text-gradient",
        },
        {
          name: "Java21",
          color: "blue-text-gradient",
        },
        {
          name: "C",
          color: "purple-text-gradient",
        },
        {
          name: "PHP",
          color: "pink-text-gradient",
        },
        {
          name: "JS",
          color: "orange-text-gradient",
        },

      ],
      image: scemantic,
      source_code_link: "https://github.com/abdelrkb/SAE_SEMANTIC",
    },
    
  ];
  

  const hs = [
    {
      title: "Réaliser",
      icon: web,
      path: '/realiser', // Utilisez le chemin correct ici
    },
    {
      title: "Optimiser",
      icon: web,
      path: '/optimiser',
    },
    {
      title: "Administrer",
      icon: web,
      path: '/administrer',
    },
    {
      title: "Gérer",
      icon: web,
      path: '/gerer',
    },
    {
      title: "Conduire",
      icon: web,
      path: '/conduire',
    },
    {
      title: "Collaborer",
      icon: web,
      path: '/collaborer',
    },
  ];

//PROJETS COMPETENCES
const unescoPJ =     {
  name: "Projet Unesco",
  description:
    "Le Projet UNESCO, réalisé en groupe de 4 persones et en partenariat avec l'UNESCO avait pour but de créer un site internet ayant pour but de promouvoir les Rives de Sein inscrit au patrimoine de l'unesco. Ce site est disponible dans trois langues différentes.",
  tags: [
    {
      name: "Projet Universitaire",
      color: "green-text-gradient",
    },
    {
      name: "HTML5",
      color: "blue-text-gradient",
    },
    {
      name: "CSS3",
      color: "pink-text-gradient",
    },
    {
      name: "PHP",
      color: "orange-text-gradient",
    },
    {
      name: "SQL",
      color: "purple-text-gradient",
    },
    {
      name: "PhpMyAdmin",
      color: "yellow-text-gradient",
    },
  ],
  image: unesco,
  source_code_link: "https://github.com/abdelrkb/UnescoRiveDeSeine",
}

const scemanticPJ = {
  name: "Scemantic",
  description:
    "Jeu Vidéo sur un serveur en ligne développé dans le cadre d'un projet universitaire avec un groupe de quatre personnes",
  tags: [
    {
      name: "Projet Universitaire",
      color: "green-text-gradient",
    },
    {
      name: "Java21",
      color: "blue-text-gradient",
    },
    {
      name: "C",
      color: "purple-text-gradient",
    },
    {
      name: "PHP",
      color: "pink-text-gradient",
    },
    {
      name: "JS",
      color: "orange-text-gradient",
    },
    {
      name: "Python",
      color: "orange-text-gradient",
    },
    {
      name: "React",
      color: "orange-text-gradient",
    },
    {
      name: "TypeScript",
      color: "orange-text-gradient",
    },
    {
      name: "NodeJs",
      color: "orange-text-gradient",
    },
  ],
  image: scemantic,
  source_code_link: "https://github.com/abdelrkb/SAE_SEMANTIC",
}

const banquePJ = {
  name: "Portail Banquaire",
  description:
    "Création d'un site web dynamique dédié à la gestion des paiements par cartes bancaires. \nGrâce à un backlog préétabli, j'ai maintenu un flux de travail harmonieux tout au long du développement, garantissant la qualité du projet de bout en bout.",
  tags: [
    {
      name: "Projet Universitaire",
      color: "green-text-gradient",
    },
    {
      name: "PHP",
      color: "blue-text-gradient",
    },
    {
      name: "SQL",
      color: "pink-text-gradient",
    },
    {
      name: "JavaScript",
      color: "orange-text-gradient",
    },
    {
      name: "PhpMyAdmin",
      color: "purple-text-gradient",
    },
  ],
  image: bank,
  source_code_link: "https://github.com/abdelrkb/ProjetBanque",
}
const exploAlgoPJ =  {
  name: "Exploration Algorithmique",
  description:
    "Implémentation des algorithme sur les graphes. Ce projet offre la possibilité d'effectuer différentes transformations sur les automates. Parmi les transformations plus avancées, on trouve la minimisation, produit, ainsi que la déterminisation d'automates.",
  tags: [
    {
      name: "Projet Universitaire",
      color: "green-text-gradient",
    },
    {
      name: "Python",
      color: "blue-text-gradient",
    },
  ],
  image: graph,
  source_code_link: "https://github.com/abdelrkb/Exploration_Algorithmique",
}

const parcoursAlgoPJ = {
  name: "Parcours Algorithmique",
  description:
    "Implémentation des algorithme de parcours sur les graphes. Ce projet offre la possibilité d'effectuer parcours sur les automates.",
  tags: [
    {
      name: "Projet Universitaire",
      color: "green-text-gradient",
    },
    {
      name: "Python",
      color: "blue-text-gradient",
    },
  ],
  image: djikstra,
  source_code_link: "https://github.com/abdelrkb/Automates",
}

const boulegamePJ = {
  
    name: "Jeu Bataille des Boules",
    description:
      "Jeu vidéo codé dans le cadre d'un projet universitaire, en python qui consistait à une bataille de surface",
    tags: [
      {
        name: "Projet Universitaire",
        color: "green-text-gradient",
      },
      {
        name: "python",
        color: "blue-text-gradient",
      },

    ],
    image: jeuBoule,
    source_code_link: "https://github.com/abdelrkb/jeuBoule",
  }

const medicPJ = {
  name: "Centre médical",
  description:
    "Création d'un site web dynamique dédié à la gestion d'un centre médical. \nGrâce à un backlog préétabli, j'ai maintenu un flux de travail harmonieux tout au long du développement, garantissant la qualité du projet de bout en bout.",
  tags: [
    {
      name: "Projet Universitaire",
      color: "green-text-gradient",
    },
    {
      name: "PHP",
      color: "blue-text-gradient",
    },
    {
      name: "SQL",
      color: "pink-text-gradient",
    },
    {
      name: "PhpMyAdmin",
      color: "purple-text-gradient",
    },
  ],
  image: medic,
  source_code_link: "https://github.com/abdelrkb/CentreMedical",
}

const ihmPJ = {
  name: "Les Visiteurs",
  description:
    "Création d'une maquette d'aplication de réalité virtuelle dans Paris",
  tags: [
    {
      name: "Projet Universitaire",
      color: "green-text-gradient",
    },
    {
      name: "Figma",
      color: "blue-text-gradient",
    },
  ],
  image: ihm,
  source_code_link: "",
}

const projectsRealiser = [banquePJ,unescoPJ,scemanticPJ,ihmPJ];

const projectsOptimiser = [exploAlgoPJ,parcoursAlgoPJ,boulegamePJ,scemanticPJ,];

const projectsAdministrer = [scemanticPJ,];

const projectsGerer = [banquePJ, medicPJ,scemanticPJ,];

const projectsConduire = [scemanticPJ,unescoPJ,ihmPJ];

const projectsCollaborer = [unescoPJ,scemanticPJ, boulegamePJ, ihmPJ];

export { 
    services, 
    technologies, 
    experiences, 
    testimonials, 
    projects, 
    hs, 
    projectsRealiser, 
    projectsOptimiser, 
    projectsAdministrer, 
    projectsGerer, 
    projectsConduire, 
    projectsCollaborer };