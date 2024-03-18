import homeimg from "../../assets/home-img.png";
import "./Home.css";
import Navbar from "../../components/Navbar/Navbar";
import ser1 from "../../assets/ser1.png";
import ser2 from "../../assets/ser2.png";
import ser3 from "../../assets/ser3.png";
import ser4 from "../../assets/ser4.png";
import ser5 from "../../assets/ser5.png";
import ser6 from "../../assets/ser6.png";
import React, { useState } from "react";
import Service from "../Service/Service";

const Home = () => {
  const [showDetails, setShowDetails] = useState(false);

  const handleLearnMoreClick = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div>
      <Navbar></Navbar>
      <div className="app__header app__wrapper section_padding" id="home">
        <div className="app__wrapper_info">
          <p
            className="p__poppins"
            style={{ margin: "2rem 0", color: "white" }}
          >
            {" "}
            Cyber security Solutions for
          </p>
          <h1 className="app__header_h1">
            Organizations with Critical Infrastructure
          </h1>
          <p
            className="p__poppins"
            style={{ margin: "2rem 0", color: "white" }}
          >
            Sit tellus lobortis sed senectus vivamus molestie. Condimentum
            valupat morbi facilisis quam scelersique sapien.Et,penatibus akiquam
            amet telius
          </p>
          <button type="button" className="custom__button">
            Discover more
          </button>
        </div>
        <div className="app__wrapper_img">
          <img src={homeimg} alt="header img" />
        </div>
      </div>

      <Service></Service>
      <footer className="footer">
      <div className="footer-container">
        <p className="footer-text">
          Made with <span className="heart-icon">♥</span> by MST Network
          Team
        </p>
        <ul className="footer-links">
          <li>
            <a href="/services">Services</a>
          </li>
          <li>
            <a href="/team">Team</a>
          </li>
          <li>
            <a href="/about-us">About us</a>
          </li>
          <li>
            <a href="/contact-us">Contact us</a>
          </li>
        </ul>
      </div>
    </footer>

    </div>
  );
};

export default Home;
