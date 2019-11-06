import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

// Components
import Checkbox from '../../components/checkbox/Checkbox';
import FormGenerator from '../../components/formGenerator/FormGenerator';

const ApartmentServices = ({
  handleCheckboxChange, handleInputChange, mainObject, listOfAvailableObjects,
}) => {
  const [form, setForm] = useState({
    sectionTitle: 'Apartment Services',
    id: 'apartment-services',
    fields: [],
  });

  useEffect(() => {
    const fieldsData = [];

    // eslint-disable-next-line no-plusplus
    for (let j = 0; j < listOfAvailableObjects.length; j++) {
      fieldsData.push(
        {
          component: Checkbox,
          id: `apartmentServices.${listOfAvailableObjects[j]._id}`,
          props: {
            onChange: handleCheckboxChange,
            isSwitch: true,
            checked: mainObject.apartmentServices.includes(listOfAvailableObjects[j]._id),
          },
          description: listOfAvailableObjects[j].name,
        },
      );
    }

    setForm({
      ...form,
      fields: fieldsData,
    });
  }, [mainObject, listOfAvailableObjects]);

  return (
    <>
      <FormGenerator
        formData={[form]}
        handleInputChange={handleInputChange}
        valueObject={mainObject}
      />
    </>
  );
};

ApartmentServices.propTypes = {
  handleCheckboxChange: PropTypes.func.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  mainObject: PropTypes.object.isRequired,
  listOfAvailableObjects: PropTypes.array.isRequired,
};

export default ApartmentServices;
