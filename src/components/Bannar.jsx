import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "./variants";
const Bannar = ({title,title2,par,img,btnTit,btnTit2}) => {
  return (
    <header className="md-px-12 p-4 max-w-screen-2xl  bg-gradient-to-br from-pink to-primary  mx-5 rounded-3xl rounded-br-[150px]">
      <div className="flex flex-col-reverse md:flex-row items-center gap-10 justify-between m-5 ">
        <motion.div
        variants={fadeIn("up",0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once:false,amount:0.7}}
        >
          <h1 className="text-[22px] sm:text-[32px]  lg:text-[54px] font-bold text-white">{title}<br/> {title2}</h1>
          <p className="text-muted capitalize my-4 text-blue-100 lg:text-[20px] lg:w-3/5">{par}</p>
          <button className="mr-2 text-white rounded-none">{btnTit}</button>
          {
            btnTit2 && <button className=" text-white rounded-none">{btnTit2}</button>
          }
        </motion.div>
            <motion.div 
            variants={fadeIn("down",0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once:false,amount:0.7}}
            className="mix-blend-multiply">
              
                <img src={img} className=" " alt="" />
            </motion.div>
      </div>
    </header>
  );
};

export default Bannar;
