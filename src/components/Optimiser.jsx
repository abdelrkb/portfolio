// Realiser.jsx
import React from "react";
import { SectionWrapper } from "../hoc";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { styles } from "../styles";

import { github } from "../assets";
import { projectsOptimiser } from "../constants";
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
 
const Optimiser = () => {
  return (
    <div>
              <motion.div variants={textVariant()}>
          <h2 className={styles.sectionHeadText}>Optimiser</h2>
          <p className={styles.sectionSubText}>Améliorer les performances des programmes dans des contextes contraints, mettre en place des applications informatiques adaptées et efficaces tout en limitant son impact environnemental.
          </p>
        </motion.div>
      {<h1></h1>
      }
     <h2> Liste non exhaustive de mes projets en rapport avec cette compétence : </h2>    
     
     <div className='mt-20 flex flex-wrap gap-7'>
        {projectsOptimiser.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
      <br/>
      Dans l'optimisation des performances des programmes, je me situe à un niveau de compétence de 70%. J'ai acquis une solide expérience dans l'amélioration des performances des applications dans des contextes contraints. Cependant, je reconnais qu'il reste des progrès à faire pour mettre en place des applications informatiques encore plus adaptées et efficaces, tout en minimisant leur impact environnemental. En continuant à explorer de nouvelles techniques d'optimisation et à intégrer les meilleures pratiques en matière de développement durable, je vise à renforcer davantage mes compétences dans ce domaine.

     </div>  
  );
};

export default SectionWrapper(Optimiser, "");
