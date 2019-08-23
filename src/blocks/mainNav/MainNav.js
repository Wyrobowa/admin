import React, { useState } from 'react';

// Components
import Menu from '../../components/menu/Menu';

const MainNav = () => {
  const [menuList] = useState([
    {
      name: 'Home',
      href: '/',
      id: '1',
      icon: {
        props: {
          type: 'plus',
          inheritColor: true,
          style: { height: '2em', marginRight: '8px' },
        },
      },
    },
    {
      name: 'Apartment',
      href: '/apartment/20',
      id: '2',
    },
  ]);

  return (
    <Menu menuItems={menuList} direction="vertical" />
  );
};

export default MainNav;
