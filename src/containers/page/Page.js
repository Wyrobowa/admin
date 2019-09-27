import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// Actions
import { editPageForm, requestSendPage, requestGetPage } from '../../actions/pageActions';

// Components
import Button from '../../components/button/Button';
import Checkbox from '../../components/checkbox/Checkbox';
import FormGenerator from '../../components/formGenerator/FormGenerator';
import TextField from '../../components/textField/TextField';

// Reducers
import { getPage } from '../../reducers/pageReducer';

const Page = ({
  page, editPageAction, requestSendPageAction, match, requestGetPageAction,
}) => {
  useEffect(() => {
    if (match.params.pageSlug) {
      requestGetPageAction(match.params.pageSlug);
    }
  }, []);

  const handleInputChange = ({ target }) => {
    const { name, value, type } = target;
    let inputValue = value;

    if (type === 'number') {
      inputValue = parseInt(inputValue, 10);
    }

    editPageAction(name, inputValue);
  };

  const handleCheckboxChange = ({ target }) => {
    const { name, checked } = target;

    editPageAction(name, checked);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    requestSendPageAction();
  };

  const form = [
    {
      sectionTitle: 'General information',
      id: 'general-information',
      fields: [
        {
          labelText: 'Page name',
          id: 'name',
          description: 'Page name',
        },
        {
          component: TextField,
          labelText: 'Page text',
          id: 'text',
          description: 'Page text',
          props: {
            fieldType: 'textarea',
            onChange: handleInputChange,
            value: page.text,
          },
        },
        {
          component: Checkbox,
          labelText: 'Page visibility',
          id: 'visibility',
          description: 'Page visibility',
          props: {
            onChange: handleCheckboxChange,
            isSwitch: true,
          },
        },
      ],
    },
  ];

  return (
    <section>
      <FormGenerator
        formData={form}
        handleInputChange={handleInputChange}
        valueObject={page}
      />
      <Button model="primary" type="submit" onClick={handleSubmit}>Save Page</Button>
    </section>
  );
};

Page.propTypes = {
  page: PropTypes.object.isRequired,
  editPageAction: PropTypes.func.isRequired,
  requestSendPageAction: PropTypes.func.isRequired,
  requestGetPageAction: PropTypes.func.isRequired,
  match: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  page: getPage(state),
});

export default connect(
  mapStateToProps,
  {
    requestSendPageAction: requestSendPage,
    requestGetPageAction: requestGetPage,
    editPageAction: editPageForm,
  },
)(Page);
