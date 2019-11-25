import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { MdModeEdit, MdDelete } from 'react-icons/md';

// Actions
import { requestDeleteLanguage, requestGetLanguagesList } from '../../actions/languageActions';

// Components
import Button from '../../components/button/Button';
import Title from '../../components/title/Title';
import Skeleton from '../../components/skeleton/Skeleton';
import Table from '../../components/table/Table';

// Reducers
import { getLanguagesListFiltered } from '../../reducers/languagesListReducer';

// Styles
import * as Styled from './languagesListStyles';

const headers = ['Language name'];

const LanguagesList = ({
  requestGetLanguagesListAction,
  requestDeleteLanguageAction,
  languages,
}) => {
  useEffect(() => {
    requestGetLanguagesListAction();
  }, []);

  const handleDelete = (event) => {
    event.stopPropagation();

    requestDeleteLanguageAction(event.currentTarget.getAttribute('data-slug'));
  };

  return (
    <section>
      <Skeleton>
        <Skeleton.Item type="row-top">
          <Styled.Heading>
            <Title heading="h2" type="secondary">
              Languages list
            </Title>
            <Link to="/language">
              <Button model="primary" type="button">Add language</Button>
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
              {languages.map(row => (
                <Table.Row key={row.slug}>
                  {Object.keys(row).map(key => (
                    key === 'slug'
                      ? (
                        <Styled.Cell key={row.slug + key} textAlign="right">
                          <Styled.EditButton to={`/language/${row[key]}`}><MdModeEdit /></Styled.EditButton>
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

LanguagesList.propTypes = {
  requestGetLanguagesListAction: PropTypes.func.isRequired,
  requestDeleteLanguageAction: PropTypes.func.isRequired,
  languages: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
  languages: getLanguagesListFiltered(state),
});

export default connect(
  mapStateToProps,
  {
    requestGetLanguagesListAction: requestGetLanguagesList,
    requestDeleteLanguageAction: requestDeleteLanguage,
  },
)(LanguagesList);
