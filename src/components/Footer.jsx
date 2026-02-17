import React from 'react'
import './Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">Legal Solution At A Click</h3>
            <p className="footer-description">
              Your trusted partner for all legal and business solutions. 
              Efficiency, Trust, and Accessibility at your service.
            </p>
          </div>
          <div className="footer-section">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              <li>
                <button 
                  onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })}
                  className="footer-link"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                  className="footer-link"
                >
                  Services
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="footer-link"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h4 className="footer-heading">Contact Info</h4>
            <p className="footer-text">
              <strong>Email:</strong> legalsolutionataclick@gmail.com
            </p>
            <p className="footer-text">
              <strong>Phone:</strong> +91 7507155537 / +91 9130041234
            </p>
            <p className="footer-text">
              <strong>Address:</strong> Flat no 06, Jairaj Hsg Society,<br />
              Kasaba Peth, Pune 411011
            </p>
          </div>
          <div className="footer-section">
            <h4 className="footer-heading">Business License</h4>
            <p className="footer-text">
              Shop Act Registered
            </p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {currentYear} Legal Solution At A Click. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
