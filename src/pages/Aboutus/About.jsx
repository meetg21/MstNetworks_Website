// import React, { useEffect } from 'react';
// import Navbar from "../../components/Navbar/Navbar";
// import './About.css';


// function About() {
//   useEffect(() => {
//     const paragraphs = document.querySelectorAll('.about-page p');

//     paragraphs.forEach(paragraph => {
//       const box = document.createElement('span');
//       box.classList.add('popup-box');
//       paragraph.appendChild(box);
//     });
//   }, []);

//   return (
//     <div className='about-page'>
//     <Navbar />
//       <div className="about-container">
//       <div><h1>About Us</h1></div>
//       <p>
//         Vision:<br></br>
//         <br></br>
//         At MST Networks, we want everyone to feel safe online. We're working towards a world where cybercrime isn't a big problem anymore.
//         We aim to be leaders in protecting digital systems and helping our clients stay safe online.
//         Our goal is to change how cybersecurity works, making it easier for people and businesses to use the internet securely.
//         We believe that by keeping everyone safe online, we can help businesses grow and encourage new ideas and trust in the digital world.
//       </p>
//       <p>
//         Mission:<br></br>
//         <br></br>
//         At MST Networks, we're on a mission to protect our clients from cyber threats.
//         Using the latest technology and strategies, we help them safeguard their data and reputation.
//         We believe in building strong partnerships with our clients, understanding their needs, and providing tailored solutions.
//         Our goal is to stay ahead of cyber risks, empowering organizations to thrive in the digital world while staying safe.
//         We're committed to being a trusted guardian of our clients' digital assets, ensuring their success and security in today's ever-changing cyber landscape.
//       </p>
//       <p>
//         Company Establishment:<br></br>
//         <br></br>
//         MST Networks started in 2023, a cybersecurity expert, to tackle rising online threats.
//         Our focus is on innovation, trust, and making clients happy.
//         We've been dedicated to giving top-notch cybersecurity solutions since the beginning,
//         surpassing industry standards and delivering real benefits to our clients.
//       </p>
//       <p>
//         Team Details:<br></br>
//         <br></br>
//         At MST Networks, our team is a mix of experts, including cybersecurity specialists,
//         ethical hackers, software engineers, web developers, marketing analysts, and business strategists.
//         Each person brings their own skills and ideas, helping us tackle all kinds of cybersecurity issues.
//         We work together, always learning and staying updated on the latest trends to give our clients the best solutions.
//         Our goal is to protect our clients' digital stuff and help them succeed in today's connected world.
//       </p>
//     </div>
//       <footer className="footer">
//         <div className="footer-container">
//           <p className="footer-text">
//             Made with <span className="heart-icon">♥</span> by MST Network
//             Team
//           </p>
//           <ul className="footer-links">
//             <li>
//               <a href="/services">Services</a>
//             </li>
//             <li>
//               <a href="/team">Team</a>
//             </li>
//             <li>
//               <a href="/about">About us</a>
//             </li>
//             <li>
//               <a href="/contact-us">Contact us</a>
//             </li>
//           </ul>
//         </div>
//       </footer>

//     </div>
    
//   )
// }

// export default About;
import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import AboutCom from "../../components/AboutCom/AboutCom"

const About = () => {
  return (
    <div>
      <Navbar />
      <AboutCom />
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
    </div>
  )
}

export default About
