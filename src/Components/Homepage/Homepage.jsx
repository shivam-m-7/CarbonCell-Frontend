import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import PopulationGraph from "../graphs/PopulationGraph";
import "./Homepage.css";
import Button from "@mui/material/Button";
import CryptoPrices from "../graphs/CryptoPrices";

import { useState } from "react";
import Web3 from "web3";

const Homepage = () => {
  const [accountAddress, setAccountAddress] = useState("");
  const [accountBalance, setAccountBalance] = useState("");

  const connectMetaMask = async () => {
    if (window.ethereum) {
      await window.ethereum.request({ method: "eth_requestAccounts" });
      return window.ethereum.selectedAddress;
    } else {
      throw new Error("MetaMask not found or not connected.");
    }
  };

  const connectButtonOnClick = async () => {
    try {
      const address = await connectMetaMask();
      setAccountAddress(address);
      fetchAccountBalance(address); // Fetch balance after successful connection
    } catch (error) {
      console.error("Error:", error.message);
      alert(
        "Failed to connect wallet. Please try again or install the MetaMask."
      ); //
    }
  };

  const fetchAccountBalance = async (address) => {
    try {
      const web3 = new Web3(window.ethereum);
      const balance = await web3.eth.getBalance(address);
      const formattedBalance = web3.utils.fromWei(balance, "ether");
      setAccountBalance(formattedBalance);
    } catch (error) {
      console.error("Error fetching account balance:", error);
    }
  };

  return (
    <div className="Homepage">
      <div
        className="leftsection"
        id="burgerDiv"
        style={{
          backgroundColor: window.innerWidth > 760 ? "#1a1f1d" : "black",
        }}
      >
        <Sidebar />
      </div>
      <div
        className="rightsection"
        id="mainPart"
        style={{ backgroundColor: "black" }}
      >
        <div className="rightsectionlogo">
          <img
            src="logo2.png"
            style={{
              width: "30%",
              display: window.innerWidth < 760 ? "" : "none",
            }}
          />
        </div>

        <div
          className="righttop"
          style={{
            color: "white",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginLeft: "15px",
              marginTop: "30px",
            }}
          >
            <span
              style={{
                textAlign: "left",
                fontSize: window.innerWidth > 400 ? "xx-large" : "26px",
              }}
            >
              Hello,{" "}
              <span style={{ color: "rgb(166 205 52)" }}>
                Brooklyn Simmons 👋
              </span>
            </span>
            <span
              style={{
                textAlign: "left",
                fontSize: "x-large",
                marginTop: "5px",
              }}
            >
              Welcome to{" "}
              <span style={{ color: "#03c103" }}>Spot Trading !</span>
            </span>
          </div>

          <div style={{ marginRight: "20px", marginTop: "50px" }}>
            <Button
              style={{ height: "50px" }}
              variant="contained"
              color="success"
            >
              Start Trading
            </Button>
          </div>
        </div>
        <div className="rightmid">
          <div className="rightmidgraph">
            <PopulationGraph />
          </div>

          <div className="rightmidbutton">
            <Button
              variant="contained"
              onClick={connectButtonOnClick}
              style={{ height: "90px", width: "189px" }}
            >
              {!!accountAddress ? accountAddress : "Connect Wallet"}
            </Button>
            {accountBalance && (
              <div
                className="account-info"
                style={{
                  border: "1px solid #ccc",
                  padding: "10px",
                  marginTop: "10px",
                }}
              >
                <p>Account Address: {accountAddress}</p>
                <p>Account Balance: {accountBalance} ETH</p>
              </div>
            )}
          </div>
        </div>
        <div
          className="rightbot"
          style={{ display: "flex", alignItems: "center" }}
        >
          <div>
            {" "}
            <CryptoPrices />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
