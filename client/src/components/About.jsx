import React from 'react';

const About = () => {
  return (
    <div name="about" className='w-full bg-gradient-to-b from-slate-700 to-slate-950 text-white pl-10'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8 mt-16'>
          <p className='text-4xl font-bold inline border-b-4 border-slate-500 hover:border-slate-600 cursor-pointer'>
            About
          </p>
        </div>
        <p className='text-xl mt-6' style={{ fontFamily: 'Poppins'}}>
          Hello everyone! I’m Nabin Japrel, also known as Nabu, hailing from the beautiful district of Bajhang in Nepal. I’m currently a dedicated student at IOST specializing in the MEARN stack. My passion lies in developing dynamic web applications using MongoDB, Express.js, React, and Node.js. I thrive on creating innovative and user-friendly web experiences, focusing on building scalable and efficient applications with the latest technologies.
        </p>
        <br />
        <p className='text-xl' style={{ fontFamily: 'Poppins' }}>
          With a strong commitment to continuous learning and growth, I enjoy working on projects that push the boundaries of modern web development. Feel free to explore my GitHub profile to see some of the exciting projects I've been involved in and my contributions to the open-source community. Let’s connect and collaborate on transformative tech endeavors!
        </p>
      </div>
    </div>
  );
};

export default About;
