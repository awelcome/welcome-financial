import React, { Component } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import selfPic from "./DSC_9011.jpg";

export default class AboutMe extends Component {
  render() {
    return (
      <>
        <Container fluid style={{ backgroundColor: "black", color: "white" }}>
          <Row>
            <Col>Hi, I'm Tony</Col>
            <Col>
              {/* <img src={selfPic} alt="Self" /> */}
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}
