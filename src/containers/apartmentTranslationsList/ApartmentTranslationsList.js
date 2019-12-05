import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { MdModeEdit, MdDelete } from 'react-icons/md';

// Actions
import * as apartmentTranslationsActions from '../../actions/apartmentTranslationsActions';

// Components
import Button from '../../components/button/Button';
import Skeleton from '../../components/skeleton/Skeleton';
import Table from '../../components/table/Table';
import Title from '../../components/title/Title';

// Reducers
import { getApartmentTranslationsListFiltered } from '../../reducers/apartmentTranslationsListReducer';

// Styles
import * as Styled from './apartmentTranslationsListStyles';

const headers = ['Translations name'];

const ApartmentTranslationsList = ({
  requestGetApartmentTranslationsListAction,
  requestDeleteApartmentTranslationsAction,
  apartmentTranslations,
}) => {
  useEffect(() => {
    requestGetApartmentTranslationsListAction();
  }, []);

  const handleDelete = (event) => {
    event.stopPropagation();

    requestDeleteApartmentTranslationsAction(event.currentTarget.getAttribute('data-slug'));
  };

  return (
    <section>
      <Skeleton>
        <Skeleton.Item type="row-top">
          <Styled.Heading>
            <Title heading="h2" type="secondary">
              Apartment Translations list
            </Title>
            <Link to="/apartment-translations">
              <Button model="primary" type="button">Add apartment translations</Button>
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
              {apartmentTranslations.map(row => (
                <Table.Row key={row.name}>
                  {Object.keys(row).map(key => (key === 'slug'
                    ? (
                      <Styled.Cell key={row.name + key} textAlign="right">
                        <Styled.EditButton to={`/apartment-translations/${row[key]}`}><MdModeEdit /></Styled.EditButton>
                        <Styled.DeleteButton type="button" model="quaternary" onClick={handleDelete} data-slug={row.slug}><MdDelete /></Styled.DeleteButton>
                      </Styled.Cell>
                    ) : (
                      <Table.Cell key={row.name + key}>
                        {row[key]}
                      </Table.Cell>
                    )))}
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
        </Skeleton.Item>
      </Skeleton>
    </section>
  );
};

ApartmentTranslationsList.propTypes = {
  requestGetApartmentTranslationsListAction: PropTypes.func.isRequired,
  requestDeleteApartmentTranslationsAction: PropTypes.func.isRequired,
  apartmentTranslations: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
  apartmentTranslations: getApartmentTranslationsListFiltered(state),
});

export default connect(
  mapStateToProps,
  {
    requestGetApartmentTranslationsListAction: apartmentTranslationsActions
      .requestGetApartmentTranslationsList,
    requestDeleteApartmentTranslationsAction: apartmentTranslationsActions
      .requestDeleteApartmentTranslations,
  },
)(ApartmentTranslationsList);
