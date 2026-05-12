import React, { useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const projects = [
    {
        id: "01",
        title: "Take Off Holidayz",
        role: "Travel Agency Client (Freelance)",
        tools: "React.js, Django, REST APIs",
        img: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=1000&auto=format&fit=crop",
        link: "https://www.takeoffholidayz.in",
    },
    {
        id: "02",
        title: "Randell's Harvest - Omniblend",
        role: "Web Project/E-Commerce",
        tools: "React.js, MySQL, Python",
        img: "https://raw.githubusercontent.com/33binil/Portfolio/main/public/img/omniblend.png",
        link: "https://omniblend-v2-1.vercel.app/",
    },
    {
        id: "03",
        title: "Book E-Store",
        role: "Full stack project",
        tools: "React.js, Django, MySQL, MongoDB",
        img: "/img/bookstore.png",
        link: "https://bookestore.onrender.com",
    },
    {
        id: "04",
        title: "Astrivix Creative Studio",
        role: "Web design and development",
        tools: "React, Tailwind CSS, Figma",
        img: "https://raw.githubusercontent.com/33binil/Portfolio/main/public/img/pixeljunkie.png",
        link: "https://www.astrivix.in",
    },
    {
        id: "05",
        title: "Internship Project",
        role: "Web development",
        tools: "HTML, CSS",
        img: "https://raw.githubusercontent.com/33binil/Portfolio/main/public/img/internship.png",
        link: "https://front-end-website-1.vercel.app/",
    },
    {
        id: "06",
        title: "Blood Bank Donation Management System",
        role: "College Project",
        tools: "PHP, Javascript, CSS",
        img: "https://raw.githubusercontent.com/33binil/Portfolio/main/public/img/BBDMS.jpg",
    }
];

const Showcase = () => {
    const [activeId, setActiveId] = useState(null);
    const [isMobile, setIsMobile] = useState(false);

    React.useEffect(() => {
        AOS.init({ once: true });

        // detect mobile via media query
        const mq = window.matchMedia("(max-width: 767px)");
        const handle = (e) => setIsMobile(e.matches);
        setIsMobile(mq.matches);
        if (mq.addEventListener) mq.addEventListener("change", handle);
        else mq.addListener(handle);
        return () => {
            if (mq.removeEventListener) mq.removeEventListener("change", handle);
            else mq.removeListener(handle);
        };
    }, []);

    return (
        <section className="w-full py-10 px-6 bg-transparent">
            {/* Animated Heading */}
            <div className="text-center mb-24">
                <h2
                    data-aos="fade-down"
                    data-aos-duration="1000"
                    className="inline-block text-3xl md:text-5xl font-bold text-transparent bg-clip-text"
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
            My Works
          </span>
                </h2>
                <p
                    data-aos="fade-up"
                    data-aos-duration="1100"
                    className="font-exo text-slate-400 max-w-2xl mx-auto text-sm md:text-base mt-2"
                >
                    A collection of my featured projects showcasing design & development.
                </p>
            </div>

            {/* Projects Showcase */}
            <div className="flex flex-col md:flex-row w-full max-w-7xl mx-auto md:h-[450px] lg:h-[500px] gap-6 md:gap-4 pb-4 md:pb-0">
                {projects.map((project) => {
                    const isActive = activeId === project.id;
                    const isAnyActive = activeId !== null;

                    return (
                        <div
                            key={project.id}
                            onMouseEnter={() => setActiveId(project.id)}
                            onMouseLeave={() => setActiveId(null)}
                            onClick={() => window.open(project.link, "_blank")} // redirect on click
                            style={(() => {
                                const base = {
                                    transition: "all 0.5s ease-in-out",
                                };
                                if (isMobile) {
                                    return {
                                        ...base,
                                        // Mobile height is determined by flex-col content
                                    };
                                }
                                return {
                                    ...base,
                                    backgroundImage: `url(${project.img})`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                    flex: isActive ? 3 : isAnyActive ? 0.8 : 1,
                                };
                            })()}
                            className="relative flex flex-col md:block rounded-2xl overflow-hidden shadow-lg cursor-pointer w-full shrink-0 bg-white/5 md:bg-transparent border border-white/10 md:border-none"
                        >
                            {/* Mobile Image (Desktop uses background image on parent) */}
                            {isMobile && (
                                <div 
                                    className="w-full h-[200px]" 
                                    style={{ 
                                        backgroundImage: `url(${project.img})`, 
                                        backgroundSize: "cover", 
                                        backgroundPosition: "center" 
                                    }}
                                />
                            )}

                            {/* Overlay for desktop */}
                            {!isMobile && (
                                <div
                                    className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent transition-opacity duration-500 ${
                                        isActive ? "opacity-100" : "opacity-70"
                                    }`}
                                />
                            )}

                            {/* Content */}
                            <div
                                className={`w-full p-4 md:p-6 text-center text-white transition-all duration-500 ${
                                    isMobile ? "relative block" : "absolute bottom-0 z-10"
                                }`}
                            >
                                <h3 
                                    className={`text-xl md:text-2xl font-bold transition-transform duration-500 ${
                                        !isMobile && !isActive ? "translate-y-6" : "translate-y-0"
                                    }`}
                                >
                                    {project.title}
                                </h3>
                                
                                <div 
                                    className={`transition-all duration-500 overflow-hidden ${
                                        isMobile 
                                            ? "opacity-100 max-h-40 mt-1" 
                                            : isActive 
                                                ? "opacity-100 max-h-40 mt-1 translate-y-0" 
                                                : "opacity-0 max-h-0 mt-0 translate-y-4"
                                    }`}
                                >
                                    <p className="text-gray-300 text-sm md:text-base">{project.role}</p>
                                    <p className="text-xs md:text-sm text-purple-400 mt-2">{project.tools}</p>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default Showcase;
