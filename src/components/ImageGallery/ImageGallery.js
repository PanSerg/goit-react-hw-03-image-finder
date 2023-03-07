import React from "react";
import PropTypes from 'prop-types';

export const ImageGallery = ({ img }) => {
    return (
        <ul className="ImageGallery">
            {img.map(({ webformaURL, ...otherProps }, index) => (
                <div
                    image={webformaURL}
                    key={index}
                    {...otherProps}
                ></div>
            ))}
        </ul>
    );
};

ImageGallery.propTypes = {
  img: PropTypes.object.isRequired  
};