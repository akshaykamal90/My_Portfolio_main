import React, { useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const projects = [

    {
        id: "01",
        title: "Randell's Harvest - Omniblend",
        role: "Web Project/E-Commerce/(# In Progress)",
        tools: "React, Sql, Python, Google Auth",
        img: "https://raw.githubusercontent.com/33binil/Portfolio/main/public/img/omniblend.png",
        link: "https://omniblend-v2-1.vercel.app/",
    },
    {
        id: "02",
        title: "Book E-Store",
        role: "Web Project/Mini ecommerce",
        tools: "Python, Django, Mysql, React, MongoDB,",
        img: "/img/bookstore.png",
        link: "https://bookestore.onrender.com",
    },
    {
        id: "03",
        title: "Pixel Junkie Creative Studio",
        role: "Web design and development",
        tools: "React, Tailwind CSS, Figma",
        img: "https://raw.githubusercontent.com/33binil/Portfolio/main/public/img/pixeljunkie.png",
        link: "https://pixeljunkiestudio.in",
    },
    {
        id: "04",
        title: "Internship Project",
        role: "Web development",
        tools: "HTML, CSS, ",
        img: "https://raw.githubusercontent.com/33binil/Portfolio/main/public/img/internship.png",
        link: "https://front-end-website-1.vercel.app/",
    },
    {
        id: "05",
        title: "Blood Bank Donation Management System",
        role: "College Project",
        tools: "PHP, Javascript, CSS",
        img: "https://raw.githubusercontent.com/33binil/Portfolio/main/public/img/BBDMS.jpg",
    },
    {
        id: "06",
        title: "Weather App",
        role: "Web Project",
        tools: "Javascript, HTML, CSS",
        img: "https://raw.githubusercontent.com/33binil/Portfolio/main/public/img/weather.jpg",
        link: "https://weather-app-coral-seven-64.vercel.app/",
    },
    {
        id: "07",
        title: "QR Code Generator",
        role: "Web Project",
        tools: "Javascript, HTML, CSS",
        img: "https://raw.githubusercontent.com/33binil/Portfolio/main/public/img/QR.png",
        link: "https://qr-generator-beta-dusky.vercel.app/",
    },

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
            <div className="flex flex-col md:flex-row justify-center w-full max-w-7xl mx-auto md:h-[450px] lg:h-[500px] md:space-x-4 space-y-4 md:space-y-0">
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
                                    transition: isMobile ? "height 0.4s ease-in-out" : "flex 0.6s ease-in-out",
                                    backgroundImage: `url(${project.img})`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                };
                                if (isMobile) {
                                    return {
                                        ...base,
                                        height: isActive ? 250 : 160,
                                    };
                                }
                                return {
                                    ...base,
                                    flex: isActive ? 3 : isAnyActive ? 0.8 : 1,
                                };
                            })()}
                            className="relative rounded-2xl overflow-hidden shadow-lg cursor-pointer w-full"
                        >
                            {/* Overlay */}
                            <div
                                className={`absolute inset-0 bg-black transition-opacity duration-500 ${
                                    isActive ? "bg-opacity-50" : "bg-opacity-50"
                                }`}
                            />

                            {/* Content */}
                            <div
                                className={`absolute bottom-0 w-full p-4 text-center text-white transition-all duration-500 ${
                                    isActive
                                        ? "opacity-100 translate-y-0"
                                        : "opacity-0 translate-y-10"
                                }`}
                            >
                                <h3 className="text-2xl font-bold">{project.title}</h3>
                                <p className="text-gray-200">{project.role}</p>
                                <p className="text-sm text-gray-300 mt-2">{project.tools}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default Showcase;
