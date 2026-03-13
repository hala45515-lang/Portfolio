import React from "react";
import NavBar from "./NavBar";
import { facebook, girlphoto, github, instagram, linkedin } from "../assets";

const Hero = () => {
  return (
    <div
      className="relative overflow-hidden min-h-[550px] sm:min-h-[600px] 
    flex flex-col items-center"
    >
      <div
        className="md:h-[550px] h-[550px] w-[450px] bg-gradient-to-r absolute from-[#6d2897]
        via-[#8e6cf5] to-[#bb61c5] transform rotate-45 z-0 right-2 top-28 rounded-3xl"
      ></div>
      <NavBar />

      <main
        id="home"
        className="flex flex-col md:flex-row items-center justify-center w-full px-4 
      md:px-52 pd-4 md:pb-24 md:pt-32 pt-24 mt-14 md:mt-0 z-10"
      >
        <section
          className="flex-1 mr-28 md:text-left mt-10 md:mt-0 relative"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          <div className="absolute -z-10 w-60 h-60 bg-[#cd3cf5] rounded-full blur-3xl opacity-50 -top-5 -left-12"></div>
          <header>
            <h1 className="text-4xl md:text-5xl sm:text-4xl font-bold text-[#3e0f4a] md:text-[#c744ec] mb-4">
            Frontent Developer
            </h1>
         
          </header>
          <p className="text-base sm:text-lg md:text-lg text-gray-200 mb-6">
          I turn ideas into interactive and engaging web experiences that people love to explore.
          I build clean, creative, and user-friendly websites, always aiming to combine functionality with beautiful design.
          </p>
          <div className="flex items-center space-x-4 mb-6">
            <a href="#">
              <img src={github} alt="github" className="w-11 h-11 rounded-full" />
            </a>
            <a href="#">
              <img src={linkedin} alt="linkedin" className="w-11 h-11 rounded-full" />
            </a>
            <a href="#">
              <img src={facebook} alt="facebook" className="w-11 h-11 rounded-full"  />
            </a>
            <a href="#">
              <img src={instagram} alt="instagram" className="w-10 h-10 rounded-full" />
            </a>
          </div>

          <a href="" download>
          <button className="inline-flex px-6 py-2  text-white border-2 focus:outline-none hover:bg-[#801b9c]
          hover:shadow-[0_0_40px_rgba(128,0,128,0.7)] rounded-full text-lg mt-6">
            Download CV
          </button>   
          </a>
        </section>
        <figure data-aos="fade-up" data-aos-delay="500" className=" flex justify-center md:justify-end mt-0">
          <img src={girlphoto} alt="Hero Image" className="h-[350px] w-[450px] sm:h-[400px] md:w-[400px] md:h-[480px] sm:w-[380px]
          object-center rounded-lg"/>
        </figure>
      </main>
    </div>
  );
};

export default Hero;
