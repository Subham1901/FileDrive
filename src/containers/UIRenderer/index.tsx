import React, { useState } from "react";
import Content from "./Content";
import SideBar from "../../components/SideBar";
import { BrowserRouter } from "react-router-dom";
import LandingPage from "../../Internals/views/LandingPage";
// import Router from "../../Internals/routers/router";
const UIRenderer = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const isLoggedIn = false;
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  return (
    <BrowserRouter>
      {!isLoggedIn ? (
        <LandingPage />
      ) : (
        <div className="flex flex-row min-h-screen bg-gray-100 text-gray-800">
          <SideBar toggleSidebar={toggleSidebar} sidebarOpen={sidebarOpen} />
          <Content toggleSidebar={toggleSidebar} sidebarOpen={sidebarOpen} />
        </div>
      )}
    </BrowserRouter>
  );
};

export default UIRenderer;
