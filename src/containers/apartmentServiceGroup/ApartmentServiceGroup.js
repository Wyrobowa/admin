import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// Actions
import {
  editApartmentServiceGroupForm,
  requestSendApartmentServiceGroup,
  requestGetApartmentServiceGroup,
  clearApartmentServiceGroupForm,
} from '../../actions/apartmentServiceGroupActions';

// Components
import Button from '../../components/button/Button';
import FormGenerator from '../../components/formGenerator/FormGenerator';

// Reducers
import { getApartmentServiceGroup } from '../../reducers/apartmentServiceGroupReducer';

const ApartmentServiceGroupGroup = ({
  apartmentServiceGroup,
  editApartmentServiceGroupAction,
  requestSendApartmentServiceGroupAction,
  match,
  requestGetApartmentServiceGroupAction,
  clearApartmentServiceGroupFormAction,
}) => {
  useEffect(() => {
    if (match.params.apartmentServiceGroupSlug) {
      requestGetApartmentServiceGroupAction(match.params.apartmentServiceGroupSlug);
    } else {
      clearApartmentServiceGroupFormAction();
    }
  }, []);

  const handleInputChange = ({ target }) => {
    const { name, value, type } = target;
    let inputValue = value;

    if (type === 'number') {
      inputValue = parseInt(inputValue, 10);
    }

    editApartmentServiceGroupAction(name, inputValue);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    requestSendApartmentServiceGroupAction();
  };

  const form = [
    {
      sectionTitle: 'Apartment service group',
      id: 'apartment-service-group',
      fields: [
        {
          labelText: 'Service group name',
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
        valueObject={apartmentServiceGroup}
      />
      <Button model="primary" type="submit" onClick={handleSubmit}>Save apartment service group</Button>
    </section>
  );
};

ApartmentServiceGroupGroup.propTypes = {
  apartmentServiceGroup: PropTypes.object.isRequired,
  editApartmentServiceGroupAction: PropTypes.func.isRequired,
  requestSendApartmentServiceGroupAction: PropTypes.func.isRequired,
  requestGetApartmentServiceGroupAction: PropTypes.func.isRequired,
  match: PropTypes.object.isRequired,
  clearApartmentServiceGroupFormAction: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  apartmentServiceGroup: getApartmentServiceGroup(state),
});

export default connect(
  mapStateToProps,
  {
    clearApartmentServiceGroupFormAction: clearApartmentServiceGroupForm,
    requestSendApartmentServiceGroupAction: requestSendApartmentServiceGroup,
    requestGetApartmentServiceGroupAction: requestGetApartmentServiceGroup,
    editApartmentServiceGroupAction: editApartmentServiceGroupForm,
  },
)(ApartmentServiceGroupGroup);
