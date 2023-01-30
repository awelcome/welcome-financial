import "./header.css";

import React, { Component } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

export default class Header extends Component {
  render() {
    return (
      <>
        <Container fluid>
          <Row className="headerTitle">Welcome Financial Co.</Row>
          <Row className="headerSubtitle">Welcome To Your Financial Future</Row>
          <Row className="center" lg="auto">
            <Button className="getStartedButton" variant="outline-dark">
              <Container fluid>
                <Row>
                  <Col>
                    <hr />
                  </Col>
                  <Col lg="auto" className="center">
                    GET STARTED
                  </Col>
                  <Col>
                    <hr />
                  </Col>
                </Row>
              </Container>
            </Button>
          </Row>
        </Container>
      </>
    );
  }
}
