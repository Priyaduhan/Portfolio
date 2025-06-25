import React from "react";

const About = () => {
  return (
    <section id="about" className="h-screen flex items-center px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6 text-cyan-400">About Me</h2>

        <p className="text-gray-300 text-lg mb-8">
          I’m a frontend developer passionate about building responsive,
          accessible, and modern web applications.
          I enjoy creating seamless user experiences, writing clean code, and
          constantly learning new technologies to grow as a developer.
        </p>

        {/* Education Section */}
        <div className="bg-gray-800/60 border border-gray-700 rounded-lg p-6 text-left mt-10">
          <h3 className="text-2xl font-semibold text-purple-400 mb-4">
            Education
          </h3>

          <div className="space-y-4">
            <div>
              <h4 className="text-lg font-semibold text-cyan-300">
                Master of Computer Applications (MCA)
              </h4>
              <p className="text-gray-400">
                K. R. Mangalam University,Gurugram – Completed
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-cyan-300">
                Bachelor of Computer Applications (BCA)
              </h4>
              <p className="text-gray-400">
                Guru Jambheshwar University of Science & Technology,Hisar –
                Completed
              </p>
              <p className="text-gray-400 text-[13px]">
                80.6%
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
