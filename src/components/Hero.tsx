"use client";
import { motion } from "framer-motion";
import React, { useRef } from "react";
import Image from "next/image";
import Dragble from "./Dragble";
import EmailForm from "./emailForm";

const Hero = () => {
  const constraintsRef = useRef(null);
  const Images = [
    {
      name: "table1",
      className:
        " transform transition-all duration-400 ease-out  w-fit h-fit absolute 3xl:-bottom-20 z-20  3xl:right-36 -bottom-24 right-14",
      size: "w-96 h-96 3xl:w-[400px] 3xl:h-[400px]",
    },
    {
      name: "table-set",
      className:
        " transform transition-all duration-400 ease-out  w-fit h-fit absolute -bottom-20  3xl:left-36 left-2 z-20",
      size: "w-96 h-96 3xl:w-[400px] 3xl:h-[400px]",
    },
    {
      name: "couch",
      className:
        " transform transition-all duration-400 ease-out  w-fit h-fit absolute 3xl:top-8  -top-4 3xl:-left-0 z-10 -left-16 ",
      size: "w-96 h-96 3xl:w-[450px] 3xl:h-[450px]",
    },
    {
      name: "tv-set",
      className:
        " transform transition-all duration-400 ease-out  w-fit h-fit absolute 3xl:top-8  -top-4 3xl:-right-0 z-10 -right-16 ",
      size: "w-[380px] h-[380px] 3xl:w-[400px] 3xl:h-[400px]",
    },
  ];
  return (
    // Hero Canvas
    <div
      ref={constraintsRef}
      className="w-screen h-screen overflow-hidden flex  relative  "
    >
      {/* Dragable Space */}
      <motion.div
        drag
        dragMomentum={true}
        dragTransition={{ timeConstant: 400, power: 0.08 }}
        dragConstraints={constraintsRef}
        whileTap={{ cursor: "grabbing" }}
        whileInView={{ cursor: "grab" }}
        className=" w-[2500px] h-[2500px] flex justify-center items-center absolute 3xl:top-[-760px] 2xl:top-[-870px]    left-[-480px] 3xl:left-[-290px]     bg-[#FCFCFC] overflow-hidden"
      >
        <div className="border-2 border-dashed w-fit h-fit relative ">
          {Images.map((image, index) => (
            <Dragble
              key={index}
              name={image.name}
              className={image.className}
              size={image.size}
            />
          ))}
          <div className="text-center w-screen h-screen  relative flex flex-col items-center justify-center gap-6 ">
            <motion.div
              whileHover={{ scale: 1.1, rotate: 12 }}
              whileTap={{ scale: 1.3, cursor: "grabbing" }}
              whileDrag={{ zIndex: 1000 }}
              drag
              dragMomentum={false}
              className="-mt-20  hover:shadow-2xl transform transition-all duration-400 ease-out  "
            >
              <div className="w-full h-full absolute top-0 left-0" />
              <Image
                src="/logo.svg"
                width={100}
                height={100}
                alt="logo"
                className="3xl:w-32 3xl:h-32"
              />
            </motion.div>
            <h1
              className=" 
          3xl:text-7xl text-6xl font-extrabold text-[#18181B]
          "
            >
              Effortless Reservations, <br /> Seamless{" "}
              <span className="text-[#3C4AC7] font-serif font-medium italic">
                Experience
              </span>
            </h1>
            <p className="3xl:text-xl text-lg text-gray-700 font-medium  ">
              No more endless phone calls. No more scribbled notes and
              crossed-out reservations.
              <br /> Create a detailed, interactive 2D version of your space,
              allowing your customers
              <br /> to browse, select, and book their preferred spots with
              ease.
            </p>
            <EmailForm />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
