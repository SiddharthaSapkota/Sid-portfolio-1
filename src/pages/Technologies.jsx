import React from "react";
import { SiDjango, SiReact, SiMongodb } from "react-icons/si";
import { FaHtml5, FaJs, FaBootstrap } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { motion } from "framer-motion";

export default function Technologies() {
  // Technology Data (Icon, Color, Duration)
  const technologies = [
    { icon: <SiDjango className="text-7xl text-green-700" />, duration: 2 },
    { icon: <SiReact className="text-7xl text-cyan-400" />, duration: 2.5 },
    {
      icon: (
        <img
          src="https://s3.dualstack.us-east-2.amazonaws.com/pythondotorg-assets/media/files/python-logo-only.svg"
          style={{ height: "72px", width: "72px" }}
          alt="Python"
        />
      ),
      duration: 5,
    },
    { icon: <FaHtml5 className="text-7xl text-orange-500" />, duration: 6 },
    { icon: <FaBootstrap className="text-7xl text-violet-700" />, duration: 4 },
    { icon: <RiTailwindCssFill className="text-7xl text-cyan-400" />, duration: 3 },
    { icon: <FaJs className="text-7xl text-amber-400" />, duration: 5 },
    { icon: <SiMongodb className="text-7xl text-green-500" />, duration: 6 },
  ];

  // Animation Variants
  const iconVar = (duration) => ({
    initial: { y: -10 },
    animate: {
      y: [10, -10],
      transition: {
        duration: duration,
        ease: "linear",
        repeat: Infinity,
        repeatType: "reverse",
      },
    },
  });

  return (
    <div id="skills" className="h-1/2 flex flex-col justify-center items-center pb-24">
      <h1 className="my-20 text-center text-4xl">Technologies</h1>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        {technologies.map((tech, index) => (
          <motion.div
            key={index}
            variants={iconVar(tech.duration)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4"
          >
            {tech.icon}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
