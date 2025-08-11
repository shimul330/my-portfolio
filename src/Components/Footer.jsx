import React from 'react';
import { Link } from 'react-scroll';

const Footer = () => {
  const navItems = ['Home', 'About', 'Skills', 'Education', 'Project', 'Contact'];

  return (
    <footer className="bg-[#1E293B] text-white py-8">
      {/* Menu Items */}
      <div className="flex flex-wrap justify-center space-x-4 md:space-x-8 text-sm md:text-base mb-4">
        {navItems.map((item) => (
          <Link
            key={item}
            to={item.toLowerCase()}
            spy={true}
            smooth={true}
            duration={500}
            offset={-60}
            className="cursor-pointer text-white hover:text-blue-400 transition"
          >
            {item}
          </Link>
        ))}
      </div>

      {/* Copyright */}
      <p className="text-center text-gray-400 text-xs md:text-sm">
        © 2025 Shimul kumar nath. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
