import "./clientAgreement.css";

import React, { Component } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Heading from "../../components/heading/heading";

export default class ClientAgreement extends Component {
  render() {
    return (
      <>
        <Container>
          <Heading text="Client Agreement" />
          <Row>
            <h2>Welcome Financial LLC Client Agreement</h2>
            <h6>Last Updated: 10/15/2024</h6>
            <p>
              As part of our engagement, I may provide financial coaching,
              financial planning guidance, resume review, interview preparation,
              and other related services. Please note that these services are
              intended to be informational and educational in nature.
            </p>
            <p>
              I would like to clarify that I am not a licensed investment
              broker. This means that my services should not be construed as
              legal or investment advice. I focus on overall financial health,
              budgeting, and planning, but I cannot recommend specific entities
              to invest in or provide specific stock or equity recommendations.
            </p>
            <p>
              While I am committed to providing the best guidance possible, I
              cannot guarantee specific outcomes, such as financial profit or
              employment acquisition. Success in financial or career endeavors
              is influenced by various external factors beyond our control.
            </p>
            <p>
              You acknowledge that all decisions made during or following our
              coaching sessions, including financial choices and career moves,
              are your own responsibility. I am here to help carefully evaluate
              all options and potential outcomes, but the decision to act on
              these is left to you entirely.
            </p>
            <p>
              Any personal information shared will be kept confidential and will
              not be disclosed to any third parties without your consent, except
              as required by law. Upon acceptance of this agreement, I will
              share your name and email address with Zoho Corporation, which I
              use for appointment scheduling and invoicing.
            </p>
            <p>
              IF ENTERING INTO ONGOING FINANCIAL PLANNING: Our professional
              relationship will be on a month-to-month basis. This means that
              there is no long-term contract and either one of us may decide to
              discontinue the services at any time. Payment is expected at the
              conclusion of our first meeting of every month. This ensures that
              we can continue our sessions without interruption. Payment
              guarantees a one-hour meeting each month. However, we may schedule
              additional meetings as needed, based on your individual
              requirements and circumstances, up to a maximum of one hour per
              week. You will also have access to me via email or phone for brief
              questions throughout the month. Please note that in order to
              respect both our times, I require a minimum of 24 hours' notice
              for cancelling or rescheduling a meeting. If a meeting is missed
              or cancelled without at least 24 hours' notice, I will do my best
              to still reschedule and fit the meeting within the month, but if
              our schedule doesn't allow it may be considered as your one
              guaranteed monthly meeting. I appreciate your understanding and
              cooperation with this policy.
            </p>
            <p>
              IF PURCHASING ONE TIME SERVICES: Client agrees to pay the fees for
              the selected services as outlined on the "Services" page before
              the service is provided. Payment can be made via Zelle to
              welcomefinancialco@gmail.com. All fees are non-refundable. The
              exception to this is if a service is not provided in the timeframe
              that the client paid for (timeline begins when client submits
              payment) in which the client will be refunded the difference
              between the selected accelerated service and the baseline service
              provided.
            </p>
            <p>
              This Agreement represents the entire understanding between Welcome
              Financial LLC and the Client and supersedes any previous
              discussions or agreements.
            </p>
          </Row>
        </Container>
      </>
    );
  }
}
