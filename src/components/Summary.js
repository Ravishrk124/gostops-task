// src/components/Summary.js

import React, { useState, useEffect } from "react";
import "./Summary.css";

const Summary = ({ selectedRoom, setSelectedRoom, includeBreakfast }) => {
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    setQuantity(1);
  }, [selectedRoom]);

  if (!selectedRoom) {
    return (
      <div className="summary-card placeholder">
        <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 3V7M16 3V7M3.5 12H20.5M3 8.5V17.125C3 19.5801 5.0199 21.5 7.375 21.5H16.625C18.9801 21.5 21 19.5801 21 17.125V8.5C21 6.0199 18.9801 4 16.625 4H7.375C5.0199 4 3 6.0199 3 8.5Z" stroke="#E0E0E0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M15.5 15.5H16.5M11.5 15.5H12.5M7.5 15.5H8.5" stroke="#FF3B6C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
        <p>Select a bed to get your stay summary here.</p>
      </div>
    );
  }

  const BREAKFAST_PRICE = 150;
  const pricePerNight = parseFloat(selectedRoom.price.replace('₹', ''));
  const basePrice = parseFloat(selectedRoom.oldPrice.replace('₹', '')) * quantity;
  const gostopsDiscount = (basePrice - (pricePerNight * quantity)) * 0.8;
  const couponDiscount = (basePrice - (pricePerNight * quantity)) * 0.2;
  const taxes = (pricePerNight * quantity) * 0.05;
  const breakfastCost = includeBreakfast ? (BREAKFAST_PRICE * quantity) : 0;
  const totalPrice = (pricePerNight * quantity) + taxes + breakfastCost;

  return (
    <div className="summary-card">
      <div className="summary-header">
        <h3 className="summary-title">Summary</h3>
        <button onClick={() => setSelectedRoom(null)} className="remove-btn" aria-label="Remove item">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M17 6h-4V5a3 3 0 00-3-3a3 3 0 00-3 3v1H3a1 1 0 000 2h1v11a3 3 0 003 3h8a3 3 0 003-3V8h1a1 1 0 100-2zm-2 12a1 1 0 01-1 1H8a1 1 0 01-1-1V8h8v10zm-3-8a1 1 0 00-1 1v6a1 1 0 102 0v-6a1 1 0 00-1-1zm-4 0a1 1 0 00-1 1v6a1 1 0 102 0v-6a1 1 0 00-1-1zM9 5a1 1 0 011-1h2a1 1 0 011 1v1H9V5z"/></svg>
        </button>
      </div>
      <div className="summary-room-details">
        <p className="room-name">{selectedRoom.name}</p>
        <div className="quantity-selector">
          <button onClick={() => setQuantity(q => Math.max(1, q - 1))}>-</button>
          <span>{quantity}</span>
          <button onClick={() => setQuantity(q => q + 1)}>+</button>
        </div>
      </div>

      <ul className="price-details">
        <li><span>Base price</span> <span>₹{basePrice.toFixed(2)}</span></li>
        <li className="discount"><span>Gostops Discount</span> <span>- ₹{gostopsDiscount.toFixed(2)}</span></li>
        <li className="discount"><span>Coupon Discount</span> <span>- ₹{couponDiscount.toFixed(2)}</span></li>
        {includeBreakfast && (
          <li><span>Breakfast</span> <span>+ ₹{breakfastCost.toFixed(2)}</span></li>
        )}
        <li><span>Taxes</span> <span>+ ₹{taxes.toFixed(2)}</span></li>
      </ul>

      <div className="total-price">
        <span>Total price</span>
        <span className="final-amount">₹{totalPrice.toFixed(2)}</span>
      </div>

      <button className="book-button">Proceed to Book</button>
    </div>
  );
};

export default Summary;