import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { MdModeEdit, MdDelete } from 'react-icons/md';

// Actions
import { requestGetPagesList, requestDeletePage } from '../../actions/pageActions';

// Components
import Button from '../../components/button/Button';
import Title from '../../components/title/Title';
import Skeleton from '../../components/skeleton/Skeleton';
import Table from '../../components/table/Table';

// Reducers
import { getPagesListFiltered } from '../../reducers/pagesListReducer';

// Styles
import * as Styled from './pagesListStyles';

const headers = ['Page name'];

const PagesList = ({ requestGetPagesListAction, requestDeletePageAction, pages }) => {
  useEffect(() => {
    requestGetPagesListAction();
  }, []);

  const handleDelete = (event) => {
    event.stopPropagation();

    requestDeletePageAction(event.currentTarget.getAttribute('data-slug'));
  };

  return (
    <section>
      <Skeleton>
        <Skeleton.Item type="row-top">
          <Styled.Heading>
            <Title heading="h2" type="secondary">
              Pages list
            </Title>
            <Link to="/page">
              <Button model="primary" type="button">Add page</Button>
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
              {pages.map(row => (
                <Table.Row key={row.slug}>
                  {Object.keys(row).map(key => (
                    key === 'slug'
                      ? (
                        <Styled.Cell key={row.slug + key} textAlign="right">
                          <Styled.EditButton to={`/page/${row[key]}`}><MdModeEdit /></Styled.EditButton>
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

PagesList.propTypes = {
  requestGetPagesListAction: PropTypes.func.isRequired,
  requestDeletePageAction: PropTypes.func.isRequired,
  pages: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
  pages: getPagesListFiltered(state),
});

export default connect(
  mapStateToProps,
  {
    requestGetPagesListAction: requestGetPagesList,
    requestDeletePageAction: requestDeletePage,
  },
)(PagesList);
