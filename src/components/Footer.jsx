import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer
      className={`${window.location.pathname === "/" ? "footer" : "hidden"}`}
    >
      <p>Designed with love by Vignesh</p>
    </footer>
  );
};

export default Footer;
