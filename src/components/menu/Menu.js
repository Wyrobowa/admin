import React from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import ReactCssModules from 'react-cssmodules';
import { IconContext } from 'react-icons';

// Styles
import styles from './menu.scss';

const Menu = ({ menuItems, direction, location }) => (
  <nav styleName="menu">
    <ul styleName={`menu__list-wrapper menu__list-wrapper--${direction}`}>
      {menuItems
        && menuItems.map(item => (
          <li key={item.id} styleName={`menu__item ${location.pathname === item.href ? 'menu__item--active' : ''}`}>
            <Link styleName="menu__link" to={item.href}>
              {item.icon
                && (
                  <IconContext.Provider {...item.icon.props}>
                    <item.icon.component />
                  </IconContext.Provider>
                )}
              <span>{item.name}</span>
            </Link>
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
  location: PropTypes.object.isRequired,
  menuItems: PropTypes.array.isRequired,
  direction: PropTypes.string,
};

export default withRouter(ReactCssModules(Menu, styles));
