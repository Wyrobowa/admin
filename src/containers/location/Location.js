import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// Actions
import { editLocationForm, requestSendLocation, requestGetLocation } from '../../actions/locationActions';

// Components
import Button from '../../components/button/Button';
import FileInput from '../../components/fileInput/FileInput';
import FormGenerator from '../../components/formGenerator/FormGenerator';

// Reducers
import { getLocation } from '../../reducers/locationReducer';

const Location = ({
  location, editLocationAction, requestSendLocationAction, match, requestGetLocationAction,
}) => {
  useEffect(() => {
    if (match.params.locationSlug) {
      requestGetLocationAction(match.params.locationSlug);
    }
  }, []);

  const handleInputChange = ({ target }) => {
    const { name, value, type } = target;
    let inputValue = value;

    if (type === 'number') {
      inputValue = parseInt(inputValue, 10);
    }

    editLocationAction(name, inputValue);
  };

  const handleFileInputChange = ({ target }) => {
    // TODO: Create FileInput component
    console.log(target.files);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    requestSendLocationAction();
  };

  const form = [
    {
      sectionTitle: 'General information',
      id: 'general-information',
      fields: [
        {
          labelText: 'Location name',
          id: 'name',
          description: 'Location name',
        },
        {
          labelText: 'Location description',
          id: 'description',
          description: 'Location description',
        },
      ],
    },
    {
      sectionTitle: 'Gallery',
      id: 'mainPicture',
      component: FileInput,
      props: {
        labelText: 'Main picture',
        id: 'main-picture',
        onChange: handleFileInputChange,
      },
    },
  ];

  return (
    <section>
      <FormGenerator
        formData={form}
        handleInputChange={handleInputChange}
        valueObject={location}
      />
      <Button model="primary" type="submit" onClick={handleSubmit}>Save Location</Button>
    </section>
  );
};

Location.propTypes = {
  location: PropTypes.object.isRequired,
  editLocationAction: PropTypes.func.isRequired,
  requestSendLocationAction: PropTypes.func.isRequired,
  requestGetLocationAction: PropTypes.func.isRequired,
  match: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  location: getLocation(state),
});

export default connect(
  mapStateToProps,
  {
    requestSendLocationAction: requestSendLocation,
    requestGetLocationAction: requestGetLocation,
    editLocationAction: editLocationForm,
  },
)(Location);
