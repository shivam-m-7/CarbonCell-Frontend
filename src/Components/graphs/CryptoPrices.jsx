import React, { useState, useEffect } from "react";
import axios from "axios";
import CryptoCard from "./CryptoCard";
import { IoLogoUsd } from "react-icons/io5";
import { PiCurrencyGbpBold } from "react-icons/pi";
import { FaEuroSign } from "react-icons/fa6";
import "./CryptoCard.css"


const CryptoPrices = () => {
  const [cryptoData, setCryptoData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.coindesk.com/v1/bpi/currentprice.json"
        );
        setCryptoData(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching crypto data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="crypto-container" style={{ color: "white" }}>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <h2 style={{display:'flex',marginLeft:'20px'}}>Cryptocurrency Prices</h2>
          <div className="crypto-cards">
            {cryptoData && (
              <>
                <CryptoCard
                  currency={cryptoData.bpi.USD}
                  icon={<IoLogoUsd style={{ color: "gold" }} />}
                />
                <CryptoCard
                  currency={cryptoData.bpi.GBP}
                  icon={<PiCurrencyGbpBold style={{ color: "crimson" }} />}
                />
                <CryptoCard
                  currency={cryptoData.bpi.EUR}
                  icon={<FaEuroSign style={{ color: "red" }} />}
                />
              </>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default CryptoPrices;
