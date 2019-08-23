import React, { useState } from 'react';

// Components
import Menu from '../../components/menu/Menu';

const MainNav = () => {
  const [menuList] = useState([
    {
      name: 'Home',
      href: '/',
      id: '1',
    },
    {
      name: 'Apartment',
      href: '/apartment/20',
      id: '2',
    },
  ]);

  return (
    <Menu menuItems={menuList} />
  );
};

export default MainNav;
