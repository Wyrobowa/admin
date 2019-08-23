import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ReactCssModules from 'react-cssmodules';

// Components
import Icon from '../icon/Icon';

// Styles
import styles from './menu.scss';

const Menu = ({ menuItems, direction }) => (
  <nav styleName="menu">
    <ul styleName={`menu__list-wrapper menu__list-wrapper--${direction}`}>
      {menuItems
        && menuItems.map(item => (
          <li key={item.id} styleName="menu__item">
            {item.icon && <Icon {...item.icon.props} />}
            <Link styleName="menu__link" to={item.href}>{item.name}</Link>
          </li>
        ))
      }
    </ul>
  </nav>
);

Menu.defaultProps = {
  direction: 'horizontal',
};

Menu.propTypes = {
  menuItems: PropTypes.array.isRequired,
  direction: PropTypes.string,
};

export default ReactCssModules(Menu, styles);
