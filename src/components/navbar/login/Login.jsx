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
//     padding: "20px",
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




// Login.js
import React, { useState } from 'react';
import logo from '../../../assets/Fruitporium.jpg';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { initializeApp } from 'firebase/app';
import { getAuth, RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';
import './login.css';

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAg7_XmFePaAAvZm2Jh1laXAQ5QrYJb-T8",
  authDomain: "otp-project-72f3a.firebaseapp.com",
  projectId: "otp-project-72f3a",
  storageBucket: "otp-project-72f3a.appspot.com",
  messagingSenderId: "1008869233794",
  appId: "1:1008869233794:web:67a03850ab7d2756e0909b",
  measurementId: "G-MLK26KLP3X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const Login = ({ setIsVerified, ...props }) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [confirmationResult, setConfirmationResult] = useState(null);
  const [error, setError] = useState('');
  const [otpSent, setOtpSent] = useState(false);

  const setupRecaptcha = () => {
    window.recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha-container', {
      'size': 'invisible',
      'callback': (response) => {
        console.log("Recaptcha verified");
      },
      'expired-callback': () => {
        console.log("Recaptcha expired, please try again");
      }
    }, auth);
  };

  const handleSendOtp = () => {
    const fullPhoneNumber = `+91${phoneNumber}`;
    if (!/^\+[1-9]\d{1,14}$/.test(fullPhoneNumber)) {
      setError('Invalid phone number format. Please use the format +<country_code><phone_number>.');
      return;
    }

    setError('');
    setupRecaptcha();
    const appVerifier = window.recaptchaVerifier;
    signInWithPhoneNumber(auth, fullPhoneNumber, appVerifier)
      .then(confirmationResult => {
        setConfirmationResult(confirmationResult);
        setOtpSent(true);
        console.log("OTP sent");
      }).catch(error => {
        console.log("Error during signInWithPhoneNumber", error);
        setError(error.message);
      });
  };

  const handleVerifyOtp = () => {
    if (confirmationResult) {
      confirmationResult.confirm(otp).then(result => {
        const user = result.user;
        console.log("User signed in successfully:", user);
        setIsVerified(true);
      }).catch(error => {
        console.log("Error during confirmationResult.confirm", error);
        setError(error.message);
      });
    }
  };

  const logos = {
    width: "3.2vw",
    height: "9vh",
  };

  const modalMain = {
    display: "flex",
    flexDirection: "column",
    padding: "20px",
  };

  const loginInput = {
    width: "15vw",
    borderRadius: "20px",
  };

  return (
    <Modal 
      className="blurr-backdrop"
      style={{
        width: "100vw",
        height: "500px",
        maxWidth: "100%",
        maxHeight: "100%",
        boxSizing: "border-box",
      }}
      {...props}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header style={modalMain} className="modal-main">
        <img style={logos} src={logo} alt="no logo" />
        <p className="image-name">The Fruitporium</p>
        <p className="tagline-login">Where Nature's Sweetest Gifts Gather</p>
        <p className="login-text">Log in or Sign up</p>
        {!otpSent ? (
          <>
            <InputGroup className="mb-3" style={loginInput}>
              <InputGroup.Text>+91</InputGroup.Text>
              <Form.Control
                aria-label="Enter Mobile Number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </InputGroup>
            <button className="btn-login" onClick={handleSendOtp}>Continue</button>
          </>
        ) : (
          <>
            <InputGroup className="mb-3" style={loginInput}>
              <Form.Control
                aria-label="Enter OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                placeholder="Enter OTP"
              />
            </InputGroup>
            <button className="btn-login" onClick={handleVerifyOtp}>Verify OTP</button>
          </>
        )}
        <p className="tnc-login">
          By continuing, you agree to our Terms of service & Privacy policy
        </p>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <div id="recaptcha-container"></div>
      </Modal.Header>
    </Modal>
  );
};

export default Login;

