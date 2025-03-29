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
import cnil from "../assets/cnil.png";
import reseau from "../assets/reseau.jpeg";
import ansc from "../assets/ansc.png"
import gc from "../assets/logo_gc.png"

import {
    mobile,
    backend,
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
    docker,
    shopify,
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
      title: "Backend Developer ",
      icon: backend,
    },
    {
      title: "Python Developer",
      icon: mobile,
    },
    {
      title: "Data Engineer",
      icon: web,
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
      percent : "100%",

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
      title: "Développeur web fullstack",
      company_name: "eBrigade",
      icon: shopify,
      iconBg: "#383E56",
      date: "Décembre 2023 - Juin 2024",
      points: [
        "Maintenance corrective",        "Développement de nouvelles fonctionnalités",
        "Développement de modules complémentaires"
      ],
    },
    {
      title: "Ingénieur Data",
      company_name: "Agence Numérique de la Sécurité Civile",
      icon: ansc,
      iconBg: "#383E56",
      date: "Septembre 2024 - Maintenant",
      points: [
        "Création d'architecture de données complexe",        "Automatisation de flux de données",
        "Développement de modules complémentaires",        "Développement d'une application en utilisant la méthode agile",
      ],
    }
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

const sqlColor =  "purple-text-gradient";
const htmlColor =  "blue-text-gradient";
const javaColor = "yellow-text-gradient";
const cssColor = "pink-text-gradient";
const pjColor = "green-text-gradient";
const pythonColor = "lightpink-text-gradient";
const jsColor = "orange-text-gradient"
const phpColor = "lime-text-gradient"
const phpAdmin = "grey-text-gradient"
const cColor = "bbgum-text-gradient";
const reactColor ="teal-text-gradient";
const nodeColor ="navy-text-gradient";
const typescriptColor ="lightlime-text-gradient";
const tailWindColor ="bbgumpurple-text-gradient";
const threeJSColor ="lightgray-text-gradient";

const gcPJ = {
  name : "Projet Green Circle",
  description : "Le projet Green Circle, réalisé en groupe de 4 personnes, en partenariat avec les étudiants MIPI en M2 et l'agglomération du Val d'Europe. Ce projet avait pour but de créer le POC Fonctionelle de l'application Green Circle, application ayant pour but de créer une économie circulaire dans le PIE du Val d'Europe.",
  tags: [
    {
      name: "Projet Universitaire/Professionel",
      color: pjColor,
    },
    {
      name: "SQL",
      color: sqlColor,
    },
    {
      name: "JavaScript",
      color: jsColor,
    },
    {
      name: "Python",
      color: pythonColor,
    },
    {
      name: "React",
      color: reactColor,
    },
  ],
    image: gc,
    source_code_link: "https://github.com/ChamsedineAmouche/Green-Circle",
}
const unescoPJ =     {
    name: "Projet Unesco",
    description:
      "Le Projet UNESCO, réalisé en groupe de 4 personnes, en partenariat avec l'UNESCO avait pour but de créer un site internet afin de promouvoir les Rives de Seine inscrit au patrimoine de l'unesco. Ce site est disponible dans trois langues différentes.",
    tags: [
      {
        name: "Projet Universitaire",
        color: pjColor,
      },
      {
        name: "HTML5",
        color: htmlColor,
      },
      {
        name: "CSS3",
        color: cssColor,
      },
      {
        name: "PHP",
        color: phpColor,
      },
      {
        name: "SQL",
        color: sqlColor,
      },
      {
        name: "PhpMyAdmin",
        color: phpAdmin,
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
        color: pjColor,
      },
      {
        name: "Java21",
        color: javaColor,
      },
      {
        name: "C",
        color: cColor,
      },
      {
        name: "PHP",
        color: phpColor,
      },
      {
        name: "JavaScript",
        color: jsColor,
      },
      {
        name: "Python",
        color: pythonColor,
      },
      {
        name: "React",
        color: reactColor,
      },
      {
        name: "TypeScript",
        color: typescriptColor,
      },
      {
        name: "NodeJs",
        color: nodeColor,
      },
      {
        name: "SQL",
        color: sqlColor,
      },
      {
        name: "PHPMyAdmin",
        color: phpAdmin,
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
        color: pjColor,
      },
      {
        name: "PHP",
        color: phpColor,
      },
      {
        name: "SQL",
        color: sqlColor,
      },
      {
        name: "JavaScript",
        color: jsColor,
      },
      {
        name: "PhpMyAdmin",
        color: phpAdmin,
      },
    ],
    image: bank,
    source_code_link: "https://github.com/abdelrkb/ProjetBanque",
  }
  const exploAlgoPJ =  {
    name: "Exploration Algorithmique",
    description:
      "Implémentation des algorithme sur les graphes. Ce projet offre la possibilité d'effectuer différentes transformations sur les automates. Parmi les transformations les plus avancées, on trouve la minimisation, produit, ainsi que la déterminisation d'automates.",
    tags: [
      {
        name: "Projet Universitaire",
        color: pjColor,
      },
      {
        name: "Python",
        color: pythonColor,
      },
    ],
    image: graph,
    source_code_link: "https://github.com/abdelrkb/Exploration_Algorithmique",
  }
  
  const parcoursAlgoPJ = {
    name: "Parcours Algorithmique",
    description:
      "Implémentation des algorithme de parcours sur les graphes. Ce projet offre la possibilité d'effectuer des parcours sur les automates.",
    tags: [
      {
        name: "Projet Universitaire",
        color: pjColor,
      },
      {
        name: "Python",
        color: pythonColor,
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
          color: pjColor,
        },
        {
          name: "Python",
          color: pythonColor,
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
        color: pjColor,
      },
      {
        name: "PHP",
        color: phpColor,
      },
      {
        name: "SQL",
        color: sqlColor,
      },
      {
        name: "PhpMyAdmin",
        color: phpAdmin,
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
        color: pjColor,
      },
      {
        name: "Figma",
        color: "blue-text-gradient",
      },
    ],
    image: ihm,
    source_code_link: "",
  }

const portfolioPj = {
  name: "Ce Portfolio",
  description:
    "Le portfolio que vous visitez actuellement.",
  tags: [
    {
      name: "Projet Personnel",
      color: pjColor,
    },
    {
      name: "React",
      color: reactColor,
    },
    {
      name: "three.js",
      color: threeJSColor,
    },
    {
      name: "Tailwind",
      color: tailWindColor,
    },
  ],
  image: portfolioImage,
  source_code_link: "https://github.com/abdelrkb/portfolio",
}

const bpHeroPJ =     {
  name: "Backpack Hero",
  description:
    "Jeu Vidéo codé dans le cadre d'un projet universitaire",
  tags: [
    {
      name: "Projet Universitaire",
      color: pjColor,
    },
    {
      name: "Java21",
      color: javaColor,
    },

  ],
  image: backpackHero,
  source_code_link: "https://github.com/abdelrkb/backpack_hero",
}
const cnilPJ =     {
  name: "Contrôle Cnil",
  description:
    "Carte répértoriant tout les contrôles CNIL effectué entre 2017 et 2022. Réalisé dans une équipe de 4 personnes.",
  tags: [
    {
      name: "Projet Universitaire",
      color: pjColor,
    },
    {
      name: "PHP",
      color: javaColor,
    },
    {
      name: "SQL",
      color: sqlColor,
    },
    {
      name: "PHPMyAdmin",
      color: phpAdmin,
    },
  ],
  image: cnil,
  source_code_link: "https://github.com/elyasmlm/controles_cnil",
}
const reseauPj =     {
  name: "Installation et etude du fonctionnement du protocole HTTP sous Linux",
  description:
    "L’objectif de cette SAE est d’installer et d'étudier le fonctionnement du protocole HTTP et sa configuration sous Linux.",
  tags: [
    {
      name: "Projet Universitaire",
      color: pjColor,
    },
    {
      name: "WireShark",
      color: javaColor,
    },
    {
      name: "Linux",
      color: sqlColor,
    },
    {
      name: "NetKit",
      color: phpAdmin,
    },
  ],
  image: reseau,
  source_code_link: "",
}
//
const projects = [gcPJ, unescoPJ, scemanticPJ, portfolioPj, bpHeroPJ,  banquePJ, exploAlgoPJ, parcoursAlgoPJ, boulegamePJ,ihmPJ,medicPJ, cnilPJ, reseauPj];
  

  const hs = [
    {
      title: "Réaliser",
      icon: web,
      path: '/realiser', 
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


const projectsRealiser = [gcPJ, banquePJ,unescoPJ,scemanticPJ,ihmPJ,cnilPJ];

const projectsOptimiser = [gcPJ, exploAlgoPJ,parcoursAlgoPJ,boulegamePJ,scemanticPJ,];

const projectsAdministrer = [gcPJ, scemanticPJ,reseauPj,];

const projectsGerer = [gcPJ, banquePJ, medicPJ,scemanticPJ,];

const projectsConduire = [gcPJ, scemanticPJ,unescoPJ,ihmPJ,cnilPJ];

const projectsCollaborer = [gcPJ, unescoPJ,scemanticPJ, boulegamePJ, ihmPJ,cnilPJ];

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