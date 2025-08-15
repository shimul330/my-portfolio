import React, { useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { FaExternalLinkAlt, FaGithub, FaInfoCircle } from "react-icons/fa";

const Projects = () => {
  const data = [
    {
      id: 1,
      images: [
        "https://i.ibb.co/GfqHtkny/banner1.png",
        "https://i.ibb.co/1YckyvxL/banner2.png",
        "https://i.ibb.co/Q7XW0hfS/banner3.png",
      ],
      title: "Job Hook",
      description:
        "Job Hook is an online job platform where users can easily browse various job opportunities and apply directly. It provides detailed job descriptions, required qualifications, and a seamless application process. With a modern UI and secure authentication system, it offers a reliable solution for job seekers.",
      technologies: [
        "JavaScript", "Tailwind CSS", "React", "Firebase Auth",
        "MongoDB", "Node.js", "Express.js", "Daisy UI"
      ],
      liveLink: "https://job-career.netlify.app/",
      githubFrontend: "https://github.com/shimul330/job-hook-client-side",
      githubBackend: "https://github.com/username/backend-repo",
    },
    {
      id: 2,
      images: [
        "https://i.ibb.co/5h8P6yNz/banner4.png",
        "https://i.ibb.co/0jq5pQMK/banner5.png",
        "https://i.ibb.co/fGNgqKC9/banner6.png",
      ],
      title: "Car Rental",
      description:
        "Car Rental is a web application where users can view all available cars, add new cars, and see the details of their booked cars. It features an easy booking process, dynamic search, and a user-friendly dashboard to make car rentals more convenient.",
      technologies: [
        "JavaScript", "Tailwind CSS", "React", "Firebase Auth",
        "MongoDB", "Node.js", "Express.js", "Daisy UI"
      ],
      liveLink: "https://car-rental-house.netlify.app/",
      githubFrontend: "https://github.com/shimul330/car-rental-client-side-project",
      githubBackend: "https://github.com/username/backend-repo",
    },
    {
      id: 3,
      images: [
        "https://i.ibb.co/S4TF9SrR/banner7.png",
        "https://i.ibb.co/HDkkGCZL/banner8.png",
      ],
      title: "Vaxin Shop",
      description:
        "Vaxin Shop is a complete medicine e-commerce platform supporting three roles — Admin, Seller, and User. Sellers can add new medicines and manage their own product data. Users can view their orders and payment history. Admins have full control over the system, including product management, user management, and sales reports.",
      technologies: [
        "JavaScript", "Tailwind CSS", "React", "Firebase Auth",
        "MongoDB", "Node.js", "Express.js", "Daisy UI", "Stripe"
      ],
      liveLink: "https://vaxin-shop.netlify.app/",
      githubFrontend: "https://github.com/shimul330/vaxin-shop-client-side",
      githubBackend: "https://github.com/username/backend-repo",
    },
  ];

  const [selectedProject, setSelectedProject] = useState(null);

  const handleDetails = (id) => {
    const found = data.find((p) => p.id === id);
    setSelectedProject(found);
  };

  const closeModal = () => setSelectedProject(null);

  return (
    <section id='projects' className="max-w-screen-xl mx-auto p-4 sm:p-6 space-y-10 text-white">
      {data.map((project, index) => (
        <div
          key={project.id}
          data-aos="fade-up"
          data-aos-delay={index * 150}
          className="flex flex-col sm:flex-col md:flex-row shadow-xl shadow-blue-600 rounded-lg overflow-hidden"
        >
          {/* Image Slider */}
          <div className="flex-1 w-full md:w-1/2 h-64 sm:h-72 md:h-auto">
            <Swiper
              modules={[Pagination, Autoplay]}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              loop={true}
              pagination={{ dynamicBullets: true, clickable: true }}
              className="h-full"
            >
              {project.images.map((img, idx) => (
                <SwiperSlide key={idx}>
                  <img
                    src={img}
                    alt={`${project.title} Slide ${idx + 1}`}
                    className="w-full h-full object-cover rounded-t-lg md:rounded-none md:rounded-l-lg"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Text Content */}
          <div className="flex-1 w-full md:w-1/2 p-4 sm:p-6 flex flex-col justify-between min-w-0">
            <div>
              <h2 className="text-2xl sm:text-3xl font-semibold text-purple-600 mb-3">
                {project.title}
              </h2>
              <p className="text-sm sm:text-[15px] leading-relaxed mb-4 break-words">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mt-4 mb-6 justify-start">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="bg-purple-700 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium border border-gray-600 hover:bg-gray-700 transition max-w-full break-words"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 mt-4">
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md text-white justify-center transition"
              >
                <FaExternalLinkAlt /> Live
              </a>

              <button
                onClick={() => {
                  window.open(project.githubFrontend, "_blank");
                  window.open(project.githubBackend, "_blank");
                }}
                className="flex items-center gap-2 bg-gray-700 hover:bg-gray-800 px-4 py-2 rounded-md text-white justify-center transition"
              >
                <FaGithub /> GitHub
              </button>

              <button
                onClick={() => handleDetails(project.id)}
                className="flex items-center gap-2 bg-green-600 hover:bg-green-700 px-4 py-2 rounded-md text-white justify-center transition"
              >
                <FaInfoCircle /> Details
              </button>
            </div>
          </div>
        </div>
      ))}

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50 p-4">
          <div className="bg-gray-900 rounded-lg max-w-lg w-full p-6 relative shadow-lg animate-fadeInUp">
            <button
              onClick={closeModal}
              className="absolute top-3 right-3 text-white text-xl hover:text-red-500"
            >
              ✕
            </button>

            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
              {selectedProject.title}
            </h2>
            <p className="text-gray-300 mb-4 text-sm sm:text-[15px] break-words">
              {selectedProject.description}
            </p>

            <div className="flex flex-wrap gap-2 mt-5 mb-6 justify-start">
              {selectedProject.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="bg-blue-700 text-white hover:bg-blue-600 px-3 py-1 rounded-full text-xs sm:text-sm max-w-full break-words"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row justify-between gap-3 mt-6">
              <a
                href={selectedProject.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex text-white items-center gap-2 bg-blue-600 hover:bg-blue-700 px-3 py-2 rounded-md justify-center transition"
              >
                <FaExternalLinkAlt /> Live
              </a>
              <a
                href={selectedProject.githubFrontend}
                target="_blank"
                rel="noopener noreferrer"
                className="flex text-white items-center gap-2 bg-purple-600 hover:bg-gray-700 px-3 py-2 rounded-md justify-center transition"
              >
                <FaGithub /> GitHub
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
