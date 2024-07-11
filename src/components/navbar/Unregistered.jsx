import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

const UnRegistered = ({ showUnRegistered, handleCloseUnRegistered }) => {
  const UnregHeading = {
    display: "flex",
    flexDirection: "column",
  };
  const UnRegisteredBtn = {
    backgroundColor: "#709F41",
  };

  return (
    <Modal show={showUnRegistered} onHide={handleCloseUnRegistered}>
      <Modal.Header style={UnregHeading}>
        <Modal.Title>Registered</Modal.Title>
        <p>For Business Users</p>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="registeredName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Name" autoFocus />
          </Form.Group>
          <Form.Group className="mb-3" controlId="registeredCompany">
            <Form.Label>Company Name</Form.Label>
            <Form.Control type="text" placeholder="Company Name" autoFocus />
          </Form.Group>
          <Form.Group className="mb-3" controlId="registeredEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="name@example.com"
              autoFocus
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="registeredContact">
            <Form.Label>Contact Number</Form.Label>
            <Form.Control type="Number" placeholder="91XXXXXXX" autoFocus />
          </Form.Group>
          <Form.Group className="mb-3" controlId="registeredGst">
            <Form.Label>GST Number</Form.Label>
            <Form.Control type="Text" placeholder="Gst Number" autoFocus />
          </Form.Group>
          <Form.Group className="mb-3" controlId="registeredState">
            <Form.Label>State</Form.Label>
            <Form.Select>
              <option>Delhi</option>
              <option>Jaipur</option>
              <option>Haryana</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3" controlId="registeredCategory">
            <Form.Label>Category of Business</Form.Label>
            <Form.Select>
              <option>Delhi</option>
              <option>Jaipur</option>
              <option>Haryana</option>
            </Form.Select>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="light" onClick={handleCloseUnRegistered}>
          Already a User?
        </Button>
        <Button style={UnRegisteredBtn} variant="success" onClick={handleCloseUnRegistered}>
          Submit
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default UnRegistered;
