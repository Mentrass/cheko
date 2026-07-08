import React, { useState } from 'react';
import { Mail, Send } from 'lucide-react';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTimeout(() => setSubmitted(true), 1000);
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <h2 className="section-title">Book a Show</h2>

        <div className="contact-grid">
          <div className="contact-info glass-card fade-in">
            <h3>Get in Touch</h3>
            <p className="contact-desc">
              Interested in booking Cheko Soto for your next festival, venue, or private event? Send us a message and we'll get back to you promptly.
            </p>

            <div className="contact-methods">
              <a href="mailto:Chekoroots@gmail.com" className="contact-method">
                <div className="icon-box"><Mail size={24} /></div>
                <span>Chekoroots@gmail.com</span>
              </a>
              <a href="https://www.facebook.com/sergio.soto.92123" target="_blank" rel="noreferrer" className="contact-method">
                <div className="icon-box facebook"><FaFacebook size={24} /></div>
                <span>Follow on Facebook</span>
              </a>
              <a href="https://www.instagram.com/soto.cheko" target="_blank" rel="noreferrer" className="contact-method">
                <div className="icon-box instagram"><FaInstagram size={24} /></div>
                <span>Follow on Instagram</span>
              </a>
            </div>
          </div>

          <div className="contact-form-wrapper glass-card fade-in" style={{ animationDelay: '0.2s' }}>
            {submitted ? (
              <div className="success-message text-center">
                <div className="success-icon">✓</div>
                <h3>Message Sent!</h3>
                <p>Thank you for reaching out. We will respond soon.</p>
                <button className="btn btn-outline mt-4" onClick={() => setSubmitted(false)}>Send Another</button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Name / Organization</label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message Details</label>
                  <textarea
                    id="message"
                    rows="4"
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary" style={{width: '100%'}}>
                  Send Message <Send size={18} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
