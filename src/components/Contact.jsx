import React from 'react'
import './Contact.css'

const Contact = () => {
  const handleWhatsApp = () => {
    window.open(`https://wa.me/919130041234`, '_blank')
  }

  const handleEmail = () => {
    window.location.href = 'mailto:legalsolutionataclick@gmail.com'
  }

  const handlePhone = (number) => {
    window.location.href = `tel:${number}`
  }

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <div className="contact-header">
          <h2 className="contact-title">Get In Touch</h2>
          <p className="contact-subtitle">
            We're here to help you with all your legal and business needs
          </p>
        </div>
        <div className="contact-content">
          <div className="contact-info">
            <div className="info-card">
              <div className="info-icon">📍</div>
              <h3 className="info-title">Address</h3>
              <p className="info-text">
                Flat no 06, Jairaj Hsg Society<br />
                Kasaba Peth, Pune 411011<br />
                Maharashtra, India
              </p>
            </div>
            <div className="info-card">
              <div className="info-icon">📧</div>
              <h3 className="info-title">Email</h3>
              <p className="info-text">
                <a 
                  href="mailto:legalsolutionataclick@gmail.com"
                  className="contact-link"
                  onClick={(e) => {
                    e.preventDefault()
                    handleEmail()
                  }}
                >
                  legalsolutionataclick@gmail.com
                </a>
              </p>
            </div>
            <div className="info-card">
              <div className="info-icon">📞</div>
              <h3 className="info-title">Phone</h3>
              <p className="info-text">
                <a 
                  href="tel:7507155537"
                  className="contact-link"
                  onClick={(e) => {
                    e.preventDefault()
                    handlePhone('7507155537')
                  }}
                >
                  +91 7507155537
                </a>
                <br />
                <a 
                  href="tel:9130041234"
                  className="contact-link"
                  onClick={(e) => {
                    e.preventDefault()
                    handlePhone('9130041234')
                  }}
                >
                  +91 9130041234
                </a>
              </p>
            </div>
            <div className="info-card">
              <div className="info-icon">💬</div>
              <h3 className="info-title">WhatsApp</h3>
              <p className="info-text">
                <button 
                  onClick={handleWhatsApp}
                  className="whatsapp-btn"
                >
                  Chat on WhatsApp
                </button>
              </p>
            </div>
          </div>
          <div className="contact-map">
            <div className="map-placeholder">
              <p>📍 Pune, Maharashtra</p>
              <p className="map-address">
                Flat no 06, Jairaj Hsg Society<br />
                Kasaba Peth, Pune 411011
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
