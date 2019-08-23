import React from 'react';
import ReactCssModules from 'react-cssmodules';

// Styles
import styles from './header.scss';

const Header = () => (
  <header styleName="header">
    header
  </header>
);

export default ReactCssModules(Header, styles);
