import React from 'react';

const backgroundImage = '/images/hackerdojobackground.png';

const OurStory = () => {
  const sectionStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  };

  return (
    <div className="our-story-section" style={sectionStyle}>
      <br />
      <h2>OUR STORY</h2>
      <br />
      <div className="video-container">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/YprmMvHaWUM" // Change this line
          title="Our Story YouTube video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{ borderRadius: '15px' }} // Add this line
        ></iframe>
      </div>
      <br />
      <div className="video-container">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/mcg2By317ZI" // Change this line
          title="Our Story YouTube video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{ borderRadius: '15px' }} // Add this line
        ></iframe>
      </div>
    </div>
  );
};

export default OurStory;
