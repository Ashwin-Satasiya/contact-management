import React from "react";

import Header from "./Header";
import Footer from "./Footer";

import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Header />
      <div className="main-content">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
