import React, { useState, useEffect } from "react";
import "./navbar.css";
import Login from "./login/Login";
import WebName from "./WebName";
import Registered from "./Registered";
import logo from "../../assets/Fruitporium logo name.jpg";
import "boxicons/css/boxicons.min.css";
import { Dropdown } from "react-bootstrap";
import UnRegistered from "./Unregistered";
import { Link } from "react-router-dom";
import Cart from "./Cart/Cart";

const NavBar = () => {
  const [modalShow, setModalShow] = React.useState(false);

  const [showRegistered, setShowRegistered] = useState(false);
  const handleCloseRegistered = () => setShowRegistered(false);
  const handleShowRegistered = () => setShowRegistered(true);

  const [showUnRegistered, setShowUnRegistered] = useState(false);
  const handleCloseUnRegistered = () => setShowUnRegistered(false);
  const handleShowUnRegistered = () => setShowUnRegistered(true);

  const [isHovered, setIsHovered] = useState(false);
  const [isHoveredB2b, setIsHoveredB2b] = useState(false);
  const [isVerified, setIsVerified] = useState(false);

  const successDropdown = {
    backgroundColor: "white",
    marginTop: "5px",
  };
  const B2BDropdown = {
    borderRadius: "0px 5px 5px 0px",
    backgroundColor: isHoveredB2b ? "#709F41" : "white",
    color: isHoveredB2b ? "white" : "black",
    fontSize: "12px",
    marginTop: "17px",
    marginRight: "20px",
    height: "4.5vh",
  };

  // #709F41
  const B2CDropdown = {
    borderRadius: "5px 0px 0px 5px",
    backgroundColor: isHovered ? "#709F41" : "white",
    color: isHovered ? "white" : "black",
    marginLeft: "15px",
    fontSize: "12px",
    marginTop: "17px",
    height: "4.5vh",
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
      <div className="sticky">
        <nav>
          <Link to="/">
            <img src={logo} alt="no icon" className="logo" />
          </Link>

          {/* <div className="location">
            <Dropdown>
              <Dropdown.Toggle
                id="dropdown-basic"
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
          </div> */}
          <WebName />
          <div className="search-container">
            <input
              type="text"
              className={`search-bar ${animationClass}`}
              placeholder={placeholders[currentIndex]}
            />
          </div>
          <div className="buttn">
            <Dropdown>
              <Dropdown.Toggle
                id="dropdown-basic"
                variant="light"
                style={B2CDropdown}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                B2C
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item onClick={() => setModalShow(true)}>
                  Login / Sign up
                </Dropdown.Item>
                <Login show={modalShow} onHide={() => setModalShow(false)} />
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown>
              <Dropdown.Toggle
                id="dropdown-basic"
                variant="light"
                style={B2BDropdown}
                onMouseEnter={() => setIsHoveredB2b(true)}
                onMouseLeave={() => setIsHoveredB2b(false)}
              >
                B2B
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-3" onClick={handleShowRegistered}>
                  Registered
                </Dropdown.Item>
                <Registered
                  showRegistered={showRegistered}
                  handleCloseRegistered={handleCloseRegistered}
                />
                <Dropdown.Item
                  href="#/action-2"
                  onClick={handleShowUnRegistered}
                >
                  UnRegistered
                </Dropdown.Item>
                <UnRegistered
                  showUnRegistered={showUnRegistered}
                  handleCloseUnRegistered={handleCloseUnRegistered}
                />
              </Dropdown.Menu>
            </Dropdown>
          </div>
          {!isVerified ? (
            <button className="user-login" onClick={() => setModalShow(true)}>
              <p>Login / Sign up</p>
            </button>
          ) : (
            <button className="user-login">
              <p>My Account</p>
            </button>
          )}
          <button className="cart-btn">
            <Cart />
          </button>
        </nav>
      </div>
      {/* <hr className="hr-shadow" /> */}
      <Login show={modalShow} onHide={() => setModalShow(false)} setIsVerified={setIsVerified} />
    </>
  );
};

export default NavBar;
