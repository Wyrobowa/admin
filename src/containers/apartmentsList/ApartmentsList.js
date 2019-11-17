import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { MdModeEdit, MdBlock } from 'react-icons/md';

// Actions
import { requestGetApartmentsList, requestDeleteApartment } from '../../actions/apartmentActions';

// Components
import Button from '../../components/button/Button';
import Skeleton from '../../components/skeleton/Skeleton';
import Title from '../../components/title/Title';
import Table from '../../components/table/Table';

// Reducers
import { getApartmentsListFiltered } from '../../reducers/apartmentsListReducer';

// Styles
import * as Styled from './apartmentsListStyles';

const headers = ['Apartment name'];

const ApartmentsList = ({
  requestGetApartmentsListAction,
  requestDeleteApartmentAction,
  apartments,
}) => {
  useEffect(() => {
    requestGetApartmentsListAction();
  }, []);

  const handleDelete = (event) => {
    event.stopPropagation();

    requestDeleteApartmentAction(event.currentTarget.getAttribute('data-slug'));
  };

  return (
    <section>
      <Skeleton>
        <Skeleton.Item type="row-top">
          <Styled.Heading>
            <Title heading="h2" type="secondary">
              Apartments list
            </Title>
            <Link to="/apartment">
              <Button model="primary" type="button">Add apartment</Button>
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
              {apartments.map(row => (
                <Table.Row key={row.slug}>
                  {Object.keys(row).map(key => (
                    key === 'slug'
                      ? (
                        <Styled.Cell key={row.name + key} textAlign="right">
                          <Styled.EditButton to={`/apartment/${row[key]}`}><MdModeEdit /></Styled.EditButton>
                          <Styled.DeleteButton type="button" model="quaternary" onClick={handleDelete} data-slug={row.slug}><MdBlock /></Styled.DeleteButton>
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

ApartmentsList.propTypes = {
  requestGetApartmentsListAction: PropTypes.func.isRequired,
  requestDeleteApartmentAction: PropTypes.func.isRequired,
  apartments: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
  apartments: getApartmentsListFiltered(state),
});

export default connect(
  mapStateToProps,
  {
    requestGetApartmentsListAction: requestGetApartmentsList,
    requestDeleteApartmentAction: requestDeleteApartment,
  },
)(ApartmentsList);
