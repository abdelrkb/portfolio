// Realiser.jsx
import React from "react";
import { SectionWrapper } from "../hoc";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { styles } from "../styles";

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
     <h2> Liste non exhaustive de mes projets en rapport avec cette compétence : </h2>    </div>     
     
  );
};

export default SectionWrapper(Collaborer, "");
