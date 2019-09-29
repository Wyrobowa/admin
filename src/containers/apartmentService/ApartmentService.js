import React, { useEffect } from 'react';
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

const ApartmentService = ({
  apartmentService,
  editApartmentServiceAction,
  requestSendApartmentServiceAction,
  match,
  requestGetApartmentServiceAction,
  clearApartmentServiceFormAction,
}) => {
  useEffect(() => {
    if (match.params.apartmentSlug) {
      requestGetApartmentServiceAction(match.params.apartmentSlug);
    } else {
      clearApartmentServiceFormAction();
    }
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

  const handleFileInputChange = ({ target }) => {
    // TODO: Create FileInput component
    console.log(target.files);
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
          description: 'Promoted description',
        },
        {
          labelText: 'Icon',
          id: 'picture',
          component: FileInput,
          props: {
            labelText: 'Icon',
            id: 'picture',
            onChange: handleFileInputChange,
          },
        },
        {
          component: Checkbox,
          id: 'published',
          labelText: 'Published',
          props: {
            onChange: handleCheckboxChange, isSwitch: true,
          },
          description: 'Published description',
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
