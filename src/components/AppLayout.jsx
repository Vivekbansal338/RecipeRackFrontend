import React from "react";
import { Outlet } from "react-router-dom";
import "./AppLayout.css";
import Header from "./Navigation/Header";
import Sidebar from "./Navigation/Sidebar";
import FilterSidebar from "./Navigation/FilterSidebar";
import Footer from "./Navigation/Footer";

export const AppLayout = () => {
  const [showSidebar, setShowSidebar] = React.useState(false);

  function handleShowSidebar() {
    console.log("handleShowSidebar");
    setShowSidebar(!showSidebar);
  }

  return (
    <div div className="applayout">
      <Header showSidebar={showSidebar} handleShowSidebar={handleShowSidebar} />
      <main className="main">
        <Sidebar
          showSidebar={showSidebar}
          handleShowSidebar={handleShowSidebar}
        />
        <div className="outlet">
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  );
};
