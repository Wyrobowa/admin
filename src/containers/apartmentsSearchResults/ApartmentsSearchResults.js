import React from 'react';
import ReactCssModules from 'react-cssmodules';

import styles from './apartmentsSearchResults.scss';

const ApartmentsSearchResults = () => (
  <section styleName="apartment">
    Apartments Search Results
  </section>
);

export default ReactCssModules(ApartmentsSearchResults, styles);
