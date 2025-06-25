import React from "react";

const Skills = () => {
  const skills = [
    { name: "HTML5", color: "bg-orange-500" },
    { name: "CSS3", color: "bg-blue-500" },
    { name: "JavaScript", color: "bg-yellow-500" },
    { name: "React", color: "bg-cyan-500" },
    { name: "Tailwind CSS", color: "bg-teal-500" },
    { name: "Git", color: "bg-red-500" },
    { name: "GitHub", color: "bg-gray-800" },
    { name: "Responsive Design", color: "bg-purple-500" },
    { name: "Vite", color: "bg-violet-500" },
    { name: "Node.js", color: "bg-green-500" },
  ];

  return (
    <section id="Skills" className="h-screen flex items-center">
      <div className="container mx-auto px-6 mt-[230px] sm:mt-[2px]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-[100px] bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent leading-tight pb-2">
            Skills & Technologies
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 sm:mt-3 -mt-10">
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className="group bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-6 hover:scale-105 transition-all duration-300 hover:shadow-lg animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div
                  className={`w-12 h-12 ${skill.color} rounded-lg mx-auto mb-4 flex items-center justify-center text-white font-bold text-lg group-hover:rotate-12 transition-transform duration-300`}
                >
                  {skill.name.charAt(0)}
                </div>
                <h3 className="font-semibold text-sm">{skill.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
