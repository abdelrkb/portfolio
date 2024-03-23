// Realiser.jsx
import React from "react";
import { SectionWrapper } from "../hoc";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { styles } from "../styles";

const Optimiser = () => {
  // Contenu de votre composant Realiser
  return (
    <div>
              <motion.div variants={textVariant()}>
          <h2 className={styles.sectionHeadText}>Optimiser</h2>
          <p className={styles.sectionSubText}>Améliorer les performances des programmes dans des contextes contraints, mettre en place des applications informatiques adaptées et efficaces tout en limitant son impact environnemental.
          </p>
        </motion.div>
      {<h1></h1>
      }
     <h2> Liste non exhaustive de mes projets en rapport avec cette compétence : </h2>    </div>  
  );
};

export default SectionWrapper(Optimiser, "");
