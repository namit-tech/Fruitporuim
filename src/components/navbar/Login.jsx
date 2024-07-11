import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

const Login = ({ showLogin, handleCloseLogin }) => {
  const logHeading = {
    display: "flex",
    flexDirection: "column"
  };

  const loginBtn = {
    backgroundColor: "#709F41"
  }
  return (
    <Modal show={showLogin} onHide={handleCloseLogin}>
      <Modal.Header style={logHeading} closeButton >
        <Modal.Title>Login</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>User ID</Form.Label>
            <Form.Control type="Text" placeholder="Username" autoFocus />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" autoFocus />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="light" onClick={handleCloseLogin}>
          Not a User?
        </Button>
        <Button variant='success' style={loginBtn} onClick={handleCloseLogin}>
          Login
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default Login;
