import React from 'react';

const OurStory = () => {
  return (
    <div className="our-story-section">
      <h2>OUR STORY</h2>
      <div className="video-container">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/YprmMvHaWUM" // Change this line
          title="Our Story YouTube video"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          style={{ borderRadius: '15px' }} // Add this line
        ></iframe>
      </div>
    </div>
  );
};

export default OurStory;
