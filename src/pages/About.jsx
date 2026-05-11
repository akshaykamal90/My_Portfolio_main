import React, { useEffect, memo, useMemo } from "react";
import { FileText, ArrowUpRight, Sparkles } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

// ✅ Header Section
const Header = memo(() => (
    <div className="text-center lg:mb-8 mb-2 px-[5%]">
        <h2
            className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]"
            data-aos="zoom-in-up"
            data-aos-duration="600"
        >
            About Me
        </h2>
        <p
            className="font-exo mt-2 text-gray-400 max-w-2xl mx-auto text-base sm:text-lg flex items-center justify-center gap-2"
            data-aos="zoom-in-up"
            data-aos-duration="800"
        >
            <Sparkles className="w-5 h-5 text-purple-400" />
            Transforming ideas into digital experiences
            <Sparkles className="w-5 h-5 text-purple-400" />
        </p>
    </div>
));

// ✅ Profile Image Section
const ProfileImage = memo(() => (
    <div className="flex justify-center lg:justify-end items-center p-4 sm:p-12">
        <div className="relative group" data-aos="fade-up" data-aos-duration="1000">
            <div className="absolute -inset-6 opacity-[25%] z-0 hidden sm:block">
                <div className="absolute inset-0 bg-gradient-to-r from-violet-600 via-indigo-500 to-purple-600 rounded-full blur-2xl animate-spin-slower" />
                <div className="absolute inset-0 bg-gradient-to-l from-fuchsia-500 via-rose-500 to-pink-600 rounded-full blur-2xl animate-pulse-slow opacity-50" />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-600 via-cyan-500 to-teal-400 rounded-full blur-2xl animate-float opacity-50" />
            </div>

            <div className="relative w-72 h-72 sm:w-80 sm:h-80 rounded-full overflow-hidden shadow-[0_0_40px_rgba(120,119,198,0.3)] group-hover:scale-105 transition-all duration-700">
                <div className="absolute inset-0 border-4 border-white/20 rounded-full z-20 group-hover:border-white/40 transition-all duration-700" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40 z-10 hidden sm:block group-hover:opacity-0 transition-opacity duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-500/20 via-transparent to-blue-500/20 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 hidden sm:block" />
                <img
                    src="/Photo.jpg"
                    alt="Profile"
                    className="w-full h-full object-cover group-hover:scale-110 group-hover:rotate-2 transition-all duration-700"
                />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 hidden sm:block transition-all duration-700 z-20">
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                    <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-white/10 to-transparent translate-y-full group-hover:-translate-y-full transition-transform duration-1000 delay-100" />
                    <div className="absolute inset-0 rounded-full border-8 border-white/10 scale-0 group-hover:scale-100 transition-transform duration-700 animate-pulse-slow" />
                </div>
            </div>
        </div>
    </div>
));

// ✅ Stats Card Component (kept in case you want to add stats later)
const StatCard = memo(({ icon: Icon, color, value, label, description, animation }) => (
    <div data-aos={animation} data-aos-duration="1300" className="group">
        <div className="bg-gray-900/50 backdrop-blur-lg rounded-2xl p-6 border border-white/10 h-full flex flex-col justify-between transition-all duration-300 hover:scale-105 hover:shadow-2xl relative">
            <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-10 group-hover:opacity-20 -z-10 transition-opacity`} />
            <div className="flex items-center justify-between mb-4">
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center group-hover:rotate-6 transition-transform">
                    <Icon className="w-8 h-8 text-white" />
                </div>
                <span className="text-4xl font-bold text-white" data-aos="fade-up-left" data-aos-duration="1500">
          {value}
        </span>
            </div>
            <div>
                <p className="text-sm uppercase tracking-wider text-gray-300 mb-2">{label}</p>
                <div className="flex justify-between items-center">
                    <p className="text-xs text-gray-400">{description}</p>
                    <ArrowUpRight className="w-4 h-4 text-white/50 group-hover:text-white transition-colors" />
                </div>
            </div>
        </div>
    </div>
));

// ✅ Main About Component
const AboutPage = () => {
    useEffect(() => {
        const initAOS = () => AOS.init({ once: false });
        initAOS();

        let resizeTimer;
        const handleResize = () => {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(initAOS, 250);
        };
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
            clearTimeout(resizeTimer);
        };
    }, []);

    const statsData = useMemo(() => [], []); // currently empty

    return (
        <div id="About" className="h-auto pb-[10%] text-white overflow-hidden px-[5%] lg:px-[10%] mt-32 md:mt-0">
            <Header />

            <div className="pt-8 sm:pt-12 mb-0 md:mb-28 ">
                <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                    <div className="space-y-6 text-center lg:text-left">
                        <h2
                            className="text-3xl sm:text-4xl lg:text-5xl font-exo font-bold"
                            data-aos="fade-right"
                        >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]">
                Hello, I'm
              </span>
                            <span
                                className="block mt-2 text-gray-200"
                                data-aos="fade-right"
                                data-aos-duration="1300"
                            >
                Akshay kamal
              </span>
                        </h2>

                        <p
                            className="relative font-exo text-base sm:text-lg lg:text-xl text-gray-400 leading-relaxed text-justify"
                            data-aos="fade-right"
                            data-aos-duration="1500"
                        >
                            I'm a passionate Python full stack devoloper who loves crafting responsive, user-friendly web apps. Using MongoDB, MySQL, Python, Django  React, HTML, CSS, JavaScript, and Tailwind CSS, I design and build clean, interactive UIs with robust backends to deliver seamless user experiences.
                        </p>

                        {/* ✅ Download CV Button */}
                        <div className="pt-4" data-aos="fade-up" data-aos-duration="1000">
                            <a
                                href="/Akshaykamal.pdf"
                                download
                                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-[#6366f1] to-[#a855f7] font-medium hover:scale-105 transition-all shadow-lg hover:shadow-xl"
                            >
                                <FileText className="w-5 h-5" />
                                Download CV
                            </a>
                        </div>
                    </div>

                    <ProfileImage />
                </div>
            </div>

            {/* ✅ Animations */}
            <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        @keyframes spin-slower {
          to { transform: rotate(360deg); }
        }
      `}</style>
        </div>
    );
};

export default memo(AboutPage);