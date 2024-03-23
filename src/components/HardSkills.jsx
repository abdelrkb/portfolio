import React from "react";
import { Tilt } from "react-tilt";
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { hs } from "../constants";


const ServiceCard = ({ index, title, icon, path }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <Link to={path}> {/* Utilisez la propriété 'path' ici */}
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        >
          <img
            src={icon}
            alt='web-development'
            className='w-16 h-16 object-contain'
          />

          <h3 className='text-white text-[20px] font-bold text-center'>
            {title}
          </h3>
        </div>
      </motion.div>
    </Link>
  </Tilt>
);



const HardSkills = () => {
  return (
    <>
     <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Mes Hard Skills</p>
        <h2 className={styles.sectionHeadText}>Liste de mes hard skills</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        Une liste de mes Hard Skills obtenu pendant mes années d'études ou aussi bien dans un cadre profesionnel.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
      {hs.map((service, index, path) => (
          <ServiceCard key={service.title} index={index} {...service} {...path}/>
        ))}
      </div>
    </>
  );
};



export default SectionWrapper(HardSkills, "");