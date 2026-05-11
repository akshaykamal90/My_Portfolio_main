import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

const experiences = [
    {
        year: "2024 – Present",
        role: "Python full stack devoloper, Freelance Service",
        company: (
            <a
                href="https://pixeljunkiestudio.in"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 hover:underline"
            >
                Pixel Junkie Creative Studio
                <span>→</span>
            </a>
        ),
        description:
            "Designed intuitive user interfaces in Figma and developed responsive, interactive frontends using React and Tailwind CSS. Built and integrated full-stack features using Python, Django, and MySQL, ensuring efficient data handling and robust backend functionality. Delivered branding assets, landing pages, and optimized web experiences deployed on platforms like Vercel and Netlify, helping clients strengthen their digital presence.",

},
    {
        year: "2024",
        role: "Python Full stack Devoloper Trainee. ",
        company: "Smeclabs,Kaloor,Kochi,Kerala",
        description:
            "Developed responsive frontends using React and Tailwind CSS, optimized layouts for performance and accessibility, and deployed projects via Git, Vercel, and Netlify. Assisted in creating branding assets and strategic landing pages to enhance client presence.",
    },
    {
        year: "NOW",
        role: "Freelance & Upskilling",
        company: "Freelance",
        description:
            "Collaborated with clients to design intuitive UI/UX experiences in Figma and develop responsive, high-performance frontends using React and Tailwind CSS. Integrated backend functionality with Python, Django, and MySQL to deliver seamless, data-driven web applications. Delivered branding assets, interactive prototypes, and modern web interfaces while continually upskilling in design systems, accessibility, and advanced frontend frameworks.",
    },
    {
        year: "NOW",
        role: "Freelance & Upskilling",
        company: "Pixel Junkie Creative Studio",
        description:
            "Working as a Freelancer at Pixel Junkie Creative Studio, collaborating with clients to design intuitive UI/UX experiences in Figma and develop responsive frontends using React and Tailwind CSS. Integrated backend functionalities with Python, Django, and MySQL to deliver seamless full-stack solutions. Delivered branding assets, interactive prototypes, and modern web interfaces while continually upskilling in design systems, accessibility, and advanced frontend frameworks.",
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
