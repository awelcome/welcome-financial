import "../../common.css";

import React, { Component } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

import selfPic from "./DSC_9011.jpg";

const AboutMe = () => {
  return (
    <>
      <Container fluid style={{ backgroundColor: "black", color: "white" }}>
        <Row className="center">
          <Col lg="7" style={{ paddingRight: "3%" }}>
            <Container>
              <Row style={{ alignItems: "center" }}>
                <Col lg="4" className="center">
                  <h1>Hi, I'm Tony</h1>
                </Col>
                <Col>
                  <hr />
                </Col>
              </Row>
              <Row>
                <p>
                  I have a passion for financial empowerment and personal
                  growth, and I'm dedicated to your financial success. My
                  journey in the world of personal finance began at an early
                  age, taking my first job at 14 and was financially independent
                  by the age of 17. Through research, helping others, and my own
                  financial experiences, I've gained firsthand knowledge of the
                  challenges and rewards of financial education.
                </p>

                <p>
                  As a first-generation college graduate from Arizona State
                  University's business school, I delved into a wide range of
                  subjects, including finance, economics, accounting, and more.
                  Beyond academics, I spent three years working in ASU's career
                  services department, working with recruiters and helping
                  individuals craft winning resumes and excel in interviews.
                  I've also been on both sides of the hiring process, having
                  worked with multiple Fortune 100 companies, which provides me
                  with unique insights into what employers are seeking.
                </p>

                <p>
                  In addition to my financial background, I work as a software
                  developer, allowing me to blend technology and finance in my
                  coaching. Growing up in a low-income household, I understand
                  the importance of financial education. My mission is to bridge
                  the knowledge gap and empower you with the tools to reach your
                  financial goals.
                </p>

                <p>
                  My fresh and modern approach to personal finance integrates
                  experience, education, technology, and passion. I'm here to
                  guide and support you on your journey to financial success.
                  Let's embark on this journey together.
                </p>
              </Row>
            </Container>
          </Col>
          <Col lg="4">
            <Image
              src={selfPic}
              alt="Self"
              style={{
                width: "80%",
                height: "auto",
                display: "block",
                overflow: "hidden",
              }}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AboutMe;
