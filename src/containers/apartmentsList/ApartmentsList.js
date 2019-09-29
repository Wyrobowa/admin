import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { MdModeEdit } from 'react-icons/md';

// Actions
import { requestGetApartmentsList } from '../../actions/apartmentActions';

// Components
import Button from '../../components/button/Button';
import Title from '../../components/title/Title';
import Skeleton from '../../components/skeleton/Skeleton';
import Table from '../../components/table/Table';

// Reducers
import { getApartmentsListFiltered } from '../../reducers/apartmentsListReducer';

// Styles
import { Heading } from './apartmentsListStyles';

const headers = ['Apartment name'];

const ApartmentsList = ({ requestGetApartmentsListAction, apartments }) => {
  useEffect(() => {
    requestGetApartmentsListAction();
  }, []);

  return (
    <section>
      <Skeleton>
        <Skeleton.Item type="row-top">
          <Heading>
            <Title heading="h2" type="secondary">
              Apartments list
            </Title>
            <Link to="/apartment">
              <Button model="primary" type="button">Add apartment</Button>
            </Link>
          </Heading>
        </Skeleton.Item>
        <Skeleton.Item type="content">
          <Table>
            <Table.Header>
              <Table.Row>
                {headers.map(header => (
                  <Table.HeaderCell key={header}>
                    {header}
                  </Table.HeaderCell>
                ))}
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {apartments.map(row => (
                <Table.Row key={row.name}>
                  {Object.keys(row).map(key => (
                    key === 'slug'
                      ? (
                        <Table.Cell key={row.name + key} textAlign="right">
                          <Link to={`/apartment/${row[key]}`}><MdModeEdit /></Link>
                        </Table.Cell>
                      ) : (
                        <Table.Cell key={row.name + key}>
                          {row[key]}
                        </Table.Cell>
                      )
                  ))}
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
        </Skeleton.Item>
      </Skeleton>
    </section>
  );
};

ApartmentsList.propTypes = {
  requestGetApartmentsListAction: PropTypes.func.isRequired,
  apartments: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
  apartments: getApartmentsListFiltered(state),
});

export default connect(
  mapStateToProps,
  {
    requestGetApartmentsListAction: requestGetApartmentsList,
  },
)(ApartmentsList);
