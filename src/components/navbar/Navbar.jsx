import React, { useState, useEffect } from "react";
import "./navbar.css";
import Login from "./Login";
import Signup from "./Signup";
import Registered from "./Registered";
import logo from "../../assets/Fruitporium logo.jpg";
import userImg from "../../assets/icons8-user-50.png";
import cartImg from "../../assets/icons8-cart-64.png";
import { Dropdown } from "react-bootstrap";
import UnRegistered from "./Unregistered";

const NavBar = () => {
  const [showLogin, setShowLogin] = useState(false);
  const handleCloseLogin = () => setShowLogin(false);
  const handleShowLogin = () => setShowLogin(true);

  const [showSignup, setShowSignup] = useState(false);
  const handleCloseSignup = () => setShowSignup(false);
  const handleShowSignup = () => setShowSignup(true);

  const [showRegistered, setShowRegistered] = useState(false);
  const handleCloseRegistered = () => setShowRegistered(false);
  const handleShowRegistered = () => setShowRegistered(true);

  const [showUnRegistered, setShowUnRegistered] = useState(false);
  const handleCloseUnRegistered = () => setShowUnRegistered(false);
  const handleShowUnRegistered = () => setShowUnRegistered(true);

  const successDropdown = {
    backgroundColor: "#709F41",
  };
  const B2BDropdown = {
    borderRadius: "0px 20px 20px 0px",
    backgroundColor: "#709F41",
    marginTop: "25px",
    height: "5vh",
  };
  const B2CDropdown = {
    borderRadius: "20px 0px 0px 20px",
    backgroundColor: "#709F41",
    marginTop: "25px",
    height: "5vh",
  };
  const LocationFirstbtn = {
    display: "flex",
    justifyContent: "center",
    margin: "10px 10px",
    padding: "10px 10px",
    backgroundColor: "#709F41",
    color: "white",
    borderRadius: "30px",
    width: "7vw",
  };

  const locationDropdown = {
    padding: "10px",
  };

  const placeholders = [
    "Search for apples...",
    "Search for oranges...",
    "Search for bananas...",
    "Search for mangoes...",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [animationClass, setAnimationClass] = useState("fade-in");

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationClass("fade-out");
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % placeholders.length);
        setAnimationClass("fade-in");
      }, 500); // Duration of fade out
    }, 3000); // Change placeholder every 3 seconds

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, [placeholders.length]);

  return (
    <>
      <div>
        <nav>
          <img src={logo} alt="no icon" className="logo" />
          <div className="location">
            <Dropdown>
              <Dropdown.Toggle
                variant="success"
                id="dropdown-basic"
                className="btn-success"
                style={successDropdown}
              >
                New Delhi
              </Dropdown.Toggle>

              <Dropdown.Menu style={locationDropdown}>
                <h1 className="location-head">Change the Location</h1>
                <div className="location-dropdown">
                  <Dropdown.Item href="#/action-1" style={LocationFirstbtn}>
                    Detect Location
                  </Dropdown.Item>
                  <p className="or">OR</p>
                  <input
                    className="location-input"
                    type="text"
                    placeholder="Search for Location"
                  />
                </div>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div className="search-container">
            <input
              type="text"
              className={`search-bar ${animationClass}`}
              placeholder={placeholders[currentIndex]}
            />
          </div>
          <div className="buttn">
            <Dropdown>
              <Dropdown.Toggle id="dropdown-basic"  variant="success" style={B2CDropdown}>
                B2C
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1" onClick={handleShowLogin}>
                  LogIn
                </Dropdown.Item>
                <Login showLogin={showLogin} handleCloseLogin={handleCloseLogin} />
                <Dropdown.Item href="#/action-2" onClick={handleShowSignup}>
                  SignUp
                </Dropdown.Item>
                <Signup showSignup={showSignup} handleCloseSignup={handleCloseSignup} />
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown>
              <Dropdown.Toggle id="dropdown-basic"  variant="success" style={B2BDropdown}>
                B2B
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-3" onClick={handleShowRegistered}>
                  Registered
                </Dropdown.Item>
                <Registered showRegistered={showRegistered} handleCloseRegistered={handleCloseRegistered} />
                <Dropdown.Item href="#/action-2"  onClick={handleShowUnRegistered}>
                UnRegistered
                </Dropdown.Item>
                <UnRegistered showUnRegistered={showUnRegistered} handleCloseUnRegistered={handleCloseUnRegistered} />
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <img className="userImg" alt="not found" src={userImg} />
          <img className="cartImg" alt="not found" src={cartImg} />
        </nav>
      </div>
      <hr className="hr" />
    </>
  );
};

export default NavBar;
