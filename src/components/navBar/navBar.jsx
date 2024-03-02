// CSS
import "./navBar.css";

// React
import React, { useState } from "react";

// React Bootstrap
import { Container, Nav, Navbar } from "react-bootstrap";

// React Router
import { Outlet, NavLink, useLocation } from "react-router-dom";

// My Components
import Header from "../header/header";

const NavBar = () => {
  let location = useLocation();
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <Navbar
        collapseOnSelect
        bg="light"
        expand="lg"
        className="myNavBar"
        expanded={expanded}
      >
        <Container>
          <Navbar.Brand className="d-lg-none navBarBrand" href="/">
            Welcome Financial Company
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            onClick={() => setExpanded(!expanded)}
          />

          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto" onSelect={() => setExpanded(false)}>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "activeNavLink" : "navBarLink"
                }
                to={""}
                onClick={() => setExpanded(false)}
              >
                ABOUT ME
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "activeNavLink" : "navBarLink"
                }
                to={"services"}
                onClick={() => setExpanded(false)}
              >
                SERVICES
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "activeNavLink" : "navBarLink"
                }
                to={"contact"}
                onClick={() => setExpanded(false)}
              >
                LET'S TALK
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {location.pathname !== "/privacy-policy" &&
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
