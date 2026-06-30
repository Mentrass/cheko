import React from 'react';
import { Headphones, ExternalLink } from 'lucide-react';
import './Music.css';

const Music = () => {
  return (
    <section id="music" className="section music-section">
      <div className="container">
        <h2 className="section-title">Music</h2>
        
        <div className="music-grid">
          {/* Spotify Player */}
          <div className="music-card glass-card fade-in">
            <div className="music-header">
              <Headphones className="music-icon spotify" size={28} />
              <h3>Listen on Spotify</h3>
            </div>
            <div className="player-container">
              <iframe 
                src="https://open.spotify.com/embed/album/00uBWcWY3LLCEyi4c46M2E?utm_source=generator&theme=0" 
                width="100%" 
                height="352" 
                frameBorder="0" 
                allowFullScreen="" 
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                loading="lazy"
                title="Cheko Soto Spotify"
              ></iframe>
            </div>
            <a href="https://open.spotify.com/album/00uBWcWY3LLCEyi4c46M2E?si=5CtSQrxdS8CVF8Penw6qhQ" target="_blank" rel="noreferrer" className="btn btn-outline mt-4" style={{width: '100%'}}>
              Open in Spotify <ExternalLink size={16} />
            </a>
          </div>

          {/* ReverbNation */}
          <div className="music-card glass-card fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="music-header">
              <Headphones className="music-icon reverb" size={28} />
              <h3>ReverbNation</h3>
            </div>
            <div className="reverb-content">
              <img src="https://chekosotoroots.weebly.com/uploads/2/5/3/6/25367089/p258.png" alt="Cheko Soto Music" className="reverb-image" />
              <p className="reverb-desc">Check out more tracks, exclusive content, and connect with Cheko on ReverbNation.</p>
            </div>
            <a href="https://www.reverbnation.com/chekomusic" target="_blank" rel="noreferrer" className="btn btn-primary mt-4" style={{width: '100%'}}>
              Listen on ReverbNation <ExternalLink size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Music;
