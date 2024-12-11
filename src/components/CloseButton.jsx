import React from "react";
import "../styles/CloseButton.css";
export default function CloseButton() {
  const closeWindow = () => {
    window.close();
  };
  return (
    <div className="close-button">
      <button onClick={closeWindow}>
        <p>close</p>
        <img src="/assets/close.svg" alt="close" style={{ height: "100%" }} />
      </button>
    </div>
  );
}
