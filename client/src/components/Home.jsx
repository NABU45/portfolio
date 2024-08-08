import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-scroll";
import video from '../assets/video1.mp4'

const Home = () => {
  return (
    <div name="home" className="relative w-full h-screen overflow-hidden from-black to-gray-900">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={video}
        type="video/mp4"
        autoPlay
        loop
        muted
      />
      <div className="relative flex flex-col justify-center items-center h-full bg-opacity-1 max-w-screen-lg mx-auto mt-10">
        <h1 className="text-5xl text-gray-800 font-bold">
          Welcome to My Portfolio
        </h1>
        <p className="text-2xl text-slate-900 mt-4 text-center px-4 md:px-8 lg:px-16">
          Hi, I'm <span className="text-white-800 font-bold">Nabin Japrel</span>, a passionate web developer with expertise in
          creating dynamic and responsive websites. Explore my projects and get
          to know more about my skills and experiences.
        </p>
        <div>
          <Link
            to="portfoli"
            smooth
            duration={500}
            className="group flex mt-8 px-6 py-3 gap-2 text-white rounded-md text-lg bg-gradient-to-r from-cyan-500 to-blue-500 font-medium capitalize cursor-pointer hover:scale-105 duration-300"
          >
            View My Work
            <span className="mt-1 group-hover:rotate-90 duration-300">
              <FaArrowRight />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
