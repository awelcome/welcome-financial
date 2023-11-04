import "./header.css";

import React, { Component } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

import { useNavigate, useLocation } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <>
      <Container fluid>
        <Row className="headerTitle">Welcome Financial Company</Row>
        <Row className="headerSubtitle">Welcome To Your Financial Future</Row>
        {location.pathname === "/" ? (
          <>
            <Row className="center" lg="auto">
              <Button
                className="getStartedButton"
                variant="outline-dark"
                onClick={() => {
                  navigate("/contact");
                }}
              >
                <Container fluid>
                  <Row>
                    <Col>
                      <hr className="buttonHr" />
                    </Col>
                    <Col lg="auto" className="center">
                      GET STARTED
                    </Col>
                    <Col>
                      <hr className="buttonHr" />
                    </Col>
                  </Row>
                </Container>
              </Button>
            </Row>
          </>
        ) : (
          <></>
        )}
      </Container>
    </>
  );
};

export default Header;
