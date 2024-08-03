// src/App.js
import React, { useEffect } from "react";
import SwiperSlider from "./components/coursel/SwipeSlider";
import "./App.css";
import NavBar from "./components/navbar/Navbar";
import Listing from "./components/Listings/Listing";
import CardData from "./components/Cards/CardData";
import Footer from "./components/Footer/Footer";
import Fruits from "./components/fruits/Fruits";
import "boxicons/css/boxicons.min.css";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Contact from "./components/Footer/contact us/Contact";
import Description from "./components/Cards/desciption page/Description";
import ProductInfo from "./components/Footer/Product Info/ProductInfo";
import Terms from "./components/Footer/Terms and Conditions/Terms";

function App() {
  const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return null;
  };

  return (
    <>
      <div className="main-class">
        <Router>
          <ScrollToTop />
          <div>
            <NavBar />
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <SwiperSlider />
                  </>
                }
              />
            </Routes>
            <Listing />
            <div>
              <Routes>
                <Route
                  path="/terms"
                  element={
                    <>
                      <Terms />
                    </>
                  }
                />
                <Route
                  path="/productinfo"
                  element={
                    <>
                      <ProductInfo />
                    </>
                  }
                />
              </Routes>
            </div>
            <div>
              {" "}
              {/* Adjust height based on your footer height */}
              <Routes>
                <Route
                  path="/"
                  element={
                    <>
                      <CardData />
                    </>
                  }
                />
                <Route path="/fruits" element={<Fruits />} />
              </Routes>
              {/* <Contact /> */}
              <Routes>
                <Route path="/description" element={<Description />} />
              </Routes>
            </div>
          </div>
          <Footer />
        </Router>
      </div>
    </>
  );
}

export default App;
