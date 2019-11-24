import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

// Components
import Checkbox from '../../components/checkbox/Checkbox';
import FormGenerator from '../../components/formGenerator/FormGenerator';

const ApartmentFacilities = ({
  handleCheckboxChange, handleInputChange, apartmentData, listOfAvailableApartmentFacilities,
}) => {
  const [form, setForm] = useState({
    sectionTitle: 'Apartment Facilities',
    id: 'apartment-facilities',
    fields: [],
  });

  useEffect(() => {
    const fieldsData = [];

    // eslint-disable-next-line no-plusplus
    for (let j = 0; j < listOfAvailableApartmentFacilities.length; j++) {
      fieldsData.push(
        {
          component: Checkbox,
          id: `apartmentFacilities.${listOfAvailableApartmentFacilities[j]._id}`,
          props: {
            onChange: handleCheckboxChange,
            isSwitch: true,
            checked: apartmentData.apartmentFacilities.includes(
              listOfAvailableApartmentFacilities[j]._id,
            ),
          },
          description: listOfAvailableApartmentFacilities[j].name,
        },
      );
    }

    setForm({
      ...form,
      fields: fieldsData,
    });
  }, [apartmentData, listOfAvailableApartmentFacilities]);

  return (
    <>
      <FormGenerator
        formData={[form]}
        handleInputChange={handleInputChange}
        valueObject={apartmentData}
      />
    </>
  );
};

ApartmentFacilities.propTypes = {
  handleCheckboxChange: PropTypes.func.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  apartmentData: PropTypes.object.isRequired,
  listOfAvailableApartmentFacilities: PropTypes.array.isRequired,
};

export default ApartmentFacilities;
