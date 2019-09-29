import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { MdModeEdit } from 'react-icons/md';

// Actions
import { requestGetLocationsList } from '../../actions/locationActions';

// Components
import Button from '../../components/button/Button';
import Title from '../../components/title/Title';
import Skeleton from '../../components/skeleton/Skeleton';
import Table from '../../components/table/Table';

// Reducers
import { getLocationsListFiltered } from '../../reducers/locationsListReducer';

// Styles
const Heading = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px 15px;
`;

const headers = ['Location name'];

const LocationsList = ({ requestGetLocationsListAction, locations }) => {
  useEffect(() => {
    requestGetLocationsListAction();
  }, []);

  return (
    <section>
      <Skeleton>
        <Skeleton.Item type="row-top">
          <Heading>
            <Title heading="h2" type="secondary">
              Locations list
            </Title>
            <Link to="/location">
              <Button model="primary" type="button">Add location</Button>
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
              {locations.map(row => (
                <Table.Row key={row.slug}>
                  {Object.keys(row).map(key => (
                    key === 'slug'
                      ? (
                        <Table.Cell key={row.slug + key} textAlign="right">
                          <Link to={`/location/${row[key]}`}><MdModeEdit /></Link>
                        </Table.Cell>
                      ) : (
                        <Table.Cell key={row.slug + key}>
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

LocationsList.propTypes = {
  requestGetLocationsListAction: PropTypes.func.isRequired,
  locations: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
  locations: getLocationsListFiltered(state),
});

export default connect(
  mapStateToProps,
  {
    requestGetLocationsListAction: requestGetLocationsList,
  },
)(LocationsList);
