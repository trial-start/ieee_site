// src/components/BackgroundVideo.js

import React from 'react';
import './BackgroundVideo.css';
import myVideo from './BgVid.mp4'; // <--- THIS IS THE CHANGE

const BackgroundVideo = () => { // No longer needs videoSource prop
  return (
    <div className="background-video-container">
      <video autoPlay loop muted playsInline className="background-video">
        <source src={myVideo} type="video/mp4" /> {/* <--- Use the imported variable */}
        Your browser does not support the video tag.
      </video>
      <div className="video-overlay"></div>
    </div>
  );
};

export default BackgroundVideo;