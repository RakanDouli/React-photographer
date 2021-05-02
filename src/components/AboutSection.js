import React from "react";
import home1 from "../img/home1.png";
import { About, Description, Image, Hide } from "../styles";

//framer motion
import { motion } from "framer-motion";
import { titleAnim, fade, PhotoAnim } from "../pages/animation";

import Wave from "./wave";
const AboutSection = () => {
  return (
    <About class="about">
      <Description>
        <motion.div class="title">
          <Hide>
            <motion.h2 variants={titleAnim}>We work to make</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>
              your <span>dreams</span>{" "}
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>come true. </motion.h2>
          </Hide>
        </motion.div>
        <motion.p variants={fade}>
          Contact us for any photography or videography ideas that you havem we
          have professionals with amazing skills
        </motion.p>
        <motion.button variants={fade}>Contact us</motion.button>
      </Description>
      <Image>
        <motion.img variants={PhotoAnim} src={home1} alt="sd" />
      </Image>
      <Wave />
    </About>
  );
};

export default AboutSection;
