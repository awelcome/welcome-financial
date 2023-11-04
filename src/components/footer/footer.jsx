import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

import { useNavigate } from "react-router-dom";

import "./footer.css";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <>
      <Container fluid style={{ height: "8vh" }}>
        <Row className="center">
          <Col />
          <Col lg="10">
            <hr className="footerHr" />
          </Col>
          <Col />
        </Row>
        <Row className="center footerFont">
          Copyright © {new Date().getFullYear()} Welcome Financial LLC. - All
          Rights Reserved.
        </Row>
        <Row className="legalButtons footerFont">
          <Col lg="auto">
            <Button
              variant="Link"
              onClick={() => {
                navigate("/privacy-policy");
                scrollToTop();
              }}
            >
              PRIVACY POLICY
            </Button>
          </Col>
          <Col lg="auto">
            <Button
              variant="Link"
              onClick={() => {
                navigate("/client-agreement");
                scrollToTop();
              }}
            >
              CLIENT AGREEMENT
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
};

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" }); // 'smooth' provides a smooth scroll effect
};

export default Footer;
