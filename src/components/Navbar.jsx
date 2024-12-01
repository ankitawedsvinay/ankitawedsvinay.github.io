import React, { useState, useEffect } from "react";
import "../styles/Navbar.css";

const Navbar = () => {
  const [isScrollingUp, setIsScrollingUp] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down, hide the navbar
        setIsScrollingUp(false);
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up, show the navbar
        setIsScrollingUp(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      className={`navbar ${
        window.location.pathname !== "/"
          ? "hidden"
          : isScrollingUp
          ? "visible"
          : "hidden"
      }`}
    >
      <div className="navigation">
        <div className="centered-image">
          <img src="/assets/title.png" alt="Wedding Celebration" />
        </div>
        <button
          className="hamburger"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          ☰
        </button>
        <ul className={`nav-links ${isOpen ? "active" : ""}`}>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#details">Wedding Details</a>
          </li>
          <li>
            <a href="#contact">Contact Us</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
