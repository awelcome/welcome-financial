import "./header.css";

import React from "react";

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
        <Row className="headerTitle d-none d-lg-flex">
          Welcome Financial Company
        </Row>
        <Row className="headerSubtitle d-none d-lg-flex">
          Welcome To Your Financial Future
        </Row>
        {location.pathname === "/" ? (
          <>
            <Row className="center" lg="auto">
              <Col />
              <Col md="4" sm="5" xs="8">
                <Button
                  className="getStartedButton"
                  variant="outline-dark"
                  onClick={() => {
                    navigate("/contact");
                  }}
                >
                  <Container fluid>
                    <Row>
                      <Col className="center">
                        <hr className="buttonHr" />
                      </Col>
                      <Col
                        lg="auto"
                        md="auto"
                        sm="auto"
                        xs="auto"
                        className="center"
                      >
                        GET STARTED
                      </Col>
                      <Col className="center">
                        <hr className="buttonHr" />
                      </Col>
                    </Row>
                  </Container>
                </Button>
              </Col>
              <Col />
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
