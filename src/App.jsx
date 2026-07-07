import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import ScrollToTop from "./components/common/ScrollToTop";

import Home from "./pages/Home";
import About from "./pages/About";
import Leadership from "./pages/Leadership";
import Service from "./pages/Service";
import Activities from "./pages/Activities";
import FutureProjects from "./pages/FutureProjects";
import Collaborate from "./pages/Collaborate";
import WhatWeCanProvide from "./pages/WhatWeCanProvide";
import Contact from "./pages/Contact";

function App() {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      offset: 120,
      once: true,
      mirror: false,
    });
  }, []);

  return (
    <>
      <Navbar />
      <ScrollToTop />

      <main className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/leadership" element={<Leadership />} />
          <Route path="/services" element={<Service />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/future-projects" element={<FutureProjects />} />
          <Route path="/collaborate" element={<Collaborate />} />
          <Route path="/what-we-provide" element={<WhatWeCanProvide />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;