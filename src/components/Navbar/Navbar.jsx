import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import "./Navbar.css";
import logomst from "../../assets/logomst.png";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <h4 style={{ color: "white" }}>MST Networks</h4>
        {/* <img src={logomst} alt="header img" /> */}
        {/* add image tag here */}
      </div>
      <ul className="app__navbar-links">
        <li className="p__opensans">
          <a href="./">Home</a>
        </li>
        <li className="p__opensans">
          <a href="./about">About</a>
        </li>
        <li className="p__opensans">
          <a href="./service">Service</a>
        </li>
        <li className="p__opensans">
          <a href="./faqs">FAQs</a>
        </li>
        <li className="p__opensans">
          <a href="./team">Team</a>
        </li>
        <li className="p__opensans">
          <a href="./testimonals">Testimonals</a>
        </li>
      </ul>
      <div className="app__navbar-login">
        <a href="/ContactUs">
          <button type="button" className="custom__button">
            Contact us
          </button>
        </a>
      </div>
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu
          color="#fff"
          fontSize={27}
          onClick={() => setToggleMenu(true)}
        />
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <MdOutlineRestaurantMenu
              fontSize={27}
              className="overlay__close"
              onClick={() => setToggleMenu(false)}
            />
            <ul className="app__navbar-smallscreen_links">
              <li>
                <a href="./home" onClick={() => setToggleMenu(false)}>
                  Home
                </a>
              </li>
              <li>
                <a href="./about" onClick={() => setToggleMenu(false)}>
                  About
                </a>
              </li>
              <li>
                <a href="./service" onClick={() => setToggleMenu(false)}>
                  Service
                </a>
              </li>
              <li>
                <a href="./faqs" onClick={() => setToggleMenu(false)}>
                  FAQs
                </a>
              </li>
              <li>
                <a href="./Team" onClick={() => setToggleMenu(false)}>
                  Team
                </a>
              </li>
              <li>
                <a href="./testimonals" onClick={() => setToggleMenu(false)}>
                  Testimonals
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
