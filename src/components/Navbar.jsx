// import React, {useState} from 'react'

// function Navbar() {

//     const [selected , setSelected] = React.useState('home')
//     const [isOpen, setIsOpen] = React.useState(false)

//     const handleSelected = (item) => {
//         setSelected(item)
//     }

//     const handleOpen = () => {
//         setIsOpen(!isOpen)
//     }
    
    
//   return (
//     <div>
//         <nav className="bg-gray-800 p-6 w-full rounded-full">
//             <div className="container mx-auto flex items-center">
//             <div className="hidden md:flex items-center space-x-8">
//                 <a href='/' className={`text-white ${selected === 'home' ? 'border-b-2 border-white' : ''}`} onClick={() => handleSelected('home')}>Home</a>
//                 <a href='/about' className={`text-white ${selected === 'about' ? 'border-b-2 border-white' : ''}`} onClick={() => handleSelected('about')}>About</a>
//                 <a href='/projects' className={`text-white ${selected === 'projects' ? 'border-b-2 border-white' : ''}`} onClick={() => handleSelected('projects')}>Projects</a>
//                 <a href='/contact' className={`text-white ${selected === 'contact' ? 'border-b-2 border-white' : ''}`} onClick={() => handleSelected('contact')}>Contact</a>
//             </div>
//             </div>
//         </nav>
//     </div>
//   )
// }

// export default Navbar  

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { IoMenu, IoClose } from "react-icons/io5";

function Navbar() {
  const [selected, setSelected] = useState("home");
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  // Handle scroll behavior
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Smooth scrolling function
  const handleSelected = (item) => {
    setSelected(item);
    document.getElementById(item)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false); // Close menu on selection
  };

  return (
    <nav
      className={`bg-gray-800 py-4 px-6 w-1/2 md:w-2/3 lg:w-1/2 z-50 rounded-full fixed top-2 transform transition-transform duration-300 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo / Brand */}
        <div className="text-white font-bold text-xl">SID</div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          {["home", "about", "skills", "projects", "contact"].map((item) => (
            <button
              key={item}
              className={`text-white text-lg ${
                selected === item ? "border-b-2 border-white" : ""
              }`}
              onClick={() => handleSelected(item)}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </button>
          ))}
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          className="md:hidden text-white text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <IoClose /> : <IoMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: menuOpen ? 1 : 0, y: menuOpen ? 0 : -10 }}
        transition={{ duration: 0.3 }}
        className={`absolute top-full w-1/2 bg-gray-800 rounded-b-lg shadow-lg md:hidden ${
          menuOpen ? "block" : "hidden"
        }`}
      >
        <div className="flex flex-col items-center space-y-4 py-4">
          {["home", "about", "skills", "projects", "contact"].map((item) => (
            <button
              key={item}
              className={`text-white text-lg ${
                selected === item ? "border-b-2 border-white" : ""
              }`}
              onClick={() => handleSelected(item)}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </button>
          ))}
        </div>
      </motion.div>
    </nav>
  );
}

export default Navbar;
