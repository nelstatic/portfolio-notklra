import React, { useState, useEffect } from "react";
import { SlArrowLeft } from "react-icons/sl";
import { SlArrowRight } from "react-icons/sl";

const CardGallery = ({ media, row, full }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isContentVisible, setIsContentVisible] = useState(false);

  const openPopup = (index) => {
    setCurrentIndex(index);
    setIsOpen(true);
    setTimeout(() => setIsContentVisible(true), 50);
  };

  const closePopup = () => {
    setIsContentVisible(false);
    setTimeout(() => setIsOpen(false), 300);
  };

  const nextMedia = () => {
    setCurrentIndex((currentIndex + 1) % media.length);
  };

  const prevMedia = () => {
    setCurrentIndex((currentIndex - 1 + media.length) % media.length);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <div className={`${full ? "item-image-full" : "item-image"}`}>
      {/* Media Grid */}
      <div className={`${row ? "row" : ""}`}>
        {media.map((item, index) => (
          <div
            key={index}
            className={`card-gallery-item ${
              item.type === "youtube" ? "item-youtube" : ""
            } ${item.type === "image" ? "item-image" : ""}`}
            onClick={() => openPopup(index)}
          >
            {item.type === "image" ? (
              <img
                src={item.path}
                alt={item.filename}
                className="card-gallery-image"
              />
            ) : item.type === "youtube" ? (
              <iframe
                width="120%"
                height="400"
                src={media[currentIndex].url}
                title={`YouTube video ${currentIndex}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            ) : null}
          </div>
        ))}
      </div>

      {/* Popup Modal */}
      {isOpen && (
        <div
          className={`popup-overlay ${isOpen ? "open" : ""}`}
          onClick={closePopup}
        >
          <div
            className={`popup-content ${isContentVisible ? "open" : ""}`}
            onClick={(e) => e.stopPropagation()}
          >
            {media[currentIndex].type === "image" ? (
              <img
                src={media[currentIndex].path}
                alt={media[currentIndex].filename}
                className="my-0 mx-auto"
              />
            ) : media[currentIndex].type === "youtube" ? (
              <iframe
                width="560"
                height="315"
                src={media[currentIndex].url}
                title={`YouTube video ${currentIndex}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="my-0 mx-auto"
              ></iframe>
            ) : null}
            {/* Navigation Buttons */}
            {media.length > 1 && (
              <>
                <span className="prev-button" onClick={prevMedia}>
                  <SlArrowLeft size="2rem" />
                </span>
                <span className="next-button" onClick={nextMedia}>
                  <SlArrowRight size="2rem" />
                </span>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default CardGallery;
