import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { MdModeEdit, MdBlock } from 'react-icons/md';

// Actions
import { requestGetLocationsList, requestDeleteLocation } from '../../actions/locationActions';

// Components
import Button from '../../components/button/Button';
import Title from '../../components/title/Title';
import Skeleton from '../../components/skeleton/Skeleton';
import Table from '../../components/table/Table';

// Reducers
import { getLocationsListFiltered } from '../../reducers/locationsListReducer';

// Styles
import * as Styled from './locationsListStyles';

const headers = ['Location name'];

const LocationsList = ({
  requestGetLocationsListAction,
  requestDeleteLocationAction,
  locations,
}) => {
  useEffect(() => {
    requestGetLocationsListAction();
  }, []);

  const handleDelete = (event) => {
    event.stopPropagation();

    requestDeleteLocationAction(event.currentTarget.getAttribute('data-slug'));
  };

  return (
    <section>
      <Skeleton>
        <Skeleton.Item type="row-top">
          <Styled.Heading>
            <Title heading="h2" type="secondary">
              Locations list
            </Title>
            <Link to="/location">
              <Button model="primary" type="button">Add location</Button>
            </Link>
          </Styled.Heading>
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
                        <Styled.Cell key={row.slug + key} textAlign="right">
                          <Styled.EditButton to={`/location/${row[key]}`}><MdModeEdit /></Styled.EditButton>
                          <Styled.DeleteButton type="button" model="quaternary" onClick={handleDelete} data-slug={row.slug}><MdBlock /></Styled.DeleteButton>
                        </Styled.Cell>
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
  requestDeleteLocationAction: PropTypes.func.isRequired,
  locations: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
  locations: getLocationsListFiltered(state),
});

export default connect(
  mapStateToProps,
  {
    requestGetLocationsListAction: requestGetLocationsList,
    requestDeleteLocationAction: requestDeleteLocation,
  },
)(LocationsList);
