import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

// Actions
import {
  editLanguageForm, requestSendLanguage, requestGetLanguage, clearLanguageForm,
} from '../../actions/languageActions';

// Components
import Button from '../../components/button/Button';
import FormGenerator from '../../components/formGenerator/FormGenerator';

// Reducers
import { getLanguage } from '../../reducers/languageReducer';

// Styles
import * as Styled from './languageStyles';

const Language = ({
  language,
  editLanguageAction,
  requestSendLanguageAction,
  match,
  requestGetLanguageAction,
  clearLanguageFormAction,
}) => {
  useEffect(() => {
    if (match.params.languageSlug) {
      requestGetLanguageAction(match.params.languageSlug);
    } else {
      clearLanguageFormAction();
    }
  }, []);

  const handleInputChange = ({ target }) => {
    const { name, value, type } = target;
    let inputValue = value;

    if (type === 'number') {
      inputValue = parseInt(inputValue, 10);
    }

    editLanguageAction(name, inputValue);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    requestSendLanguageAction();
  };

  const form = [
    {
      sectionTitle: 'General information',
      id: 'general-information',
      fields: [
        {
          labelText: 'Language name',
          id: 'name',
          description: 'Language name',
        },
        {
          labelText: 'Language code',
          id: 'code',
          description: 'Language code',
        },
      ],
    },
  ];

  return (
    <section>
      <FormGenerator
        formData={form}
        handleInputChange={handleInputChange}
        valueObject={language}
      >
        <Styled.Info type="default">
          If you have troubles finding valid language code please see language codes list from
          Wikipedia:
          {' '}
          <Link
            to="//en.wikipedia.org/wiki/List_of_ISO_639-1_codes"
            target="_blank"
          >
            https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes
          </Link>
        </Styled.Info>
      </FormGenerator>
      <Button model="primary" type="submit" onClick={handleSubmit}>Save Language</Button>
    </section>
  );
};

Language.propTypes = {
  language: PropTypes.object.isRequired,
  editLanguageAction: PropTypes.func.isRequired,
  requestSendLanguageAction: PropTypes.func.isRequired,
  requestGetLanguageAction: PropTypes.func.isRequired,
  match: PropTypes.object.isRequired,
  clearLanguageFormAction: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  language: getLanguage(state),
});

export default connect(
  mapStateToProps,
  {
    requestSendLanguageAction: requestSendLanguage,
    requestGetLanguageAction: requestGetLanguage,
    editLanguageAction: editLanguageForm,
    clearLanguageFormAction: clearLanguageForm,
  },
)(Language);
