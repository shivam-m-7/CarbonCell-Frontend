import React from 'react'
import "./Dashboard.css"
import Header from './Header'
import Graphdata from './Graphdata'
import logo from "./../../Assets/logo.png"
import CryptoPrices from './CryptoPrice'

const Dashboard = () => {
  return (
    <div className='dashboard-container'>
      <Header/>
      <div className="dashboard-graph-chat">
        <Graphdata/>
        <div className="post-data">
          <h5>In recent posts</h5>
          <hr />
          <div className="post-message">
            <div className="post-logo">
                <img src={logo} alt="" />
                <div className="post-logo-text">
                  <p>Carbon Cell</p>
                  <p>Carbon Cell: Pioneering Financial Solution for a Greener Future!</p>
                </div><br/>
                <p>Read more:https://www.bing.com/search?q=light%20grey%20color%20rgb%20value</p><br/>
                <p>Each system has a different value, or percentage of colors, that make up every color.Each system has a different value, or percentage of colors, that make up every color. </p>
            </div>
          </div>
          <hr />
          <div className='button'>Follow us on X</div>
        </div>
      </div>
      <CryptoPrices/>
    </div>
  )
}

export default Dashboard
