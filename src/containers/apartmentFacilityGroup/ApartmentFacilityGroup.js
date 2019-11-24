import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// Actions
import * as apartmentFacilityGroupActions from '../../actions/apartmentFacilityGroupActions';

// Components
import Button from '../../components/button/Button';
import FormGenerator from '../../components/formGenerator/FormGenerator';

// Reducers
import { getApartmentFacilityGroup } from '../../reducers/apartmentFacilityGroupReducer';

const ApartmentFacilityGroupGroup = ({
  apartmentFacilityGroup,
  editApartmentFacilityGroupAction,
  requestSendApartmentFacilityGroupAction,
  match,
  requestGetApartmentFacilityGroupAction,
  clearApartmentFacilityGroupFormAction,
}) => {
  useEffect(() => {
    if (match.params.apartmentFacilityGroupSlug) {
      requestGetApartmentFacilityGroupAction(match.params.apartmentFacilityGroupSlug);
    } else {
      clearApartmentFacilityGroupFormAction();
    }
  }, []);

  const handleInputChange = ({ target }) => {
    const { name, value, type } = target;
    let inputValue = value;

    if (type === 'number') {
      inputValue = parseInt(inputValue, 10);
    }

    editApartmentFacilityGroupAction(name, inputValue);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    requestSendApartmentFacilityGroupAction();
  };

  const form = [
    {
      sectionTitle: 'Apartment facility group',
      id: 'apartment-facility-group',
      fields: [
        {
          labelText: 'Facility group name',
          id: 'name',
          description: 'Apartment name description',
        },
      ],
    },
  ];

  return (
    <section>
      <FormGenerator
        formData={form}
        handleInputChange={handleInputChange}
        valueObject={apartmentFacilityGroup}
      />
      <Button model="primary" type="submit" onClick={handleSubmit}>Save apartment facility group</Button>
    </section>
  );
};

ApartmentFacilityGroupGroup.propTypes = {
  apartmentFacilityGroup: PropTypes.object.isRequired,
  editApartmentFacilityGroupAction: PropTypes.func.isRequired,
  requestSendApartmentFacilityGroupAction: PropTypes.func.isRequired,
  requestGetApartmentFacilityGroupAction: PropTypes.func.isRequired,
  match: PropTypes.object.isRequired,
  clearApartmentFacilityGroupFormAction: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  apartmentFacilityGroup: getApartmentFacilityGroup(state),
});

export default connect(
  mapStateToProps,
  {
    clearApartmentFacilityGroupFormAction: apartmentFacilityGroupActions
      .clearApartmentFacilityGroupForm,
    requestSendApartmentFacilityGroupAction: apartmentFacilityGroupActions
      .requestSendApartmentFacilityGroup,
    requestGetApartmentFacilityGroupAction: apartmentFacilityGroupActions
      .requestGetApartmentFacilityGroup,
    editApartmentFacilityGroupAction: apartmentFacilityGroupActions
      .editApartmentFacilityGroupForm,
  },
)(ApartmentFacilityGroupGroup);
