import React, { Component } from "react";
import PropTypes from 'prop-types';
import { Modal } from "components/Modal/Modal";
import './GalleryItem.styled.css';

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
            <li className="ImageGalleryItem">
              <img className="ImageGalleryItem-image"
                src={largeImageURL}
                alt={tags}
                width="300px"
                onClick={this.openModal}
              />
            </li>
                {this.state.openModal === true &&
                    <Modal closeModal={this.closeModal} srс={this.state.src} />}
          </>
        );
    }
};

ImageGalleryItem.propTypes = {
    largeImageURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired
}