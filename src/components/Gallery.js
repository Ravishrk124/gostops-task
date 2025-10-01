// src/components/Gallery.js

import React, { useState } from "react";
import "./Gallery.css";

const Gallery = () => {
  const [showModal, setShowModal] = useState(false);
  const [activeTab, setActiveTab] = useState("all");
  const [lightboxImg, setLightboxImg] = useState(null);

  const base = process.env.PUBLIC_URL + "/images";

  const images = {
    all: [
      `${base}/Exterior.webp`,
      `${base}/Reception.webp`,
      `${base}/CommonArea_1.webp`,
      `${base}/CommonArea_2.webp`,
      `${base}/CommonArea_3.webp`,
      `${base}/Dormitory_1.jpg`,
      `${base}/Dormitory_2.jpg`,
      `${base}/Private_1.jpg`,
      `${base}/Private_2.jpg`,
    ],
    dormitory: [
      `${base}/Dormitory_1.jpg`,
      `${base}/Dormitory_2.jpg`
    ],
    private: [
      `${base}/Private_1.jpg`,
      `${base}/Private_2.jpg`
    ],
  };

  return (
    <div className="gallery-wrapper"> 
      {/* Images grid */}
      <div className="gallery-container">
        <div className="gallery-main">
          <img src={`${base}/Exterior.webp`} alt="Main Hostel" />
        </div>
        <div className="gallery-side">
          <img src={`${base}/Reception.webp`} alt="Reception" />
          <img src={`${base}/CommonArea_1.webp`} alt="Common Area" />
          <img src={`${base}/CommonArea_2.webp`} alt="Dining Area" />
          <img src={`${base}/CommonArea_3.webp`} alt="Lounge" />
        </div>
      </div>

      {/* Gallery button */}
      <button className="gallery-btn" onClick={() => setShowModal(true)}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.9 13.11l2.1 2.58 3.1-3.88 4 5.19H6l2.9-3.89z"/>
        </svg>
        Gallery
      </button>

      {/* Modal */}
      {showModal && (
        <div className="modal">
          <span className="close" onClick={() => setShowModal(false)}>&times;</span>
          <div className="gallery-tabs">
            <button className={activeTab === "all" ? "active" : ""} onClick={() => setActiveTab("all")}>All Images</button>
            <button className={activeTab === "dormitory" ? "active" : ""} onClick={() => setActiveTab("dormitory")}>Dormitory</button>
            <button className={activeTab === "private" ? "active" : ""} onClick={() => setActiveTab("private")}>Private Rooms</button>
          </div>
          <div className="modal-content">
            {images[activeTab].map((img, index) => (
              <img key={index} src={img} alt={`Gallery ${index}`} onClick={() => setLightboxImg(img)} />
            ))}
          </div>
        </div>
      )}

      {/* Lightbox */}
      {lightboxImg && (
        <div className="lightbox" onClick={() => setLightboxImg(null)}>
          <img src={lightboxImg} alt="Full view" />
        </div>
      )}
    </div>
  );
};

export default Gallery;