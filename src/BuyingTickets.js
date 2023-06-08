import React from "react";
import {
  Button,
  Container,
  Dropdown,
  Row,
  Col,
  Table,
  Form,
} from "react-bootstrap";
import { useDispatch } from "react-redux";
import { productAdd } from "./ReduxToolkit/MoviesCart";
import { useState } from "react";
import { BillingInformatin } from "./BillingInformation";

let ticketsData = [
  { id: 0, name: "Drive", quantity: 0, actualPrice: 500, totalPrice: 0 },
  {
    id: 1,
    name: "The Great Wall",
    quantity: 0,
    actualPrice: 600,
    totalPrice: 0,
  },
  { id: 2, name: "FastX", quantity: 0, actualPrice: 800, totalPrice: 0 },
];
export const BuyingTickets = () => {
  const dispatch = useDispatch();
  const [array, setArray] = useState(new Set());
  const [selectedItem, setSelectedItem] = useState(new Set());
  const [quantity, setQuantity] = useState(0);
  const [selectedText, setSelectedText] = useState("Select");
  // Increment Quantity and Price
  let handleIncrement = () => {
    ticketsData.forEach((item) => {
      if (item.name === selectedText) {
        item.quantity += 1;
        item.totalPrice = item.actualPrice * item.quantity;
        setQuantity(item.quantity);
      }
    });
  };
  // Decrement in Quantity and Price
  let handleDecrement = () => {
    ticketsData.forEach((item) => {
      if (item.name === selectedText) {
        if (item.quantity > 0) {
          item.quantity -= 1;
          item.totalPrice = item.totalPrice - item.actualPrice;
          setQuantity((prev) => prev - 1);
        }
      }
    });
  };
  // console.log(array, "array");
  // console.log([...selectedItem], "selectedItem");

  return (
    <React.Fragment>
      <Container fluid>
        <Row>
          <Col>
            <h1 style={{ textAlign: "center" }}>Buying Tickets</h1>
          </Col>
        </Row>
        <Row>
          <Col lg={7}>
            <div style={{ display: "flex" }}>
              <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  {selectedText}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  {ticketsData &&
                    ticketsData.map((item, index) => {
                      return (
                        <React.Fragment>
                          <Dropdown.Item
                            href="#/action-1"
                            key={item.id}
                            onClick={(e) => {
                              return (
                                setArray((prev) => new Set([...prev, item])),
                                setSelectedItem(
                                  (prev) => new Set([...prev, item])
                                ),
                                setSelectedText(item.name)
                              );
                            }}
                          >
                            {item.name}
                          </Dropdown.Item>
                        </React.Fragment>
                      );
                    })}
                </Dropdown.Menu>
              </Dropdown>
              <Button
                variant="primary"
                size="md"
                onClick={() => handleDecrement()}
              >
                Decrement
              </Button>{" "}
              <b> {quantity} </b>
              <Button
                variant="primary"
                size="md"
                onClick={() => handleIncrement()}
              >
                Increment
              </Button>
              <Button
                variant="success"
                size="md"
                onClick={() => dispatch(productAdd([...array]))}
              >
                Checkout
              </Button>
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
                  {[...selectedItem].map((item) => {
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

            <div>
              <h4>Payment</h4>
              <h5>Use Credit / Debit Card</h5>
              <div style={{ backgroundColor: "lightblue" }}>
                <span style={{ display: "flex" }}>
                  <Form>
                    {["radio"].map((type) => (
                      <div key={`default-${type}`} className="mb-3">
                        <Form.Check type={type} label={` `} id={``} />
                      </div>
                    ))}
                  </Form>

                  <h5>Visa</h5>
                  <h5>Visa-9999</h5>
                </span>
                <h5>User Name | exp. 00/11</h5>
                <a href="#">Edit</a> <span>|</span> <a href="#">Delete</a>
                <p>Security Code</p>
                <span style={{ display: "flex" }}>
                  <Form.Control
                    className="mb-3"
                    type="email"
                    placeholder={"..."}
                    style={{ width: "10%", border: "none" }}
                  />
                  {/* <h6>{' '}image{' '}</h6> */}
                  <h6>3-digits on back of card</h6>
                </span>
              </div>
            </div>
            <div style={{ display: "flex" }}>
              <Button variant="light">
                <span style={{ fontSize: "50px" }}>+</span>
              </Button>
              <a href="#" style={{ textDecoration: "none" }}>
                {" "}
                Add New Card
              </a>
            </div>
            <hr />
            <h6>Or Pay With</h6>
            <h6>
              By using a digital Wallet and Continuing past this page, you have
              read and are accepting the{" "}
              <a href="#" style={{ textDecoration: "none" }}>
                Terms of Use.
              </a>
            </h6>
          </Col>

          <Col lg={5}>
            <BillingInformatin />
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};
