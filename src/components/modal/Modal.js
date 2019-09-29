import React, { useState } from 'react';
import PropTypes from 'prop-types';

// Styles
import {
  ModalStyled, ModalWrapper, ModalButton, ModalCloseIcon,
} from './modalStyles';

const Modal = ({ children, onToggleModalVisibility, shade }) => {
  const [isModalHiding, setModalHiding] = useState(false);

  const handleOutsideClick = (event) => {
    event.persist();

    if (event.target.dataset.element === 'modal-parent') {
      return new Promise((resolve) => {
        event.target.addEventListener('animationend', () => {
          event.target.removeEventListener('animationend', onToggleModalVisibility());
          resolve();
        });

        setModalHiding(true);
      });
    }

    return null;
  };

  return (
    <ModalStyled
      data-element="modal-parent"
      shade={shade}
      isModalHiding={isModalHiding}
      onClick={handleOutsideClick}
      role="presentation"
    >
      <ModalWrapper data-element="modal-wrapper" isModalHiding={isModalHiding}>
        {children}
        <ModalButton data-element="modal-close-button" type="button" onClick={handleOutsideClick}>
          <ModalCloseIcon
            type="close"
            width="16"
            height="16"
          />
        </ModalButton>
      </ModalWrapper>
    </ModalStyled>
  );
};

Modal.propTypes = {
  shade: PropTypes.bool,
  children: PropTypes.node.isRequired,
  onToggleModalVisibility: PropTypes.func.isRequired,
};

Modal.defaultProps = {
  shade: false,
};

export default Modal;
