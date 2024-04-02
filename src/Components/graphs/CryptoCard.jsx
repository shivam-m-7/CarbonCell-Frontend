import React, { useState } from "react";
import './CryptoCard.css'

const CryptoCard = ({ currency, icon }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className="crypto-card"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <h3 style={{ display: "flex", justifyContent: "center" }}>
        {icon} {currency.code}
      </h3>
      <p>{currency.description}</p>
      <p>Rate Float - {currency.rate}</p>
    </div>
  );
};

export default CryptoCard;
