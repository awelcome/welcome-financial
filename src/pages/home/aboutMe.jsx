import React, { Component } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

import selfPic from "./DSC_9011.jpg";

export default class AboutMe extends Component {
  render() {
    return (
      <>
        <Container
          fluid
          style={{ backgroundColor: "black", color: "white", height: "48vh" }}
        >
          <Row>
            <Col lg="6" style={{ padding: "3%" }}>
              <Container>
                <Row>
                  <Col lg="4">Hi, I'm Tony</Col>
                  <Col>
                    <hr />
                  </Col>
                </Row>
                <Row>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Sed pulvinar proin gravida hendrerit lectus. Tristique
                  sollicitudin nibh sit amet commodo nulla facilisi. Sem
                  fringilla ut morbi tincidunt augue interdum velit euismod in.
                  Elit scelerisque mauris pellentesque pulvinar pellentesque
                  habitant morbi tristique senectus. Sit amet consectetur
                  adipiscing elit duis tristique sollicitudin nibh sit.
                  Vestibulum sed arcu non odio euismod lacinia. Ligula
                  ullamcorper malesuada proin libero nunc. Sit amet consectetur
                  adipiscing elit duis tristique sollicitudin nibh. Ut tellus
                  elementum sagittis vitae et leo. Sapien et ligula ullamcorper
                  malesuada proin. Dui vivamus arcu felis bibendum ut tristique.
                  Dignissim enim sit amet venenatis urna cursus eget nunc
                  scelerisque.
                </Row>
              </Container>
            </Col>
            <Col lg="6">
              <Image src={selfPic} alt="Self" style={{ width: "30%" }} />
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}
