import React from "react";
import "../styles/ContactUs.css";
import { useWeddingData } from "../context/WeddingDataContext";

const ContactUs = () => {
  const { heroine, hero } = useWeddingData();
  return (
    <section id="contact" className="contact-us">
      <h2>Contact Us</h2>
      <div className="side">
        <div className="family">
          <h3>
            {heroine.parents[0]} & {heroine.parents[1]}
          </h3>
          <p>{heroine.address[0]},</p>
          <p>
            {heroine.address[1]},Pin:{heroine.address[2]}
          </p>
          <p>Mob: {heroine.phone}</p>
        </div>
        <div className="family">
          <h3>
            {hero.parents[0]} & {hero.parents[1]}
          </h3>
          <p>{hero.address[0]},</p>
          <p>
            {hero.address[1]},Pin:{hero.address[2]}
          </p>
          <p>Mob: {hero.phone}</p>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
