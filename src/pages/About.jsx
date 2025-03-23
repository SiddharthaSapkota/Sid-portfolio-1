import React from "react";

function About() {
  return (
    <div
      id="about"
      className="w-full h-screen flex flex-col justify-center items-center px-4 md:px-8 lg:px-16"
    >
      <h1 className="text-center text-3xl md:text-4xl font-bold mb-6 md:mb-10">
        About Me
      </h1>

      <div className="flex flex-wrap max-w-4xl justify-center  sm:px-4">
        <p className="bg-gradient-to-b from-blue-300 via-cyan-200 to-green-500 bg-clip-text text-transparent text-sm sm:text-base md:text-lg leading-relaxed text-justify break-words">
          Passionate tech enthusiast with a knack for sharing knowledge and
          empowering others. Equipped with a solid foundation in BSc.CSIT, I
          bring a unique blend of skills in HTML, CSS, Python, Linux, and
          Cybersecurity. I thrive on making complex concepts accessible through
          engaging teaching methods, fostering an environment where curiosity
          and learning flourish. With a genuine dedication I aim to lean in tech
          journey, joining a supportive community along the way.
        </p>
      </div>
    </div>
  );
}

export default About;
