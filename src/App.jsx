import React, { useEffect } from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import WeddingDetails from "./components/WeddingDetails";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import Countdown from "./components/Countdown";
import Invitation from "./components/Invitation";
import Map from "./components/Map";
import SangeethInvite from "./components/SangeethInvite";
import "./App.css";

const App = () => {
  const scrollToSection = (direction) => {
    const sections = Array.from(document.querySelectorAll(".section"));
    const currentScroll = window.scrollY;
    var currentIndex = sections.findIndex(
      (section) =>
        section.offsetTop <= currentScroll &&
        currentScroll < section.offsetTop + section.offsetHeight
    );

    if (direction === "up" && currentIndex > 0) {
      sections[currentIndex - 1].scrollIntoView({ behavior: "smooth" });
    } else if (direction === "down" && currentIndex < sections.length - 1) {
      sections[currentIndex + 1].scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <div id="home" className="section hero-section">
                  <HeroSection />
                </div>
                <div id="details" className="section">
                  <Countdown />
                  <WeddingDetails />
                </div>
                <div id="contact" className="section">
                  <ContactUs />
                </div>
                <div className="scroll-buttons">
                  <button
                    onClick={() => scrollToSection("up")}
                    className="scroll-up"
                  >
                    &#9650;
                  </button>
                  <button
                    onClick={() => scrollToSection("down")}
                    className="scroll-down"
                  >
                    &#9660;
                  </button>
                </div>
              </>
            }
          />
          <Route path="/invitation" element={<Invitation />} />
          <Route path="/viewmap" element={<Map />} />
          <Route path="/SangeethCeremony" element={<SangeethInvite />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
