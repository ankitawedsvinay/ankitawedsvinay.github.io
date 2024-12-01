import React from "react";
import "../styles/HeroSection.css";
import { useWeddingData } from "../context/WeddingDataContext";
import DateFormatter from "./DateFormatter";
const HeroSection = () => {
  const { hero, heroine, event } = useWeddingData();
  return (
    <div className="hero">
      <h2>
        We are
        {new Date() < new Date(`${event.date} ${event.time[1]}`)
          ? " getting "
          : " "}
        married
      </h2>
      <h1>{heroine.name.split(" ")[0]} </h1>
      <h2>&</h2>
      <h1> {hero.name.split(" ")[0]}</h1>
      <p>
        <DateFormatter date={event.date} />
      </p>
      {new Date(event.date) > new Date() && (
        <button className="view-invitation-button">
          <a href="/invitation" target="_blank">
            View Invitation
          </a>
        </button>
      )}
    </div>
  );
};

export default HeroSection;
