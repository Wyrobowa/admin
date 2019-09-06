import React, { useState } from 'react';
import { MdDashboard, MdHotel } from 'react-icons/md';

// Components
import Menu from '../../components/menu/Menu';

const MainNav = () => {
  const [menuList] = useState([
    {
      name: 'Dashboard',
      href: '/',
      id: '1',
      icon: {
        component: MdDashboard,
        props: {
          value: { size: '20px', style: { marginRight: '10px' } },
        },
      },
    },
    {
      name: 'Apartments List',
      href: '/apartments-list',
      id: '3',
      icon: {
        component: MdHotel,
        props: {
          value: { size: '20px', style: { marginRight: '10px' } },
        },
      },
    },
  ]);

  return <Menu menuItems={menuList} direction="vertical" />;
};

export default MainNav;
