import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { MdModeEdit, MdBlock } from 'react-icons/md';

// Actions
import {
  requestDeleteApartmentServiceGroup,
  requestGetApartmentServiceGroupList,
} from '../../actions/apartmentServiceGroupActions';

// Components
import Button from '../../components/button/Button';
import Title from '../../components/title/Title';
import Skeleton from '../../components/skeleton/Skeleton';
import Table from '../../components/table/Table';

// Reducers
import { getApartmentServiceGroupListFiltered } from '../../reducers/apartmentServiceGroupListReducer';

// Styles
import * as Styled from './apartmentServiceGroupListStyles';

const headers = ['Service Group name'];

const ApartmentServiceGroupGroupList = ({
  requestGetApartmentServiceGroupListAction,
  requestDeleteApartmentServiceGroupAction,
  apartmentServiceGroups,
}) => {
  useEffect(() => {
    requestGetApartmentServiceGroupListAction();
  }, []);

  const handleDelete = (event) => {
    event.stopPropagation();

    requestDeleteApartmentServiceGroupAction(event.currentTarget.getAttribute('data-slug'));
  };

  return (
    <section>
      <Skeleton>
        <Skeleton.Item type="row-top">
          <Styled.Heading>
            <Title heading="h2" type="secondary">
              Apartment Service Group list
            </Title>
            <Link to="/apartment-service-group">
              <Button model="primary" type="button">Add apartment service group</Button>
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
              {apartmentServiceGroups.map(row => (
                <Table.Row key={row.name}>
                  {Object.keys(row).map(key => (
                    key === 'id'
                      ? (
                        <Styled.Cell key={row.id + key} textAlign="right">
                          <Styled.EditButton to={`/apartment-service-group/${row[key]}`}><MdModeEdit /></Styled.EditButton>
                          <Styled.DeleteButton type="button" model="quaternary" onClick={handleDelete} data-slug={row.id}><MdBlock /></Styled.DeleteButton>
                        </Styled.Cell>
                      ) : (
                        <Table.Cell key={row.id + key}>
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

ApartmentServiceGroupGroupList.propTypes = {
  requestGetApartmentServiceGroupListAction: PropTypes.func.isRequired,
  requestDeleteApartmentServiceGroupAction: PropTypes.func.isRequired,
  apartmentServiceGroups: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
  apartmentServiceGroups: getApartmentServiceGroupListFiltered(state),
});

export default connect(
  mapStateToProps,
  {
    requestGetApartmentServiceGroupListAction: requestGetApartmentServiceGroupList,
    requestDeleteApartmentServiceGroupAction: requestDeleteApartmentServiceGroup,
  },
)(ApartmentServiceGroupGroupList);
