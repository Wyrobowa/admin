import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { MdModeEdit, MdBlock } from 'react-icons/md';

// Actions
import { requestGetPhrasesList, requestDeletePhrase } from '../../actions/phraseActions';

// Components
import Button from '../../components/button/Button';
import Title from '../../components/title/Title';
import Skeleton from '../../components/skeleton/Skeleton';
import Table from '../../components/table/Table';

// Reducers
import { getPhrasesListFiltered } from '../../reducers/phrasesListReducer';

// Styles
import * as Styled from './phrasesListStyles';

const headers = ['Phrase name'];

const PhrasesList = ({ requestGetPhrasesListAction, requestDeletePhraseAction, phrases }) => {
  useEffect(() => {
    requestGetPhrasesListAction();
  }, []);

  const handleDelete = (event) => {
    event.stopPropagation();

    requestDeletePhraseAction(event.currentTarget.getAttribute('data-slug'));
  };

  return (
    <section>
      <Skeleton>
        <Skeleton.Item type="row-top">
          <Styled.Heading>
            <Title heading="h2" type="secondary">
              Phrases list
            </Title>
            <Link to="/phrase">
              <Button model="primary" type="button">Add phrase</Button>
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
              {phrases.map(row => (
                <Table.Row key={row.id}>
                  {Object.keys(row).map(key => (
                    key === 'id'
                      ? (
                        <Styled.Cell key={row.id + key} textAlign="right">
                          <Styled.EditButton to={`/phrase/${row[key]}`}><MdModeEdit /></Styled.EditButton>
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

PhrasesList.propTypes = {
  requestGetPhrasesListAction: PropTypes.func.isRequired,
  requestDeletePhraseAction: PropTypes.func.isRequired,
  phrases: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
  phrases: getPhrasesListFiltered(state),
});

export default connect(
  mapStateToProps,
  {
    requestGetPhrasesListAction: requestGetPhrasesList,
    requestDeletePhraseAction: requestDeletePhrase,
  },
)(PhrasesList);
