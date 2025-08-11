import React, { useEffect, useState } from 'react';
import myImage from '../assets/ssssm.png';
import wheelImg from '../assets/wheel.png';

const About = () => {

    const [rotate, setRotate] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setRotate(window.scrollY * 0.2);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <section id="about" className="bg-[#0F172A] text-white py-16 px-4 md:px-10 shadow-md ">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">



                <div className="flex-1 w-full md:w-1/2 relative flex justify-center items-center">

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
                        src={myImage}
                        alt="Shimul Kumar Nath"
                        className="w-11/12 max-w-sm mx-auto relative z-10 rounded-xl border-b-4 border-blue-500"
                    />
                </div>

                {/* Right: Text Section */}
                <div className="w-full md:w-1/2">
                    <h2 className="text-4xl font-bold mb-6 border-b-4 border-blue-500 inline-block">
                        About Me
                    </h2>
                    <p className="text-[15px] leading-7 mb-4">
                        Hello! I'm <span className='text-blue-600 uppercase'>Shimul Kumar Nath</span> , a passionate MERN stack developer with a unique perspective. I am currently pursuing a computer Science and technology in Compact Polytechnic Institute. I'm currently learning the full-Stack and absolutely love building dynamic and modern web applications.
                    </p>
                    <hr className='text-blue-600' />
                    <p className="text-[15px] leading-7 mb-4">
                        I’m dedicated to continuous learning, especially in full-stack web development. I enjoy turning complex problems into simple, beautiful, and intuitive solutions. My goal is to become a professional full-stack developer and contribute to open-source and impactful projects
                    </p>
                    <hr className='text-blue-600' />
                    <p className="text-[15px] leading-7 mb-4">
                        I have a strong foundation in HTML, CSS, JavaScript, and React, and I'm constantly working on real-world projects to sharpen my skills. Alongside frontend development, I also have a solid understanding of backend technologies such as Node.js, Express, and MongoDB. I’m actively practicing and building backend functionalities to enhance my skills further.
                    </p>
                    <hr className='text-blue-600' />
                    <p className="text-[15px] leading-7">
                        I’m also passionate about teamwork, learning from others, and sharing knowledge. I enjoy exploring new technologies, improving my design thinking, and creating web experiences that are not only functional but also visually appealing. Outside of coding, I love reading about technology, exploring new tools, and helping others on their coding journey.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;

