import React from "react";
import { motion } from 'framer-motion';
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { textVariant } from "../utils/motion";

const Tech = () => {
  return (
    
    <div className='flex flex-row flex-wrap justify-center gap-10'>

      {technologies.map((technology) => (
        <div className='w-28 h-28' key={technology.name}>
          <BallCanvas icon={technology.icon} percent={technology.percent}/>
          
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");