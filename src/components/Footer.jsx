import React, { useState, useEffect } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaArrowUp
} from "react-icons/fa";

const Footer = () => {

  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <>
      <footer className="bg-gray-950 text-gray-300 pt-14 pb-8">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">

          {/* About */}
          <div >
            <h2 className="text-3xl font-bold text-white mb-3">
              HALA
            </h2>

            <p className="text-gray-400 leading-relaxed mb-5">
              Front-end developer passionate about building modern,
              responsive and interactive web applications.
            </p>

            <div className="flex gap-4 text-xl">

              <a
                href="https://github.com/dashboard"
                className="bg-gray-800 p-3 rounded-full hover:bg-purple-600 transition"
              >
                <FaGithub />
              </a>

              <a
                href="https://linkedin.com"
                className="bg-gray-800 p-3 rounded-full hover:bg-purple-600 transition"
              >
                <FaLinkedin />
              </a>

              <a
                href="hala45515@gmail.com"
                className="bg-gray-800 p-3 rounded-full hover:bg-purple-600 transition"
              >
                <FaEnvelope />
              </a>

            </div>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-4 mx-24">
            <h3 className="text-xl font-semibold text-white mb-4">
              Contact
            </h3>

            <ul className="space-y-3 text-gray-400">

              <li className="flex items-center gap-3">
                <FaPhone className="text-purple-500" />
                +90 555 123 4567
              </li>

              <li className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-purple-500" />
                İzmir, Türkiye
              </li>

              <li className="flex items-center gap-3">
                <FaEnvelope className="text-purple-500" />
                hala45515@gmail.com
              </li>

            </ul>
          </div>

          {/* CTA */}
          <div className="flex flex-col md:items-end gap-4">

            <h3 className="text-xl font-semibold text-white">
              Have a project?
            </h3>

            <a
              href="#contact"
              className="bg-purple-600 hover:bg-purple-700 px-8 py-3 flex justify-center items-center
              rounded-full font-semibold shadow-lg transition transform hover:scale-105 w-20"
            >
              Let's Talk
            </a>

          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-500 text-sm">
          ©️ {new Date().getFullYear()} Hala — All rights reserved
        </div>
      </footer>

      {/* Back To Top Button */}

      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-9 bg-purple-600
           hover:bg-purple-700 text-white p-4 rounded-full shadow-lg transition transform hover:scale-110"
        >
          <FaArrowUp />
        </button>
      )}
    </>
  );
};

export default Footer;