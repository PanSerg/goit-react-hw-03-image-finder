import { Component } from "react";
import PropTypes from 'prop-types';
import { Overlay, Window } from './Modal.Styled.jsx';

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
      <Overlay onClick={this.closeModal}>
        <Window>
          <img src={this.props.src} alt="modalWindow" width="700" />
        </Window>
      </Overlay>
    );
  }
};

Modal.propTypes = {
    src: PropTypes.string.isRequired
}