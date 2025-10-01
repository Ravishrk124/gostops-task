// src/components/Amenities.js

import React from "react";
import "./Amenities.css";

const Amenities = () => {
  const amenitiesList = [
    "24/7 Front Desk", "AC", "Common Area",
    "Ensuite Washroom", "Fan", "Geyser",
    "Home Theatre", "Indoor Games", "Laundry",
  ];

  return (
    <div className="amenities-section">
      <h2 className="section-title">Amenities you'll get</h2>
      <div className="amenities-grid">
        {amenitiesList.map((item, index) => (
          <div key={index} className="amenity-item">
            ✔️ {item}
          </div>
        ))}
      </div>
      <button className="view-all-btn">View all amenities</button>
    </div>
  );
};

export default Amenities;