import React, { useState } from "react";
import "../styles/Gallery.css";
import SlideShow from "./SlideShow.jsx";

const images = [
  "https://placedog.net/531/720?random",
  "https://placedog.net/482/380?random",
  "https://placedog.net/663/514?random",
  "https://placedog.net/746/388?random",
  "https://placedog.net/659/564?random",
  "https://placedog.net/689/607?random",
  "https://placedog.net/436/301?random",
  "https://placedog.net/591/497?random",
  "https://placedog.net/765/439?random",
  "https://placedog.net/472/283?random",
  "https://placedog.net/407/623?random",
  "https://placedog.net/696/329?random",
  "https://placedog.net/702/525?random",
  "https://placedog.net/625/396?random",
  "https://placedog.net/658/552?random",
  "https://placedog.net/511/621?random",
];
const Gallery = () => {
  return (
    <div className="gallery">
      <h2>Gallery</h2>
      <SlideShow images={images} />
    </div>
  );
};
export default Gallery;
