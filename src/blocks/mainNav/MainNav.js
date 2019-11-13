import React, { useState } from 'react';
import {
  MdDashboard,
  MdHotel,
  MdPages,
  MdLocalAirport,
  MdLocationOn,
  MdLanguage,
  MdTextFields,
  MdTranslate,
} from 'react-icons/md';

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
    {
      name: 'Locations List',
      href: '/locations-list',
      id: '4',
      icon: {
        component: MdLocationOn,
        props: {
          value: { size: '20px', style: { marginRight: '10px' } },
        },
      },
    },
    {
      name: 'Pages List',
      href: '/pages-list',
      id: '5',
      icon: {
        component: MdPages,
        props: {
          value: { size: '20px', style: { marginRight: '10px' } },
        },
      },
    },
    {
      name: 'Service List',
      href: '/apartment-service-list',
      id: '6',
      icon: {
        component: MdLocalAirport,
        props: {
          value: { size: '20px', style: { marginRight: '10px' } },
        },
      },
    },
    {
      name: 'Languages',
      href: '/languages-list',
      id: '7',
      icon: {
        component: MdLanguage,
        props: {
          value: { size: '20px', style: { marginRight: '10px' } },
        },
      },
    },
    {
      name: 'Phrases',
      href: '/phrases-list',
      id: '8',
      icon: {
        component: MdTextFields,
        props: {
          value: { size: '20px', style: { marginRight: '10px' } },
        },
      },
    },
    {
      name: 'Translations',
      href: '/translations-list',
      id: '9',
      icon: {
        component: MdTranslate,
        props: {
          value: { size: '20px', style: { marginRight: '10px' } },
        },
      },
    },
  ]);

  return <Menu menuItems={menuList} direction="vertical" />;
};

export default MainNav;
