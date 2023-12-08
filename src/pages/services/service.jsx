import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link, useNavigate } from "react-router-dom";
import "./service.css";

const Service = ({ name, price, description }) => {
  const navigate = useNavigate();

  return (
    <div className="serviceLink" style={{ margin: "0 0 10px 0" }}>
      <Link to="/contact" state={{ selectedService: name }}>
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
      </Link>
    </div>
  );
};

export default Service;
