import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

const experiences = [
    {
        year: "01/2026 – Present",
        role: "Frontend Developer",
        company: "WebOne Pvt Ltd",
        description:
            "Migrated existing web applications from Django MVT architecture to React.js frontend, improving UI scalability and maintainability. Converted server-rendered templates into component-based React architecture using hooks. Integrated frontend with backend APIs using Axios / Fetch for seamless data flow. Improved application performance and user experience through optimized rendering and responsive design.",
    },
    {
        year: "09/2024 – 12/2025",
        role: "Junior Web Developer",
        company: (
            <a
                href="https://www.astrivix.in"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 hover:underline text-purple-400"
            >
                Astrivix Creative Studio
                <span>→</span>
            </a>
        ),
        description:
            "Developed a full-stack web application using React.js and Django, handling complete frontend-backend integration. Designed and implemented RESTful APIs using Django REST Framework for seamless data communication. Built role-based authentication systems, improving application security and user access control. Optimized API performance and reduced response time by ~25%.",
    },
    {
        year: "01/2025 – 12/2025",
        role: "Python Full Stack Developer Intern",
        company: "SMEC Labs",
        description:
            "Built full-stack web applications using React.js, Django, and MySQL. Developed an eCommerce platform with dynamic product management and admin dashboard. Implemented secure authentication features including email verification, password reset, and account lockout. Integrated REST APIs and managed frontend state using React Hooks and Context API.",
    }
];

export default function Career() {
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const section = document.getElementById("career-section");
            if (section) {
                const rect = section.getBoundingClientRect();
                const windowHeight = window.innerHeight;
                const progress = Math.min(
                    Math.max(
                        (windowHeight - rect.top) / (rect.height + windowHeight),
                        0
                    ),
                    1
                );
                setScrollProgress(progress);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        AOS.init({ once: true });
    }, []);

    return (
        <section
            id="career-section"
            className="relative w-full min-h-screen text-white px-6 md:px-20 py-32"
        >
            {/* Heading */}
            <div className="text-center mb-20 md:mb-44">
                <h2
                    data-aos="fade-down"
                    data-aos-duration="1000"
                    className="inline-block text-3xl md:text-6xl font-bold text-center mx-auto text-transparent bg-clip-text"
                >
                    <span
                        style={{
                            color: "#6366f1",
                            backgroundImage:
                                "linear-gradient(45deg, #6366f1 10%, #a855f7 93%)",
                            WebkitBackgroundClip: "text",
                            backgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                        }}
                    >
                        My Career & Experience
                    </span>
                </h2>

                <p
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    className="font-exo text-slate-400 max-w-2xl mx-auto text-sm md:text-base mt-2"
                >
                    A timeline of my professional journey, roles, and learnings.
                </p>
            </div>

            {/* Mobile Layout */}
            <div className="md:hidden relative">
                {/* Timeline Line */}
                <div
                    className="absolute left-4 top-0 w-[3px] bg-gradient-to-b from-purple-500 via-purple-400 to-transparent"
                    style={{ height: `${scrollProgress * 100}%` }}
                ></div>

                {/* Glowing Circle */}
                <div
                    className="absolute left-[2px] w-6 h-6 rounded-full bg-purple-500 animate-pulse"
                    style={{
                        top: `${scrollProgress * 100}%`,
                        transform: "translateY(-50%)",
                        boxShadow:
                            "0 0 20px rgba(168,85,247,0.9), 0 0 40px rgba(168,85,247,0.6), 0 0 60px rgba(168,85,247,0.4)",
                    }}
                ></div>

                {/* Experience Cards */}
                <div className="flex flex-col gap-16 pl-12">
                    {experiences.map((exp, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{
                                opacity: scrollProgress > i * 0.25 ? 1 : 0,
                                y: scrollProgress > i * 0.25 ? 0 : 50,
                            }}
                            transition={{ duration: 0.5 }}
                            className="text-gray-300"
                        >
                            <div className="text-sm text-purple-400 mb-1">{exp.year}</div>
                            <h3 className="text-xl font-bold mb-1">{exp.role}</h3>
                            <div className="text-purple-400 mb-2">{exp.company}</div>
                            <p className="text-sm">{exp.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Desktop Layout */}
            <div className="hidden md:flex justify-center gap-10 lg:gap-20 relative max-w-7xl mx-auto w-full px-6">
                {/* Left Column - Roles */}
                <div className="relative flex flex-1 flex-col gap-32 text-right items-end py-10">
                    {experiences.map((exp, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{
                                opacity: scrollProgress > i * 0.25 ? 1 : 0,
                                y: scrollProgress > i * 0.25 ? 0 : 50,
                            }}
                            transition={{ duration: 0.6 }}
                            className="flex flex-col justify-center min-h-[200px]"
                        >
                            <div className="text-lg text-purple-400 mb-1">{exp.year}</div>
                            <h3 className="text-3xl lg:text-4xl font-bold">{exp.role}</h3>
                            <p className="text-purple-400 mt-2">{exp.company}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Middle Column - Timeline */}
                <div className="relative flex justify-center w-8 shrink-0">
                    <div
                        className="absolute top-0 w-[3px] bg-gradient-to-b from-purple-500 via-purple-400 to-transparent"
                        style={{ height: `${scrollProgress * 100}%` }}
                    ></div>
                    <div
                        className="absolute w-6 h-6 rounded-full bg-purple-500 animate-pulse"
                        style={{
                            top: `${scrollProgress * 100}%`,
                            transform: "translateY(-50%)",
                            boxShadow:
                                "0 0 20px rgba(168,85,247,0.9), 0 0 40px rgba(168,85,247,0.6), 0 0 60px rgba(168,85,247,0.4)",
                        }}
                    ></div>
                </div>

                {/* Right Column - Descriptions */}
                <div className="relative flex flex-1 flex-col gap-32 text-lg py-10">
                    {experiences.map((exp, i) => (
                        <motion.p
                            key={i}
                            className="font-exo text-gray-300 max-w-md flex flex-col justify-center min-h-[200px]"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{
                                opacity: scrollProgress > i * 0.25 ? 1 : 0,
                                y: scrollProgress > i * 0.25 ? 0 : 50,
                            }}
                            transition={{ duration: 0.6 }}
                        >
                            {exp.description}
                        </motion.p>
                    ))}
                </div>
            </div>
        </section>
    );
}
