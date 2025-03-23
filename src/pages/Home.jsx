import React from "react";
import Sid from "/siddhartha.png";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

function Home() {
  const container = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        delay: delay,
        duration: 0.5,
      },
    },
  });

  return (
    <div id="home" className="h-screen w-full flex items-center px-6 lg:px-16">
      <div className="container mx-auto flex flex-col items-center justify-center text-center lg:flex-row lg:text-left">
        
        {/* Left Section - Text */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center flex-wrap">
          <motion.h1
            variants={container(0)}
            initial="hidden"
            animate="visible"
            className="pb-4 text-3xl text-white font-thin tracking-light sm:text-4xl md:text-5xl lg:text-5xl"
          >
            <Typewriter
                words={["Hi, I'm Siddhartha Sapkota 👋"]}
                loop={1} // 0 means infinite loop
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1500}
            />

          </motion.h1>

          <motion.span
            variants={container(0.5)}
            initial="hidden"
            animate="visible"
            className="bg-gradient-to-r from-blue-300 via-cyan-200 to-green-500 bg-clip-text text-transparent text-2xl sm:text-3xl md:text-4xl tracking-light"
          >
            Quality Assurance | Cybersecurity Aspirant
          </motion.span>

          <motion.p
            variants={container(1)}
            initial="hidden"
            animate="visible"
            className="my-4 max-w-xl mx-auto lg:mx-0 font-light tracking-tight text-gray-400 text-sm sm:text-base md:text-lg"
          >
            I am Siddhartha Sapkota, a Quality Assurance Tester and Cybersecurity enthusiast. I like to learn more about Cybersecurity. I am always eager to learn new technologies and improve my skills.
          </motion.p>
        </div>

        {/* Right Section - Image */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
          <motion.img
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
            src={Sid}
            alt="Siddhartha Sapkota"
            className="rounded-lg size-2/3 sm:size-3/5 shadow-lg"
          />
        </div>
        
      </div>
    </div>
  );
}

export default Home;
