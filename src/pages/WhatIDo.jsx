import React, { useState } from "react";

export default function WhatIDo() {
    const [hoverIndex, setHoverIndex] = useState(null);

    const items = [
        {
            title: "FULL-STACK DEVELOPMENT",
            description:
                "I build responsive, scalable, and interactive web applications with a focus on clean code, performance, and seamless user experience. Leveraging Python, Django, React, and MySQL, along with modern frontend technologies like HTML, CSS, JavaScript, and Tailwind CSS, I create fast, dynamic, and user-friendly interfaces powered by robust and efficient backend systems.",
            skills: [
                "HTML5",
                "CSS3",
                "JavaScript",
                "React.js",
                "Tailwind CSS",
                "Python",
                "Django",
                "MySql",
                "Framer Motion / GSAP",
                "Responsive Design",
                "Git & GitHub",
            ],

        },
    ];

    return (
        <div className="flex flex-col lg:flex-row justify-center lg:justify-between items-center lg:items-start gap-16 px-6 sm:px-10 py-20">
            {/* LEFT SIDE — TITLE */}
            <div
                className="relative md:left-64"
                data-aos="fade-right"
                data-aos-duration="1200"
                data-aos-easing="ease-out-cubic"
            >
                <h2 className="relative font-sans font-bold text-6xl sm:text-7xl lg:text-8xl leading-tight">
                    WHAT
                    <div>
                        I<span className="font-bold text-[#c2a4ff]"> DO</span>
                    </div>
                </h2>
            </div>


            {/* RIGHT SIDE — BOXES */}
            <div className="relative md:left-[-400px] flex flex-col md:top-[-100px] gap-8 w-full max-w-[500px]">
                {items.map((item, i) => (
                    <div
                        key={i}
                        className={`
              relative border-2 border-dashed border-white w-full p-6
              transition-all duration-500 ease-in-out cursor-pointer
              ${hoverIndex === i ? "md:h-[370px] h-[620px]" : "md:h-[220px] h-[340px]"}
              flex flex-col justify-between
            `}
                        onMouseEnter={() => setHoverIndex(i)}
                        onMouseLeave={() => setHoverIndex(null)}
                    >
                        {/* Decorative Corners */}
                        <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-white"></div>
                        <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-white"></div>
                        <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-white"></div>
                        <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-white"></div>

                        {/* Content */}
                        <div>
                            <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                            <h4 className="text-lg mt-0"></h4>
                            <p className="text-sm mt-1">{item.description}</p>
                        </div>

                        {/* Skillset (animated) */}
                        <div
                            className={`
                transform transition-all duration-500 ease-in-out overflow-hidden
                ${hoverIndex === i ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
              `}
                        >
                            <h5 className="mt-4 font-semibold">Skillset & Tools</h5>
                            <div className="flex flex-wrap gap-2 mt-2">
                                {item.skills.map((skill, idx) => (
                                    <div
                                        key={idx}
                                        className="px-2 py-1 text-xs border border-white rounded"
                                    >
                                        {skill}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
