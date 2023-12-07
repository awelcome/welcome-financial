import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Heading from "../../components/heading/heading";
import Service from "./service";

const Services = () => {
  return (
    <Container
      fluid
      style={{ backgroundColor: "black", color: "white", marginTop: "50px", paddingBottom: "50px" }}
    >
      <Container>
        <Row className="center">
          <Heading dark text="Services and Pricing" />
        </Row>
        <Service
          name="Initial Consultion"
          price="FREE"
          description="Meet either in person or virtually to get to know each other and discuss what services may be most beneficial for your situation."
        />
        <Row>
          <h2>FINANCIAL COACHING</h2>
        </Row>
        <Service
          name="Financial Wellness Program"
          price="$125/month"
          description="Completely customized program about your financial health wrapped into a 4 month package. Includes most services listed below. We'll meet several times, go over various topics, and keep an open line of communication! More details coming soon"
        />
        <Service
          name="1-Hour Coaching Session"
          price="$75"
          description="Personalized financial coaching sessions to address your specific needs. Topics could include budgeting, savings goals, debt relief, career services, and more"
        />

        <Row>
          <h2>CAREER SERVICES</h2>
        </Row>
        <Service
          name="Resume Review"
          price="$50"
          description="Send me your resume, and I'll provide comments with recommendations and feedback"
        />
        <Service
          name="Resume Crash Course"
          price="$75"
          description="In-person or virtual session covering everything about resumes, with resources and Q&A"
        />
        <Service
          name="Custom Built Resume"
          price="$125"
          description="Provide your information, and I'll craft you a professional resume myself"
        />
        <Service
          name="Custom Built Resume - Rushed"
          price="$175"
          description="Same service as above, but I get it back to you within 48 hours"
        />
        <Service
          name="Interview Preparation"
          price="$100"
          description="Two one-on-one sessions covering interview techniques, preparation, and a mock interview with feedback"
        />
      </Container>
    </Container>
  );
};

export default Services;
