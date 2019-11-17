import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// Actions
import {
  editApartmentForm,
  editApartmentAddressForm,
  requestSendApartment,
  requestGetApartment,
  clearApartmentForm,
} from '../../actions/apartmentActions';

// Components
import ApartmentAddress from '../../components/apartmentAddress/ApartmentAddress';
import Button from '../../components/button/Button';
import Checkbox from '../../components/checkbox/Checkbox';
import FileInput from '../../components/fileInput/FileInput';
import FormGenerator from '../../components/formGenerator/FormGenerator';
import ImagesList from '../../components/imagesList/ImagesList';
import Image from '../../components/image/Image';
import Select from '../../components/select/Select';

// Reducers
import { getApartment } from '../../reducers/apartmentReducer';

// Services
import { getData, sendData } from '../../services/requestService/requestService';
import TextField from '../../components/textField/TextField';

const Apartment = ({
  apartment,
  editApartmentAction,
  editApartmentAddressCoordinatesAction,
  requestSendApartmentAction,
  requestGetApartmentAction,
  clearApartmentFormAction,
  match,
}) => {
  const [locationsList, setLocationsList] = useState([
    {
      _id: '',
      name: '',
    },
  ]);

  useEffect(() => {
    if (match.params.apartmentSlug) {
      requestGetApartmentAction(match.params.apartmentSlug);
    } else {
      clearApartmentFormAction();
    }
  }, []);

  async function getLocationsList() {
    const response = await getData('locationsList');
    setLocationsList(response.data);
  }

  useEffect(() => {
    getLocationsList();
  }, []);

  const handleInputChange = ({ target }) => {
    const { name, value, type } = target;
    let inputValue = value;

    if (type === 'number') {
      inputValue = parseInt(inputValue, 10);
    }

    editApartmentAction(name, inputValue);
  };

  const handleAddressCoordinatesInputChange = ({ target }) => {
    const { name, value } = target;

    editApartmentAddressCoordinatesAction(name, value);
  };

  const handleCheckboxChange = ({ target }) => {
    const { name, checked } = target;

    editApartmentAction(name, checked);
  };

  const handleFileInputChange = async ({ target }) => {
    const data = new FormData();

    Array.from(target.files).forEach((file) => {
      data.append('images', file);
    });

    const additionalQuery = `?slug=${apartment.slug}&type=apartment`;
    const requestResult = await sendData('adminGalleryUpload', data, additionalQuery);

    if (requestResult.imagesList) {
      editApartmentAction('gallery', requestResult.imagesList);
    }
  };

  const handleSelectChange = ({ target }) => {
    const { name, value } = target;

    editApartmentAction(name, value);
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
          component: TextField,
          labelText: 'Description',
          id: 'description',
          description: 'Description',
          props: {
            fieldType: 'textarea',
            onChange: handleInputChange,
            value: apartment.description,
          },
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
      sectionTitle: 'Location',
      id: 'location-section',
      fields: [
        {
          component: Select,
          labelText: 'Locations list',
          id: 'location',
          description: 'Locations list',
          props: {
            id: 'location',
            labelText: 'Locations list',
            list: locationsList,
            onChange: handleSelectChange,
            selectValue: apartment.location,
            optionTextField: 'name',
          },
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
            multiple: true,
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
  ];

  return (
    <section>
      <FormGenerator
        formData={form}
        handleInputChange={handleInputChange}
        valueObject={apartment}
      />
      <ApartmentAddress
        onChange={handleInputChange}
        onAddressCoordinatesChange={handleAddressCoordinatesInputChange}
        apartmentAddressData={apartment.address}
      />
      <Button model="primary" type="submit" onClick={handleSubmit}>Save Apartment</Button>
    </section>
  );
};

Apartment.propTypes = {
  apartment: PropTypes.object.isRequired,
  editApartmentAction: PropTypes.func.isRequired,
  editApartmentAddressCoordinatesAction: PropTypes.func.isRequired,
  requestSendApartmentAction: PropTypes.func.isRequired,
  requestGetApartmentAction: PropTypes.func.isRequired,
  clearApartmentFormAction: PropTypes.func.isRequired,
  match: PropTypes.object.isRequired,
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
    editApartmentAddressCoordinatesAction: editApartmentAddressForm,
  },
)(Apartment);
