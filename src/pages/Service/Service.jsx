import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import ServiceCom from '../../components/ServiceCom/ServiceCom'
// import Footer from '../../components/Footer/Footer'

const Service = () => {
  return (
    <div>
      <Navbar />
      <ServiceCom />
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

export default Service
