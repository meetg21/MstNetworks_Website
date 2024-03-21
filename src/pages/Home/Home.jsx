import homeimg from "../../assets/home-img.png";
import "./Home.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import ser1 from "../../assets/ser1.png";
import ser2 from "../../assets/ser2.png";
import ser3 from "../../assets/ser3.png";
import ser4 from "../../assets/ser4.png";
import ser5 from "../../assets/ser5.png";
import ser6 from "../../assets/ser6.png";
import React, { useState } from "react";
import Service from "../../components/ServiceCom/ServiceCom";
import AboutCom from "../../components/AboutCom/AboutCom";
import ContactCom from "../../components/ContactCom/ContactCom";

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
          {/* <p
            className="p__poppins"
            style={{ margin: "2rem 0", color: "white" }}
          >
            {" "}
            Cyber security Solutions for
          </p> */}
          <h1 className="app__header_h1">
            Redifining Cybersecurity Excellence:Your trusted Partner.
          </h1>
          <p
            className="p__poppins"
            style={{ margin: "2rem 0", color: "white" }}
          >
            Our comprehensive range of service offerings enables the identification,
            protection, and management of security vulnerabilities within your
            critical infrastructure, ensuring the safeguarding of your digital
            assets and the attainment of your desired cybersecurity objectives.
          </p>
          <a href="/about">
          <button type="button" className="custom__button">
            Discover more
          </button>
          </a>
        </div>
        <div className="app__wrapper_img">
          <img src={homeimg} alt="header img" />
        </div>
      </div>

      <Service />
      <AboutCom />
      <ContactCom />
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
            <a href="/about">About us</a>
          </li>
          <li>
            <a href="/contact-us">Contact us</a>
          </li>
        </ul>
      </div>
    </footer>
    {/* <Footer /> */}
    </div>
  );
};

export default Home;
