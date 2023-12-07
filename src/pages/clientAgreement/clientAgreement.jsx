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
            <h6>Last Updated: 12/06/2023</h6>
            <h5>Parties:</h5>
            <p>
              This Client Agreement is entered into by and between Welcome
              Financial LLC, the financial coach, and you, the client,
              collectively referred to as the "Parties."
            </p>
            <h5>Services:</h5>
            <p>
              Welcome Financial LLC will provide financial coaching and career
              services as described on the "Services" page of this website.
              These services may include, but are not limited to, budgeting
              assistance, debt management guidance, resume reviews, and
              interview preparation.
            </p>
            <h5>Payment:</h5>
            <p>
              Client agrees to pay the fees for the selected services as
              outlined on the "Services" page before the service is provided.
              Payment can be made via Zelle to welcomefinancialco@gmail.com. All
              fees are non-refundable. The exception to this is if a service is
              not provided in the timeframe that the client paid for in which
              the client will be refunded the difference between the selected
              accelerated service and the baseline service provided.
            </p>
            <h5>No Guarantees:</h5>
            <p>
              Welcome Financial LLC makes no guarantees or warranties regarding
              job placement, financial success, or specific outcomes resulting
              from the coaching services. Financial success depends on various
              individual factors, and results may vary.
            </p>
            <h5>Confidentiality:</h5>
            <p>
              Both Parties agree to keep all client information and discussions
              confidential. There may be legal obligations to disclose
              information under certain circumstances, such as reporting
              suspicions of illegal activities.
            </p>
            <h5>Client Responsibilities:</h5>
            <p>
              The Client agrees to actively participate in the coaching process,
              provide accurate information, and attend scheduled sessions as
              agreed upon. Success in achieving financial goals depends on the
              client's commitment and engagement. Either party may reschedule a
              previously scheduled session with 24 hours notice.
            </p>
            <h5>Cancellation and Termination:</h5>
            <p>
              Either Party may terminate this Agreement with written notice.
              Welcome Financial LLC reserves the right to cancel services in the
              event of non-payment or violation of this Agreement.
            </p>
            <h5>Modification of Agreement:</h5>
            <p>
              This Agreement may be modified or amended with the mutual written
              consent of both Parties.
            </p>
            <h5>Entire Agreement:</h5>
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
