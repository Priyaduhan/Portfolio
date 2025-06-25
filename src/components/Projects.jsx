import project1 from "../assets/project1.jpg";
import project2 from "../assets/project2.jpg";
import linkedin from "../assets/linkedin.png";
import krmu from "../assets/krmu.png";
import movieFilter from "../assets/movieFilter.png";
import Edusity from "../assets/Edusity.png";
import React from "react";

const Projects = () => {
  const projects = [
    {
      title: "Linkedin Clone",
      image: linkedin,
      tech: ["React", "Tailwind", "JavaScript", "Redux"],
      link: "https://linkedin-clone-front.vercel.app",
    },
    {
      title: "Campus Connect",
      image: krmu,
      tech: ["JavaScript", "React", "Tailwind CSS"],
      link: "https://krmu-enrollment.vercel.app/counsellor/login",
    },
    {
      title: "Movie Filter",
      image: movieFilter,
      tech: ["JavaScript", "API", "React", "Tailwind CSS"],
      link: "https://movie-filter-hazel.vercel.app",
    },
    {
      title: "Edusity",
      image: Edusity,
      tech: ["JavaScript", "API", "React", "HTML"],
      link: "https://signature-app-ua5l.vercel.app",
    },
  ];
  return (
    <div>
      <section id="projects" className="min-h-screen px-6 py-20 mt-[250px]">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-cyan-400">Projects</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project) => (
            <div
              key={project.title}
              onClick={() => window.open(project.link, "_blank")}
              className="bg-gray-800 rounded overflow-hidden cursor-pointer hover:shadow-lg transition"
            >
              <img
                src={project.image}
                alt={project.title}
                className="h-48 w-full object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold">{project.title}</h3>
                <div className="mt-2 text-sm text-gray-400">
                  {project.tech.join(", ")}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
export default Projects;
