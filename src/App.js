import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./portfolio/Navbar";
import Portfolio from "./portfolio/Portfolio";
import Projects from "./portfolio/Projects";
import Contact from "./portfolio/MuiContact";
import ResumePage from "./Resume";
import AboutMeCard from "./portfolio/MuiAb";




import "./App.css";
function App() {
  return (
    <Router>
      <Navbar />
      <div className="body-content">
        <Routes>
          <Route path="/" element={<Portfolio />} />
          <Route path="/about" element={<AboutMeCard />} />
          <Route path="/projects" element={<Projects />} />
          
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<ResumePage />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;








