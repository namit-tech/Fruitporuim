import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

const Signup = ({ showSignup, handleCloseSignup }) => {
  const signHead = {
    display: "flex",
    flexDirection: "column"
  };

  const signBtn = {
    backgroundColor: "#709F41"
  }
  return (
    <Modal show={showSignup} onHide={handleCloseSignup}>
      <Modal.Header style={signHead} closeButton>
        <Modal.Title>Signup</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" autoFocus />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Create Password</Form.Label>
            <Form.Control type="password" placeholder="password" autoFocus />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control type="password" placeholder="Password" autoFocus />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="light" onClick={handleCloseSignup}>
          Already a User?
        </Button>
        <Button variant="success" style={signBtn} onClick={handleCloseSignup}>
          SignIn
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default Signup;

