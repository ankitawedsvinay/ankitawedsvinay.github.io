import React from "react";
import "../styles/WeddingDetails.css";
import { useWeddingData } from "../context/WeddingDataContext";
import DateFormatter from "./DateFormatter";

const WeddingDetails = () => {
  const { event } = useWeddingData();

  return (
    <div className="text">
      <h3>Wedding Details</h3>
      <p>
        <strong>Date:</strong> <DateFormatter date={event.date}></DateFormatter>
      </p>
      <p>
        <strong>Muhurtham:</strong> {event.time[0]} to {event.time[1]}
        <br />
        {event.muhurtham}
      </p>
      <p>
        <strong>Venue:</strong> {event.location}
      </p>
      <button>
        <a href="/viewmap" target="_blank">
          View Location
        </a>
      </button>
    </div>
  );
};

export default WeddingDetails;
