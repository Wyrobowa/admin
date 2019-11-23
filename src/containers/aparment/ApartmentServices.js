import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

// Components
import Checkbox from '../../components/checkbox/Checkbox';
import FormGenerator from '../../components/formGenerator/FormGenerator';

const ApartmentServices = ({
  handleCheckboxChange, handleInputChange, apartmentData, listOfAvailableServices,
}) => {
  const [form, setForm] = useState({
    sectionTitle: 'Apartment Services',
    id: 'apartment-services',
    fields: [],
  });

  useEffect(() => {
    const fieldsData = [];

    // eslint-disable-next-line no-plusplus
    for (let j = 0; j < listOfAvailableServices.length; j++) {
      fieldsData.push(
        {
          component: Checkbox,
          id: `apartmentServices.${listOfAvailableServices[j]._id}`,
          props: {
            onChange: handleCheckboxChange,
            isSwitch: true,
            checked: apartmentData.apartmentServices.includes(listOfAvailableServices[j]._id),
          },
          description: listOfAvailableServices[j].name,
        },
      );
    }

    setForm({
      ...form,
      fields: fieldsData,
    });
  }, [apartmentData, listOfAvailableServices]);

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

ApartmentServices.propTypes = {
  handleCheckboxChange: PropTypes.func.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  apartmentData: PropTypes.object.isRequired,
  listOfAvailableServices: PropTypes.array.isRequired,
};

export default ApartmentServices;
