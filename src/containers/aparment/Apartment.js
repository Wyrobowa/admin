import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// Actions
import {
  editApartmentForm, requestSendApartment, requestGetApartment, clearApartmentForm,
} from '../../actions/apartmentActions';

// Components
import Button from '../../components/button/Button';
import Checkbox from '../../components/checkbox/Checkbox';
import FileInput from '../../components/fileInput/FileInput';
import FormGenerator from '../../components/formGenerator/FormGenerator';

// Reducers
import { getApartment } from '../../reducers/apartmentReducer';

const Apartment = ({
  apartment,
  editApartmentAction,
  requestSendApartmentAction,
  match,
  requestGetApartmentAction,
  clearApartmentFormAction,
}) => {
  useEffect(() => {
    if (match.params.apartmentSlug) {
      requestGetApartmentAction(match.params.apartmentSlug);
    } else {
      clearApartmentFormAction();
    }
  }, []);

  const handleInputChange = ({ target }) => {
    const { name, value, type } = target;
    let inputValue = value;

    if (type === 'number') {
      inputValue = parseInt(inputValue, 10);
    }

    editApartmentAction(name, inputValue);
  };

  const handleCheckboxChange = ({ target }) => {
    const { name, checked } = target;

    editApartmentAction(name, checked);
  };

  const handleFileInputChange = ({ target }) => {
    // TODO: Create FileInput component
    console.log(target.files);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    requestSendApartmentAction();
  };

  const form = [
    {
      sectionTitle: 'General information',
      id: 'general-information',
      fields: [
        {
          labelText: 'Apartment name',
          id: 'name',
          description: 'Apartment name description',
        },
        {
          labelText: 'Apartment ID',
          id: 'yieldApartmentId',
          description: 'Apartment name description',
        },
        {
          labelText: 'Apartment number',
          id: 'apartmentNumber',
          description: 'Apartment ID from external service',
        },
        {
          labelText: 'Description',
          id: 'description',
          description: 'Apartment ID from external service',
        },
      ],
    },
    {
      sectionTitle: 'Gallery',
      id: 'mainPicture',
      component: FileInput,
      props: {
        labelText: 'Main picture',
        id: 'main-picture',
        onChange: handleFileInputChange,
      },
    },
    {
      sectionTitle: 'Attributes',
      id: 'attributes',
      fields: [
        {
          labelText: 'Measurement',
          id: 'attributes.measurement',
          description: 'Measurement description',
          inputType: 'number',
        },
        {
          labelText: 'Guests number',
          id: 'attributes.guestsNumber',
          description: 'Guests number description',
          inputType: 'number',
        },
        {
          labelText: 'Guests limit',
          id: 'attributes.guestsLimit',
          description: 'Guests limit description',
          inputType: 'number',
        },
        {
          labelText: 'Extra guest price',
          id: 'attributes.extraGuestPrice',
          description: 'Extra guest price description',
          inputType: 'number',
        },
        {
          component: Checkbox,
          id: 'attributes.isWlanAvailable',
          labelText: 'Wi-fi',
          props: {
            onChange: handleCheckboxChange, isSwitch: true,
          },
          description: 'Wi-fi description',
        },
      ],
    },
    {
      sectionTitle: 'Location',
      id: 'location',
      component: FileInput,
      props: {
        labelText: 'Main picture',
        id: 'main-picture',
        onChange: handleFileInputChange,
      },
    },
  ];

  return (
    <section>
      <FormGenerator
        formData={form}
        handleInputChange={handleInputChange}
        valueObject={apartment}
      />
      <Button model="primary" type="submit" onClick={handleSubmit}>Save Apartment</Button>
    </section>
  );
};

Apartment.propTypes = {
  apartment: PropTypes.object.isRequired,
  editApartmentAction: PropTypes.func.isRequired,
  requestSendApartmentAction: PropTypes.func.isRequired,
  requestGetApartmentAction: PropTypes.func.isRequired,
  match: PropTypes.object.isRequired,
  clearApartmentFormAction: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  apartment: getApartment(state),
});

export default connect(
  mapStateToProps,
  {
    clearApartmentFormAction: clearApartmentForm,
    requestSendApartmentAction: requestSendApartment,
    requestGetApartmentAction: requestGetApartment,
    editApartmentAction: editApartmentForm,
  },
)(Apartment);
