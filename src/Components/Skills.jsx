import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
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
} from 'react-icons/fa';
import {
  SiTailwindcss,
  SiMongodb,
  SiFirebase,
  SiMongoose,
  SiPostman,
  SiRender,
  SiJsonwebtokens,
  SiExpress,
  SiVercel,
} from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';

const skillCategories = [
  {
    title: 'Frontend Skills',
    color: 'text-blue-400',
    skills: [
      { icon: <FaHtml5 />, name: 'HTML5' },
      { icon: <FaCss3Alt />, name: 'CSS3' },
      { icon: <FaJsSquare />, name: 'JavaScript (ES6+)' },
      { icon: <FaReact />, name: 'React.js' },
      { icon: <FaReact />, name: 'React Router' },
      { icon: <SiTailwindcss />, name: 'Tailwind CSS' },
    ],
  },
  {
    title: 'Backend Skills',
    color: 'text-blue-400',
    skills: [
      { icon: <FaNodeJs />, name: 'Node.js' },
      { icon: <SiExpress />, name: 'Express.js' },
      { icon: <FaTools />, name: 'REST API' },
      { icon: <SiMongoose />, name: 'Mongoose' },
      { icon: <SiJsonwebtokens />, name: 'JWT Authentication' },
    ],
  },
  {
    title: 'Database & Auth',
    color: 'text-blue-400',
    skills: [
      { icon: <SiMongodb />, name: 'MongoDB' },
      { icon: <SiFirebase />, name: 'Firebase Authentication' },
      { icon: <SiJsonwebtokens />, name: 'JWT' },
    ],
  },
  {
    title: 'Tools & Others',
    color: 'text-blue-400',
    skills: [
      { icon: <FaGitAlt />, name: 'Git & GitHub' },
      { icon: <VscVscode />, name: 'VS Code' },
      { icon: <SiPostman />, name: 'Postman' },
      { icon: <SiVercel />, name: 'Netlify / Vercel' },
      { icon: <SiRender />, name: 'Render / Cyclic' },
      { icon: <FaTools />, name: 'Problem Solving' },
      { icon: <FaTools />, name: 'Team Collaboration' },
    ],
  },
];

const Skills = () => {
  useEffect(() => {
    AOS.init({ duration: 800, offset: 100, once: true });
  }, []);

  return (
    <section id="skills" className="bg-gray-900 text-white py-16 px-4 md:px-10">
      <h2 className="text-3xl font-bold text-center mb-10">My Skills</h2>
      <div className="max-w-7xl mx-auto">
        <div  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 150}
              className="backdrop-blur-md bg-white/10 border border-blue-500 rounded-xl shadow-lg p-6"
            >
              <h3 className={`text-2xl font-semibold mb-4 ${category.color}`}>
                {category.title}
              </h3>
              <ul className="space-y-2 text-base">
                {category.skills.map((skill, i) => (
                  <li key={i} className="flex items-center gap-2">
                    {skill.icon} {skill.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
