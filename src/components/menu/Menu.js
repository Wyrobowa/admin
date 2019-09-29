import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { IconContext } from 'react-icons';

// Styles
import {
  MenuStyled, MenuListWrapper, MenuItem, MenuLink,
} from './menuStyles';

const Menu = ({ menuItems, direction, location }) => (
  <MenuStyled>
    <MenuListWrapper direction={direction}>
      {menuItems
        && menuItems.map(item => (
          <MenuItem key={item.id} active={location.pathname === item.href}>
            <MenuLink to={item.href}>
              {item.icon
                && (
                  <IconContext.Provider {...item.icon.props}>
                    <item.icon.component />
                  </IconContext.Provider>
                )}
              <span>{item.name}</span>
            </MenuLink>
          </MenuItem>
        ))
      }
    </MenuListWrapper>
  </MenuStyled>
);

Menu.defaultProps = {
  direction: 'horizontal',
};

Menu.propTypes = {
  location: PropTypes.object.isRequired,
  menuItems: PropTypes.array.isRequired,
  direction: PropTypes.string,
};

export default withRouter(Menu);
