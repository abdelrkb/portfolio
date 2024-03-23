// Realiser.jsx
import React from "react";
import { SectionWrapper } from "../hoc";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { styles } from "../styles";

const Gerer = () => {
  // Contenu de votre composant Realiser
  return (
    <div>
              <motion.div variants={textVariant()}>
          <h2 className={styles.sectionHeadText}>Gérer</h2>
          <p className={styles.sectionSubText}>Lancer un nouveau projet, exploiter des données pour des prises de décisions tout en les sécurisant</p>
        </motion.div>
      {<h1></h1>
      }
     <h2> Liste non exhaustive de mes projets en rapport avec cette compétence : </h2>    </div>   
  );
};

export default SectionWrapper(Gerer, "");
