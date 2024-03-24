import React from "react";
import { SectionWrapper } from "../hoc";
import { ProgressBar } from "../hoc";

import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { styles } from "../styles";

import { github } from "../assets";
import { projectsRealiser } from "../constants";
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

  const testData = [
    { bgcolor: "#6a1b9a", completed: 60 },
  ];

const Realiser = () => {
  return (
    <div>
              <motion.div variants={textVariant()}>
          <h2 className={styles.sectionHeadText}>Realiser</h2>
          <p className={styles.sectionSubText}>Elaborer une application informatique, la faire évoluer et la maintenir en condition opérationelle</p>
        </motion.div>
      {<h1></h1>
      }
      <p> </p>
     <h2> Liste non exhaustive de mes projets en rapport avec cette compétence : </h2>
      


     <div className='mt-20 flex flex-wrap gap-7'>
        {projectsRealiser.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    <br />

    Dans la réalisation d'applications informatiques, leur évolution et leur maintenance, je m'estime à un niveau de compétence de 80%. Ma solide expérience pratique dans la réalisation de plusieurs projets témoigne de mes compétences. Néanmoins, je suis conscient qu'il existe des axes d'amélioration, notamment en matière de documentation, de tests et de gestion de projet. En continuant à perfectionner mes compétences en analyse des besoins et en restant à l'affût des dernières avancées technologiques, je suis déterminé à consolider davantage mon expertise dans ce domaine.

    </div>

     
  );
};

export default SectionWrapper(Realiser, "");
/*export default SectionWrapper(HardSkills, "");*/