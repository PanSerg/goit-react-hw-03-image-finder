import React, { Component } from "react";
import PropTypes from 'prop-types';

export class ImageGalleryItem extends Component {
    state = {
        openModal: false,
        src: ''
    }

    openModal = (e) => {
        this.setState({ openModal: true, src: e.target.src });
    }

    closeModal = () => {
        this.setState({ openModal: false });
    }

    render() {
        const { largeImageURL, tags } = this.props
        return (
          <>
            <li className="gallery-item">
              <img
                className="Image-gallery-item"
                src={largeImageURL}
                alt={tags}
                width="300px"
                onClick={this.openModal}
              />
            </li>
                {this.state.openModal === true &&
                    <button closeModal={this.closeModal} srs={this.state.src} />}
          </>
        );
    }
};

ImageGalleryItem.propTypes = {
    largeImageURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired
}