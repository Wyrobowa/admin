import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { MdModeEdit, MdDelete } from 'react-icons/md';

// Actions
import { requestGetTranslationsList, requestDeleteTranslation } from '../../actions/translationActions';

// Components
import Button from '../../components/button/Button';
import Title from '../../components/title/Title';
import Skeleton from '../../components/skeleton/Skeleton';
import Table from '../../components/table/Table';

// Reducers
import { getTranslationsListFiltered } from '../../reducers/translationsListReducer';

// Styles
import * as Styled from './translationsListStyles';

const headers = ['Translation name'];

const TranslationsList = ({
  requestGetTranslationsListAction,
  requestDeleteTranslationAction,
  translations,
}) => {
  useEffect(() => {
    requestGetTranslationsListAction();
  }, []);

  const handleDelete = (event) => {
    event.stopPropagation();

    requestDeleteTranslationAction(event.currentTarget.getAttribute('data-slug'));
  };

  return (
    <section>
      <Skeleton>
        <Skeleton.Item type="row-top">
          <Styled.Heading>
            <Title heading="h2" type="secondary">
              Translations list
            </Title>
            <Link to="/translation">
              <Button model="primary" type="button">Add translation</Button>
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
              {translations.map(row => (
                <Table.Row key={row.slug}>
                  {Object.keys(row).map(key => (
                    key === 'slug'
                      ? (
                        <Styled.Cell key={row.slug + key} textAlign="right">
                          <Styled.EditButton to={`/translation/${row[key]}`}><MdModeEdit /></Styled.EditButton>
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

TranslationsList.propTypes = {
  requestGetTranslationsListAction: PropTypes.func.isRequired,
  requestDeleteTranslationAction: PropTypes.func.isRequired,
  translations: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
  translations: getTranslationsListFiltered(state),
});

export default connect(
  mapStateToProps,
  {
    requestGetTranslationsListAction: requestGetTranslationsList,
    requestDeleteTranslationAction: requestDeleteTranslation,
  },
)(TranslationsList);
