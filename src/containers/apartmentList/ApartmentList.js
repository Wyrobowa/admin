import React from 'react';
import ReactCssModules from 'react-cssmodules';

// Components
import Title from '../../components/title/Title';
import Skeleton from '../../components/skeleton/Skeleton';
import Table from '../../components/table/Table';

// Styles
import styles from './apartmentList.scss';

const headers = ['Apartment name', 'Standard', 'Maximum capacity', 'Price per night', 'Actions'];

const tableData = [
  {
    name: 'RandomName',
    standard: '5',
    capacity: '2',
    price: '120',
  },
  {
    name: 'RandName2',
    standard: '1',
    capacity: '1',
    price: '130',
  },
  {
    name: 'RandName3',
    standard: '1',
    capacity: '10',
    price: '550',
  },
];

const ApartmentList = () => (
  <section styleName="apartment-list">
    <Skeleton>
      <Skeleton.Item type="row-top">
        <Title header="h2" type="secondary">
          Apartments list
        </Title>
      </Skeleton.Item>
      <Skeleton.Item type="content">
        <Table>
          <Table.Item type="thead">
            <Table.Item type="tr">
              {headers.map(header => (
                <Table.Item type="th" key={header}>
                  {header}
                </Table.Item>
              ))}
            </Table.Item>
          </Table.Item>
          <Table.Item type="tbody">
            {tableData.map(row => (
              <Table.Item type="tr" key={row.name}>
                {Object.keys(row).map(key => (
                  <Table.Item type="td" key={row.name + key}>
                    {row[key]}
                  </Table.Item>
                ))}
              </Table.Item>
            ))}
          </Table.Item>
        </Table>
      </Skeleton.Item>
    </Skeleton>
  </section>
);

export default ReactCssModules(ApartmentList, styles);
