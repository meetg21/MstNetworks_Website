import React, { useEffect } from "react";
import "./RedTeamServices.css";
import ser3 from "../../assets/ser3.png";
import ser4 from "../../assets/ser4.png";
import ser5 from "../../assets/ser5.png";
import infra from "../../assets/infra.jpeg";
import publicimg from "../../assets/publicimg.jpeg";
import redimg from "../../assets/redimg.jpg";
import Navbar from "../../components/Navbar/Navbar";

const RedService = () => {
  useEffect(() => {
    const animateCardsOnScroll = () => {
      const cards = document.querySelectorAll(".card-red");
      cards.forEach((card) => {
        const cardPosition = card.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.2;
        if (cardPosition < screenPosition) {
          card.classList.add("card-appear");
        } else {
          card.classList.remove("card-appear"); // Remove animation class if card is not in view
        }
      });
    };
    window.addEventListener("scroll", animateCardsOnScroll);
    animateCardsOnScroll(); // Initially trigger the animation for the cards in view
    return () => window.removeEventListener("scroll", animateCardsOnScroll);
  }, []);

  return (
    <>
      <Navbar></Navbar>
      <div className="red-service-container">
        <h1 className="red-service-heading">Red Team Service</h1>
        <p className="red-service-description">
          At MST Networks, our Red Team service is all about proactively
          assessing the strength of your organization's cybersecurity defences.
          We simulate real-world cyber threats, utilizing techniques such as
          penetration testing and social engineering to identify vulnerabilities
          across your systems, networks, and personnel. By uncovering weaknesses
          before malicious actors exploit them, we empower your organization
          with actionable insights to enhance its security posture effectively
        </p>
        <h2 className="sub-heading">
          Your Expert Cyber security solutions tailored to fortify your digital
          defences
        </h2>
        <p className="sub-heading-content">
          We offer Red Team services at MST Networks, conducting proactive
          cybersecurity assessments to identify vulnerabilities and enhance your
          organization's security defenses.
        </p>
        <div className="card-container-red">
          <div className="card-red">
            <img src={ser3} alt="Logo 1" />
            <h3>Physical Security</h3>
            <p>
              We evaluate and fortfiy physical security measures ,conduct
              comprehensive audits to uncover vulnerabilities , suggest
              improvements aligned with industry standards, and mitigate
              potential threats through a blend of technology and employees
              training
            </p>
          </div>
          <div className="card-red">
            <img src={ser4} alt="Logo 2" />
            <h3>Mobile Red Team Services</h3>
            <p>
              We assess and enhance mobile device,app,and network
              security,utilizing penetration testing and threat modeling to
              uncove vulnerabilities, and recommend secure development practices
              and tools to mitigate potential security breaches and attacks.
            </p>
          </div>
          <div className="card-red">
            <img src={ser5} alt="Logo 3" />
            <h3>Digital/Infrastructure Red Team Services</h3>
            <p>
              MST Networks Digital/Infrastructure Red Team Services offer
              thorough assessments and advanced penetration testing to fortify
              digital infrastructures,identifying vulnerabilities and ensuring
              industry-leading security measures against evolving cyber threats
            </p>
          </div>
        </div>

        <div className="image-content-container">
          <div className="image-content">
            <div className="image">
              <img src={publicimg} alt="Logo 1" />
            </div>
            <div className="text-content">
              <h1>Physical Security</h1>
              <ul>
                <li>
                  Assess physical access controls,surveillance systems, and
                  perimeter defences.
                </li>
                <li>
                  Conduct security audits and site asessments to identify
                  vulnerabilities
                </li>
                <li>
                  Recommend enhancements based on industry standards and best
                  practices, integrating technologies like biometrics and access
                  control systems.
                </li>
                <li>
                  Address potential security attacks such as unauthorized
                  acess,taligating, and theft through a combination of physical
                  controls and employee awareness training.
                </li>
              </ul>
            </div>
          </div>
          <div className="image-content">
            <div className="image">
              <img src={redimg} alt="Logo 2" />
            </div>
            <div className="text-content">
              <h1>Mobile Red team services</h1>
              <ul>
                <li>
                  Evaluate mobile devices security, app security, and network
                  security.
                </li>
                <li>
                  Employ penetration testing and threat modelling to uncover
                  vulnerabilities
                </li>
                <li>
                  Provide recommendations for secure development practices,
                  mobile device management(MDM) solutions, and endpoint security
                  tools
                </li>
                <li>
                  Mitigate security attacks such as data breaches, malware
                  infections, and unauthorized access through measures like
                  secure coding practices, encryption, and mobile threat
                  detection solutions.
                </li>
              </ul>
            </div>
          </div>
          <div className="image-content">
            <div className="image">
              <img src={infra} alt="Logo 3" />
            </div>
            <div className="text-content">
              <h1>Digital/Infrastructure Red Team Services</h1>
              <ul>
                <li>
                  At MST Networks, our Digital/Infrastructure Red Team Services
                  are dedicated to ensuring the utmost security of your digital
                  infrastructure. We conduct through assessments of your
                  networks, servers, and cloud environments to evaluate their
                  security posture and identify potential vulnerabilities
                </li>
                <li>
                  Utilizing advanced penetration testing techniques and
                  comprehensive vulnerability assessments, we leace no stone
                  unturned in uncovering weakness within your infrastructure.Our
                  team of experts meticulously analyze network configurtions,
                  server setups, and cloud architectures to identify any
                  potential entry points for malicious actors.
                </li>
                <li>
                  With our Digital/Infrastructure Red Team Services, you can
                  trust that your digital infrastructure is fortified with
                  industry-leading security measures, ensuring the resilience
                  and integrity of your critical assets against evolving cyber
                  threats.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RedService;
