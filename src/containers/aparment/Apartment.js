import React from 'react';
import ReactCssModules from 'react-cssmodules';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// Actions
import { editApartment, requestSendApartment } from '../../actions/apartmentActions';

// Components
import Button from '../../components/button/Button';
import FileInput from '../../components/fileInput/FileInput';
import FormGenerator from '../../components/formGenerator/FormGenerator';

// Reducers
import { getApartment } from '../../reducers/apartmentReducer';

// Styles
import styles from './apartment.scss';

const Apartment = ({ apartment, editApartmentAction, requestSendApartmentAction }) => {
  const handleInputChange = ({ target }) => {
    const { name, value } = target;

    editApartmentAction(name, value);
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
      sectionTitle: 'General information\'s',
      id: 'general-information',
      fields: [
        {
          labelText: 'Apartment name',
          id: 'title',
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
      id: 'gallery',
      component: FileInput,
      props: {
        labelText: 'Main picture',
        id: 'main-picture',
        onChange: handleFileInputChange,
      },
    },
    {
      sectionTitle: 'Details',
      id: 'details',
      fields: [
        {
          labelText: 'Measurement',
          id: 'measurement',
          description: 'Measurement description',
        },
        {
          labelText: 'Guests number',
          id: 'guestsNumber',
          description: 'Guests number description',
        },
        {
          labelText: 'Guests limit',
          id: 'guestsLimit',
          description: 'Guests limit description',
        },
        {
          labelText: 'Extra guest price',
          id: 'extraGuestPrice',
          description: 'Extra guest price description',
        },
        {
          labelText: 'Wi-fi',
          id: 'isWlanAvailable',
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
    <section styleName="apartment">
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
};

const mapStateToProps = state => ({
  apartment: getApartment(state),
});

export default connect(
  mapStateToProps,
  {
    requestSendApartmentAction: requestSendApartment,
    editApartmentAction: editApartment,
  },
)(ReactCssModules(Apartment, styles));
