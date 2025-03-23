import React from "react";
import { motion } from "framer-motion";
import projects from "../data/projects";

export default function Projects() {
  return (
    <section id="projects" className="w-full mb-10 py-10 px-4">
      <h1 className="text-center text-4xl font-bold mb-10">Projects</h1>
      
      <div className="flex flex-col items-center space-y-12">
        {projects.map((project) => (
          <div
            key={project.id}
            className="flex flex-col lg:flex-row items-center lg:items-start gap-6 lg:gap-12 w-full max-w-5xl"
          >
            {/* Image */}
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/3 flex justify-center"
            >
              {project.link ? (
                <a href={project.link} target="_blank" rel="noreferrer">
                  <img
                    src={project.image}
                    className="w-full max-w-[500px] h-[200px] object-cover rounded-lg shadow-lg"
                    alt={project.title}
                  />
                </a>
              ) : (
                <img
                  src={project.image}
                  className="w-full max-w-[500px] h-[200px] object-cover rounded-lg shadow-lg"
                  alt={project.title}
                />
              )}
            </motion.div>

            {/* Description */}
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-2/3 text-center lg:text-left"
            >
              <h6 className="text-xl font-semibold mb-2">{project.title}</h6>
              <p className="bg-gradient-to-r from-blue-300 via-cyan-200 to-green-500 bg-clip-text text-transparent mb-4">
              {project.description.split("\n").map((line, index) => (
                  <p key={index} className="mb-2">{line}</p>
                ))}
              </p>
              

              {/* Tech Stack */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-2">
                {project.techStack.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-sm font-medium bg-white ring-2 ring-gray-800 text-blue-800 rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}
