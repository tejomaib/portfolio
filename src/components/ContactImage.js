import React from 'react';

const contactImage = ({ src, alt, link }) => {
    const handleClick = () => {
        window.location.href = link; // Redirect to the specified link
  };

  return (
    <img
      src={src}
      alt={alt}
      style={{ cursor: 'pointer', width: '15%', maxWidth: '800px', margin: 70, marginTop: 150 }} // Styling the image
      onClick={handleClick}
    />
  );
};

export default contactImage;