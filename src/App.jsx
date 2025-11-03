import { useState } from "react";
import Welcome from "./pages/Welcome";
import Home from "./pages/Home";
import About from "./pages/About";
import Showcase from "./pages/Showcase";
import Contact from "./pages/Contact";
import Background from "./components/Background";
import Navbar from "./components/Navbar";
import WhatIDo from "./pages/WhatIDo.jsx";
import Career from "./pages/Career.jsx";
import Stack from "./pages/Stack.jsx";

function App() {
    const [showWelcome, setShowWelcome] = useState(true);

    return (
        <div className="bg-[#030014] text-white scroll-smooth">
            {showWelcome ? (
                <Welcome onLoadingComplete={() => setShowWelcome(false)} />
            ) : (
                <>
                    <Navbar />
                    <Background />
                    <section id="home">
                        <Home />
                    </section>
                    <section id="about">
                        <About />
                    </section>
                    <section id="whatido">
                        <WhatIDo />
                    </section>
                    <section id="stack">
                        <Stack />
                    </section>
                    <section id="career">
                        <Career />
                    </section>
                    <section id="showcase">
                        <Showcase />
                    </section>
                    <section id="contact">
                        <Contact />
                    </section>
                </>
            )}
        </div>
    );
}

export default App;
