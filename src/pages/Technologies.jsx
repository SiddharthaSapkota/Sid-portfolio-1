import React from "react";
import { SiDjango, SiReact, SiMongodb, SiMysql, SiLinux, SiPostman } from "react-icons/si";
import { FaHtml5, FaJs, FaBootstrap, FaCss3, } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { motion } from "framer-motion";

export default function Technologies() {
  // Technology Data (Icon, Color, Duration)
  const technologies = [
    {
      icon: (
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/3/35/Tux.svg"
          style={{ height: "72px", width: "72px" }}
          alt="Linux"
        />
      ),
      duration: 2,
    },
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
    { icon: <FaCss3 className="text-7xl text-blue-400" />, duration: 5 },
    { icon: <SiMysql className="text-7xl text-blue-500" />, duration: 6 },
    { icon: <FaJs className="text-7xl text-amber-400" />, duration: 5},
    { icon: <SiPostman className="text-7xl text-orange-500" />, duration: 2 },
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
    <section id="skills" className="w-full mb-10 py-10 flex flex-col justify-center items-center">
      <h1 className="text-center text-4xl font-bold mb-10">Technologies</h1>
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
            className="rounded-2xl border-4 border-green-500 p-4"
          >
            {tech.icon}
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
