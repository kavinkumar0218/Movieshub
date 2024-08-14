import React from 'react';
import './VideoPage.css'; 

const VideoPage = () => {
  return (
    <div className="video-page">
      <iframe
        width="100%"
        height="100%"
        src="https://www.youtube.com/embed/mqqft2x_Aa4?si=PqNeuZvK-kHB5snc"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoPage;
