import React, { useState, useEffect } from "react";

import { useLocation } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import { useForm } from "@formspree/react";

const Contact = (props) => {
  const { state: locationState } = useLocation();
  const serviceFromServicesPage = locationState?.selectedService;
  const [selectedService, setSelectedService] = useState();
  const [validated, setValidated] = useState(false);
  const [state, formSubmit] = useForm(
    process.env.REACT_APP_FORMSPREE_ENDPOINT_CODE
  );

  useEffect(() => {
    if (serviceFromServicesPage) {
      setSelectedService(serviceFromServicesPage);
    }
  }, [serviceFromServicesPage]);

  if (state.succeeded) {
    return (
      <p className="center" style={{ margin: "50px" }}>
        Thank you, I'll get back to you as soon as possible through the email
        provided!
      </p>
    );
  }

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);

    // Uncomment when ready to take form events
    // formSubmit(event);
  };

  return (
    <>
      <Container>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Row>
            <Form.Group controlId="serviceSelection" className="mb-2">
              <Form.Label>Service of Interest</Form.Label>
              <Form.Select
                aria-label="service-selection"
                style={{ margin: "20px 0px 20px 0px" }}
                onChange={(e) => {
                  setSelectedService(e.target.value);
                }}
                required
                name="service-selection"
                value={selectedService}
              >
                <option value="">Select a service</option>
                <option value="Initial Consultation">
                  Initial Consultation
                </option>
                <option value="Financial Wellness Program">
                  Financial Wellness Program
                </option>
                <option value="1-Hour Coaching Session">
                  1-Hour Financial Coaching Session
                </option>
                <option value="Resume Review">Resume Review</option>
                <option value="Resume Crash Course">Resume Crash Course</option>
                <option value="Custom Built Resume">Custom Built Resume</option>
                <option value="Custom Built Resume - Rushed">
                  Custom Built Resume - Rushed
                </option>
                <option value="Interview Preparation">
                  Interview Preparation
                </option>
              </Form.Select>
            </Form.Group>
          </Row>

          {/* {selectedService === "4" && (
            <Row>
              <Form.Group controlId="formFile" className="mb-3">
                <Form.Label>Resume attachment</Form.Label>
                <Form.Control type="file" />
              </Form.Group>
            </Row>
          )} */}

          <Row>
            <Form.Group className="mb-3" controlId="formName" as={Col}>
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter name"
                required
                name="name"
              />
              <Form.Text className="text-muted">
                Please enter your preferred name or however you'd like to be
                addressed.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail" as={Col}>
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                required
                name="email"
              />
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
                name="comments"
              />
            </Form.Group>
          </Row>

          <Row>
            <Col />
            <Col lg="2">
              <Button
                variant="primary"
                type="submit"
                disabled={state.submitting}
                style={{ width: "100%" }}
              >
                Submit
              </Button>
            </Col>
          </Row>
        </Form>
      </Container>
    </>
  );
};

export default Contact;
