import React, { createContext, useContext, useState } from 'react';
const SidebarContext = createContext();
export const useSidebar = () => useContext(SidebarContext);
export const SidebarProvider = ({ children }) => {
  const [showSidebar, setShowSidebar] = useState(true);
  return (
    <SidebarContext.Provider value={{ showSidebar, setShowSidebar }}>
      {children}
    </SidebarContext.Provider>
  );
};