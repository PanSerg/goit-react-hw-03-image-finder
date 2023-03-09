import React from "react";
import PropTypes from 'prop-types';
import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem";
import './ImageGallery.Styled.css';

export const ImageGallery = ({ img }) => {
    return (
        <ul className="ImageGallery">
            {img.map(({ webformaURL, ...otherProps }, index) => (
                <ImageGalleryItem
                    image={webformaURL}
                    key={index}
                    {...otherProps}
                ></ImageGalleryItem>
            ))}
        </ul>
    );
};

ImageGallery.propTypes = {
  img: PropTypes.array.isRequired  
};