import { Component } from "react";
import PropTypes from 'prop-types';
// import {Overlay, Window } from ''

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.onCloseEsc);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.onCloseEsc);
  }

  closeModal = () => {
    this.props.closeModal()
  };

  onCloseEsc = (e) => {
    if (e.code === 'Escape') {
      this.props.closeModal()
    }
  };

  render() {
    return (
      <div onClick={this.closeModal}>
        <div>
          <img src={this.props.src} alt="modalWindow" width="500" />
        </div>
      </div>
    );
  }
};

Modal.propTypes = {
    src: PropTypes.string.isRequired
}