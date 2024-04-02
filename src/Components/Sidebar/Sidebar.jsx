import React, { useState, useEffect } from "react";
import "./Sidebar.css";
import { CiMenuBurger } from "react-icons/ci";
import { AiFillHome } from "react-icons/ai";
import { CgOrganisation } from "react-icons/cg";
import { RxCube } from "react-icons/rx";
import { LuArrowDownUp } from "react-icons/lu";
import { FaRegHourglass } from "react-icons/fa6";
import { LuWallet2 } from "react-icons/lu";
import { IoIosNotificationsOutline } from "react-icons/io";
import { FaRegCircleQuestion } from "react-icons/fa6";
import { CiSettings } from "react-icons/ci";
import { HiDotsVertical } from "react-icons/hi";

const Sidebar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [selectedIcon, setSelectedIcon] = useState("Home");
  const [showBurger, setShowBurger] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setShowBurger(true);
        setIsNavOpen(false);
      } else {
        setShowBurger(false);
        setIsNavOpen(true);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
    setShowBurger(false);
    let burgerPart = document.getElementById("burgerDiv");
    let mainPart = document.getElementById("mainPart");
    let leftSection = document.getElementById("burgerDiv");
    burgerPart.style.display = "block";
    mainPart.style.display = "none";
    burgerPart.style.backgroundColor = "#1a1f1d";
    leftSection.style.width = "100%";
    setIsNavOpen(true);
  };

  const closeIcon = () => {
    setShowBurger(true);
    let burgerPart = document.getElementById("burgerDiv");
    let mainPart = document.getElementById("mainPart");
    let leftSection = document.getElementById("burgerDiv");
    burgerPart.style.display = "block";
    mainPart.style.display = "block";
    burgerPart.style.backgroundColor = "black";
    leftSection.style.width = "25%";
    setIsNavOpen(false);
  };

  const handleIconClick = (iconName) => {
    setSelectedIcon(iconName);
  };

  return (
    <div
      className="Sidebar"
      style={{ display: "flex", flexDirection: "column" }}
    >
      <div className="first">
        <img
          src="logo2.png"
          style={{
            width: "30%",
            display: window.innerWidth < 760 ? "none" : "",
          }}
        />
        {showBurger && (
          <CiMenuBurger
            style={{
              width: window.innerWidth > 760 ? "" : "40px",
              position: window.innerWidth < 760 ? "absolute" : "relative",
            }}
            className="hamburger-menu"
            onClick={toggleNav}
          />
        )}
        {!showBurger && window.innerWidth < 760 && (
          <div>
            <img
              src="cross.png"
              style={{ height: "25px" }}
              onClick={closeIcon}
              alt=""
            />
          </div>
        )}
      </div>

      {(isNavOpen || window.innerWidth > 760) && (
        <div className="third">
          <table className="table">
            <tbody>
              <tr className="third_1">
                <td
                  className={`${selectedIcon === "Home" ? "active-icon" : ""} ${
                    selectedIcon === "Home" ? "active-text" : ""
                  }`}
                  onClick={() => handleIconClick("Home")}
                >
                  <AiFillHome />
                </td>
                <td className={selectedIcon === "Home" ? "active-text" : ""}>
                  Home
                </td>
              </tr>
              <tr className="third_1">
                <td
                  className={`${
                    selectedIcon === "Organisation" ? "active-icon" : ""
                  } ${selectedIcon === "Organisation" ? "active-text" : ""}`}
                  onClick={() => handleIconClick("Organisation")}
                >
                  <CgOrganisation />
                </td>
                <td
                  className={
                    selectedIcon === "Organisation" ? "active-text" : ""
                  }
                >
                  Organisation
                </td>
              </tr>
              <tr className="third_1">
                <td
                  className={`${
                    selectedIcon === "Assets" ? "active-icon" : ""
                  } ${selectedIcon === "Assets" ? "active-text" : ""}`}
                  onClick={() => handleIconClick("Assets")}
                >
                  <RxCube />
                </td>
                <td className={selectedIcon === "Assets" ? "active-text" : ""}>
                  Assets
                </td>
              </tr>
              <tr className="third_1">
                <td
                  className={`${
                    selectedIcon === "Trade" ? "active-icon" : ""
                  } ${selectedIcon === "Trade" ? "active-text" : ""}`}
                  onClick={() => handleIconClick("Trade")}
                >
                  <LuArrowDownUp />
                </td>
                <td className={selectedIcon === "Trade" ? "active-text" : ""}>
                  Trade
                </td>
              </tr>
              <tr className="third_1">
                <td
                  className={`${
                    selectedIcon === "History" ? "active-icon" : ""
                  } ${selectedIcon === "History" ? "active-text" : ""}`}
                  onClick={() => handleIconClick("History")}
                >
                  <FaRegHourglass />
                </td>
                <td className={selectedIcon === "History" ? "active-text" : ""}>
                  History
                </td>
              </tr>
              <tr className="third_1">
                <td
                  className={`${selectedIcon === "Cart" ? "active-icon" : ""} ${
                    selectedIcon === "Cart" ? "active-text" : ""
                  }`}
                  onClick={() => handleIconClick("Cart")}
                >
                  <LuWallet2 />
                </td>
                <td className={selectedIcon === "Cart" ? "active-text" : ""}>
                  Cart
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      )}

      <div
        style={{
          display: isNavOpen || window.innerWidth > 760 ? "block" : "none",
        }}
        className="fourth"
      >
        <table className="table">
          <tbody>
            <tr className="third_1">
              <td
                className={`${
                  selectedIcon === "Notifications" ? "active-icon" : ""
                } ${selectedIcon === "Notifications" ? "active-text" : ""}`}
                onClick={() => handleIconClick("Notifications")}
              >
                <IoIosNotificationsOutline />
              </td>
              <td
                className={
                  selectedIcon === "Notifications" ? "active-text" : ""
                }
              >
                Notifications
              </td>
            </tr>
            <tr className="third_1">
              <td
                className={`${
                  selectedIcon === "Support" ? "active-icon" : ""
                } ${selectedIcon === "Support" ? "active-text" : ""}`}
                onClick={() => handleIconClick("Support")}
              >
                <FaRegCircleQuestion />
              </td>
              <td className={selectedIcon === "Support" ? "active-text" : ""}>
                Support
              </td>
            </tr>
            <tr className="third_1">
              <td
                className={`${
                  selectedIcon === "Settings" ? "active-icon" : ""
                } ${selectedIcon === "Settings" ? "active-text" : ""}`}
                onClick={() => handleIconClick("Settings")}
              >
                <CiSettings />
              </td>
              <td className={selectedIcon === "Settings" ? "active-text" : ""}>
                Settings
              </td>
            </tr>
          </tbody>
        </table>

        <div
          className="fourth_below"
          style={{
            backgroundColor: "#93767630",
            border: "none",
            borderRadius: "5%",
            display: "flex",
            height: "52px",
            width: "78%",
            marginLeft: "5%",
            justifyContent: "space-evenly",
            marginTop: "19px",
            padding: "37px 14px",
          }}
        >
          <div className="fourth_below_img">
            <img
              src="person.png"
              style={{
                backgroundColor: "transparent",
                height: "80%",
                width: "90%",
              }}
            />
          </div>

          <div>
            <span>Brooklyn Simmons</span>
            <br />
            <span style={{ fontSize: "12px" }}>brooklyn@simmons.com</span>
          </div>
          <div>
            <HiDotsVertical />
          </div>
        </div>

        <div></div>
      </div>
    </div>
  );
};

export default Sidebar;
