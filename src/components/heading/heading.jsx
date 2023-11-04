import "./heading.css";

import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Heading = ({ dark, text }) => {
  const headingStyle = {
    alignItems: "center",
    fontSize: "26px",
    fontWeight: "bold",
    marginTop: "3%",
    marginBottom: "3%",
  };

  const textColor = dark ? "white" : "black";

  const hrStyle = {
    backgroundColor: textColor, // Set HR color based on the 'dark' prop
    opacity: 1,
  };

  return (
    <Row style={headingStyle}>
      <Col>
        <hr style={hrStyle} />
      </Col>
      <Col lg="auto" style={{ color: textColor }}>
        {text}
      </Col>
      <Col>
        <hr style={hrStyle} />
      </Col>
    </Row>
  );
};

export default Heading;
