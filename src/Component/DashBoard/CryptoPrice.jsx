import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Dashboard.css';

const CryptoPrices = () => {
  const [prices, setPrices] = useState(null);

  useEffect(() => {
    const fetchPrices = async () => {
      try {
        const response = await axios.get('https://api.coindesk.com/v1/bpi/currentprice.json');
        setPrices(response.data.bpi);
      } catch (error) {
        console.error('Error fetching cryptocurrency prices:', error);
      }
    };
    fetchPrices();
  }, []);

  const renderPrices = () => {
    if (!prices) {
      return <div>Loading...</div>;
    }
    const symbols= ["$","£","€"]
    return (
      <div className="crypto-container">
        {Object.entries(prices).map(([currency, data],idx) => (
          <div className="crypto-card" key={currency}>
            <h2>{currency}</h2>
            <p class="first-child">{data.description}</p>
            <div className="rate-currency">
            <p>{data.rate}&nbsp;{symbols[idx]}</p>
            <button className='button-currency'>Trade</button>
            </div>
            
            
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className='crypto-main-container'>
      <h1>Cryptocurrency Prices</h1>
      {renderPrices()}
    </div>
  );
};

export default CryptoPrices;
