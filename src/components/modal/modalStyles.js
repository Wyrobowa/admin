import styled from 'styled-components';

// components
import Icon from '../icon/Icon';

const ModalStyled = styled.div`
  animation: fadeIn 0.3s;
  backface-visibility: hidden;
  left: 50%;
  max-width: 44em;
  opacity: 1;
  position: fixed;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  z-index: 100;

  ${({ shade }) => shade && `
    &::after {
      background: rgba(0, 0, 0, 0.5);
      content: '';
      height: 100vh;
      left: 50%;
      position: fixed;
      top: 50%;
      transform: translate(-50%, -50%);
      width: 100vw;
      z-index: -1;
    }
  `}

  ${({ isModalHiding }) => isModalHiding && `
    &::after {
      animation: fadeOut 0.3s linear 0.3s;
    }
  `}

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }

  @keyframes fadeOut {
    0% {
      opacity: 1;
    }

    100% {
      opacity: 0;
    }
  }

  @keyframes slideDown {
    0% {
      opacity: 0;
      transform: translateY(-100vh);
    }

    50% {
      opacity: 0;
    }

    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes slideUp {
    0% {
      opacity: 1;
      transform: translateY(0);
    }

    50% {
      opacity: 0;
    }

    100% {
      opacity: 0;
      transform: translateY(-100vh);
    }
  };
`;

const ModalWrapper = styled.div`
  animation: slideDown 0.3s ease-out;
  background: var(--cl-grey-10);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
  opacity: 1;
  overflow: hidden;
  transform: translateY(0);

  ${({ isModalHiding }) => isModalHiding && `
    animation: slideUp 0.3s ease-in;
    transform: translateY(-100vh);
  `}
`;

const ModalButton = styled.button`
  background: none;
  border: 0;
  cursor: pointer;
  outline: 0;
  position: absolute;
  padding: 1.1em;
  right: 0;
  top: 0;
  z-index: 2;
  fill: var(--cl-grey-60);
`;

const ModalCloseIcon = styled(Icon)`
  fill: var(--cl-grey-60);
`;

export {
  ModalStyled, ModalWrapper, ModalButton, ModalCloseIcon,
};
