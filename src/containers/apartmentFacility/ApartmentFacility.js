import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// Actions
import * as apartmentFacilityActions from '../../actions/apartmentFacilityActions';

// Components
import Button from '../../components/button/Button';
import FormGenerator from '../../components/formGenerator/FormGenerator';
import Select from '../../components/select/Select';

// Reducers
import { getApartmentFacility } from '../../reducers/apartmentFacilityReducer';

// Services
import * as requestService from '../../services/requestService/requestService';

const ApartmentFacility = ({
  apartmentFacility,
  editApartmentFacilityAction,
  requestSendApartmentFacilityAction,
  requestGetApartmentFacilityAction,
  clearApartmentFacilityFormAction,
  match,
}) => {
  const [apartmentFacilityGroupList, setApartmentFacilityGroupList] = useState([
    {
      _id: '',
      name: '',
    },
  ]);

  useEffect(() => {
    if (match.params.apartmentFacilitySlug) {
      requestGetApartmentFacilityAction(match.params.apartmentFacilitySlug);
    } else {
      clearApartmentFacilityFormAction();
    }
  }, []);

  async function getApartmentFacilityGroupList() {
    const response = await requestService.getData('apartmentFacilityGroupList');
    setApartmentFacilityGroupList(response.data);
  }

  useEffect(() => {
    getApartmentFacilityGroupList();
  }, []);

  const handleInputChange = ({ target }) => {
    const { name, value } = target;

    editApartmentFacilityAction(name, value);
  };

  const handleSelectChange = ({ target }) => {
    const { name, value } = target;

    editApartmentFacilityAction(name, value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    requestSendApartmentFacilityAction();
  };

  const form = [
    {
      sectionTitle: 'Apartment facility',
      id: 'apartment-facility',
      fields: [
        {
          labelText: 'Facility name',
          id: 'name',
          description: 'Apartment facility name',
        },
      ],
    },
    {
      sectionTitle: 'Apartment Facility Group',
      id: 'apartment-facility-group-section',
      fields: [
        {
          component: Select,
          labelText: 'Apartment Facility Group list',
          id: 'apartmentFacilityGroup',
          description: 'Apartment Facility Group list',
          props: {
            id: 'apartmentFacilityGroup',
            labelText: 'Apartment Facility Group list',
            list: apartmentFacilityGroupList,
            onChange: handleSelectChange,
            selectValue: apartmentFacility.apartmentFacilityGroup,
            optionTextField: 'name',
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
        valueObject={apartmentFacility}
      />
      <Button model="primary" type="submit" onClick={handleSubmit}>Save apartment facility</Button>
    </section>
  );
};

ApartmentFacility.propTypes = {
  apartmentFacility: PropTypes.object.isRequired,
  editApartmentFacilityAction: PropTypes.func.isRequired,
  requestSendApartmentFacilityAction: PropTypes.func.isRequired,
  requestGetApartmentFacilityAction: PropTypes.func.isRequired,
  match: PropTypes.object.isRequired,
  clearApartmentFacilityFormAction: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  apartmentFacility: getApartmentFacility(state),
});

export default connect(
  mapStateToProps,
  {
    clearApartmentFacilityFormAction: apartmentFacilityActions.clearApartmentFacilityForm,
    requestSendApartmentFacilityAction: apartmentFacilityActions.requestSendApartmentFacility,
    requestGetApartmentFacilityAction: apartmentFacilityActions.requestGetApartmentFacility,
    editApartmentFacilityAction: apartmentFacilityActions.editApartmentFacilityForm,
  },
)(ApartmentFacility);
