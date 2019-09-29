import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { MdModeEdit } from 'react-icons/md';

// Actions
import { requestGetApartmentServiceList } from '../../actions/apartmentServiceActions';

// Components
import Button from '../../components/button/Button';
import Title from '../../components/title/Title';
import Skeleton from '../../components/skeleton/Skeleton';
import Table from '../../components/table/Table';

// Reducers
import { getApartmentServiceListFiltered } from '../../reducers/apartmentServiceListReducer';

// Styles
const Heading = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px 15px;
`;

const headers = ['Service name'];

const ApartmentServiceList = ({ requestGetApartmentServiceListAction, apartmentServices }) => {
  useEffect(() => {
    requestGetApartmentServiceListAction();
  }, []);

  return (
    <section>
      <Skeleton>
        <Skeleton.Item type="row-top">
          <Heading>
            <Title heading="h2" type="secondary">
              Apartment Service list
            </Title>
            <Link to="/apartment-service">
              <Button model="primary" type="button">Add apartment service</Button>
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
              {apartmentServices.map(row => (
                <Table.Row key={row.name}>
                  {Object.keys(row).map(key => (
                    key === 'slug'
                      ? (
                        <Table.Cell key={row.name + key} textAlign="right">
                          <Link to={`/apartment-service/${row[key]}`}><MdModeEdit /></Link>
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

ApartmentServiceList.propTypes = {
  requestGetApartmentServiceListAction: PropTypes.func.isRequired,
  apartmentServices: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
  apartmentServices: getApartmentServiceListFiltered(state),
});

export default connect(
  mapStateToProps,
  {
    requestGetApartmentServiceListAction: requestGetApartmentServiceList,
  },
)(ApartmentServiceList);
