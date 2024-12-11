import React from "react";
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
