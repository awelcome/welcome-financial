import "./termsAndConditions.css";

import React, { Component } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default class TermsAndConditions extends Component {
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
              <hr className="termsAndConditionsHr" />
            </Col>
            <Col lg="auto">Terms And Conditions</Col>
            <Col>
              <hr className="termsAndConditionsHr" />
            </Col>
          </Row>
          <Row>Terms And Conditions Coming Soon</Row>
        </Container>
      </>
    );
  }
}
