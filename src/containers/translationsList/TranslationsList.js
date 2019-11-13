import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { MdModeEdit } from 'react-icons/md';

// Actions
import { requestGetTranslationsList } from '../../actions/translationActions';

// Components
import Button from '../../components/button/Button';
import Title from '../../components/title/Title';
import Skeleton from '../../components/skeleton/Skeleton';
import Table from '../../components/table/Table';

// Reducers
import { getTranslationsListFiltered } from '../../reducers/translationsListReducer';

// Styles
import { Heading } from './translationsListStyles';

const headers = ['Translation name'];

const TranslationsList = ({ requestGetTranslationsListAction, translations }) => {
  useEffect(() => {
    requestGetTranslationsListAction();
  }, []);

  return (
    <section>
      <Skeleton>
        <Skeleton.Item type="row-top">
          <Heading>
            <Title heading="h2" type="secondary">
              Translations list
            </Title>
            <Link to="/translation">
              <Button model="primary" type="button">Add translation</Button>
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
              {translations.map(row => (
                <Table.Row key={row.id}>
                  {Object.keys(row).map(key => (
                    key === 'id'
                      ? (
                        <Table.Cell key={row.id + key} textAlign="right">
                          <Link to={`/translation/${row[key]}`}><MdModeEdit /></Link>
                        </Table.Cell>
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

TranslationsList.propTypes = {
  requestGetTranslationsListAction: PropTypes.func.isRequired,
  translations: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
  translations: getTranslationsListFiltered(state),
});

export default connect(
  mapStateToProps,
  {
    requestGetTranslationsListAction: requestGetTranslationsList,
  },
)(TranslationsList);
