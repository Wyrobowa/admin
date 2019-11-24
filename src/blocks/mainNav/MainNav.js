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
  MdCollections,
  MdTv,
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
      name: 'Apartment Facility List',
      href: '/apartment-facility-list',
      id: '6',
      icon: {
        component: MdTv,
        props: {
          value: { size: '20px', style: { marginRight: '10px' } },
        },
      },
    },
    {
      name: 'Apartment Facility Groups List',
      href: '/apartment-facility-group-list',
      id: '7',
      icon: {
        component: MdCollections,
        props: {
          value: { size: '20px', style: { marginRight: '10px' } },
        },
      },
    },
    {
      name: 'Apartment Service List',
      href: '/apartment-service-list',
      id: '8',
      icon: {
        component: MdLocalAirport,
        props: {
          value: { size: '20px', style: { marginRight: '10px' } },
        },
      },
    },
    {
      name: 'Apartment Service Groups List',
      href: '/apartment-service-group-list',
      id: '9',
      icon: {
        component: MdCollections,
        props: {
          value: { size: '20px', style: { marginRight: '10px' } },
        },
      },
    },
    {
      name: 'Languages',
      href: '/languages-list',
      id: '10',
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
      id: '11',
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
      id: '12',
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
