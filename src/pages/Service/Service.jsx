import ser2 from "../../assets/ser2.png";
import ser3 from "../../assets/ser3.png";
import ser4 from "../../assets/ser4.png";
import ser5 from "../../assets/ser5.png";
import ser6 from "../../assets/ser6.png";
import React, { useState } from "react";
import "./Service.css";
import ser1 from "../../assets/ser1.png";
import Navbar from "../../components/Navbar/Navbar";

const Service = () => {
  const [showDetails, setShowDetails] = useState(false);

  const handleLearnMoreClick = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div>
      {/* <Navbar></Navbar> */}
      <div id='services'className="service-page">
        {/* Heading Content */}
        <div className="heading-content">
          <h1>What we offer</h1>
          <p style={{ color: "grey" }}>
            Lorem ipsum dolor sit amet consectetuer adipiscing elitenean commodo
            ligula eget dolorenean massa.
          </p>
        </div>

        {/* Cards */}
        <div className={`card-container ${showDetails ? "expand" : ""}`}>
          {/* Card 1 */}
          <div className={`card ${showDetails ? "expanded" : ""}`}>
            <img className="img-ser" src={ser1} alt="Service 1 Logo" />
            <h3>Threat Intelligence</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <button onClick={handleLearnMoreClick} className="custom__button">
              {showDetails ? "Show Less" : "Learn More"}
            </button>
            {showDetails && (
              <div className="details">
                <h4>Heading 1</h4>
                <h4>Heading 2</h4>
                <h4>Heading 3</h4>
              </div>
            )}
          </div>

          <div className="card">
            <img className="img-ser" src={ser2} alt="Service 2 Logo" />
            <h3>Security Assessment</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>

          <div className="card">
            <img className="img-ser" src={ser3} alt="Service 1 Logo" />
            <h3>Compromise Assessment</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>

          <div className="card">
            <img className="img-ser" src={ser4} alt="Service 1 Logo" />
            <h3>Incident response</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>

          <div className="card">
            <img className="img-ser" src={ser5} alt="Service 1 Logo" />
            <h3>Security Training</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>

          <div className="card">
            <img className="img-ser" src={ser6} alt="Service 1 Logo" />
            <h3>Cloud Security</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
