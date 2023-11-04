// CSS
import "./navBar.css";

// React
import React, { Component } from "react";

// React Bootstrap
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

// React Router
import { Outlet, NavLink, useLocation } from "react-router-dom";

// My Components
import Header from "../header/header";

const NavBar = () => {
  let location = useLocation();

  return (
    <>
      <Navbar bg="light" expand="lg" style={{ height: "8vh" }}>
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "activeNavLink" : "navBarLink"
                }
                to={""}
              >
                ABOUT ME
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "activeNavLink" : "navBarLink"
                }
                to={"services"}
              >
                SERVICES
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "activeNavLink" : "navBarLink"
                }
                to={"contact"}
              >
                LET'S TALK
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {location.pathname != "/privacy-policy" &&
      location.pathname !== "/client-agreement" ? (
        <>
          <Header />
        </>
      ) : (
        <></>
      )}

      <Outlet />
    </>
  );
};

export default NavBar;
