import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { MdModeEdit, MdDelete } from 'react-icons/md';

// Actions
import * as apartmentFacilityGroupActions from '../../actions/apartmentFacilityGroupActions';

// Components
import Button from '../../components/button/Button';
import Skeleton from '../../components/skeleton/Skeleton';
import Table from '../../components/table/Table';
import Title from '../../components/title/Title';

// Reducers
import { getApartmentFacilityGroupListFiltered } from '../../reducers/apartmentFacilityGroupListReducer';

// Styles
import * as Styled from './apartmentFacilityGroupListStyles';

const headers = ['Facility Group name'];

const ApartmentFacilityGroupGroupList = ({
  requestGetApartmentFacilityGroupListAction,
  requestDeleteApartmentFacilityGroupAction,
  apartmentFacilityGroups,
}) => {
  useEffect(() => {
    requestGetApartmentFacilityGroupListAction();
  }, []);

  const handleDelete = (event) => {
    event.stopPropagation();

    requestDeleteApartmentFacilityGroupAction(event.currentTarget.getAttribute('data-slug'));
  };

  return (
    <section>
      <Skeleton>
        <Skeleton.Item type="row-top">
          <Styled.Heading>
            <Title heading="h2" type="secondary">
              Apartment Facility Group list
            </Title>
            <Link to="/apartment-facility-group">
              <Button model="primary" type="button">Add apartment facility group</Button>
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
              {apartmentFacilityGroups.map(row => (
                <Table.Row key={row.name}>
                  {Object.keys(row).map(key => (
                    key === 'slug'
                      ? (
                        <Styled.Cell key={row.slug + key} textAlign="right">
                          <Styled.EditButton to={`/apartment-facility-group/${row[key]}`}><MdModeEdit /></Styled.EditButton>
                          <Styled.DeleteButton type="button" model="quaternary" onClick={handleDelete} data-slug={row.slug}><MdDelete /></Styled.DeleteButton>
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

ApartmentFacilityGroupGroupList.propTypes = {
  requestGetApartmentFacilityGroupListAction: PropTypes.func.isRequired,
  requestDeleteApartmentFacilityGroupAction: PropTypes.func.isRequired,
  apartmentFacilityGroups: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
  apartmentFacilityGroups: getApartmentFacilityGroupListFiltered(state),
});

export default connect(
  mapStateToProps,
  {
    requestGetApartmentFacilityGroupListAction: apartmentFacilityGroupActions
      .requestGetApartmentFacilityGroupList,
    requestDeleteApartmentFacilityGroupAction: apartmentFacilityGroupActions
      .requestDeleteApartmentFacilityGroup,
  },
)(ApartmentFacilityGroupGroupList);
