import React from "react";
import { imghero} from "../assets";
import { RiTailwindCssFill } from "react-icons/ri";
import {FaJsSquare, FaReact } from "react-icons/fa";
import { BsPaletteFill } from "react-icons/bs";



const Skills = () => {
  const skillsData = [
    { id: 1, image:FaJsSquare, title: "Java Script", description: "Used to add interactivity and dynamic behavior to websites." },
    { id: 2, image: FaReact, title: "React.js", description: "A JavaScript library used to build fast, interactive, and reusable user interfaces for modern web applications." },
    { id: 3, image: RiTailwindCssFill, title: "Tailwind CSS", description: "A utility-first framework for creating responsive designs quickly" },
    { id: 4, image:BsPaletteFill, title: "UI/UX Design", description: "Focuses on creating simple, attractive, and user-friendly interfaces." },
  ];
  const SkillBox = ({ image, title, description }) => {

    const Icon = image;
  
    return (
      <article 
        className="bg-gray-800 p-4 sm:p-6 rounded-lg shadow-lg text-center h-full hover:bg-purple-800 transition-all duration-300"
      >
        <figure className="flex justify-center mb-4">
  
          {typeof image === "string" ? (
            <img
              src={image}
              alt={title}
              className="w-16 h-20 sm:w-20 sm:h-20"
            />
          ) : (
            <Icon className="text-6xl text-cyan-400" />
          )}
  
        </figure>
  
        <header>
          <h3 className="text-lg sm:text-xl font-semibold mb-7 mt-3">{title}</h3>
        </header>
  
        <p className="text-gray-400 text-sm sm:text-base">
          {description}
        </p>
  
      </article>
    );
  };
  return (
    <section id='skills'
      className="relative overflow-hidden min-h-screen flex flex-col items-center justify-center
text-white px-4 py-10"
    >
      <div
        className="absolute z-0 w-72 h-36 sm:w-96 sm:h-44 bg-[#cd3cf5] rounded-full blur-3xl opacity-50
 top-10 sm:top-28 left-1/2 transform -translate-x-1/2"
      ></div>
      <img
        src={imghero}
        alt="left picture"
        className="absolute z-10 left-2 top-2 w-24 h-auto
     sm-left-16 sm:top-32 transform -rotate-12 sm:w-32 opacity-70"
      />

      <div 
      data-aos="fade-up"
      data-aos-delay="300"
      className="relative z-20 text-center space-y-6 sm:space-y-10">
        <header>
            <h1 className="text-3xl sm:text-4xl font-bold font-sans">
            My Experience <br /> and <span className="text-purple-400">Skills</span>
            </h1>
            <p className="text-gray-400 mt-2 sm:mt-4 text-sm sm:text-base mb-20">
            I enjoy learning new technologies and improving my programming skills every day. I have experience working with different programming 
            languages and tools,<br /> and I always try to build clean, simple, and useful projects.
            </p>
        </header>
        <section
         data-aos="fade-up"
         data-aos-delay="500" 
         className="grid grid-cols-1 sm:grid-cols-4 gap-4 sm:gap-6 mt-4">
            {skillsData.map((skill)=>(
                <SkillBox
                 key={skill.id} 
                image={skill.image}
                 title={skill.title}
                 description={skill.description} />
            ))}
         </section>
      </div>
      <img src={imghero} alt="right picture" className="absolute z-10 right-2 
      top-2 sm-right-16 sm:top-32 transform rotate-12 w-24 h-auto sm:w-32 opacity-70" />
    </section>
  );
};

export default Skills;
