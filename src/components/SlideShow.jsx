import React, { useState } from "react";
import "../styles/SlideShow.css";

export default function SlideShow(props) {
  const { images } = props;
  const [currentImage, setCurrentImage] = useState(images[0]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    const prevIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(prevIndex);
    setCurrentImage(images[prevIndex]);
    scrollToImage(prevIndex);
  };

  const handleNext = () => {
    const nextIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(nextIndex);
    setCurrentImage(images[nextIndex]);
    scrollToImage(nextIndex);
  };

  const scrollToImage = (index) => {
    const container = document.querySelector(".slideshow-image-container");
    const selectedImage = container.children[index];
    container.scrollLeft = selectedImage.offsetLeft - container.offsetLeft;
  };

  return (
    <div className="slideshow">
      <div className="slideshow-current-image">
        <img src={currentImage} alt="current display" />
      </div>
      <div className="side">
        <button className="nav-button left" onClick={handlePrev}>
          &#10094;
        </button>
        <div className="slideshow-image-container">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Thumbnail ${index}`}
              className={image === currentImage ? "selected" : ""}
              onClick={() => {
                setCurrentImage(image);
              }}
            />
          ))}
        </div>
        <button className="nav-button right" onClick={handleNext}>
          &#10095;
        </button>
      </div>
    </div>
  );
}
