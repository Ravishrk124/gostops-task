// src/components/Pricing.js

import React from "react";
import "./Pricing.css";

const Pricing = ({ setSelectedRoom, setIncludeBreakfast, includeBreakfast, openGalleryToTab }) => {
  const base = process.env.PUBLIC_URL + "/images";

  const rooms = [
    {
      id: 1,
      name: "Bed in 4 Bed Mixed AC Dormitory Room",
      occupancy: "x 1 Adult",
      oldPrice: "₹959",
      price: "₹517.86",
      image: `${base}/Dormitory_1.jpg`,
      imageCount: 2,
      galleryTab: "dormitory",
    },
    {
      id: 2,
      name: "Deluxe Private AC Room with Ensuite Bathroom",
      occupancy: "x 2 Adults",
      oldPrice: "₹2637",
      price: "₹1423.98",
      image: `${base}/Private_1.jpg`,
      imageCount: 2,
      galleryTab: "private",
    },
  ];

  return (
    <div className="pricing-section">
      <h2 className="section-title">Room types & Pricing</h2>
      {rooms.map((room) => (
        <div key={room.id} className="room-card">
          {/* Room Image */}
          <div
            className="room-image-container"
            onClick={() => openGalleryToTab(room.galleryTab)}
          >
            <img src={room.image} alt={room.name} className="room-image" />
            <span className="image-counter">1/{room.imageCount}</span>
          </div>

          {/* Room Info */}
          <div className="room-content-wrapper">
            <div className="room-details">
              <h3 className="room-name">{room.name}</h3>
              <p className="room-occupancy">👤 {room.occupancy}</p>
              <div className="room-features">
                <span>Laundry (Subject to Availability)</span>
                <span>Shared or Ensuite Bathroom</span>
                <span>Air Conditioned</span>
              </div>

              {/* ✅ Fixed anchor issue */}
              <button type="button" className="availability-link">
                Availability calendar
              </button>

              {/* Breakfast Option */}
              <div className="breakfast-option">
                <input
                  type="checkbox"
                  id={`breakfast-${room.id}`}
                  checked={includeBreakfast}
                  onChange={(e) => setIncludeBreakfast(e.target.checked)}
                />
                <label htmlFor={`breakfast-${room.id}`}>
                  Include Breakfast (+ ₹150)
                </label>
              </div>
            </div>

            {/* Pricing */}
            <div className="room-pricing">
              <div className="price-wrapper">
                <span className="old-price">{room.oldPrice}</span>
                <span className="current-price">{room.price}</span>
                <span className="price-note">/night</span>
              </div>
              <button
                onClick={() => setSelectedRoom(room)}
                className="add-room-btn"
              >
                Add Room
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Pricing;