import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// Actions
import {
  editApartmentServiceForm,
  requestSendApartmentService,
  requestGetApartmentService,
  clearApartmentServiceForm,
} from '../../actions/apartmentServiceActions';

// Components
import Button from '../../components/button/Button';
import Checkbox from '../../components/checkbox/Checkbox';
import FileInput from '../../components/fileInput/FileInput';
import FormGenerator from '../../components/formGenerator/FormGenerator';

// Reducers
import { getApartmentService } from '../../reducers/apartmentServiceReducer';

// Services
import { getData, sendData } from '../../services/requestService/requestService';
import Select from '../../components/select/Select';

const ApartmentService = ({
  apartmentService,
  editApartmentServiceAction,
  requestSendApartmentServiceAction,
  match,
  requestGetApartmentServiceAction,
  clearApartmentServiceFormAction,
}) => {
  const [apartmentServiceGroupList, setApartmentServiceGroupList] = useState([
    {
      _id: '',
      name: '',
    },
  ]);

  useEffect(() => {
    if (match.params.apartmentServiceSlug) {
      requestGetApartmentServiceAction(match.params.apartmentServiceSlug);
    } else {
      clearApartmentServiceFormAction();
    }
  }, []);

  async function getApartmentServiceGroupList() {
    const response = await getData('apartmentServiceGroupList');
    setApartmentServiceGroupList(response.data);
  }

  useEffect(() => {
    getApartmentServiceGroupList();
  }, []);

  const handleInputChange = ({ target }) => {
    const { name, value, type } = target;
    let inputValue = value;

    if (type === 'number') {
      inputValue = parseInt(inputValue, 10);
    }

    editApartmentServiceAction(name, inputValue);
  };

  const handleCheckboxChange = ({ target }) => {
    const { name, checked } = target;

    editApartmentServiceAction(name, checked);
  };

  const handleFileInputChange = async ({ target }) => {
    const data = new FormData();
    data.append('images', target.files[0]);

    const additionalQuery = `?slug=${apartmentService.slug}&type=apartment-service&isIcon=true`;
    const requestResult = await sendData('adminGalleryUpload', data, additionalQuery);
    const [uploadedImages] = requestResult.imagesList;

    if (uploadedImages) {
      editApartmentServiceAction('mainPicture', uploadedImages);
    }
  };

  const handleSelectChange = ({ target }) => {
    const { name, value } = target;

    editApartmentServiceAction(name, value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    requestSendApartmentServiceAction();
  };

  const form = [
    {
      sectionTitle: 'Apartment service',
      id: 'apartment-service',
      fields: [
        {
          labelText: 'Service name',
          id: 'name',
          description: 'Apartment name description',
        },
        {
          labelText: 'Price',
          id: 'price',
          description: 'Apartment name description',
        },
        {
          labelText: 'Description',
          id: 'description',
          description: 'Apartment ID from external service',
        },
        {
          component: Checkbox,
          id: 'promoted',
          labelText: 'Promoted',
          props: {
            onChange: handleCheckboxChange, isSwitch: true,
          },
          description: 'Promoted apartment',
        },
        {
          component: Checkbox,
          id: 'published',
          labelText: 'Published',
          props: {
            onChange: handleCheckboxChange, isSwitch: true,
          },
          description: 'Published apartment',
        },
      ],
    },
    {
      sectionTitle: 'Apartment Service Group',
      id: 'apartment-service-group-section',
      fields: [
        {
          component: Select,
          labelText: 'Apartment Service Group list',
          id: 'apartmentServiceGroup',
          description: 'Apartment Service Group list',
          props: {
            id: 'apartmentServiceGroup',
            labelText: 'Apartment Service Group list',
            list: apartmentServiceGroupList,
            onChange: handleSelectChange,
            selectValue: apartmentService.apartmentServiceGroup,
            optionTextField: 'name',
          },
        },
      ],
    },
    {
      sectionTitle: 'Icon',
      id: 'icon-section',
      fields: [
        {
          labelText: 'Icon',
          id: 'picture',
          component: FileInput,
          props: {
            labelText: 'Icon',
            id: 'mainPicture',
            onChange: handleFileInputChange,
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
        valueObject={apartmentService}
      />
      <Button model="primary" type="submit" onClick={handleSubmit}>Save apartment service</Button>
    </section>
  );
};

ApartmentService.propTypes = {
  apartmentService: PropTypes.object.isRequired,
  editApartmentServiceAction: PropTypes.func.isRequired,
  requestSendApartmentServiceAction: PropTypes.func.isRequired,
  requestGetApartmentServiceAction: PropTypes.func.isRequired,
  match: PropTypes.object.isRequired,
  clearApartmentServiceFormAction: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  apartmentService: getApartmentService(state),
});

export default connect(
  mapStateToProps,
  {
    clearApartmentServiceFormAction: clearApartmentServiceForm,
    requestSendApartmentServiceAction: requestSendApartmentService,
    requestGetApartmentServiceAction: requestGetApartmentService,
    editApartmentServiceAction: editApartmentServiceForm,
  },
)(ApartmentService);
