import portfolioImage from "../assets/portfolio.png";
import jeuBoule from "../assets/jeuboule.jpg";


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
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "PHP",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
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
        "Bla bla bla",        "Bla bla bla",        "Bla bla bla",        "Bla bla bla",      ],
    },
    {
      title: "Hôte d'acceuil",
      company_name: "Auchan",
      icon: starbucks,
      iconBg: "#E6DEDD",
      date: "Octobre 2021 - Décembre 2023",
      points: [
        "Bla bla bla",        "Bla bla bla",        "Bla bla bla",        "Bla bla bla",
      ],
    },
    {
      title: "Développeur web fullstack",
      company_name: "eBrigade",
      icon: shopify,
      iconBg: "#383E56",
      date: "Décembre 2023 - Maintenant",
      points: [
        "Bla bla bla",        "Bla bla bla",
        "Bla bla bla",        "Bla bla bla",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
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
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "three.js",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
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
          name: "python",
          color: "blue-text-gradient",
        },
      ],
      image: jeuBoule,
      source_code_link: "https://github.com/abdelrkb/jeuBoule",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };