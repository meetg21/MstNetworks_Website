import React from "react";
import "./IotServices.css";
import ser1 from "../../assets/ser1.png";
import ser2 from "../../assets/ser2.png";
import ser3 from "../../assets/ser3.png";
import ser4 from "../../assets/ser4.png";
import ser5 from "../../assets/ser5.png";
import ser6 from "../../assets/ser6.png";
import infra from "../../assets/infra.jpg";
import publicimg from "../../assets/publicimg.jpg";
import redimg from "../../assets/redimg.jpg";
import Navbar from "../../components/Navbar/Navbar";

const IotServices = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className="red-service-container">
        <h1 className="red-service-heading">
          Payment Application / Gateway Security{" "}
        </h1>
        <p className="red-service-description">
          Our Payment Application/Gateway Security Service offers comprehensive
          analysis and utilization of industry-leading tools to ensure robust
          security measures. Collaboration ensures compliance with PCI DSS
          requirements and implementation of encryption for payment data.
          Real-time monitoring, proactive threat intelligence, and incident
          response support further bolster security, maintaining customer trust
          and brand integrity.
        </p>
        <h2 className="sub-heading">
          Elevate your payment application/gateway security with our expertly
          crafted cybersecurity solutions
        </h2>
        <p className="sub-heading-content">
          Our service ensures meticulous assessments, integration of robust
          tools, implementation of encryption protocols, and provides thorough
          compliance assurance measures.
        </p>
        <div className="card-container-red">
          <div className="card-iot">
            <img src={ser3} alt="Logo 1" />
            <h3>Comprehensive Assessment</h3>
            <p>
              Thorough analysis of payment applications and gateways to identify
              vulnerabilities and weaknesses.
            </p>
          </div>
          <div className="card-iot">
            <img src={ser4} alt="Logo 2" />
            <h3>Industry-Leading Tools and Technologies</h3>
            <p>
              Utilization of industry-leading tools such as Amazon Inspector,
              Microsoft Azure Security Center, and Google Cloud Security Command
              Center for vulnerability identification.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default IotServices;
