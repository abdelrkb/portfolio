// Realiser.jsx
import React from "react";
import { SectionWrapper } from "../hoc";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { styles } from "../styles";

const Conduire = () => {
  // Contenu de votre composant Realiser
  return (
    <div>
    <div>
              <motion.div variants={textVariant()}>
          <h2 className={styles.sectionHeadText}>Conduire</h2>
          <p className={styles.sectionSubText}> Lancer un nouveau projet et piloter son maintien en condition opérationelle, faire évoluer un système d'information
          </p>
        </motion.div>
      {<h1></h1>
      }
     <h2> Liste non exhaustive de mes projets en rapport avec cette compétence : </h2>    </div>      </div>
  );
};

export default SectionWrapper(Conduire, "");
