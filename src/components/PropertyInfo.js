// src/components/PropertyInfo.js

import React from "react";
import "./PropertyInfo.css";

const PropertyInfo = ({ onSelectRoomClick }) => {
  return (
    <div className="property-info">
      <div className="info-left">
        <h1 className="property-title">Bengaluru, HSR Silk Board</h1>
        <p className="address">
          📍 754/L-185, HSR Layout, Sector 6, behind Silkboard bus stand,
          Outer Ring road, Bengaluru - 560102
        </p>
        <div className="pill-row">
          <span className="pill">Booked by 200+ this week</span>
          <span className="pill">Perfect for Stay Near HSR Startup Scene</span>
        </div>
        <p className="desc">
          Nestled in HSR layout near Silk Board Junction, goSTOPS Bengaluru HSR
          offers convenient access to Bengaluru’s tech parks, dining, shopping,
          and nightlife, making it a perfect spot for explorers looking to
          experience the city's dynamic culture and modern vibes.
        </p>
      </div>
      <div className="info-right">
        <div className="price-label">Starting from</div>
        <div className="price-value">₹517.86</div>
        {/* ✅ Urgency message added */}
        <div className="urgency-text">🔥 Selling fast!</div> 
        <button className="cta-button" onClick={onSelectRoomClick}>
          Select Room
        </button>
      </div>
    </div>
  );
};

export default PropertyInfo;