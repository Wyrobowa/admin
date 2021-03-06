import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { MdModeEdit, MdDelete } from 'react-icons/md';

// Actions
import {
  requestDeleteApartmentService,
  requestGetApartmentServiceList,
} from '../../actions/apartmentServiceActions';

// Components
import Button from '../../components/button/Button';
import Title from '../../components/title/Title';
import Skeleton from '../../components/skeleton/Skeleton';
import Table from '../../components/table/Table';

// Reducers
import { getApartmentServiceListFiltered } from '../../reducers/apartmentServiceListReducer';

// Styles
import * as Styled from './apartmentServiceListStyles';

const headers = ['Service name'];

const ApartmentServiceList = ({
  requestGetApartmentServiceListAction,
  requestDeleteApartmentServiceAction,
  apartmentServices,
}) => {
  useEffect(() => {
    requestGetApartmentServiceListAction();
  }, []);

  const handleDelete = (event) => {
    event.stopPropagation();

    requestDeleteApartmentServiceAction(event.currentTarget.getAttribute('data-slug'));
  };

  return (
    <section>
      <Skeleton>
        <Skeleton.Item type="row-top">
          <Styled.Heading>
            <Title heading="h2" type="secondary">
              Apartment Service list
            </Title>
            <Link to="/apartment-service">
              <Button model="primary" type="button">Add apartment service</Button>
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
              {apartmentServices.map(row => (
                <Table.Row key={row.name}>
                  {Object.keys(row).map(key => (
                    key === 'slug'
                      ? (
                        <Styled.Cell key={row.name + key} textAlign="right">
                          <Styled.EditButton to={`/apartment-service/${row[key]}`}><MdModeEdit /></Styled.EditButton>
                          <Styled.DeleteButton type="button" model="quaternary" onClick={handleDelete} data-slug={row.slug}><MdDelete /></Styled.DeleteButton>
                        </Styled.Cell>
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

ApartmentServiceList.propTypes = {
  requestGetApartmentServiceListAction: PropTypes.func.isRequired,
  requestDeleteApartmentServiceAction: PropTypes.func.isRequired,
  apartmentServices: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
  apartmentServices: getApartmentServiceListFiltered(state),
});

export default connect(
  mapStateToProps,
  {
    requestGetApartmentServiceListAction: requestGetApartmentServiceList,
    requestDeleteApartmentServiceAction: requestDeleteApartmentService,
  },
)(ApartmentServiceList);
