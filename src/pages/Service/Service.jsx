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
      <Navbar></Navbar>
      <div className="service-page">
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
          <div className={`card ${showDetails ? "expanded" : ""}`} onClick={() => window.location.href = "/RedTeamServices"}>
            <img className="img-ser" src={ser1} alt="Service 1 Logo" />
            <h3>Red Team Services</h3>
            <p>
              Proactive Red Team services assess cyber defenses; physical,
              mobile, and digital, fortifying infrastructure against threats.
            </p>
          </div>

          <div className="card" onClick={() => window.location.href = "/CloudSecurityServices"}>
            <img className="img-ser" src={ser2} alt="Service 2 Logo" />
            <h3>Cloud Security</h3>
            <p>
              Comprehensive cloud security assessments, robust controls,
              encryption, and real-time threat detection ensure compliance and
              resilience.
            </p>
          </div>

          <div className="card" onClick={() => window.location.href = "/PaymentAppServices"}>
            <img className="img-ser" src={ser3} alt="Service 1 Logo" />
            <h3>Payment Application/ Gateway Security</h3>
            <p>
              We secure financial transactions with thorough assessments, robust
              tools, and compliance assurance.
            </p>
          </div>

          <div className="card" onClick={() => window.location.href = "/IotServices"}>
            <img className="img-ser" src={ser4} alt="Service 1 Logo" />
            <h3>IoT & OT Services</h3>
            <p>
              Expert IoT and OT security fortify digital defences; proactive
              assessments enhance organizational resilience.
            </p>
          </div>

          <div className="card">
            <img className="img-ser" src={ser5} alt="Service 1 Logo" />
            <h3>Incident responder</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur. Et ornare posuere quisque
              morbi egestas convallis.{" "}
            </p>
          </div>

          <div className="card">
            <img className="img-ser" src={ser6} alt="Service 1 Logo" />
            <h3>Weekly report</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur. Et ornare posuere quisque
              morbi egestas convallis.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
