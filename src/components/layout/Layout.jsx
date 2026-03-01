import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../navBar/navBar";
import Footer from "../footer/footer";
import "./layout.css";

const Layout = () => {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <NavBar />
      <main id="main-content" tabIndex={-1}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
