import React from "react";
import { TbBrandJavascript } from "react-icons/tb";
import { FaCss3, FaGithub, FaReact, FaHtml5 } from "react-icons/fa";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { GrGraphQl } from "react-icons/gr";

const technologies = [
  { icon: <TbBrandJavascript size={50} />, label: "JavaScript", shadow: 'shadow-orange-500' },
  { icon: <FaReact size={50} />, label: "React", shadow: 'shadow-red-400' },
  { icon: <RiNextjsFill size={50} />, label: "Next.js", shadow: 'shadow-green-600' },
  { icon: <GrGraphQl size={50} />, label: "GraphQL", shadow: 'shadow-gray-500' },
  { icon: <FaGithub size={50} />, label: "GitHub", shadow: 'shadow-slate-500' },
  { icon: <RiTailwindCssFill size={50} />, label: "Tailwind CSS", shadow: 'shadow-yellow-500' },
  { icon: <FaCss3 size={50} />, label: "CSS", shadow: 'shadow-blue-400' },
  { icon: <FaHtml5 size={50} />, label: "HTML", shadow: 'shadow-pink-500' },
];

const Experiences = () => {
  return (
    <div
      name="experience"
      className="bg-gradient-to-b to-slate-950 from-slate-600 w-full text-white pl-10 py-1  "
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full ">
        <div className="pb-8 mt-20 lg:mt-16">
          <p className="text-4xl font-bold inline border-b-4 border-slate-600 hover:border-slate-800 cursor-pointer gradient-hover">
            Experience
          </p>
          <p className="py-6">These are the technologies I've worked with:</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 text-center py-6 px-6 sm:px-0">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className={`flex flex-col items-center p-4 rounded-lg shadow-md hover:scale-105 duration-500 cursor-pointer ${tech.shadow}`}
            >
              <div className="mb-2">{tech.icon}</div>
              <p className="text-base md:text-lg">{tech.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experiences;
