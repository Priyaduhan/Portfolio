import profile from "../assets/profile.png";
import React from "react";

const Hero = () => {
  return (
    <section id="Home" className="h-screen flex items-center justify-center">
      <div className="text-center">
        <img
          src={profile}
          alt="Priya"
          className="w-32 h-32 md:w-40 md:h-40 rounded-full mx-auto border-4 border-cyan-400"
        />
        <h1 className="text-4xl mt-4 font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
          Hi, I’m Priya Duhan
        </h1>
        <p className="text-xl text-gray-300">Frontend Developer</p>
      </div>
    </section>
  );
};

export default Hero;
