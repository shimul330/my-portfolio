import React from 'react';
import {
    FaHtml5,
    FaCss3Alt,
    FaJsSquare,
    FaReact,
    FaNodeJs,
    FaGithub,
    FaGitAlt,
    FaTools,
    FaDatabase,
    
    FaGoogle,
} from 'react-icons/fa';


import {
    SiTailwindcss,
    SiMongodb,
    SiFirebase,
    SiMongoose,
    SiPostman,
    // SiVisualstudiocode,
    SiRender,
    SiJsonwebtokens,
    SiExpress,
    SiVercel,
} from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';

const Skills = () => {
    return (
        <section id='skills' className="bg-gray-900 text-white py-16 px-4 md:px-10">
            <h2 className="text-3xl  font-bold text-center mb-10 ">
                My Skills
            </h2>
            <div className='max-w-7xl mx-auto'>


                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Frontend Skills */}
                    <div className="backdrop-blur-md bg-white/10 border border-blue-500 rounded-xl shadow-lg p-6">
                        <h3 className="text-2xl font-semibold mb-4 text-blue-400">Frontend Skills</h3>
                        <ul className="space-y-2 text-base">
                            <li className="flex items-center gap-2"><FaHtml5 /> HTML5</li>
                            <li className="flex items-center gap-2"><FaCss3Alt /> CSS3</li>
                            <li className="flex items-center gap-2"><FaJsSquare /> JavaScript (ES6+)</li>
                            <li className="flex items-center gap-2"><FaReact /> React.js</li>
                            <li className="flex items-center gap-2"><FaReact /> React Router</li>
                            <li className="flex items-center gap-2"><SiTailwindcss /> Tailwind CSS</li>
                        </ul>
                    </div>

                    {/* Backend Skills */}
                    <div className="backdrop-blur-md bg-white/10 border border-blue-500 rounded-xl shadow-lg p-6">
                        <h3 className="text-2xl font-semibold mb-4 text-blue-400">Backend Skills</h3>
                        <ul className="space-y-2 text-base">
                            <li className="flex items-center gap-2"><FaNodeJs /> Node.js</li>
                            <li className="flex items-center gap-2"><SiExpress /> Express.js</li>
                            <li className="flex items-center gap-2"><FaTools /> REST API</li>
                            <li className="flex items-center gap-2"><SiMongoose /> Mongoose(something) </li>
                            <li className="flex items-center gap-2"><SiJsonwebtokens /> JWT Authentication</li>
                        </ul>
                    </div>

                    {/* Database & Auth */}
                    <div className="backdrop-blur-md bg-white/10 border border-blue-500 rounded-xl shadow-lg p-6">
                        <h3 className="text-2xl font-semibold mb-4 text-blue-400">Database & Auth</h3>
                        <ul className="space-y-2 text-base">
                            <li className="flex items-center gap-2"><SiMongodb /> MongoDB</li>
                            <li className="flex items-center gap-2"><SiFirebase /> Firebase Authentication</li>
                            
                            <li className="flex items-center gap-2"><SiJsonwebtokens /> JWT</li>
                        </ul>
                    </div>

                    {/* Tools & Others */}
                    <div className="backdrop-blur-md bg-white/10 border border-blue-500 rounded-xl shadow-lg p-6">
                        <h3 className="text-2xl font-semibold mb-4 text-blue-400">Tools & Others</h3>
                        <ul className="space-y-2 text-base">
                            <li className="flex items-center gap-2"><FaGitAlt /> Git & GitHub</li>
                            <li className="flex items-center gap-2"> <VscVscode /> VS Code</li>
                            <li className="flex items-center gap-2"><SiPostman /> Postman</li>
                            <li className="flex items-center gap-2"> <SiVercel /> Netlify / Vercel</li>
                            <li className="flex items-center gap-2"><SiRender /> Render / Cyclic</li>
                            <li className="flex items-center gap-2"><FaTools /> Problem Solving</li>
                            <li className="flex items-center gap-2"><FaTools /> Team Collaboration</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;