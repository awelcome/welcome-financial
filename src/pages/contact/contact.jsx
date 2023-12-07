import React, { useState } from "react";

import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const Contact = (props) => {
  const [selectedService, setSelectedService] = useState();

  return (
    <>
      <Container>
        <Form>
          <Row>
            <Form.Group controlId="serviceSelection" className="mb-2">
              <Form.Select
                aria-label="service-selection"
                style={{ margin: "20px 0px 20px 0px" }}
                onChange={(e) => {
                  setSelectedService(e.target.value);
                  console.log(selectedService);
                }}
              >
                <option value="0">Service of interest</option>
                <option value="1">Initial Consultation</option>
                <option value="2">Financial Wellness Program</option>
                <option value="3">1-Hour Financial Coaching Session</option>
                <option value="4">Resume Review</option>
                <option value="5">Resume Crash Course</option>
                <option value="6">Custom Built Resume</option>
                <option value="7">Custom Built Resume - Rushed</option>
                <option value="8">Interview Preparation</option>
              </Form.Select>
            </Form.Group>
          </Row>

          {selectedService === "4" && (
            <Row>
              <Form.Group controlId="formFile" className="mb-3">
                <Form.Label>Resume attachment</Form.Label>
                <Form.Control type="file" />
              </Form.Group>
            </Row>
          )}

          <Row>
            <Form.Group className="mb-3" controlId="formName" as={Col}>
              <Form.Label>Full Name</Form.Label>
              <Form.Control type="text" placeholder="Enter name" />
              <Form.Text className="text-muted">
                Please enter your preferred name or however you'd like to be
                addressed.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail" as={Col}>
              <Form.Label>Email Address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                I'll never share your email with anyone else, it will only be
                used to contact you.
              </Form.Text>
            </Form.Group>
          </Row>

          <Row>
            <Form.Group className="mb-3" controlId="formFreeformText">
              <Form.Label>What can I help you with?</Form.Label>
              <Form.Control
                as="textarea"
                rows="4"
                placeholder="Enter any questions or concerns I may be able to help you with. Please also include as much relevant information as possible in relation to your selected service."
              />
            </Form.Group>
          </Row>

          <Row>
            <Col />
            <Button variant="primary" type="submit" as={Col} lg="1">
              Submit
            </Button>
          </Row>
        </Form>
      </Container>
    </>
  );
};

export default Contact;
