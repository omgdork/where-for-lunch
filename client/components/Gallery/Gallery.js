import React from 'react';
import PropTypes from 'prop-types';

const Gallery = ({ photos }) => (
  <ul className="gallery">
    {photos.map((photo, i) => (
      <li key={i}>
        <img src={photo} alt={`image-${i + 1}`} />
      </li>
    ))}
  </ul>
);

Gallery.propTypes = {
  photos: PropTypes.arrayOf(PropTypes.string).isRequired,
};

Gallery.defaultProps = {
  photos: [],
};

export default Gallery;
