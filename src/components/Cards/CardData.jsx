import React from "react";
import "./carddata.css";
import Button from "react-bootstrap/Button";
import simplefruits from "../../assets/pineapple.JPG";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
const CardData = () => {
  const addButton = {
    backgroundColor: "#709F41",
    color: "white",
    width: "5vw",
  };

  const cardDrop = {
    backgroundColor: "white",
    color: "black",
    border: "1px solid black",
    width: "9vw",
    marginTop: "10px"
  }
  return (
    <>
      <div className="cards">
        <Card className="data">
          <Link to="/">
            <Card.Img className="data-img" variant="top" src={simplefruits} />
          </Link>
          <Card.Body>
            <Card.Title className="fw-bold">Pineapple</Card.Title>
            <Card.Text className="">Rs - 1000/-</Card.Text>
            <div className="d-flex justify-content-between align-items-center">
              <Card.Text className="text-secondary">200 g</Card.Text>
              <div className="d-flex justify-content-end">
                <Button variant="sucess" style={addButton}>
                  ADD
                </Button>
              </div>
            </div>
            <Dropdown>
            <Dropdown.Toggle variant="light" style={cardDrop} id="dropdown-basic">
              weights
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">1kg</Dropdown.Item>
              <Dropdown.Item href="#/action-2">1.5kg</Dropdown.Item>
              <Dropdown.Item href="#/action-3">2kg</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          </Card.Body>
          
        </Card>
      </div>
    </>
  );
};

export default CardData;
