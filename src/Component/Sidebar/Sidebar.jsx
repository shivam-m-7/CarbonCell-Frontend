import {useState} from "react";
import logo from "./../../Assets/logo.png";
import "./Sidebar.css"
import SearchIcon from "@mui/icons-material/Search";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faSitemap,
  faCoins,
  faHandshake,
  faHistory,
  faWallet,
  faTimes
} from "@fortawesome/free-solid-svg-icons";
import { faBell, faLifeRing, faCog } from '@fortawesome/free-solid-svg-icons';
import { useSidebar } from '../../SidebarContext';

const Sidebar = () => {
  const { showSidebar, setShowSidebar } = useSidebar();
 function changemenu(){
  setShowSidebar(false);
 }
  return (    
    <div className="sidebar-container" style={{ display: showSidebar ? 'block' : 'none' }}>
      <div className="logo">
        <img src={logo} alt="logo" />
        <FontAwesomeIcon icon={faTimes} className="cross-icon" onClick={changemenu}/>
      </div>
      <div className="search-bar">
        <SearchIcon className="search-icon"/>
        <input type="text" placeholder="Search"/>
      </div>
      <div className="icons">
        <a href="#">
          <FontAwesomeIcon icon={faHome} /> Home
        </a>
        <br />
        <a href="#">
          <FontAwesomeIcon icon={faSitemap} /> Organization
        </a>
        <br />
        <a href="#">
          <FontAwesomeIcon icon={faCoins} /> Assets
        </a>
        <br />
        <a href="#">
          <FontAwesomeIcon icon={faHandshake} /> Trade
        </a>
        <br />
        <a href="#">
          <FontAwesomeIcon icon={faHistory} /> History
        </a>
        <br />
        <a href="#">
          <FontAwesomeIcon icon={faWallet} /> Wallet
        </a>
        <br />
      </div>
      <div className="last-icons">
            <a href="#"><FontAwesomeIcon icon={faBell} />Notifications<span className="notification-no">12</span></a><br/>
            <a href="#"><FontAwesomeIcon icon={faLifeRing} /> Support</a><br/>
            <a href="#"><FontAwesomeIcon icon={faCog} /> Settings</a><br/>
      </div>
      <div className="profile-name">
            <img className="profile-picture" src="https://i.postimg.cc/7Pc5MGgb/20191115042403-IMG-8218-1-removebg-preview-1.png" alt="Profile" />
            <div className="profile-text">
              <span className="username">Brooklyn Simmons</span>
              <h6 className="profile-email">brooklyn@simmons.com</h6>
            </div>            
        </div>
    </div>
  );
};
export default Sidebar;
