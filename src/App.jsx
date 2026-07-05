import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Service from './pages/Service.jsx';
import Leadership from './pages/Leadership.jsx';
import Activities from './pages/Activities.jsx';
import FutureProjects from './pages/FutureProjects.jsx';
import Collaborate from './pages/Collaborate.jsx';
import WhatWeCanProvide from './pages/WhatWeCanProvide.jsx';
import Contact from './pages/Contact.jsx';
import Footer from './components/common/Footer.jsx';
import Navbar from './components/common/Navbar.jsx';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 850,
      easing: 'ease-out-cubic',
      offset: 120,
      once: true,
      mirror: false,
    });
  }, []);

  return (
    <>
      <Navbar />
      
      <main>
        <Home />
        <About />
        <Leadership />
        <Service />
        <Activities />
        <FutureProjects />
        <Collaborate />
        <WhatWeCanProvide />
        <Contact />
      </main>

      <Footer />
    </>
  )
}

export default App;
