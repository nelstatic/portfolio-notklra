import React, { useState, useEffect } from "react";
import { IoMdArrowDropleft } from "react-icons/io";
import { IoMdArrowDropright } from "react-icons/io";

const CardGallery = ({ media, row }) => {
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

  const nextImage = () => {
    setCurrentIndex((currentIndex + 1) % media.length);
  };

  const prevImage = () => {
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
    <div className="card-gallery">
      <div className={`${row ? "row" : ""}`}>
        {media.map((item, index) => (
          <img
            key={index}
            src={item.path}
            alt={item.filename}
            onClick={() => openPopup(index)}
            className="card-gallery-image"
          />
        ))}
      </div>

      {isOpen && (
        <div
          className={`popup-overlay ${isOpen ? "open" : ""}`}
          onClick={closePopup}
        >
          <div
            className={`popup-content ${isContentVisible ? "open" : ""}`}
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={media[currentIndex].path}
              alt={media[currentIndex].filename}
            />
            {media.length > 1 && (
              <>
                <span className="prev-button" onClick={prevImage}>
                  <IoMdArrowDropleft />
                </span>
                <span className="next-button" onClick={nextImage}>
                  <IoMdArrowDropright />
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
