import React from 'react';

function ExampleCarouselImage({ text }) {
    const imageStyle = {
        width: '100%',
        height: '100%',
        background: 'rgba(0, 0, 0, 0.3)', // Transparent white background
        backdropFilter: 'blur(50px)',// Apply a blur effect
      };
  return (
    // <img
    //   className="d-block w-100"
    //   src="your_image_source_here.jpg"
    //   alt={text}
    // />
    <div style={imageStyle}>
        <br/><br/><br/>
        <br/><br/><br/>
    </div>
  );
}

export default ExampleCarouselImage;