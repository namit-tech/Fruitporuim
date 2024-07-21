import React from "react";
import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

const WebName = () => {
  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      C-507, New Sbzi Mandi, Azadpur, Delhi - 110033
    </Tooltip>
  );

  const fruitporuimText = {
    marginTop: "14px",
    marginRight: "5px",
    marginLeft: "8px",
    color: "#709f41",
  };

  const layBtn = {
    backgroundColor: "white",
    color: "#709f41",
    border: "none",
    fontSize: "17px",
    fontWeight: "600",
  };
  return (
    <>
      <div style={fruitporuimText}>
        <OverlayTrigger
          placement="bottom"
          delay={{ show: 250, hide: 400 }}
          overlay={renderTooltip}
        >
          <Button style={layBtn}>thefruitporuim.com</Button>
        </OverlayTrigger>
      </div>
    </>
  );
};

export default WebName;
