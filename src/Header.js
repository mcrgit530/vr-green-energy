import React from 'react';
import { Link } from 'react-scroll';

const Header = () => {
  return (
    <header className="fixed top-0 w-full bg-gray-200 text-gray-800 py-4 z-10 flex justify-between items-center px-8 shadow-md">
      <h1 className="text-green-500 text-2xl font-bold">VR Green Energy</h1>
      <nav>
        <ul className="flex space-x-6">
          <li>
            <Link to="home" smooth={true} duration={500} className="cursor-pointer text-green-500 hover:text-white hover:bg-green-500 px-4 py-2 rounded-md transition-colors">Home</Link>
          </li>
          <li>
            <Link to="services" smooth={true} duration={500} className="cursor-pointer text-green-500 hover:text-white hover:bg-green-500 px-4 py-2 rounded-md transition-colors">Services</Link>
          </li>
          <li>
            <Link to="contact-us" smooth={true} duration={500} className="cursor-pointer text-green-500 hover:text-white hover:bg-green-500 px-4 py-2 rounded-md transition-colors">Contact Us</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
