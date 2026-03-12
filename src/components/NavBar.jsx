import React, { useState } from "react";
import {  FiMenu, FiX } from "react-icons/fi";



const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const NavBarLinks = [
    { id: 1, name: "Home", link: "#home" },
    { id: 2, name: "About", link: "#about" },
    { id: 3, name: "Skills", link: "#skills" },
    { id: 4, name: "My Projects", link: "#projects" },
  ];
  return (
    <header
      className="header fixed top-0 left-0 z-20 w-full px-4 py-5 text-white
     "
      data-aos="fade-up"
      data-aos-delay="300"
    >
      <div  className="overflow-hidden container mx-auto grid grid-cols-[1fr,0fr] md:grid-cols-2
      items-center justify-between mt-0">
        {/* logo */}

        <div className="flex  items-center ">
        <a href="#home">
  <h1 className="text-2xl sm:text-xl md:text-2xl bg-gradient-to-r from-[#5c0c59]
   to-white bg-clip-text text-transparent font-bold">Portfolio</h1>
</a>

        {/* mobile menu Toggle */}
        <button
          className= {`lg:hidden focus:outline-none text-white`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <FiMenu className="h-8 w-8" />
        </button>
        </div>
      

        {/* Desktop novigation */}
        <nav className="hidden md:flex items-center space-x-7">
          {NavBarLinks.map((link) => (
            <a
              key={link.id}
              href={link.link}
              className="hover:text-purple-400 text-lg"
            >
              {link.name}
            </a>
          ))}

        <a href="#contact">
        <button
            className="inline-flex text-white border-2 py-2 px-6 focus:outline-none
           hover:bg-purple-800 rounded-full text-lg"
          >
            Contact
          </button>
        </a>
        </nav>
      </div>

      {/* Mobile novigation */}

      <div
        className={`
            ${isOpen ? "block" : "hidden"
        } md:hidden bg-[#801b9c] absolute top-0 right-0 w-[250px]
 flex flex-col gap-6 items-center pt-16 h-[100vh]`}
      >
        {/* Close button */}

        <button
          className="absolute top-5 right-5 text-white"
          onClick={() => setIsOpen(false)}
        >
          <FiX className="w-8 h-8" />
        </button>

        {/* Mobile novigation */}
        {NavBarLinks.map((link) => (
            <a key={link.id} href={link.link} className="text-white hover:text-gray-300 text-lg"
            onClick={() => setIsOpen(false)}>{link.name}</a>
        ))}

         {/* Contact button */}

         <button className="inline-flex text-white border-2 py-2 px-6 focus:outline-none
          hover:bg-purple-800 rounded-full text-lg">
           Contact
         </button>
      </div>
    </header>
  );
};

export default NavBar;
