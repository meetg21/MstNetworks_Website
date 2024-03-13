import React from "react";
import "./PaymentAppServices.css";
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

const PaymentAppServices = () => {
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
          <div className="card-pay">
            <img src={ser3} alt="Logo 1" />
            <h3>Comprehensive Assessment</h3>
            <p>
              Thorough analysis of payment applications and gateways to identify
              vulnerabilities and weaknesses.
            </p>
          </div>
          <div className="card-pay">
            <img src={ser4} alt="Logo 2" />
            <h3>Industry-Leading Tools and Technologies</h3>
            <p>
              Utilization of industry-leading tools such as Amazon Inspector,
              Microsoft Azure Security Center, and Google Cloud Security Command
              Center for vulnerability identification.
            </p>
          </div>
          <div className="card-pay">
            <img src={ser5} alt="Logo 3" />
            <h3>PCI DSS Compliance Assurance</h3>
            <p>
              Collaboration to ensure compliance with Payment Card Industry Data
              Security Standard (PCI DSS) requirements, including secure
              development practices and regular security assessments.
            </p>
          </div>
          <div className="card-pay">
            <img src={ser1} alt="Logo 3" />
            <h3>Data Encryption and Access Controls</h3>
            <p>
              Implementation of encryption for payment data at rest and in
              transit, along with multi-factor authentication for sensitive
              transactions.
            </p>
          </div>
          <div className="card-pay">
            <img src={ser2} alt="Logo 3" />
            <h3>Real-time Monitoring and Alerting</h3>
            <p>
              Deployment of monitoring solutions to detect and alert on
              suspicious activities, ensuring prompt response to potential
              threats.
            </p>
          </div>
          <div className="card-pay">
            <img src={ser6} alt="Logo 3" />
            <h3>Proactive Threat Intelligence</h3>
            <p>
              Provision of threat intelligence services to stay ahead of
              emerging threats and adapt security measures accordingly.
            </p>
          </div>
          <div className="card-pay">
            <img src={ser5} alt="Logo 3" />
            <h3>Incident Response Support</h3>
            <p>
              24/7 availability of security experts to provide support and
              guidance in responding to security incidents swiftly and
              effectively.
            </p>
          </div>
          <div className="card-pay">
            <img src={ser3} alt="Logo 3" />
            <h3>Customer Trust and Brand Protection</h3>
            <p>
            Assurance that payment transactions are protected with the highest level of security and compliance, maintaining customer trust in the brand.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentAppServices;
