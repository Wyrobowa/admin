import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import ReactCssModules from 'react-cssmodules';

import styles from './tooltip.scss';

const Tooltip = ({
  content, positionVertical, positionHorizontal,
}) => {
  const tooltipElement = useRef(null);

  useEffect(() => {
    tooltipElement.current.parentNode.classList.add(styles['tooltip-parent']);
  }, []);

  return (
    <div
      ref={tooltipElement}
      styleName={
        `tooltip-parent__tooltip tooltip-parent__tooltip--${positionVertical} tooltip-parent__tooltip--${positionHorizontal}`
      }
    >
      {content}
    </div>
  );
};

Tooltip.defaultProps = {
  positionVertical: 'top',
  positionHorizontal: 'center',
};

Tooltip.propTypes = {
  content: PropTypes.node.isRequired,
  positionVertical: PropTypes.oneOf(['top', 'bottom']),
  positionHorizontal: PropTypes.oneOf(['left', 'center', 'right']),
};

export default ReactCssModules(Tooltip, styles);
