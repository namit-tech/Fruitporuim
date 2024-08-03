import React from "react";
import "./listing.css";
import Dropdown from "react-bootstrap/Dropdown";
import { Link } from "react-router-dom";

const Listing = () => {
  const categoryBtn = {
    backgroundColor: "#709F41",
    border: "0px",
  };
  return (
    <>
      <div className="listings">
        <Dropdown>
          <Dropdown.Toggle
            id="dropdown-basic"
            style={categoryBtn}
            className="categoryBtn"
          >
            Shop By Categories
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">
              Exoctic & Premuim Fruits
            </Dropdown.Item>
            <Dropdown.Item href="#/action-2">Simple Fruits</Dropdown.Item>
            <Dropdown.Item href="#/action-2">
              Exotic & Premuim Veggies
            </Dropdown.Item>
            <Dropdown.Item href="#/action-2">Simple Veggies</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <div className="list">
          <Link className="list-link" to="/fruits">
            Fruits
          </Link>
          <Link className="list-link" to="/vegetables">
            Vegetable
          </Link>

          <Link className="list-link" to="/">
            Dry Fruits
          </Link>
          <Link className="list-link" to="/">
            Fruit Basket
          </Link>
          <Link className="list-link" to="/">
            Cloud Kitchen{" "}
          </Link>
        </div>
      </div>
    </>
  );
};

export default Listing;
