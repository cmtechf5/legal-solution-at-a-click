import React from 'react'
import './Services.css'

const Services = () => {
  const services = [
    {
      icon: '📄',
      title: 'Documentation Services',
      description: 'Professional documentation and legal paperwork services for all your business needs.'
    },
    {
      icon: '⚖️',
      title: 'Legal Consultancy',
      description: 'Expert legal advice and consultation services to guide you through complex legal matters.'
    },
    {
      icon: '🏛️',
      title: 'Government Services',
      description: 'Assistance with government-related documentation and compliance requirements.'
    },
    {
      icon: '✅',
      title: 'License & Registration',
      description: 'Complete support for business licenses, Shop Act registration, and other regulatory compliance.'
    },
    {
      icon: '💼',
      title: 'Business Solutions',
      description: 'Comprehensive business setup and compliance services for entrepreneurs and businesses.'
    },
    {
      icon: '🔍',
      title: 'Verification Services',
      description: 'Document verification and authentication services for various legal and business purposes.'
    }
  ]

  return (
    <section id="services" className="services">
      <div className="services-container">
        <div className="services-header">
          <h2 className="services-title">Our Services</h2>
          <p className="services-subtitle">
            Comprehensive legal and business solutions tailored to your needs
          </p>
        </div>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
        <div className="license-info">
          <div className="license-badge">
            <span className="license-icon">📜</span>
            <div>
              <strong>Business License:</strong> Shop Act Registered
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
