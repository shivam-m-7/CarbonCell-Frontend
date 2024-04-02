import React, { createContext, useContext, useState } from 'react';
import "./Dashboard.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useSidebar } from '../../SidebarContext';
const Header = () => {
  const { showSidebar, setShowSidebar } = useSidebar();
  function fnClickMenu(){
    console.log("hello")
    setShowSidebar(!showSidebar);
  }
  return (
    <div className='header-container'>
      <FontAwesomeIcon icon={faBars} className='menu-icon' onClick={fnClickMenu}/>
      <div className="header-heading">
        <h1>Hello, Brooklyn Simmons 👋 </h1>
        <h3>Welcome to <span>Spot trading!</span></h3>
      </div>
      <button>Start Trading</button>
    </div>
  );
}

export default Header;
