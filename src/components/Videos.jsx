import React from 'react';
import { FaYoutube } from 'react-icons/fa';
import { Headphones } from 'lucide-react';
import './Videos.css';

const Videos = () => {
  const videos = [
    {
      id: 'Zk5xh75Nixo',
      title: 'Cheko Soto with Antidoping from Mexico at Ska Fest 2024, Victoria BC',
    },
    {
      id: 'GY5uWAoL340',
      title: 'Cheko Soto at the Waverly Hotel in Cumberland BC, 2023',
    },
    {
      id: '6-ajBI2yP0Q',
      title: 'Cheko Soto at the Main Stage, Canada Day 2023, Victoria BC',
    },
    {
      id: 'j-V2T9IHp-A',
      title: 'Cheko Soto & the Pozitive Rebellion - "Stand Strong" - Victoria Ska and Reggae Fest 2024',
      musicLink: 'https://open.spotify.com/track/0KTvunmFB9qlfHLz4coy12',
    },
  ];

  return (
    <section id="videos" className="section videos-section">
      <div className="container">
        <h2 className="section-title">Live Performances</h2>

        <div className="videos-grid">
          {videos.map((video, index) => (
            <div key={video.id} className="video-card glass-card fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="video-wrapper">
                <iframe
                  src={`https://www.youtube.com/embed/${video.id}?wmode=opaque`}
                  frameBorder="0"
                  allowFullScreen
                  title={video.title}
                ></iframe>
              </div>
              {video.musicLink && (
                <a href={video.musicLink} target="_blank" rel="noreferrer" className="btn btn-outline mt-4" style={{ width: '100%' }}>
                  <Headphones size={16} /> Listen to "Stand Strong" on Spotify
                </a>
              )}
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
