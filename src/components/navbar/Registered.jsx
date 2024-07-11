import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

const Registered = ({ showRegistered, handleCloseRegistered }) => {
  const regHeading = {
    display: "flex",
    flexDirection: "column"
  };

  const registerBtn = {
    backgroundColor: "#709F41"
  }

  return (
    <Modal show={showRegistered} onHide={handleCloseRegistered}>
      <Modal.Header  style={regHeading}>
        <Modal.Title>Registered</Modal.Title>
        <p>For Business User</p>
      </Modal.Header>
      
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="registeredEmail">
            <Form.Label>UserID</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" autoFocus />
          </Form.Group>
          <Form.Group className="mb-3" controlId="registeredPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type='password' placeholder='Password' autoFocus />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="light" onClick={handleCloseRegistered} href=''>
          Not User?
        </Button>
        <Button  onClick={handleCloseRegistered} style={registerBtn} variant='success'>
          Register
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default Registered;
