import React from "react";
import SocialLinks from "../components/SocialLinks";
import "aos/dist/aos.css";

const ContactPage = () => {

    return (
        <>
            <div className="text-center lg:mt-[5%] mt-20 md:mt-10 mb-2 sm:px-0 px-[5%]">
                <h2
                    data-aos="fade-down"
                    data-aos-duration="1000"
                    className="inline-block text-3xl md:text-5xl font-bold text-center mx-auto text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]"
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
            Contact Me
          </span>
                </h2>
                <p
                    data-aos="fade-up"
                    data-aos-duration="1100"
                    className="font-exo text-slate-400 max-w-2xl mx-auto text-sm md:text-base mt-2"
                >
                    Ready to bring value to your team — let’s get in touch!
                </p>
            </div>

            <div
                className="h-auto py-10 flex items-center justify-center px-[5%] md:px-0"
                id="Contact"
            >

                <div className="mt-10 pt-9 border-10 border-white/10 flex justify-center space-x-6">
                    <SocialLinks />
                </div>
            </div>
        </>
    );
};

export default ContactPage;
