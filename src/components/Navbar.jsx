import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { IoMenu, IoClose } from "react-icons/io5";
import logo from "/logo.png";

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
    <div className="w-full py-10 px-4" >
      {/* Navbar */}
      <nav
        className={`backdrop-blur-lg py-4 left-0 w-full z-50 fixed top-0 transition-transform duration-300 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full"
        }`}
      >
        <div className="container mx-auto flex justify-around items-center">
          {/* Logo */}
          <div className="logo">
            <img src={logo} alt="logo-sid" className="w-12 lg:w-20" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6">
            {["home", "about", "skills", "projects", "contact"].map((item) => (
              <button
                key={item}
                className={`text-white font-bold text-lg transition-colors duration-200 ${
                  selected === item ? "border-b-2 border-white" : "hover:text-white"
                }`}
                onClick={() => handleSelected(item)}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-green-400 text-3xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <IoClose /> : <IoMenu />}
          </button>
        </div>
      

        <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: menuOpen ? 1 : 0, y: menuOpen ? 0 : -10 }}
        transition={{ duration: 0.3 }}
        className={`absolute top-full w-full rounded-b-lg shadow-lg md:hidden ${
          menuOpen ? "block" : "hidden"
        }`}
      >
        <div className=" flex flex-col items-center space-y-4 py-4">
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
    </div>  
  );
}

export default Navbar;
