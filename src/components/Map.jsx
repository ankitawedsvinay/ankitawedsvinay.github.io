import React from "react";
import "../styles/Map.css";

export default function Map() {
  return (
    <div className="mapswrapper">
      <iframe
        width="100%"
        style={{ height: "100vh" }}
        loading="lazy"
        allowFullScreen
        src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=place_id:ChIJoTw4-fB6CDsRaS8Isi5R2XA&zoom=15"
      ></iframe>
      <div className="button-wrapper">
        <button
          onClick={() =>
            window.open("https://maps.app.goo.gl/uTuRXAFcGy9yiTSz6", "_blank")
          }
        >
          <img
            src="/assets/Google_Maps_icon_(2020).svg"
            style={{
              height: "1rem",
              position: "relative",
            }}
            alt="Map Icon"
          />
          <p>Open in Maps</p>
        </button>
      </div>
    </div>
  );
}
