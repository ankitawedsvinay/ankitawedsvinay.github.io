import React, { useState, useEffect } from "react";
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
  const [route, setRoute] = useState(window.location.pathname);

  const navigateTo = (path) => {
    window.history.pushState({}, "", path);
    setRoute(path);
    window.scrollTo(0, 0); // Reset scroll position when navigating
  };

  useEffect(() => {
    const handlePopState = () => {
      setRoute(window.location.pathname);
    };
    window.addEventListener("popstate", handlePopState);
    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  const renderRoute = () => {
    switch (route) {
      case "/":
        return (
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
        );
      case "/invitation":
        return <Invitation />;
      case "/viewmap":
        return <Map />;
      case "/SangeethCeremony":
        return <SangeethInvite />;
      default:
        return <h1>404 - Page Not Found</h1>;
    }
  };

  return (
    <div className="app">
      <Navbar />
      {renderRoute()}
      <Footer />
    </div>
  );
};

export default App;
