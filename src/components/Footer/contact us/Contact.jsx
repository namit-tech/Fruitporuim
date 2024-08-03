import React from "react";
import Modal from "react-bootstrap/Modal";
import "./contact.css";

const Contact = ({ show, onHide }) => {
  return (
    <Modal
      className="custom-modal blurr-backdrop"
      show={show}
      onHide={onHide}
      aria-labelledby="contained-modal-title-vcenter"
      centered
      backdrop="true" // Ensure backdrop is enabled
    >
      <Modal.Body>
        <div className="main-section">
          <div className="section-1">
            <div className="part-1">
              <input type="text" placeholder="Name" />
              <input type="text" placeholder="Email" />
            </div>
            <input
              className="subject-input"
              type="text"
              placeholder="Subject"
            />
            <textarea
              className="textarea"
              rows="10"
              cols="50"
              placeholder="Message"
            ></textarea>
            <button className="btn-form">Send Message</button>
          </div>
          <div className="section-2">
            <h1>Contact Us</h1>
            <hr />
            <div className="location">
              <ion-icon name="location-outline"></ion-icon>
              <p>C-507, New Sbzi Mandi, Azadpur, Delhi - 110033</p>
            </div>
            <div className="call">
              <ion-icon name="call-outline"></ion-icon>
              <p>+91-1234567890</p>
            </div>
            <div className="mail">
              <ion-icon name="mail-outline"></ion-icon>
              <p>fruitporuim@gmail.com</p>
            </div>
            <div className="website">
              <ion-icon name="globe-outline"></ion-icon>
              <p>thefruitporuim.com</p>
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default Contact;


// import React from "react";
// import logo from "../../../assets/Fruitporium.jpg";
// import Modal from "react-bootstrap/Modal";

// import Form from "react-bootstrap/Form";
// import InputGroup from "react-bootstrap/InputGroup";
// import "./login.css";

// const Login = (props) => {
//   const logos = {
//     width: "3.2vw",
//     height: "9vh",
//   };

//   const modalMain = {
//     display: "flex",
//     flexDirection: "column",
//     gap: "0px",
//     padding: "20px",
//     backgroundcolor: "black",
//   };

//   const loginInput = {
//     width: "15vw",
//     borderRadius: "20px",
//   };

//   return (
//     <Modal
//     className="blurr-backdrop"
//       style={{
//         width: "100vw",
//         height: "500px",
//         maxWidth: "100%",
//         maxHeight: "100%",
//         boxSizing: "border-box",
//         padding: "20px",
//         // marginLeft: "270px",
//       }}
//       {...props}
//       aria-labelledby="contained-modal-title-vcenter"
//       centered
//     >
//       <Modal.Header style={modalMain} className="modal-main">
//         <img style={logos} src={logo} alt="no logo" />
//         <p className="image-name">The Fruitporium</p>
//         <p className="tagline-login">Where Nature's Sweetest Gifts Gather</p>
//         <p className="login-text">Log in or Sign up</p>
//         <InputGroup className="mb-3" style={loginInput}>
//           <InputGroup.Text>+91</InputGroup.Text>
//           <Form.Control aria-label="Enter Mobile Number" />
//         </InputGroup>
//         <button className="btn-login">Continue</button>
//         <p className="tnc-login">
//           By continuing, you agree to our Terms of service & Privacy policy
//         </p>
//       </Modal.Header>
//     </Modal>
//   );
// };

// export default Login;
