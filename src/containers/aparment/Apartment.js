import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// Actions
import * as apartmentActions from '../../actions/apartmentActions';
import * as apartmentFacilityActions from '../../actions/apartmentFacilityActions';
import * as apartmentServiceActions from '../../actions/apartmentServiceActions';

// Components
import ApartmentAddress from '../../components/apartmentAddress/ApartmentAddress';
import ApartmentFacilities from './ApartmentFacilities';
import ApartmentServices from './ApartmentServices';
import Button from '../../components/button/Button';
import Checkbox from '../../components/checkbox/Checkbox';
import FileInput from '../../components/fileInput/FileInput';
import FormGenerator from '../../components/formGenerator/FormGenerator';
import ImagesList from '../../components/imagesList/ImagesList';
import Image from '../../components/image/Image';
import Select from '../../components/select/Select';
import TextField from '../../components/textField/TextField';

// Reducers
import { getApartment } from '../../reducers/apartmentReducer';
import { getApartmentFacilityList } from '../../reducers/apartmentFacilityListReducer';
import { getApartmentServiceList } from '../../reducers/apartmentServiceListReducer';

// Services
import * as requestService from '../../services/requestService/requestService';

const Apartment = ({
  apartment,
  apartmentFacilities,
  apartmentServices,
  editApartmentAction,
  editApartmentAddressCoordinatesAction,
  editApartmentFacilitiesAction,
  editApartmentServicesAction,
  deleteImageAction,
  requestSendApartmentAction,
  requestGetApartmentAction,
  requestGetApartmentFacilityListAction,
  requestGetApartmentServiceListAction,
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

    requestGetApartmentFacilityListAction();
    requestGetApartmentServiceListAction();
  }, []);

  async function getLocationsList() {
    const response = await requestService.getData('locationsList');
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

  const handleApartmentFacilitiesCheckboxChange = ({ target }) => {
    const { name, checked } = target;

    editApartmentFacilitiesAction(name, checked);
  };

  const handleApartmentServicesCheckboxChange = ({ target }) => {
    const { name, checked } = target;

    editApartmentServicesAction(name, checked);
  };

  const handleFileInputChange = async ({ target }) => {
    const data = new FormData();

    Array.from(target.files).forEach((file) => {
      data.append('images', file);
    });

    const additionalQuery = `?slug=${apartment.slug}&type=apartment`;
    const requestResult = await requestService.sendData('adminGalleryUpload', data, additionalQuery);

    if (requestResult.imagesList) {
      editApartmentAction('gallery', requestResult.imagesList);
    }
  };

  const handleSelectChange = ({ target }) => {
    const { name, value } = target;

    editApartmentAction(name, value);
  };

  const handleDeleteImage = ({ currentTarget }) => {
    deleteImageAction('gallery', currentTarget.getAttribute('data-slug'));
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
            handleDelete: handleDeleteImage,
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
      <ApartmentFacilities
        handleCheckboxChange={handleApartmentFacilitiesCheckboxChange}
        handleInputChange={handleInputChange}
        apartmentData={apartment}
        listOfAvailableApartmentFacilities={apartmentFacilities}
      />
      <ApartmentServices
        handleCheckboxChange={handleApartmentServicesCheckboxChange}
        handleInputChange={handleInputChange}
        apartmentData={apartment}
        listOfAvailableServices={apartmentServices}
      />
      <Button model="primary" type="submit" onClick={handleSubmit}>Save Apartment</Button>
    </section>
  );
};

Apartment.propTypes = {
  apartment: PropTypes.object.isRequired,
  apartmentFacilities: PropTypes.array.isRequired,
  apartmentServices: PropTypes.array.isRequired,
  clearApartmentFormAction: PropTypes.func.isRequired,
  editApartmentAction: PropTypes.func.isRequired,
  editApartmentAddressCoordinatesAction: PropTypes.func.isRequired,
  editApartmentFacilitiesAction: PropTypes.func.isRequired,
  editApartmentServicesAction: PropTypes.func.isRequired,
  requestGetApartmentAction: PropTypes.func.isRequired,
  requestGetApartmentFacilityListAction: PropTypes.func.isRequired,
  requestGetApartmentServiceListAction: PropTypes.func.isRequired,
  requestSendApartmentAction: PropTypes.func.isRequired,
  deleteImageAction: PropTypes.func.isRequired,
  match: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  apartment: getApartment(state),
  apartmentFacilities: getApartmentFacilityList(state),
  apartmentServices: getApartmentServiceList(state),
});

export default connect(
  mapStateToProps,
  {
    clearApartmentFormAction: apartmentActions.clearApartmentForm,
    editApartmentAction: apartmentActions.editApartmentForm,
    editApartmentAddressCoordinatesAction: apartmentActions.editApartmentAddressForm,
    editApartmentFacilitiesAction: apartmentActions.editApartmentFacilitiesForm,
    editApartmentServicesAction: apartmentActions.editApartmentServicesForm,
    requestSendApartmentAction: apartmentActions.requestSendApartment,
    requestGetApartmentAction: apartmentActions.requestGetApartment,
    requestGetApartmentFacilityListAction: apartmentFacilityActions.requestGetApartmentFacilityList,
    requestGetApartmentServiceListAction: apartmentServiceActions.requestGetApartmentServiceList,
    deleteImageAction: apartmentActions.deleteApartmentGalleryImage,
  },
)(Apartment);
