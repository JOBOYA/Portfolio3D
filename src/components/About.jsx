import React from "react";
import Tilt from 'react-parallax-tilt';

import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
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
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}> Petit Aperçu</h2>
      </motion.div>
      
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
       
        Je suis un développeur front-end passionné par le nouvelles technologies. J'adore relever des défis et je suis toujours à la recherche de nouvelles façons de créer des sites web modernes et innovants.
        Mon objectif est de fournir des expériences utilisateur exceptionnelles en utilisant les dernières technologies.
        🚀 Mon passe-temps préféré est de coder et je suis toujours prêt à apprendre de nouvelles choses pour améliorer mes compétences en programmation.
        🌟 Travaillons ensemble pour créer des projets incroyables !
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10 justify-center transition-all duration-300 before:content before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-black before:bg-opacity-50 before:z-[-1] before:rounded-[20px] before:scale-0 before:transform before:origin-left before:transition-all before:duration-300 before:ease-in-out before:delay-300 hover:before:opacity-100 hover:before:scale-100'>
      {services.map((service, index) => (
        <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
