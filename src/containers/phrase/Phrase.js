import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// Actions
import {
  editPhraseForm, requestSendPhrase, requestGetPhrase, clearPhraseForm,
} from '../../actions/phraseActions';

// Components
import Button from '../../components/button/Button';
import FormGenerator from '../../components/formGenerator/FormGenerator';
import TextField from '../../components/textField/TextField';

// Reducers
import { getPhrase } from '../../reducers/phraseReducer';

const Phrase = ({
  phrase,
  editPhraseAction,
  requestSendPhraseAction,
  requestGetPhraseAction,
  clearPhraseFormAction,
  match,
}) => {
  useEffect(() => {
    if (match.params.phraseSlug) {
      requestGetPhraseAction(match.params.phraseSlug);
    } else {
      clearPhraseFormAction();
    }
  }, []);

  const handleInputChange = ({ target }) => {
    const { name, value, type } = target;
    let inputValue = value;

    if (type === 'number') {
      inputValue = parseInt(inputValue, 10);
    }

    editPhraseAction(name, inputValue);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    requestSendPhraseAction();
  };

  const form = [
    {
      sectionTitle: 'General information',
      id: 'general-information',
      fields: [
        {
          component: TextField,
          labelText: 'Phrase text',
          id: 'text',
          description: 'Phrase text',
          props: {
            fieldType: 'textarea',
            onChange: handleInputChange,
            value: phrase.text,
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
        valueObject={phrase}
      />
      <Button model="primary" type="submit" onClick={handleSubmit}>Save Phrase</Button>
    </section>
  );
};

Phrase.propTypes = {
  phrase: PropTypes.object.isRequired,
  editPhraseAction: PropTypes.func.isRequired,
  requestSendPhraseAction: PropTypes.func.isRequired,
  requestGetPhraseAction: PropTypes.func.isRequired,
  match: PropTypes.object.isRequired,
  clearPhraseFormAction: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  phrase: getPhrase(state),
});

export default connect(
  mapStateToProps,
  {
    requestSendPhraseAction: requestSendPhrase,
    requestGetPhraseAction: requestGetPhrase,
    editPhraseAction: editPhraseForm,
    clearPhraseFormAction: clearPhraseForm,
  },
)(Phrase);
