// src/App.js
import React from "react";
import SwiperSlider from "./components/SwipeSlider";
import "./App.css";
import NavBar from "./components/navbar/Navbar";
import Listing from "./components/Listings/Listing";
import CardData from "./components/Cards/CardData";
import Footer from "./components/Footer/Footer";
import Fruits from "./components/fruits/Fruits";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
} from "react-router-dom";


function App() {
  return (
    <>
     <Router>
      <div>
        <NavBar />
        <div> {/* Adjust height based on your footer height */}
          <Routes>
            <Route path="/" element={<><Listing /><CardData /></>} />
            <Route path="/fruits" element={<Fruits/>} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
    </>
  );
}

export default App;
