import { Component } from 'react';
import { createPortal } from 'react-dom';
import { ModalWrapper, ModalContent } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handlerKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handlerKeyDown);
  }
  handlerKeyDown = e => {
    if (e.code !== 'Escape') {
      return;
    }
    this.props.onCloseModal();
  };

  handlerBackDropClick = evt => {
    if (evt.target !== evt.currentTarget) {
      return;
    }
    this.props.onCloseModal();
  };
  render() {
    return createPortal(
      <ModalWrapper className="overlay" onClick={this.handlerBackDropClick}>
        <ModalContent className="modal">
          <img src={this.props.largePhotoURL} alt="It`s a beautiful day)" />
        </ModalContent>
      </ModalWrapper>,
      modalRoot
    );
  }
}
