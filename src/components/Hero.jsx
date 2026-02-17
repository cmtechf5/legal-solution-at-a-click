import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="hero-overlay"></div>
      </div>
      <div className="hero-content">
        <div className="hero-image-container">
          <img src="/Profile.png" alt="Legal Solution At A Click" className="hero-image" />
        </div>
        <div className="hero-text">
          <h1 className="hero-title">Legal Solution At A Click</h1>
          <p className="hero-subtitle">YOUR DIGITAL SERVICE CENTER</p>
          <p className="hero-tagline">Efficiency. Trust. Accessibility.</p>
          <div className="hero-buttons">
            <button 
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn btn-primary"
            >
              Our Services
            </button>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn btn-secondary"
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
