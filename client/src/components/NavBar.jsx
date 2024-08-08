import React, { useState } from 'react';
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from 'react-scroll';

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    { id: 1, link: 'home' },
    { id: 2, link: 'about' },
    { id: 3, link: 'portfoli' },
    { id: 4, link: 'experience' },
    { id: 5, link: 'contact' },
  ];

  return (
    <nav className="fixed w-full h-20 flex justify-between items-center px-4 bg-gradient-to-b to-slate-700 from-slate-900 text-white z-10">
      <div>
        <h1 className="text-4xl font-bold font-signature cursor-pointer">Japrelline</h1>
      </div>

      {/* Desktop menu */}
      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <li key={id} className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200">
            <Link to={link} smooth duration={500} onClick={() => setNav(false)}>{link}</Link>
          </li>
        ))}
      </ul>

      {/* Mobile menu icon */}
      <div onClick={() => setNav(!nav)} className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden">
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {/* Mobile menu */}
      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-black text-gray-500 md:hidden">
          {links.map(({ id, link }) => (
            <li key={id} className="px-4 cursor-pointer capitalize py-3 text-2xl">
              <Link to={link} smooth duration={500} onClick={() => setNav(false)}>{link}</Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}

export default NavBar;
