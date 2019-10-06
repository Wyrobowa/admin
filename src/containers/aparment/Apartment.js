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
import ImagesList from '../../components/imagesList/ImagesList';
import Image from '../../components/image/Image';

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
          description: 'Apartment ID from external service',
        },
        {
          labelText: 'Apartment number',
          id: 'apartmentNumber',
          description: 'Apartment number',
        },
        {
          labelText: 'Description',
          id: 'description',
          description: 'Apartment description',
        },
        {
          component: Checkbox,
          id: 'recommended',
          labelText: 'Recommended',
          props: {
            onChange: handleCheckboxChange, isSwitch: true, checked: apartment.recommended,
          },
          description: 'Recommended apartment',
        },
      ],
    },
    {
      sectionTitle: 'Gallery',
      id: 'main-picture',
      fields: [
        {
          component: FileInput,
          id: 'mainPictureInput',
          labelText: 'Main picture',
          props: {
            onChange: handleFileInputChange,
          },
        },
        {
          component: Image,
          id: 'mainPicture',
          labelText: 'Gallery',
          props: {
            item: apartment,
            type: 'apartment',
            alt: apartment.name,
            height: '150',
          },
        },
        {
          component: FileInput,
          id: 'galleryInput',
          labelText: 'Gallery',
          props: {
            onChange: handleFileInputChange,
          },
        },
        {
          component: ImagesList,
          id: 'gallery',
          stretched: true,
          labelText: 'Gallery',
          props: {
            item: apartment,
            type: 'apartment',
            alt: apartment.name,
            height: '150',
          },
        },
      ],
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
      ],
    },
    {
      sectionTitle: 'Facilities',
      id: 'facilities',
      fields: [
        {
          component: Checkbox,
          id: 'facilities.wlan',
          props: {
            onChange: handleCheckboxChange,
            isSwitch: true,
            checked: apartment.facilities.wlan,
          },
          description: 'Wi-fi',
        },
        {
          component: Checkbox,
          id: 'facilities.parking',
          props: {
            onChange: handleCheckboxChange,
            isSwitch: true,
            checked: apartment.facilities.parking,
          },
          description: 'Parking',
        },
        {
          component: Checkbox,
          id: 'facilities.elevator',
          props: {
            onChange: handleCheckboxChange,
            isSwitch: true,
            checked: apartment.facilities.elevator,
          },
          description: 'Elevator',
        },
        {
          component: Checkbox,
          id: 'facilities.balcony',
          props: {
            onChange: handleCheckboxChange,
            isSwitch: true,
            checked: apartment.facilities.balcony,
          },
          description: 'Balcony',
        },
        {
          component: Checkbox,
          id: 'facilities.garden',
          props: {
            onChange: handleCheckboxChange,
            isSwitch: true,
            checked: apartment.facilities.garden,
          },
          description: 'Garden',
        },
        {
          component: Checkbox,
          id: 'facilities.cosmetics',
          props: {
            onChange: handleCheckboxChange,
            isSwitch: true,
            checked: apartment.facilities.cosmetics,
          },
          description: 'Cosmetics',
        },
        {
          component: Checkbox,
          id: 'facilities.towels',
          props: {
            onChange: handleCheckboxChange,
            isSwitch: true,
            checked: apartment.facilities.towels,
          },
          description: 'Towels',
        },
      ],
    },
    {
      sectionTitle: 'Equipment',
      id: 'equipment',
      fields: [
        {
          component: Checkbox,
          id: 'equipment.hairDryer',
          props: {
            onChange: handleCheckboxChange,
            isSwitch: true,
            checked: apartment.equipment.hairDryer,
          },
          description: 'Hair dryer',
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
