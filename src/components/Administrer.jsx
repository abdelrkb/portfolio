// Realiser.jsx
import React from "react";
import { SectionWrapper } from "../hoc";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { styles } from "../styles";

const Administrer = () => {
  // Contenu de votre composant Realiser
  return (
    <div>
              <motion.div variants={textVariant()}>
          <h2 className={styles.sectionHeadText}>Administrer</h2>
          <p className={styles.sectionSubText}>Déployer une nouvelle architecture technique et l'améliorer. Securisez les applications et ses services</p>
        </motion.div>
      {<h1></h1>
      }
     <h2> Liste non exhaustive de mes projets en rapport avec cette compétence : </h2>    </div>
  );
};

export default SectionWrapper(Administrer, "");
