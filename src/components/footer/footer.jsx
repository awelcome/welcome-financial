import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

import { useNavigate } from "react-router-dom";

import "./footer.css";

export default function Footer() {
  const navigate = useNavigate();
  return (
    <>
      <Container fluid style={{height: "8vh"}}>
        <Row className="center">
          <Col />
          <Col lg="10">
            <hr className="footerHr" />
          </Col>
          <Col />
        </Row>
        <Row className="center footerFont">
          Copyright © {new Date().getFullYear()} Welcome Financial Co. LLC. -
          All Rights Reserved.
        </Row>
        <Row className="legalButtons footerFont">
          <Col lg="auto">
            <Button
              variant="Link"
              onClick={() => {
                navigate("/privacy-policy");
              }}
            >
              PRIVACY POLICY
            </Button>
          </Col>
          <Col lg="auto">
            <Button
              variant="Link"
              onClick={() => {
                navigate("/terms-and-conditions");
              }}
            >
              TERMS AND CONDITIONS
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
}
