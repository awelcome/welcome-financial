import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Service = ({ name, price, description }) => {
  return (
    <div style={{margin: "0 0 10px 0"}}>
      <Row>
        <Col lg="10">
          <h4>{name.toUpperCase()}</h4>
        </Col>
        <Col>
          <div>{price}</div>
        </Col>
      </Row>
      <Row>
        <p>{description}</p>
      </Row>
    </div>
  );
};

export default Service;
