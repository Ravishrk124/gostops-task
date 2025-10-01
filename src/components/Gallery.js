// src/components/Gallery.js

import React, { useState, useEffect } from "react";
import "./Gallery.css";

// This is the Modal part of the component
const Modal = ({ setShowModal, startTab }) => {
  const [activeTab, setActiveTab] = useState(startTab);
  const [lightboxImg, setLightboxImg] = useState(null);

  const images = {
    all: ["/images/Exterior.webp", "/images/Reception.webp", "/images/CommonArea_1.webp", "/images/CommonArea_2.webp", "/images/CommonArea_3.webp", "/images/Dormitory_1.jpg", "/images/Dormitory_2.jpg", "/images/Private_1.jpg", "/images/Private_2.jpg"],
    dormitory: ["/images/Dormitory_1.jpg", "/images/Dormitory_2.jpg"],
    private: ["/images/Private_1.jpg", "/images/Private_2.jpg"],
  };

  return (
    <>
      <div className="modal">
        <span className="close" onClick={() => setShowModal(false)}>&times;</span>
        <div className="modal-content-wrapper">
          <div className="gallery-tabs">
            <button className={activeTab === 'all' ? 'active' : ''} onClick={() => setActiveTab('all')}>All Images</button>
            <button className={activeTab === 'dormitory' ? 'active' : ''} onClick={() => setActiveTab('dormitory')}>Dormitory</button>
            <button className={activeTab === 'private' ? 'active' : ''} onClick={() => setActiveTab('private')}>Private Rooms</button>
          </div>
          <div className="modal-content">
            {images[activeTab].map((img, index) => (
              <img key={index} src={img} alt={`Gallery ${index}`} onClick={() => setLightboxImg(img)} />
            ))}
          </div>
        </div>
      </div>
      {lightboxImg && (
        <div className="lightbox" onClick={() => setLightboxImg(null)}>
          <img src={lightboxImg} alt="Full view" />
        </div>
      )}
    </>
  );
};

// This is the main display part of the component
const Gallery = ({ setShowModal, setStartTab }) => {
  const handleOpenGallery = () => {
    setStartTab('all');
    setShowModal(true);
  };

  return (
    <div className="gallery-wrapper"> 
      <div className="gallery-container">
        <div className="gallery-main"><img src="/images/Exterior.webp" alt="Main Hostel" /></div>
        <div className="gallery-side">
          <img src="/images/Reception.webp" alt="Reception" />
          <img src="/images/CommonArea_1.webp" alt="Common Area" />
          <img src="/images/CommonArea_2.webp" alt="Dining Area" />
          <img src="/images/CommonArea_3.webp" alt="Lounge" />
        </div>
      </div>
      <button className="gallery-btn" onClick={handleOpenGallery}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M3 3h8v8H3V3zm0 10h8v8H3v-8zM13 3h8v8h-8V3zm0 10h8v8h-8v-8z"/></svg>
        Gallery
      </button>
    </div>
  );
};

// We attach the Modal as a property of Gallery
Gallery.Modal = Modal;

export default Gallery;