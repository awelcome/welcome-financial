import "./privacyPolicy.css";

import React, { Component } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Heading from "../../components/heading/heading";

export default class PrivacyPolicy extends Component {
  render() {
    return (
      <>
        <Container>
          <Heading text="Privacy Policy" />
          <Row>
            <h2>Welcome Financial LLC Privacy Policy</h2>
            <h6>Last Updated: 10/27/2023</h6>
            <p>
              Welcome Financial LLC ("I," "me," or "my") operates the website
              welcomefinancialco.com. This page informs you of my policies
              regarding the collection, use, and disclosure of Personal
              Information when you use my service(s). At Welcome Financial
              Company, I am committed to protecting your privacy and the
              confidentiality of your personal information.
            </p>
            <h5>Information Collection and Use</h5>
            <p>
              I do not collect personally identifiable information unless it is
              provided voluntarily by you. The types of information that may be
              collected include but are not limited to:
              <ul>
                <li>Name</li>
                <li>Email address</li>
                <li>Phone Number</li>
                <li>Financial information (for financial coaching services)</li>
                <li>
                  Resume and job-related information (for career services)
                </li>
              </ul>
              I may also collect non-personal information strictly for the
              purposes of analyzing trends and improving my website. The types
              of information that may be collected in this way include but are
              not limited to:
              <ul>
                <li>IP address</li>
                <li>Device Type</li>
                <li>Browser type</li>
                <li>Operating system</li>
              </ul>
            </p>
            <h5>Use of Data</h5>
            <p>
              I use the collected data for the following purposes:
              <ul>
                <li>To provide and maintain my services</li>
                <li>To contact you or respond to you regarding my services</li>
                <li>To analyze and improve my services</li>
                <li>To comply with legal obligations</li>
              </ul>
            </p>
            <h5>Disclosure of Your Information</h5>
            <p>
              I will not disclose your personal information to third parties
              without your consent, except as required by law or as necessary to
              provide you with my services. I will never sell, rent, lease, or
              buy your data.
            </p>
            <h5>Security of Your Information</h5>
            <p>
              I take reasonable steps to protect your personal information from
              unauthorized access, use, or disclosure.
            </p>
            <h5>Data Retention</h5>
            <p>
              I will delete your data when it is no longer needed for the
              purposes mentioned in this policy.
            </p>
            <h5>Changes to This Privacy Policy</h5>
            <p>
              I may amend this Privacy Policy from time to time. The updated
              Privacy Policy will be posted on my website on this page.
            </p>
            <h5>Contact Me</h5>
            <p>
              If you have any questions or concerns regarding this Privacy
              Policy or my use of your personal information, please contact me
              at welcomefinancialco@gmail.com.
            </p>
            <h5>Children's Online Privacy Protection</h5>
            <p>
              My services are not intended for children under 18. I do not
              knowingly collect information from children. By using my website
              and services, you consent to the collection, use, and disclosure
              of your personal information as described in this Privacy Policy.
            </p>
          </Row>
        </Container>
      </>
    );
  }
}
