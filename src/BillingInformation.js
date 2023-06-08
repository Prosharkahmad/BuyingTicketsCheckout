import React from "react";
import { useSelector } from "react-redux";
import { Container, Table, Row, Col, Form, Button } from "react-bootstrap";
export const BillingInformatin = () => {
  let stateData = useSelector((state) => state.productData.ary);
  let totalTickets = useSelector((state) => state.productData.totalTickets);
  let subTotalPrice = useSelector((state) => state.productData.subTotalPrice);
  let totalPrice = useSelector((state) => state.productData.totalPrice);
  let totalServiceFee = useSelector(
    (state) => state.productData.totalServiceFee
  );

  return (
    <React.Fragment>
      <Container fluid>
        <Row>
          <Col log={12}>
            <div style={{ display: "flex" }}>
              <h5 style={{ alignItems: "flex-start" }}>Total</h5>
              <h6 style={{ alignItems: "flex-end ", marginLeft: "80%" }}>
                ${Math.round(totalPrice)}
              </h6>
            </div>
            <h5 style={{ alignItems: "end" }}>Tickets</h5>
            <div style={{ display: "flex" }}>
              <p style={{ alignItems: "end" }}>
                Total Tickets: {totalTickets}{" "}
              </p>
              <p style={{ alignItems: "end", marginLeft: "68%" }}>
                ${subTotalPrice}{" "}
              </p>
            </div>
            <div>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Movie Name</th>
                    <th>Quantity</th>
                    <th>Actual Price</th>
                    <th>Total Price</th>
                  </tr>
                </thead>
                <tbody>
                  {stateData &&
                    stateData.map((item) => {
                      console.log(item, "item");
                      return (
                        <React.Fragment>
                          <tr>
                            <td>{item.name}</td>
                            <td>{item.quantity}</td>
                            <td>{item.actualPrice}</td>
                            <td>{item.totalPrice}</td>
                          </tr>
                        </React.Fragment>
                      );
                    })}
                </tbody>
              </Table>
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg={12}>
            <span>
              <b>Notes From Sellers</b>
            </span>
          </Col>
        </Row>
        <Row>
          <Col lg={12}>
            <h6>
              xfr XFER Proof of at least one dose of COVID-19 vaccination for
              ages 5 to 11 and guests ages 12 and up will be required to show
              proof of two COVID-19 vaccine doses or one dose of the Johnson &
              Johnson vaccine. Masks must be warn.
            </h6>
          </Col>
        </Row>
        <Row>
          <Col lg={12}>
            <div>
              <br />
              <h6>Fees</h6>
              <div style={{ display: "flex" }}>
                <h6>Service Fee : $44.08*{totalTickets}</h6>
                <h6 style={{ marginLeft: "57%" }}>${totalServiceFee}</h6>
              </div>
            </div>
            <div style={{ display: "flex" }}>
              <h6>Order Processing Fee $2.95</h6>
            </div>
            <br />
            <h6>Delivery</h6>
            <div style={{ display: "flex" }}>
              <h6>Mobile Entry=</h6>
              <h6>Free</h6>
            </div>
            <br />
            <a href="#" style={{ textDecoration: "none" }}>
              Cancel Order
            </a>
            <br />
            <br />
            <h6>*All Sales Final - No Refunds</h6>
            <br />
            <div style={{ display: "flex" }}>
              <Form>
                {["checkbox"].map((type) => (
                  <div key={`default-${type}`} className="mb-3">
                    <Form.Check
                      type={type}
                      id={`default-${type}`}
                      label={`I have read and agree to the current Terms of Use.`}
                    />
                  </div>
                ))}
              </Form>
            </div>
            <Button size="md" variant="success" style={{ width: "100%" }}>
              Place Order
            </Button>
            <br />
            <p>*Exception may apply, see our Terms of Use.</p>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};
