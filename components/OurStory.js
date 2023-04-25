import React from 'react';

const OurStory = () => {
  return (
    <div className="our-story-section">
      <h2>Our Story</h2>
      <div className="video-container">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/watch?v=YprmMvHaWUM"
          title="Our Story YouTube video"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
};

export default OurStory;
