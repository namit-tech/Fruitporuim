import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import Login from './login/Login'; // Adjust the import path as needed


const GenieButton = () => {
  const [isMinimized, setIsMinimized] = useState(false);
  const [modalShow, setModalShow] = useState(false);

  const springProps = useSpring({
    transform: isMinimized ? 'scale(0) translateY(-300px)' : 'scale(1) translateY(0)',
    opacity: isMinimized ? 0 : 1,
    config: { tension: 170, friction: 26 }
  });

  const handleToggle = () => {
    if (!isMinimized) {
      setIsMinimized(true);
      setTimeout(() => setModalShow(true), 500); // Show modal after animation completes
    } else {
      setIsMinimized(false);
      setModalShow(false); // Hide modal immediately
    }
  };

  return (
    <div className="genie-container">
      <button onClick={handleToggle} className="toggle-button user-login">
        <p>{modalShow ? 'Maximize' : 'Login / Sign up'}</p>
      </button>
      <animated.div style={springProps} className="genie-box">
        {modalShow && <Login show={modalShow} onHide={() => setModalShow(false)} />}
      </animated.div>
    </div>
  );
};

export default GenieButton;
