import React from 'react';
import ReactCssModules from 'react-cssmodules';

import styles from './apartment.scss';

const Apartment = () => (
  <section styleName="apartment">
    Apartment
  </section>
);

export default ReactCssModules(Apartment, styles);
