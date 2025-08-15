import React from 'react';

const Education = () => {
  const educationData = [
    {
      degree: 'Diploma Engineering',
      institute: 'Compact Polytechnic Institute',
      duration: '2022 – STILL NOW',
      defferment: 'CST'
    },
    {
      degree: 'Secondary School Certificate',
      institute: 'Feni Cental High School',
      duration: '2020 – 2021',
      defferment: 'Commerce',
    },
  ];

  return (
    <section id='education' className="py-16 max-w-screen-xl mx-auto px-4 md:px-12 text-white">
      <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-white">Education</h2>
      <div className="space-y-8 relative border-l-4 border-purple-600">
        {educationData.map((edu, index) => (
          <div
            data-aos="zoom-in-right"
            key={index}
            className="relative bg-[#1e1e1e] rounded-xl shadow-lg p-6 ml-4 md:ml-10"
          >
            {/* Timeline Dot */}
            <span className="absolute -left-2 md:-left-2 top-5 w-3 h-3 bg-pink-500 rounded-full border-2 border-white"></span>

            <h3 className="text-xl md:text-2xl font-semibold">{edu.degree}</h3>
            <p className="text-sm text-gray-400">
              {edu.institute} ({edu.duration})
            </p>
            <hr className="my-2 border-gray-600" />
            <p className="text-gray-300 text-sm md:text-base">Dep: {edu.defferment}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
