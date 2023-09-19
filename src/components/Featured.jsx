import React from "react";
import featured from "../assets/img/featured.png";
import { motion } from "framer-motion";
import { fadeIn } from "./variants";
const Featured = () => {
  return (
    <section className="max-container padding-y" id="feature">
      <motion.div
       variants={fadeIn("top",0.2)}
       initial="hidden"
       whileInView={"show"}
       viewport={{once:false,amount:0.7}}
      className="title text-center">
        <h2 className="text-secondary text-3xl font-bold mb-2">
          Why we are better than others
        </h2>
        <p className="mx-auto md:w-2/5 text-gray-400">
          A simple paragraph is comprised of three major components. The first
          sentence, which is often a declarative sentence, is called the “topic
          sentence.”
        </p>
      </motion.div>
      
      <div
       
      className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1  grid-cols-1 sm:gap-6 gap-14 ">
        <motion.div 
         variants={fadeIn("top",0.2)}
         initial="hidden"
         whileInView={"show"}
         viewport={{once:false,amount:0.7}}
       >
        <div  className="flex flex-1 flex-col items-center  shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-[50px] md:hover:-translate-y-6 transition-all cursor-pointer ">
          <a href="#!">
            <img
              width={"100%"}
              height={"100"}
              loading="lazy"
              className="rounded-t-lg"
              src={featured}
              alt="Skyscrapers"
            />
          </a>
          <div className="p-3 text-center">
            <h4 className= "text-justify mb-2 text-xl  leading-tight font-semibold text-secondary lg:text-[22px] sm:text-[16px] xs:text-[16px]">  
              <p>Conventient</p>
              <p>study</p>
              <p>schedule</p>
            </h4>
           
          </div>
        </div>
        </motion.div>
        <motion.div 
         variants={fadeIn("top",0.2)}
         initial="hidden"
         whileInView={"show"}
         viewport={{once:false,amount:0.7}}
        >
          <div className="flex flex-1 flex-col items-center  shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-[50px] md:translate-y-10 md:hover:-translate-y-1 transition-all cursor-pointer">
            
          <a href="#!">
            <img
              width={"100%"}
              height={"100"}
              loading="lazy"
              className="rounded-t-lg"
              src={featured}
              alt="Skyscrapers"
            />
          </a>
          <div className="p-3 text-center">
            <h4 className= "text-justify mb-2 text-xl  leading-tight font-semibold text-secondary lg:text-[22px] sm:text-[16px] xs:text-[16px]">  
              <p>Conventient</p>
              <p>study</p>
              <p>schedule</p>
            </h4>
           
          </div>
          </div>

        </motion.div>
        <motion.div 
         variants={fadeIn("top",0.2)}
         initial="hidden"
         whileInView={"show"}
         viewport={{once:false,amount:0.7}}
       >
        <div  className="flex flex-1 flex-col items-center  shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-[50px] md:hover:-translate-y-6 transition-all cursor-pointer ">
          <a href="#!">
            <img
              width={"100%"}
              height={"100"}
              loading="lazy"
              className="rounded-t-lg"
              src={featured}
              alt="Skyscrapers"
            />
          </a>
          <div className="p-3 text-center">
            <h4 className= "text-justify mb-2 text-xl  leading-tight font-semibold text-secondary lg:text-[22px] sm:text-[16px] xs:text-[16px]">  
              <p>Conventient</p>
              <p>study</p>
              <p>schedule</p>
            </h4>
           
          </div>
        </div>
        </motion.div>
        <motion.div 
         variants={fadeIn("top",0.2)}
         initial="hidden"
         whileInView={"show"}
         viewport={{once:false,amount:0.7}}
        >
          <div className="flex flex-1 flex-col items-center  shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-[50px] md:translate-y-10 md:hover:-translate-y-1 transition-all cursor-pointer">
            
          <a href="#!">
            <img
              width={"100%"}
              height={"100"}
              loading="lazy"
              className="rounded-t-lg"
              src={featured}
              alt="Skyscrapers"
            />
          </a>
          <div className="p-3 text-center">
            <h4 className= "text-justify mb-2 text-xl  leading-tight font-semibold text-secondary lg:text-[22px] sm:text-[16px] xs:text-[16px]">  
              <p>Conventient</p>
              <p>study</p>
              <p>schedule</p>
            </h4>
           
          </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default Featured;
