import './assets/css/style.css';
import './assets/css/bootstrap.min.css';

import { Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar';
import About from './Components/About';
import Service from './Components/Service';
import Home from './Components/Home';
import { useEffect, useState } from 'react';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import AboutLayout from './Components/AboutLayout';
import NotFound from './Components/404';
import Testimonial from './Components/Testimonial';
import TeamSection from './Components/Team';

function App() {
  const [loading, setLoading] = useState(true); // ✅ set true initially

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800); // Spinner shows for 800ms
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div
        id="spinner"
        className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center"
      >
        <div
          className="spinner-grow text-primary"
          style={{ width: "3rem", height: "3rem" }}
          role="status"
        >
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <>
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/project" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path='/testimonial' element={<Testimonial/>}/>
        <Route path='/team' element={<TeamSection/>}/>
        <Route path="*" element={<NotFound />} />

        {/* Add other routes */}
      </Routes>
    </>
  );
}

export default App;
