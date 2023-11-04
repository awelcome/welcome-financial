import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Service = ({ name, price, description }) => {
  return (
    <>
      <Row>
        <Col>
          <h4>{name.toUpperCase()}</h4>
        </Col>
        <Col>
          <div>{price}</div>
        </Col>
      </Row>
      <Row>
        <p>{description}</p>
      </Row>
    </>
  );
};

export default Service;
