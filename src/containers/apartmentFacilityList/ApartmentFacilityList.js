import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { MdModeEdit, MdDelete } from 'react-icons/md';

// Actions
import * as apartmentFacilityActions from '../../actions/apartmentFacilityActions';

// Components
import Button from '../../components/button/Button';
import Skeleton from '../../components/skeleton/Skeleton';
import Table from '../../components/table/Table';
import Title from '../../components/title/Title';

// Reducers
import { getApartmentFacilityListFiltered } from '../../reducers/apartmentFacilityListReducer';

// Styles
import * as Styled from './apartmentFacilityListStyles';

const headers = ['Facility name'];

const ApartmentFacilityList = ({
  requestGetApartmentFacilityListAction,
  requestDeleteApartmentFacilityAction,
  apartmentFacilities,
}) => {
  useEffect(() => {
    requestGetApartmentFacilityListAction();
  }, []);

  const handleDelete = (event) => {
    event.stopPropagation();

    requestDeleteApartmentFacilityAction(event.currentTarget.getAttribute('data-slug'));
  };

  return (
    <section>
      <Skeleton>
        <Skeleton.Item type="row-top">
          <Styled.Heading>
            <Title heading="h2" type="secondary">
              Apartment Facility list
            </Title>
            <Link to="/apartment-facility">
              <Button model="primary" type="button">Add apartment facility</Button>
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
              {apartmentFacilities.map(row => (
                <Table.Row key={row.name}>
                  {Object.keys(row).map(key => (
                    key === 'id'
                      ? (
                        <Styled.Cell key={row.name + key} textAlign="right">
                          <Styled.EditButton to={`/apartment-facility/${row[key]}`}><MdModeEdit /></Styled.EditButton>
                          <Styled.DeleteButton type="button" model="quaternary" onClick={handleDelete} data-slug={row.id}><MdDelete /></Styled.DeleteButton>
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

ApartmentFacilityList.propTypes = {
  requestGetApartmentFacilityListAction: PropTypes.func.isRequired,
  requestDeleteApartmentFacilityAction: PropTypes.func.isRequired,
  apartmentFacilities: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
  apartmentFacilities: getApartmentFacilityListFiltered(state),
});

export default connect(
  mapStateToProps,
  {
    requestGetApartmentFacilityListAction: apartmentFacilityActions.requestGetApartmentFacilityList,
    requestDeleteApartmentFacilityAction: apartmentFacilityActions.requestDeleteApartmentFacility,
  },
)(ApartmentFacilityList);
