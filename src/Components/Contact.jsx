import axios from 'axios';
import React, { useState } from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [status, setStatus] = useState("");
    console.log(formData)
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("Sending...");

        try {
            const res = await axios.post("https://contact-server-side.vercel.app/contact", formData);
           
            if (res.data.success) {
                setStatus("Message sent successfully!");
                setFormData({ name: "", email: "", message: "" });
                setTimeout(() => {
                    setStatus("");
                }, 2000);
            }
            else {
                setStatus("Failed to send message.");
            }
        } catch (error) {
            setStatus("Error sending message.");
        }
        finally {

        }

    }



    return (
        <section id='contact' className="bg-[#1F2937] text-white py-12 px-4">
            <div>
                <h1 className='text-4xl text-center font-bold mb-4'>Contact Me</h1>
            </div>
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">

                {/* Left Side */}
                <div>
                    <h2 className="text-3xl font-bold mb-2">Let's talk about your project</h2>
                    <p className="text-gray-300 mb-6">
                        I'm currently available for new projects. Contact me to discuss your web development needs.
                    </p>

                    <div className="space-y-4">
                        <div className="flex items-center space-x-3">
                            <FaMapMarkerAlt className="text-pink-500" />
                            <span>Masterpar,Feni, Bangladesh</span>
                        </div>
                        <div className="flex items-center space-x-3">
                            <FaPhoneAlt className="text-pink-500" />
                            <span>+8801887248726</span>
                        </div>
                        <div className="flex items-center space-x-3">
                            <FaEnvelope className="text-pink-500" />
                            <span>shimuldevnath330@gmail.com</span>
                        </div>
                    </div>

                    <div className="flex space-x-4 mt-6 text-xl">
                        <a target='_blank' href="https://www.facebook.com/YourProfile/" className="hover:text-pink-500"><FaFacebook /></a>
                        <a target='_blank' href="https://github.com/shimul330" className="hover:text-pink-500"><FaGithub /></a>
                        <a target='_blank' href="https://www.linkedin.com/in/shimul-kumar-nath-445519354/" className="hover:text-pink-500"><FaLinkedin /></a>
                    </div>
                </div>

                {/* Right Side */}
                <div className="bg-[#111827] p-6 rounded-lg">
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label className="block mb-1">Full name</label>
                            <input
                                type="text"
                                placeholder="Name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full p-2 rounded border border-gray-500 bg-transparent focus:outline-none"
                            />
                        </div>
                        <div>
                            <label className="block mb-1">Email address</label>
                            <input
                                type="email"
                                placeholder="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full p-2 rounded border border-gray-500 bg-transparent focus:outline-none"
                            />
                        </div>
                        <div>
                            <label className="block mb-1">Message</label>
                            <textarea
                                placeholder="message"
                                rows="4"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                className="w-full p-2 rounded border border-gray-500 bg-transparent focus:outline-none"
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="bg-blue-800 hover:bg-blue-700 px-4 py-2 rounded font-medium"
                        >
                            Send
                        </button>
                        <p className="mt-2 text-sm">{status}</p>
                    </form>
                </div>

            </div>
        </section>
    );
};

export default Contact;