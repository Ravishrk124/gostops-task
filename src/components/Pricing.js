// src/components/Gallery.js

import React, { useState } from "react";
import "./Gallery.css";

// Use PUBLIC_URL for robust pathing
const base = process.env.PUBLIC_URL;

// Data for the image-based tabs
const TABS = [
  { id: 'all', label: 'All Images', image: `${base}/images/Exterior.webp` },
  { id: 'dormitory', label: 'Dormitory', image: `${base}/images/Dormitory_1.jpg` },
  { id: 'private', label: 'Private Rooms', image: `${base}/images/Private_1.jpg` },
];

const Modal = ({ setShowModal, startTab }) => {
  const [activeTab, setActiveTab] = useState(startTab);
  const [lightboxImg, setLightboxImg] = useState(null);

  const images = {
    all: [
      `${base}/images/Exterior.webp`, `${base}/images/Reception.webp`, `${base}/images/CommonArea_1.webp`,
      `${base}/images/CommonArea_2.webp`, `${base}/images/CommonArea_3.webp`, `${base}/images/Dormitory_1.jpg`,
      `${base}/images/Dormitory_2.jpg`, `${base}/images/Private_1.jpg`, `${base}/images/Private_2.jpg`,
    ],
    dormitory: [`${base}/images/Dormitory_1.jpg`, `${base}/images/Dormitory_2.jpg`],
    private: [`${base}/images/Private_1.jpg`, `${base}/images/Private_2.jpg`],
  };

  return (
    <>
      <div className="modal">
        <span className="close" onClick={() => setShowModal(false)}>&times;</span>
        <div className="modal-content-wrapper">
          <div className="gallery-tabs">
            {TABS.map(tab => (
              <button key={tab.id} className={`tab-btn ${activeTab === tab.id ? 'active' : ''}`} onClick={() => setActiveTab(tab.id)}>
                <img src={tab.image} alt={tab.label} className="tab-image" loading="lazy" />
                <span className="tab-label">{tab.label}</span>
              </button>
            ))}
          </div>
          <div className="modal-content">
            {images[activeTab].map((img, index) => (
              <img key={index} src={img} alt={`Gallery ${index}`} onClick={() => setLightboxImg(img)} loading="lazy" />
            ))}
          </div>
        </div>
      </div>
      {lightboxImg && (
        <div className="lightbox" onClick={() => setLightboxImg(null)}>
          <img src={lightboxImg} alt="Full view" loading="lazy" />
        </div>
      )}
    </>
  );
};

const Gallery = ({ setShowModal, setStartTab }) => {
  const handleOpenGallery = () => {
    setStartTab('all');
    setShowModal(true);
  };

  return (
    <div className="gallery-wrapper"> 
      <div className="gallery-container">
        <div className="gallery-main"><img src={`${base}/images/Exterior.webp`} alt="Main Hostel" loading="lazy" /></div>
        <div className="gallery-side">
          <img src={`${base}/images/Reception.webp`} alt="Reception" loading="lazy" />
          <img src={`${base}/images/CommonArea_1.webp`} alt="Common Area" loading="lazy" />
          <img src={`${base}/images/CommonArea_2.webp`} alt="Dining Area" loading="lazy" />
          <img src={`${base}/images/CommonArea_3.webp`} alt="Lounge" loading="lazy" />
        </div>
      </div>
      <button className="gallery-btn" onClick={handleOpenGallery}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M3 3h8v8H3V3zm0 10h8v8H3v-8zM13 3h8v8h-8V3zm0 10h8v8h-8v-8z"/></svg>
        Gallery
      </button>
    </div>
  );
};

Gallery.Modal = Modal;
export default Gallery;