// src/App.js

import React, { useState, useRef } from "react";
import "./App.css";
import Header from "./components/Header";
import Gallery from "./components/Gallery";
import PropertyInfo from "./components/PropertyInfo";
import Amenities from "./components/Amenities";
import Pricing from "./components/Pricing";
import Summary from "./components/Summary";

function App() {
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [includeBreakfast, setIncludeBreakfast] = useState(false);
  const pricingSectionRef = useRef(null);

  // State for Gallery Modal is now managed here
  const [showGalleryModal, setShowGalleryModal] = useState(false);
  const [galleryStartTab, setGalleryStartTab] = useState('all');

  const handleSelectRoomClick = () => {
    pricingSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Function to open the gallery to a specific tab
  const openGalleryToTab = (tab) => {
    setGalleryStartTab(tab);
    setShowGalleryModal(true);
  };

  return (
    <div className="App">
      <Header />
      <main className="main-content">
        <div className="popular-pill">Popular for long-stays</div>
        <section className="card gallery-card">
          <Gallery 
            setShowModal={setShowGalleryModal} 
            setStartTab={setGalleryStartTab}
          />
        </section>

        <section className="card info-card">
          <PropertyInfo onSelectRoomClick={handleSelectRoomClick} />
        </section>

        <div className="content-container">
          <div className="details-column">
            <div ref={pricingSectionRef}>
              <Pricing 
                setSelectedRoom={setSelectedRoom}
                setIncludeBreakfast={setIncludeBreakfast}
                includeBreakfast={includeBreakfast}
                openGalleryToTab={openGalleryToTab}
              />
            </div>
            <Amenities />
          </div>
          <div className="summary-column">
            <div className="booking-details">
              <span>📅 29 Oct - 30 Oct (1 night)</span>
              <span>👤 1 guest</span>
            </div>
            <Summary 
              selectedRoom={selectedRoom} 
              setSelectedRoom={setSelectedRoom}
              includeBreakfast={includeBreakfast}
            />
          </div>
        </div>
      </main>

      {/* Render the modal at the top level */}
      {showGalleryModal && 
        <Gallery.Modal 
          setShowModal={setShowGalleryModal} 
          startTab={galleryStartTab} 
        />
      }
    </div>
  );
}

export default App;