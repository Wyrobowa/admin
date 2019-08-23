import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ReactCssModules from 'react-cssmodules';

// components
import Icon from '../icon/Icon';

import styles from './modal.scss';

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
    <div
      data-element="modal-parent"
      styleName={`modal${shade ? ' modal--shade' : ''}${isModalHiding ? ' modal--hiding' : ''}`}
      onClick={handleOutsideClick}
      role="presentation"
    >
      <div data-element="modal-wrapper" styleName={`modal__wrapper${isModalHiding ? ' modal__wrapper--hiding' : ''}`}>
        {children}
        <button data-element="modal-close-button" type="button" styleName="modal__close-button" onClick={handleOutsideClick}>
          <Icon
            type="close"
            styleName="modal__close-icon"
            width="16"
            height="16"
          />
        </button>
      </div>
    </div>
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

export default ReactCssModules(Modal, styles);
