import React from 'react';
import { FaYoutube } from 'react-icons/fa';
import './Videos.css';

const Videos = () => {
  const videoIds = ['gw715rUS3IE', 'pc-IG_VcxHA', 'p0Wzo1Rw-sg', 'ecVpXUXKOn8'];

  return (
    <section id="videos" className="section videos-section">
      <div className="container">
        <h2 className="section-title">Live Performances</h2>
        
        <div className="videos-grid">
          {videoIds.map((id, index) => (
            <div key={id} className="video-card glass-card fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="video-wrapper">
                <iframe 
                  src={`https://www.youtube.com/embed/${id}?wmode=opaque`} 
                  frameBorder="0" 
                  allowFullScreen
                  title={`Cheko Soto Live Video ${index + 1}`}
                ></iframe>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8 fade-in">
          <a href="http://www.youtube.com/@chekoSoto" target="_blank" rel="noreferrer" className="btn btn-outline">
            <FaYoutube size={20} color="#ff0000" /> Visit YouTube Channel
          </a>
        </div>
      </div>
    </section>
  );
};

export default Videos;
