import React, { useState, useEffect } from "react";
import { SlArrowLeft } from "react-icons/sl";
import { SlArrowRight } from "react-icons/sl";
import useIntersectionAnimation from "@hooks/Animation";
import IframeRender from "./IframeRender";

const CardGallery = ({ media, row, full }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isContentVisible, setIsContentVisible] = useState(false);
  const [resetKey, setResetKey] = useState(0);

  useIntersectionAnimation(
    ".card-gallery-image", // Sélecteur des images
    "animate", // Classe CSS à ajouter pour animer
    { threshold: 0.1 } // Déclenche à 10% de visibilité
  );

  const openPopup = (index) => {
    setCurrentIndex(index);
    setIsOpen(true);
    setTimeout(() => setIsContentVisible(true), 50);
    setResetKey((prev) => prev + 1); // Met à jour la clé pour forcer le rendu
  };

  const closePopup = () => {
    setIsContentVisible(false);
    setTimeout(() => setIsOpen(false), 300);
  };

  const nextMedia = () => {
    setCurrentIndex((currentIndex + 1) % media.length);
    setResetKey((prev) => prev + 1); // Met à jour la clé
  };

  const prevMedia = () => {
    setCurrentIndex((currentIndex - 1 + media.length) % media.length);
    setResetKey((prev) => prev - 1); // Met à jour la clé
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
              <IframeRender
                url={item.url}
                title={`YouTube video ${index}`}
                resetKey={resetKey}
              />
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
              <IframeRender
                url={media[currentIndex].url}
                title={`YouTube video ${currentIndex}`}
                resetKey={resetKey}
              />
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
