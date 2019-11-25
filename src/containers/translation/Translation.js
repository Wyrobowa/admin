import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// Actions
import {
  editTranslationForm, requestSendTranslation, requestGetTranslation, clearTranslationForm,
} from '../../actions/translationActions';

// Components
import Button from '../../components/button/Button';
import FormGenerator from '../../components/formGenerator/FormGenerator';
import Select from '../../components/select/Select';
import TextField from '../../components/textField/TextField';

// Reducers
import { getTranslation } from '../../reducers/translationReducer';

// Services
import { getData } from '../../services/requestService/requestService';

const Translation = ({
  translation,
  editTranslationAction,
  requestSendTranslationAction,
  requestGetTranslationAction,
  clearTranslationFormAction,
  match,
}) => {
  const [languagesList, setLanguagesList] = useState([
    {
      slug: '',
      name: '',
      code: '',
    },
  ]);
  const [phrasesList, setPhrasesList] = useState([
    {
      slug: '',
      text: '',
    },
  ]);

  async function getLanguagesListData() {
    const response = await getData('languagesList');
    setLanguagesList(response.data);
  }

  async function getPhrasesListData() {
    const response = await getData('phrasesList');
    setPhrasesList(response.data);
  }

  useEffect(() => {
    getLanguagesListData();
    getPhrasesListData();
  }, []);

  useEffect(() => {
    if (match.params.translationSlug) {
      requestGetTranslationAction(match.params.translationSlug);
    } else {
      clearTranslationFormAction();
    }
  }, []);

  const handleInputChange = ({ target }) => {
    const { name, value, type } = target;
    let inputValue = value;

    if (type === 'number') {
      inputValue = parseInt(inputValue, 10);
    }

    editTranslationAction(name, inputValue);
  };

  const handleSelectChange = ({ target }) => {
    const { name, value } = target;

    editTranslationAction(name, value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    requestSendTranslationAction();
  };

  const form = [
    {
      sectionTitle: 'General information',
      id: 'general-information',
      fields: [
        {
          component: Select,
          labelText: 'Phrases list',
          id: 'phrase',
          description: 'Phrases list',
          props: {
            id: 'phrase',
            labelText: 'Phrases list',
            list: phrasesList,
            onChange: handleSelectChange,
            selectValue: translation.phrase,
            optionTextField: 'text',
          },
        },
        {
          component: Select,
          labelText: 'Languages list',
          id: 'language',
          description: 'Languages list',
          props: {
            id: 'language',
            labelText: 'Languages list',
            list: languagesList,
            onChange: handleSelectChange,
            selectValue: translation.language,
            optionTextField: 'name',
          },
        },
        {
          component: TextField,
          labelText: 'Translation text',
          id: 'text',
          description: 'Translation text',
          props: {
            fieldType: 'textarea',
            onChange: handleInputChange,
            value: translation.text,
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
        valueObject={translation}
      />
      <Button model="primary" type="submit" onClick={handleSubmit}>Save Translation</Button>
    </section>
  );
};

Translation.propTypes = {
  translation: PropTypes.object.isRequired,
  editTranslationAction: PropTypes.func.isRequired,
  requestSendTranslationAction: PropTypes.func.isRequired,
  requestGetTranslationAction: PropTypes.func.isRequired,
  match: PropTypes.object.isRequired,
  clearTranslationFormAction: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  translation: getTranslation(state),
});

export default connect(
  mapStateToProps,
  {
    requestSendTranslationAction: requestSendTranslation,
    requestGetTranslationAction: requestGetTranslation,
    editTranslationAction: editTranslationForm,
    clearTranslationFormAction: clearTranslationForm,
  },
)(Translation);
