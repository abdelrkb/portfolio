import React from "react";
import { SectionWrapper } from "../hoc";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { styles } from "../styles";

const Realiser = () => {
  return (
    <div>
              <motion.div variants={textVariant()}>
          <h2 className={styles.sectionHeadText}>Realiser</h2>
          <p className={styles.sectionSubText}>Elaborer une application informatique, la faire évoluer et la maintenir en condition opérationelle</p>
        </motion.div>
      {<h1></h1>
      }
     <h2> Liste non exhaustive de mes projets en rapport avec cette compétence : </h2>

    </div>
  );
};

export default SectionWrapper(Realiser, "");
/*export default SectionWrapper(HardSkills, "");*/