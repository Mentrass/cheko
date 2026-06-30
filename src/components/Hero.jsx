import React from 'react';
import { Calendar, PlayCircle } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-overlay"></div>
      <div className="container hero-content">
        <h1 className="hero-title fade-in">
          CHEKO <span className="highlight">SOTO</span>
        </h1>
        <p className="hero-subtitle fade-in" style={{ animationDelay: '0.2s' }}>
          Full Reggae Band | Latin Ska | Sweet Roots Vibe
        </p>
        <p className="hero-description fade-in" style={{ animationDelay: '0.4s' }}>
          Based in the Cowichan Valley, sharing a strong message of love and consciousness.
        </p>
        
        <div className="hero-actions fade-in" style={{ animationDelay: '0.6s' }}>
          <a href="#music" className="btn btn-primary">
            <PlayCircle size={20} /> Listen Now
          </a>
          <a href="#contact" className="btn btn-outline">
            <Calendar size={20} /> Book a Show
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
