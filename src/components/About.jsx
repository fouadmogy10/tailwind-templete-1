import React from 'react'
import   about from "../assets/img/about.png";
import Title from './Title';
import { motion } from "framer-motion";
import { fadeIn } from "./variants";
const About = () => {
  return (
    <section id="about"
    className="flex justify-between items-center max-container w-full gap-10 max-lg:flex-col"
    >
      
      <motion.div
       variants={fadeIn("right",0.2)}
       initial="hidden"
       whileInView={"show"}
       viewport={{once:false,amount:0.7}}
      className='flex-1  flex justify-center items-center'>
        <img loading="lazy"
          src={about}
          alt='product detail' 
          className='object-contain'
        />
      </motion.div>
      <motion.div
      variants={fadeIn("left",0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{once:false,amount:0.7}}
      className='flex flex-1 flex-col mt-auto'>
      <Title
        title1={"We have been improving our product "}
        coloredTit={"for many years."}
        text={
          "A good example of a paragraph contains a topic conclusion 'There are many different kinds of animals that live in China."
        }
        />
        <div className="my-10">
            <button className='text-white rounded-none py-3 px-6'>Get Started</button>
        </div>
      </motion.div>
    </section>
  )
}

export default About