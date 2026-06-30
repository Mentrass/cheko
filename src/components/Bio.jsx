import React from 'react';
import './Bio.css';

const Bio = () => {
  return (
    <section id="about" className="section bio-section">
      <div className="container">
        <h2 className="section-title">About Cheko</h2>
        
        <div className="bio-grid">
          <div className="bio-image-wrapper glass-card fade-in">
            <img 
              src="https://chekosotoroots.weebly.com/uploads/2/5/3/6/25367089/5312957.jpg" 
              alt="Cheko Soto performing" 
              className="bio-image"
            />
            <div className="bio-stats">
              <div className="stat-item">
                <span className="stat-value">1999</span>
                <span className="stat-label">Skanky Roots</span>
              </div>
              <div className="stat-item">
                <span className="stat-value">Intl</span>
                <span className="stat-label">Tours</span>
              </div>
            </div>
          </div>
          
          <div className="bio-content glass-card fade-in" style={{ animationDelay: '0.2s' }}>
            <p className="bio-text">
              <span className="dropcap">B</span>orn in Mexico City, into a large extended family of musicians, Cheko was immediately immersed in the musical traditions of Mexico. Growing up in Guadalajara, he began playing music at the age of 12 and went on to study classical guitar at the University of Guadalajara school of music.
            </p>
            <p className="bio-text">
              Leaving his formal studies, Cheko began to explore other musical styles and sub-cultures and discovered the trombone and latin ska music in the barrios of his hometown. After playing with numerous bands and honing his skills on the trombone, he united with fellow musicians to form his own reggae band, <strong>Skanky Roots</strong>, in 1999.
            </p>
            <p className="bio-text">
              After touring, and a fast and furious rise to success, the band disbanded and Cheko began to travel on his own. Working solo and in collaboration, he played in Sayulita, Western Canada, and Europe. Today Cheko finds himself based on Vancouver Island, a well-rounded and multi-talented musician whose projects span a variety of genres; reggae, jazz, soul, folk, etc.
            </p>
            <p className="bio-text highlight-text">
              Cheko embraces reggae music as the vessel in his journey to express a message of peace, respect and love in this time, and to voice awareness and understanding of our common human struggle in this Babylon system.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bio;
