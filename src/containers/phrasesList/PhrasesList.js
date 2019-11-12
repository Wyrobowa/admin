import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { MdModeEdit } from 'react-icons/md';

// Actions
import { requestGetPhrasesList } from '../../actions/phraseActions';

// Components
import Button from '../../components/button/Button';
import Title from '../../components/title/Title';
import Skeleton from '../../components/skeleton/Skeleton';
import Table from '../../components/table/Table';

// Reducers
import { getPhrasesListFiltered } from '../../reducers/phrasesListReducer';

// Styles
import { Heading } from './phrasesListStyles';

const headers = ['Phrase name'];

const PhrasesList = ({ requestGetPhrasesListAction, phrases }) => {
  useEffect(() => {
    requestGetPhrasesListAction();
  }, []);

  return (
    <section>
      <Skeleton>
        <Skeleton.Item type="row-top">
          <Heading>
            <Title heading="h2" type="secondary">
              Phrases list
            </Title>
            <Link to="/phrase">
              <Button model="primary" type="button">Add phrase</Button>
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
              {phrases.map(row => (
                <Table.Row key={row.id}>
                  {Object.keys(row).map(key => (
                    key === 'id'
                      ? (
                        <Table.Cell key={row.id + key} textAlign="right">
                          <Link to={`/phrase/${row[key]}`}><MdModeEdit /></Link>
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

PhrasesList.propTypes = {
  requestGetPhrasesListAction: PropTypes.func.isRequired,
  phrases: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
  phrases: getPhrasesListFiltered(state),
});

export default connect(
  mapStateToProps,
  {
    requestGetPhrasesListAction: requestGetPhrasesList,
  },
)(PhrasesList);
