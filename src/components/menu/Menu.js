import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ReactCssModules from 'react-cssmodules';

import styles from './menu.scss';

const Menu = ({ menuItems }) => (
  <nav styleName="menu">
    <ul styleName="menu__list-wrapper">
      {menuItems
        && menuItems.map(item => (
          <li key={item.id}>
            <Link styleName="menu__link" to={item.href}>{item.name}</Link>
          </li>
        ))
      }
    </ul>
  </nav>
);

Menu.propTypes = {
  menuItems: PropTypes.array.isRequired,
};

export default ReactCssModules(Menu, styles);
