// import ser2 from "../../assets/ser2.png";
// import ser3 from "../../assets/ser3.png";
// import ser4 from "../../assets/ser4.png";
// import ser5 from "../../assets/ser5.png";
// import ser6 from "../../assets/ser6.png";
// import React, { useState } from "react";
// import "./Service.css";
// import ser1 from "../../assets/ser1.png";
// import Navbar from "../../components/Navbar/Navbar";

// const Service = () => {
//   const [showDetails, setShowDetails] = useState(false);

//   const handleLearnMoreClick = () => {
//     setShowDetails(!showDetails);
//   };

//   return (
//     <div>
      
//       <div className="service-page">
//         {/* Heading Content */}
//         <div className="heading-content">
//           <h1>What we offer</h1>
//           <p style={{ color: "grey" }}>
//             Lorem ipsum dolor sit amet consectetuer adipiscing elitenean commodo
//             ligula eget dolorenean massa.
//           </p>
//         </div>

//         {/* Cards */}
//         <div className={`card-container ${showDetails ? "expand" : ""}`}>
//           {/* Card 1 */}
//           <div className={`card ${showDetails ? "expanded" : ""}`}>
//             <img className="img-ser" src={ser1} alt="Service 1 Logo" />
//             <h3>Threat Intelligence</h3>
//             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//             <button onClick={handleLearnMoreClick} className="custom__button">
//               {showDetails ? "Show Less" : "Learn More"}
//             </button>
//             {showDetails && (
//               <div className="details">
//                 <h4>Heading 1</h4>
//                 <h4>Heading 2</h4>
//                 <h4>Heading 3</h4>
//               </div>
//             )}
//           </div>

//           <div className="card">
//             <img className="img-ser" src={ser2} alt="Service 2 Logo" />
//             <h3>Security Assessment</h3>
//             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//           </div>

//           <div className="card">
//             <img className="img-ser" src={ser3} alt="Service 1 Logo" />
//             <h3>Compromise Assessment</h3>
//             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//           </div>

//           <div className="card">
//             <img className="img-ser" src={ser4} alt="Service 1 Logo" />
//             <h3>Incident response</h3>
//             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//           </div>

//           <div className="card">
//             <img className="img-ser" src={ser5} alt="Service 1 Logo" />
//             <h3>Security Training</h3>
//             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//           </div>

//           <div className="card">
//             <img className="img-ser" src={ser6} alt="Service 1 Logo" />
//             <h3>Cloud Security</h3>
//             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Service;

import ser2 from '../../assets/ser2.png'
import ser3 from '../../assets/ser3.png'
import ser4 from '../../assets/ser4.png'
import ser5 from '../../assets/ser5.png'
import ser6 from '../../assets/ser6.png'

import React from 'react';
import './Service.css';
import ser1 from '../../assets/ser1.png';

const Service = () => {

  return (
    <div className="service-page" id='service'>
      {/* Heading Content */}
      <div className="heading-content">
        <h1>What we offer</h1>
        <p className='ser-para' style={{ color: 'grey' }}>Lorem ipsum dolor sit amet consectetuer adipiscing elitenean commodo ligula eget dolorenean massa.</p>
      </div>

      <div className="card-container">
        <div className="card">
          <img className='img-ser' src={ser1} alt="Service 2 Logo" />
          <h3>Red Team Service</h3>
          <p>Empower your cybersecurity defenses with our dynamic Red Team service. Our expert team conducts sophisticated simulations to uncover vulnerabilities, providing actionable insights to fortify your security posture.</p>
        </div>

        <div className="card">
          <img className='img-ser' src={ser6} alt="Service 2 Logo" />
          <h3>Cloud Security</h3>
          <p>Elevate your cloud security with our comprehensive solutions. We assess, fortify, and monitor your cloud infrastructure, ensuring robust protection against evolving threats</p>
        </div>

        <div className="card">
          <img className='img-ser' src={ser3} alt="Service 1 Logo" />
          <h3>Wireless Network Security</h3>
          <p>Transform your wireless security with our specialized solutions. We analyze, fortify, and monitor your wireless networks, ensuring impenetrable defenses against modern cyber threats</p>
        </div>


        <div className="card">
          <img className='img-ser' src={ser4} alt="Service 1 Logo" />
          <h3>devsecops</h3>
          <p> Revolutionize your development with our DevSecOps mastery. Seamlessly embed security into your workflows, automating defenses for uninterrupted protection against evolving threats.</p>
        </div>

        <div className="card">
          <img className='img-ser' src={ser5} alt="Service 1 Logo" />
          <h3>IOT/OT SECURITY</h3>
          <p>Advance IoT/OT security with precision solutions fortified by industry-standard tools. We meticulously analyze, fortify, and monitor your devices, ensuring robust defense against cyber threats</p>
        </div>

        <div className="card">
          <img className='img-ser' src={ser6} alt="Service 1 Logo" />
          <h3>Web application security</h3>
          <p>Strengthen web app security with top tools. Detect, defend, and protect against cyber threats with precision</p>
        </div>
      </div>
    </div>
  );
}

export default Service;

