import React from "react";
import { AleppoKitchen, coffe, DigitalOclock, movieProject, toDoList, TrendyStore } from "../assets";

const ProjectCard = ({ image, title, description, link }) => {
  return (
    <article  className="relative max-w-sm bg-gray-800 rounded overflow-hidden shadow-lg group">
      <div
        className="absolute z-0 w-40 h-40 sm:w-60 sm:h-60 bg-[#cd3cf5] rounded-full blur-3xl opacity-50 
        -top-5 left-10"
      ></div>
      <div className="group relative z-10">
        <figure className="relative">
          <img
            src={image}
            alt={title}
            className="w-full h-48 object-cover transition-transform 
                duration-300 group-hover:scale-110"
          />
          <a
            href={link}
            rel="noopener noreferrer"
            className="absolute h-[202px] inset-0 flex items-center justify-center bg-purple-800
                bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            <button
              className="bg-white font-medium text-black py-2 px-4 rounded-3xl
                    shadow hover:text-white hover:bg-[#2879d5]"
            >
              Live Preview
            </button>
          </a>
        </figure>
        <div className="px-6 py-4">
          <header>
            <h3 className="text-white font-semibold text-2xl mb-2">{title}</h3>
          </header>
          <p className="text-gray-200 text-base">{description}</p>
        </div>
      </div>
    </article>
  );
};

export default function Projects() {
  const listProjects = [
    {
      image:movieProject,
      title: "Movie World",
      description:
        "A modern movie platform to explore films, discover new releases, and enjoy an immersive entertainment experience.",
      link: "https://team-project-ivory-two.vercel.app/",
    },

    {
      image: toDoList,
      title: "To Do List",
      description:
        "A simple and efficient task manager to organize your daily activities and stay productive.",
      link: "https://to-do-app-list-ten.vercel.app/",
    },

    {
      image:AleppoKitchen,
      title: "Aleppo Kitchen",
      description:
        "A restaurant website showcasing delicious dishes, rich flavors, and the authentic taste of traditional cuisine.",
      link: "https://aleppo-kitchen-with-react.vercel.app/",
    },
    {
        image: DigitalOclock,
        title: "Digital Clock",
        description:
          "A clean and minimal digital clock that displays real-time hours, minutes, and seconds.",
        link: "https://digital-clock-one-rosy.vercel.app/",
      },
      {
        image: coffe,
        title: "Best Coffe",
        description:
          "A stylish coffee website presenting premium coffee, warm vibes, and the perfect start to your day.",
        link: "https://task-witth-tailwind.vercel.app/",
      },
      {
        image: TrendyStore,
        title: "Trendy Store",
        description:
          "A modern online store designed to showcase trendy products with a smooth and attractive shopping experience.",
        link: "https://hala-trendy-store.vercel.app/",
      },
  ];
  return (
    <main className="p-4" id='projects'>
      <section data-aos="fade-up" data-aos-delay="300">
        <header className="text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            My <span className="text-purple-400">Projects</span>
          </h1>
          <p className="text-gray-400 mt-2 text-sm sm:text-base sm:mt-4">
          A selection of projects that showcase my skills in creating modern, responsive, and user-friendly web applications.
          </p>
        </header>
      </section>
      <section data-aos="fade-up" data-aos-delay="500" className="flex flex-wrap gap-4 justify-center mt-6">
{listProjects.map((project, index) => (
  <ProjectCard
    key={index}
    image={project.image}
    title={project.title}
    description={project.description}
    link={project.link}
  />
))}
      </section>
    </main>
  );
}
