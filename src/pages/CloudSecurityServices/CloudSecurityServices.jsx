// import React from "react";
// import "./RedTeamServices.css";
// import ser1 from "../../assets/ser1.png";
// import ser2 from "../../assets/ser2.png";
// import ser3 from "../../assets/ser3.png";
// import ser4 from "../../assets/ser4.png";
// import ser5 from "../../assets/ser5.png";
// import ser6 from "../../assets/ser6.png";
// import infra from "../../assets/infra.jpg";
// import publicimg from "../../assets/publicimg.jpg";
// import redimg from "../../assets/redimg.jpg";
// import Navbar from "../../components/Navbar/Navbar";

// const CloudSecurityServices = () => {
//   return (
//     <>
//       <Navbar></Navbar>
//       <div className="red-service-container">
//         <h1 className="red-service-heading">Cloud Security</h1>
//         <p className="red-service-description">
//           We conduct comprehensive assessments of cloud infrastructure
//           configurations, access controls, and data storage practices, utilizing
//           cutting-edge tools like Amazon Inspector and Microsoft Azure Security
//           Center. Robust access controls are enforced through IAM solutions such
//           as AWS IAM and Azure Active Directory. Data encryption is ensured for
//           both transit and rest using services like AWS Key
//         </p>
//         <h2 className="sub-heading">
//           Elevate your cloud security with our expertly crafted cybersecurity
//           solutions.
//         </h2>
//         <p className="sub-heading-content">
//           Our Cloud Security solutions encompass comprehensive assessments,
//           cutting-edge tools, robust access controls, encryption, network
//           security measures, threat detection, logging, incident response
//           planning, and compliance assurance.
//         </p>
//         <div className="card-container-red">
//           <div className="card-red">
//             <img src={ser3} alt="Logo 1" />
//             <h3>Comprehensive Assessment</h3>
//             <p>
//               Thorough evaluation of cloud infrastructure configurations, access
//               controls, and data storage practices.
//             </p>
//           </div>
//           <div className="card-red">
//             <img src={ser4} alt="Logo 2" />
//             <h3>Cutting-Edge Tools</h3>
//             <p>
//               Utilization of industry-leading tools such as Amazon Inspector,
//               Microsoft Azure Security Center, and Google Cloud Security Command
//               Center for vulnerability identification.
//             </p>
//           </div>
//           <div className="card-red">
//             <img src={ser5} alt="Logo 3" />
//             <h3>Robust Access Controls</h3>
//             <p>
//               Implementation of IAM solutions like AWS IAM, Azure Active
//               Directory, or Google Cloud IAM to enforce secure access policies.
//             </p>
//           </div>
//           <div className="card-red">
//             <img src={ser1} alt="Logo 3" />
//             <h3>Data Encryption</h3>
//             <p>
//               Enforcement of encryption for data in transit and at rest using
//               services like AWS Key Management Service (KMS), Azure Key Vault,
//               or Google Cloud KMS.
//             </p>
//           </div>
//           <div className="card-red">
//             <img src={ser2} alt="Logo 3" />
//             <h3>Network Security Measures</h3>
//             <p>
//               Implementation of Virtual Private Clouds (VPCs), Network Security
//               Groups (NSGs), and Cloud Firewalls for network security.
//             </p>
//           </div>
//           <div className="card-red">
//             <img src={ser6} alt="Logo 3" />
//             <h3>Threat Detection and Prevention</h3>
//             <p>
//               Leveraging IDS/IPS solutions like AWS GuardDuty, Azure Security
//               Center, or Google Cloud Security Scanner for real-time threat
//               detection and prevention.
//             </p>
//           </div>
//           <div className="card-red">
//             <img src={ser5} alt="Logo 3" />
//             <h3>Logging and Monitoring</h3>
//             <p>
//               Implementation of logging and monitoring solutions such as AWS
//               CloudTrail, Azure Monitor, or Google Cloud Audit Logs for
//               compliance and security monitoring.
//             </p>
//           </div>
//           <div className="card-red">
//             <img src={ser3} alt="Logo 3" />
//             <h3>Incident Response Planning</h3>
//             <p>
//               Provision of incident response planning and management services,
//               including the development of incident response playbooks and
//               regular tabletop exercises.
//             </p>
//           </div>
//           <div className="card-red">
//             <img src={ser4} alt="Logo 3" />
//             <h3>Compliance Assurance</h3>
//             <p>
//               Ensuring compliance with industry regulations and standards
//               through proactive security measures and audit trails.
//             </p>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default CloudSecurityServices;
import React, { useEffect } from "react";
import "./RedTeamServices.css";
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

const CloudSecurityServices = () => {
  useEffect(() => {
    const animateCardsOnScroll = () => {
      const cards = document.querySelectorAll(".card-red");
      cards.forEach((card) => {
        const cardPosition = card.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.2;
        if (cardPosition < screenPosition) {
          card.classList.add("card-appear");
        } else {
          card.classList.remove("card-appear");
        }
      });
    };
    window.addEventListener("scroll", animateCardsOnScroll);
    animateCardsOnScroll();
    return () => window.removeEventListener("scroll", animateCardsOnScroll);
  }, []);

  return (
    <>
      <Navbar></Navbar>
      <div className="red-service-container">
        <h1 className="red-service-heading">Cloud Security</h1>
        <p className="red-service-description">
          We conduct comprehensive assessments of cloud infrastructure
          configurations, access controls, and data storage practices, utilizing
          cutting-edge tools like Amazon Inspector and Microsoft Azure Security
          Center. Robust access controls are enforced through IAM solutions such
          as AWS IAM and Azure Active Directory. Data encryption is ensured for
          both transit and rest using services like AWS Key
        </p>
        <h2 className="sub-heading">
          Elevate your cloud security with our expertly crafted cybersecurity
          solutions.
        </h2>
        <p className="sub-heading-content">
          Our Cloud Security solutions encompass comprehensive assessments,
          cutting-edge tools, robust access controls, encryption, network
          security measures, threat detection, logging, incident response
          planning, and compliance assurance.
        </p>
        <div className="card-container-red">
          <div className="card-red">
            <img src={ser3} alt="Logo 1" />
            <h3>Comprehensive Assessment</h3>
            <p>
              Thorough evaluation of cloud infrastructure configurations, access
              controls, and data storage practices.
            </p>
          </div>
          <div className="card-red">
            <img src={ser4} alt="Logo 2" />
            <h3>Cutting-Edge Tools</h3>
            <p>
              Utilization of industry-leading tools such as Amazon Inspector,
              Microsoft Azure Security Center, and Google Cloud Security Command
              Center for vulnerability identification.
            </p>
          </div>
          <div className="card-red">
            <img src={ser5} alt="Logo 3" />
            <h3>Robust Access Controls</h3>
            <p>
              Implementation of IAM solutions like AWS IAM, Azure Active
              Directory, or Google Cloud IAM to enforce secure access policies.
            </p>
          </div>
          <div className="card-red">
            <img src={ser1} alt="Logo 3" />
            <h3>Data Encryption</h3>
            <p>
              Enforcement of encryption for data in transit and at rest using
              services like AWS Key Management Service (KMS), Azure Key Vault,
              or Google Cloud KMS.
            </p>
          </div>
          <div className="card-red">
            <img src={ser2} alt="Logo 3" />
            <h3>Network Security Measures</h3>
            <p>
              Implementation of Virtual Private Clouds (VPCs), Network Security
              Groups (NSGs), and Cloud Firewalls for network security.
            </p>
          </div>
          <div className="card-red">
            <img src={ser6} alt="Logo 3" />
            <h3>Threat Detection and Prevention</h3>
            <p>
              Leveraging IDS/IPS solutions like AWS GuardDuty, Azure Security
              Center, or Google Cloud Security Scanner for real-time threat
              detection and prevention.
            </p>
          </div>
          <div className="card-red">
            <img src={ser5} alt="Logo 3" />
            <h3>Logging and Monitoring</h3>
            <p>
              Implementation of logging and monitoring solutions such as AWS
              CloudTrail, Azure Monitor, or Google Cloud Audit Logs for
              compliance and security monitoring.
            </p>
          </div>
          <div className="card-red">
            <img src={ser3} alt="Logo 3" />
            <h3>Incident Response Planning</h3>
            <p>
              Provision of incident response planning and management services,
              including the development of incident response playbooks and
              regular tabletop exercises.
            </p>
          </div>
          <div className="card-red">
            <img src={ser4} alt="Logo 3" />
            <h3>Compliance Assurance</h3>
            <p>
              Ensuring compliance with industry regulations and standards
              through proactive security measures and audit trails.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CloudSecurityServices;
