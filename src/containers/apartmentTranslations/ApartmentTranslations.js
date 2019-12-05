import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// Actions
import * as apartmentTranslationsActions from '../../actions/apartmentTranslationsActions';

// Components
import Button from '../../components/button/Button';
import FormGenerator from '../../components/formGenerator/FormGenerator';
import Select from '../../components/select/Select';

// Reducers
import { getApartmentTranslations } from '../../reducers/apartmentTranslationsReducer';

// Services
import * as requestService from '../../services/requestService/requestService';
import TextField from '../../components/textField/TextField';

const ApartmentTranslations = ({
  apartmentTranslations,
  editApartmentTranslationsAction,
  requestSendApartmentTranslationsAction,
  requestGetApartmentTranslationsAction,
  clearApartmentTranslationsFormAction,
  match,
}) => {
  const [apartmentList, setApartmentList] = useState([
    {
      slug: '',
      name: '',
    },
  ]);
  const [languagesList, setLanguagesList] = useState([
    {
      slug: '',
      name: '',
      code: '',
    },
  ]);

  useEffect(() => {
    if (match.params.apartmentTranslationsSlug) {
      requestGetApartmentTranslationsAction(match.params.apartmentTranslationsSlug);
    } else {
      clearApartmentTranslationsFormAction();
    }
  }, []);

  async function getApartmentList() {
    const response = await requestService.getData('apartmentsList');
    setApartmentList(response.data);
  }

  async function getLanguagesListData() {
    const response = await requestService.getData('languagesList');
    setLanguagesList(response.data);
  }

  useEffect(() => {
    getApartmentList();
    getLanguagesListData();
  }, []);

  const handleInputChange = ({ target }) => {
    const { name, value } = target;

    editApartmentTranslationsAction(name, value);
  };

  const handleSelectChange = ({ target }) => {
    const { name, value } = target;

    editApartmentTranslationsAction(name, value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    requestSendApartmentTranslationsAction();
  };

  const form = [
    {
      sectionTitle: 'Apartments List',
      id: 'apartments-list-section',
      fields: [
        {
          component: Select,
          labelText: 'Apartments List',
          id: 'apartment',
          description: 'Apartments List',
          props: {
            id: 'apartment',
            labelText: 'Apartments List',
            list: apartmentList,
            onChange: handleSelectChange,
            selectValue: apartmentTranslations.apartment,
            optionTextField: 'name',
          },
        },
      ],
    },
    {
      sectionTitle: 'Languages List',
      id: 'language-list-section',
      fields: [
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
            selectValue: apartmentTranslations.language,
            optionTextField: 'name',
          },
        },
      ],
    },
    {
      sectionTitle: 'Apartment Translation',
      id: 'apartment-translations',
      fields: [
        {
          labelText: 'Apartment translated name',
          id: 'name',
          description: 'Apartment translated name',
        },
        {
          component: TextField,
          labelText: 'Apartment translated description',
          id: 'description',
          description: 'Apartment translated description',
          props: {
            fieldType: 'textarea',
            onChange: handleInputChange,
            value: apartmentTranslations.description,
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
        valueObject={apartmentTranslations}
      />
      <Button model="primary" type="submit" onClick={handleSubmit}>Save apartment translations</Button>
    </section>
  );
};

ApartmentTranslations.propTypes = {
  apartmentTranslations: PropTypes.object.isRequired,
  editApartmentTranslationsAction: PropTypes.func.isRequired,
  requestSendApartmentTranslationsAction: PropTypes.func.isRequired,
  requestGetApartmentTranslationsAction: PropTypes.func.isRequired,
  match: PropTypes.object.isRequired,
  clearApartmentTranslationsFormAction: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  apartmentTranslations: getApartmentTranslations(state),
});

export default connect(
  mapStateToProps,
  {
    clearApartmentTranslationsFormAction: apartmentTranslationsActions
      .clearApartmentTranslationsForm,
    requestSendApartmentTranslationsAction: apartmentTranslationsActions
      .requestSendApartmentTranslations,
    requestGetApartmentTranslationsAction: apartmentTranslationsActions
      .requestGetApartmentTranslations,
    editApartmentTranslationsAction: apartmentTranslationsActions
      .editApartmentTranslationsForm,
  },
)(ApartmentTranslations);
