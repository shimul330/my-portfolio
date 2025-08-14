import React, { useEffect, useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
import { FaFacebook, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import shimulImg from "../assets/hero.png";
import wheelImg from '../assets/wheel.png';

const HeroSection = () => {
    const [rotate, setRotate] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setRotate(window.scrollY * 0.2); 
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <section id='home' className="bg-[#0F172A] text-white py-16 px-4 md:px-10 relative overflow-hidden">
            

            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 relative z-10">
                {/* Left Side */}
                <div className="flex-1 space-y-6 text-center md:text-left">
                    <h2 className="text-3xl md:text-5xl font-bold">Hi, I’m Shimul Kumar Nath</h2>

                    <TypeAnimation
                        sequence={[
                            'Web Developer',
                            2000,
                            'MERN Stack Learner',
                            2000,
                            'Full Stack Developer',
                            2000,
                            'Android Development Learning',
                            2000,
                        ]}
                        speed={50}
                        className="text-blue-400 text-xl md:text-2xl font-semibold"
                        repeat={Infinity}
                    />

                    <p className="text-gray-300 max-w-xl mt-4 mx-auto md:mx-0">
                        I'm a passionate full-stack learner from Bangladesh, currently learning MERN stack development. I love building responsive and dynamic web applications.
                    </p>

                    {/* Social Icons */}
                    <div className="flex justify-center md:justify-start space-x-6 text-xl">
                        <a href="https://facebook.com/yourprofile" target="_blank" rel="noopener noreferrer">
                            <FaFacebook className="hover:text-blue-500 transition" />
                        </a>
                        <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin className="hover:text-blue-400 transition" />
                        </a>
                        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                            <FaGithub className="hover:text-gray-300 transition" />
                        </a>
                        <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer">
                            <FaTwitter className="hover:text-blue-300 transition" />
                        </a>
                    </div>

                    {/* Resume Button */}
                    <div>
                        <a
                            href="/resume.pdf"
                            download
                            className="inline-block mt-4 px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-md font-semibold transition"
                        >
                            Download CV
                        </a>
                    </div>
                </div>

                {/* Right Side Image Section */}
                <div className="flex-1 relative flex justify-center items-center">

                    {/* Rotating Wheel Background (Centered on Image) */}
                    <img
                        src={wheelImg}
                        alt="Rotating Wheel"
                        className="absolute w-[400px] h-[400px] opacity-10  animate-spin-slow pointer-events-none select-none"
                        style={{ transform: `rotate(${rotate}deg)` }}
                    />

                    {/* Glow Background */}
                    <div className="absolute w-[300px] h-[300px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full blur-2xl opacity-30 z-0"></div>




                    {/* Main Image */}
                    <img
                        src={shimulImg}
                        alt="Shimul Kumar Nath"
                        className="w-full max-w-sm mx-auto relative z-10 rounded-xl border-b-4 border-blue-500"
                    />
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
