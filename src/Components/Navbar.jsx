import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
    const [navOpen, setNavOpen] = useState(false);
    const toggleNav = () => setNavOpen(!navOpen);
    const navItems = ['Home', 'About', 'Skills', 'Education', 'Project', 'Contact'];
    return (
        <nav className="bg-[#0F172A] text-white fixed w-full z-50 shadow-md">
            <div className="max-w-7xl mx-auto px-4 py-3 sm:px-6 lg:px-8 flex justify-between items-center h-16">
                {/* Left */}
                <div className="text-xl font-bold"> <span className='text-3xl text-purple-700'>S</span>himul N<span className='text-2xl text-purple-700'>A</span>th</div>

                {/* Center for large screens */}
                <div className="hidden md:flex space-x-6">
                    {navItems.map((item) => (
                        <Link
                            key={item}
                            to={item.toLowerCase()}
                            spy={true}
                            smooth={true}
                            duration={500}
                            offset={-60}
                            activeClass="active-nav"
                            className="cursor-pointer hover:text-blue-400 transition"
                        >
                            {item}
                        </Link>
                    ))}
                </div>

                {/* Right */}
                <div className="hidden md:block">
                    <a
                        href="/resume.pdf"
                         download="Shimul_CV.pdf"
                        className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md font-medium"
                    >
                        Download CV
                    </a>
                </div>

                {/* Mobile menu button */}
                <div className="md:hidden flex items-center">
                    <button onClick={toggleNav}>
                        {navOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile menu items */}
            {navOpen && (
                <div className="md:hidden bg-[#0F172A] px-4 py-4 space-y-4">
                    {navItems.map((item) => (
                        <Link
                            key={item}
                            to={item.toLowerCase()}
                            spy={true}
                            smooth={true}
                            duration={500}
                            offset={-60}
                            onClick={() => setNavOpen(false)}
                            className="block text-lg cursor-pointer hover:text-blue-400"
                        >
                            {item}
                        </Link>
                    ))}
                    <a
                        href="/resume.pdf"
                        download="Shimul_CV.pdf"
                        className="block bg-blue-600 hover:bg-blue-700 text-center py-2 rounded-md"
                    >
                        Download CV
                    </a>
                </div>
            )}
        </nav>
    );
};

export default Navbar;