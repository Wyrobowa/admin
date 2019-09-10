import React from 'react';
import styled from 'styled-components';

const LoaderSpinner = styled.div`
  position: relative;
  height: 66px;
  width: 64px;

  .spinner {
    position: absolute;
    border: 4px solid var(--cl-grey-80);
    opacity: 1;
    border-radius: 50%;
    animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
  }
  .spinner:nth-child(2) {
    animation-delay: -0.5s;
  }
  @keyframes lds-ripple {
    0% {
      top: 28px;
      left: 28px;
      width: 0;
      height: 0;
      opacity: 1;
    }
    100% {
      top: -1px;
      left: -1px;
      width: 58px;
      height: 58px;
      opacity: 0;
    }
  }
`;

const Loader = () => (
  <LoaderSpinner>
    <div className="spinner" />
    <div className="spinner" />
  </LoaderSpinner>
);

export default Loader;
