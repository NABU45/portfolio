import React from 'react';
import picture1 from '../assets/s0.png';
import picture2 from '../assets/s1.png';
import picture3 from '../assets/s2.png';
import picture4 from '../assets/s3.png';
import picture5 from '../assets/s4.png';
import picture6 from '../assets/s5.png';


const Portfolio = () => {
  const portfolio = [
    { id: 1, src: picture1 },
    { id: 2, src: picture2 },
    { id: 3, src: picture3 },
    { id: 4, src: picture4 },
    { id: 5, src: picture5 },
    { id: 6, src: picture6 },
  ];

  return (
    <div name='portfoli' 
    className='bg-gradient-to-b from-slate-950 to-slate-600 w-full text-white h-full pl-10'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full'>
        <div className='pb-8 mt-16'>
          <p className='text-4xl font-bold inline border-b-4 border-slate-600 hover:border-slate-700 cursor-pointer gradient-hover'>
            Portfolio
          </p>
          <p className='py-6'>Check out some of my work right here</p>
        </div>

        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-12 sm:px-0'>
          {portfolio.map(({ id, src }) => (
            <div key={id} className='shadow-md shadow-slate-800 rounded-lg duration-200 hover:scale-105'>
              <img src={src} alt='' className='rounded-md' />
              <div className='flex items-center justify-center'>
                <button className='w-1/2 px-4 py-1 m-4 duration-200 hover:scale-105'>Demo</button>
                <button className='w-1/2 px-4 py-1 m-4 duration-200 hover:scale-105'>Code</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
