import React, { useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Autoplay, Pagination } from "swiper/modules";
import { FaExternalLinkAlt, FaGithub, FaInfoCircle } from "react-icons/fa";


const Project = () => {
    const data = [
        {
            id: 1,
            images: [
                "https://i.ibb.co.com/GfqHtkny/banner1.png",
                "https://i.ibb.co.com/1YckyvxL/banner2.png",
                "https://i.ibb.co.com/Q7XW0hfS/banner3.png",
            ],
            title: "Job Hook",
            description:
                "Job Hook is an online job platform where users can easily browse various job opportunities and apply directly. It provides detailed job descriptions, required qualifications, and a seamless application process. With a modern UI and secure authentication system, it offers a reliable solution for job seekers.",
            technologies: [
                "JavaScript",
                "Tailwind CSS",
                "React",
                "Firebase Auth",
                "MongoDB",
                "Node.js",
                "Express.js",
                "Daisy UI",
            ],
            liveLink: "https://job-career.netlify.app/",
            githubFrontend: "https://github.com/username/frontend-repo",
            githubBackend: "https://github.com/username/backend-repo",
        },
        {
            id: 2,
            images: [
                "https://i.ibb.co.com/5h8P6yNz/banner4.png",
                "https://i.ibb.co.com/0jq5pQMK/banner5.png",
                "https://i.ibb.co.com/fGNgqKC9/banenr6.png",
            ],
            title: "Car Rental",
            description:
                "Car Rental is a web application where users can view all available cars, add new cars, and see the details of their booked cars. It features an easy booking process, dynamic search, and a user-friendly dashboard to make car rentals more convenient.",
            technologies: [
                "JavaScript",
                "Tailwind CSS",
                "React",
                "Firebase Auth",
                "MongoDB",
                "Node.js",
                "Express.js",
                "Daisy UI"
            ],
            liveLink: "https://car-rental-house.netlify.app/",
            githubFrontend: "https://github.com/username/frontend-repo",
            githubBackend: "https://github.com/username/backend-repo",
        },
        {
            id: 3,
            images: [
                "https://i.ibb.co.com/S4TF9SrR/banner7.png",
                "https://i.ibb.co.com/HDkkGCZL/banner8.png",
                "https://i.ibb.co.com/HDkkGCZL/banner8.png",
            ],
            title: "Vaxin Shop",
            description:
                "Vaxin Shop is a complete medicine e-commerce platform supporting three roles — Admin, Seller, and User. Sellers can add new medicines and manage their own product data. Users can view their orders and payment history. Admins have full control over the system, including product management, user management, and sales reports.",
            technologies: [
                "JavaScript",
                "Tailwind CSS",
                "React",
                "Firebase Auth",
                "MongoDB",
                "Node.js",
                "Express.js",
                "Daisy UI",
                "Stripe"
            ],
            liveLink: "https://vaxin-shop.netlify.app/",
            githubFrontend: "https://github.com/username/frontend-repo",
            githubBackend: "https://github.com/username/backend-repo",
        },
    ];

    const [selectedProject, setSelectedProject] = useState(null);

    const handleDetails = (id) => {
        const found = data.find((p) => p.id === id);
        setSelectedProject(found);
    };

    const closeModal = () => {
        setSelectedProject(null);
    };
    return (
        <div id='project' className="max-w-7xl mx-auto p-6 space-y-10">
            {data.map((project) => (
                <div
                    key={project.id}
                    className="flex border border-gray-300 rounded-lg overflow-hidden "
                >
                    {/* Left side image slider */}
                    <div className="flex-1 max-w-[700px]">
                        <Swiper
                            modules={[Pagination, Autoplay,]}
                            autoplay={{
                                delay: 3000,
                                disableOnInteraction: false,
                            }}
                            loop={true}
                            pagination={{ dynamicBullets: true, clickable: true }}
                            className="h-full"
                        >
                            {project.images.map((img, idx) => (
                                <SwiperSlide key={idx}>
                                    <img
                                        src={img}
                                        alt={`${project.title} Slide ${idx + 1}`}
                                        className=" w-full h-full "
                                    />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>

                    {/* Right side text */}
                    <div className="flex-1 text-white p-8 flex flex-col">
                        <h2 className="text-3xl font-semibold text-purple-600 mb-4">{project.title}</h2>
                        <p className="text-[15px] leading-relaxed mb-4">{project.description}</p>

                        {/* Technologies */}
                        <div className="flex flex-wrap gap-2 mt-4 mb-6">
                            {project.technologies.map((tech, index) => (
                                <span
                                    key={index}
                                    className="bg-purple-700 px-3 py-1 rounded-full text-sm font-medium border border-gray-600 hover:bg-gray-700 transition"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>

                        {/* Buttons */}
                        <div className="flex gap-4 mt-7">
                            {/* Live Link */}
                            <a
                                href={project.liveLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md text-white transition"
                            >
                                <FaExternalLinkAlt /> Live
                            </a>

                            {/* GitHub */}
                            <a
                                href={project.githubLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() => {
                                    window.open(project.githubFrontend, "_blank");  
                                    window.open(project.githubBackend, "_blank");  
                                }}
                                className="flex items-center gap-2 bg-gray-700 hover:bg-gray-800 px-4 py-2 rounded-md text-white transition"
                            >
                                <FaGithub /> GitHub
                            </a>

                            {/* Details */}
                            <button
                                onClick={() => handleDetails(project.id)}
                                className="flex items-center gap-2 bg-green-600 hover:bg-green-700 px-4 py-2 rounded-md text-white transition"
                            >
                                <FaInfoCircle /> Details
                            </button>
                        </div>
                    </div>

                </div>


            ))}

            {/* Popup Modal */}
            {selectedProject && (
                <div className="fixed inset-0   flex justify-center items-center z-50">
                    <div className="bg-gray-900 rounded-lg max-w-lg w-full p-6 relative shadow-lg animate-fadeInUp">
                        {/* Close Button */}
                        <button
                            onClick={closeModal}
                            className="absolute top-3 right-3 text-white text-xl hover:text-red-500"
                        >
                            ✕
                        </button>

                        {/* Content */}
                        <h2 className="text-3xl  font-bold text-white mb-3">
                            {selectedProject.title}
                        </h2>
                        <p className="text-gray-300  mb-4">{selectedProject.description}</p>
                        <div className="flex flex-wrap gap-2 mt-5 mb-6">
                            {selectedProject.technologies.map((tech, index) => (
                                <span
                                    key={index}
                                    className="bg-blue-700 text-white hover:bg-blue-600 px-3 py-1 rounded-full text-sm"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>

                        {/* Buttons */}
                        <div className="flex justify-between gap-3 mt-10">
                            <a
                                href={selectedProject.liveLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex text-white items-center gap-2 bg-blue-600 hover:bg-blue-700 px-3 py-2 rounded-md transition"
                            >
                                <FaExternalLinkAlt /> Live
                            </a>
                            <a
                                href={selectedProject.githubLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex text-white items-center gap-2 bg-purple-600 hover:bg-gray-700 px-3 py-2 rounded-md transition"
                            >
                                <FaGithub /> GitHub
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Project;