import React from "react";
// import { Image } from 'react-bootstrap';
import Button from "react-bootstrap/Button";
import logo from "../../assets/Fruitporium logo name.jpg";
import Modal from "react-bootstrap/Modal";

const Login = (props) => {
  const logos = {
    width: "4vw",
  };

  const modalMain = {
    display: "flex",
    flexDirection: "column",
  }
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      
    >
      <Modal.Header style={modalMain}>
        <img style={logos} src={logo} alt="no logo" />
        <p>FRESHNESS DELIVERED DAILY</p>
        <p>Log in or Sign up</p>
        <input type="Number" placeholder="Enter Mobile Number" />
        <button>Continue</button>

        <p>By continuing, you agree to our Terms of service & Privacy policy</p>
      </Modal.Header>
    </Modal>
  );
};

export default Login;
