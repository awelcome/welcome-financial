import "./privacyPolicy.css";

import React, { Component } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default class PrivacyPolicy extends Component {
  render() {
    return (
      <>
        <Container>
          <Row
            style={{
              alignItems: "center",
              fontSize: "24px",
              fontWeight: "bold",
            }}
          >
            <Col>
              <hr className="privacyPolicyHr" />
            </Col>
            <Col lg="auto">Privacy Policy</Col>
            <Col>
              <hr className="privacyPolicyHr" />
            </Col>
          </Row>
          <Row>Privacy Policy Coming Soon</Row>
        </Container>
      </>
    );
  }
}
