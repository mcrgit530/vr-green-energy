// Header.js
import React from 'react';
import { Link } from 'react-scroll';

const Header = () => {
  return (
    <header className="fixed top-0 w-full bg-gray-800 text-white py-4 z-10 flex justify-between items-center px-8 shadow-md">
      <h1 className="text-green-500 text-2xl font-bold">VR Green Energy</h1>
      <nav>
        <ul className="flex space-x-6">
          <li>
            <Link to="home" smooth={true} duration={500} className="cursor-pointer hover:text-green-500">Home</Link>
          </li>
          <li>
            <Link to="services" smooth={true} duration={500} className="cursor-pointer hover:text-green-500">Services</Link>
          </li>
          <li>
            <Link to="contact-us" smooth={true} duration={500} className="cursor-pointer hover:text-green-500">Contact Us</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
