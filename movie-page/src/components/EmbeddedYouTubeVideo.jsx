import React from 'react';

const EmbeddedYouTubeVideo = () => {
  const videoUrl = 'https://www.youtube.com/embed/JfVOs4VSpmA'; // Replace VIDEO_ID with the actual ID of the YouTube video you want to embed

  return (
    <div>
      <iframe
        width="560"  // You can adjust the width and height as needed
        height="315"
        src={videoUrl}
        title="Embedded YouTube Video"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default EmbeddedYouTubeVideo;
