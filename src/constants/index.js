import portfolioImage from "../assets/portfolio.png";
import jeuBoule from "../assets/jeuboule.jpg";
import backpackHero from "../assets/backPack.jpeg";
import scemantic from "../assets/scemantic.png";
import jquery from "../assets/tech/jquery.png";


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
      percent : "95%",
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
      percent : "55%",

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
      name: "This Portfolio",
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
      name: "Jeu Boule",
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
  
  export { services, technologies, experiences, testimonials, projects };