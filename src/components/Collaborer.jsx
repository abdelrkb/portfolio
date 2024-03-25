// Realiser.jsx
import React from "react";
import { SectionWrapper } from "../hoc";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { styles } from "../styles";

import { github } from "../assets";
import { projectsCollaborer } from "../constants";
import { Tilt } from "react-tilt";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
      >
        <div className='relative w-full h-[230px]'>
          <img
            src={image}
            alt='project_image'
            className='w-full h-full object-cover rounded-2xl'
          />

          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src={github}
                alt='source code'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
          </div>
        </div>

        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};


const Collaborer = () => {
  // Contenu de votre composant Realiser
  return (
    <div>
              <motion.div variants={textVariant()}>
          <h2 className={styles.sectionHeadText}>Collaborer</h2>
          <p className={styles.sectionSubText}> Lancer un nouveau projet en équipe et organiser son travail en relation avec celle-ci. Elaborer, gérer et transmettre l'information.
          </p>
        </motion.div>
      {<h1></h1>
      }
     <h2> Liste non exhaustive de mes projets en rapport avec cette compétence : </h2>   
     <div className='mt-20 flex flex-wrap gap-7'>
        {projectsCollaborer.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
      <br/>
      Dans la collaboration, j'estime mon niveau de compétence à 100%. Fort d'une expérience significative, j'excelle dans le lancement nouveaux projets en équipe et pour organiser efficacement le travail en relation avec celle-ci. Je suis également habile à élaborer, gérer et transmettre l'information de manière claire et efficace. En continuant à cultiver un environnement de travail positif, à encourager la communication ouverte et à tirer parti des forces de chaque membre de l'équipe, je suis déterminé à maintenir et à renforcer mes compétences en matière de collaboration.
      </div>     
     
  );
};
 
export default SectionWrapper(Collaborer, "");
