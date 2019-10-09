import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// Actions
import {
  editLocationForm, requestSendLocation, requestGetLocation, clearLocationForm,
} from '../../actions/locationActions';

// Components
import Button from '../../components/button/Button';
import FileInput from '../../components/fileInput/FileInput';
import FormGenerator from '../../components/formGenerator/FormGenerator';
import Checkbox from '../../components/checkbox/Checkbox';
import { sendData } from '../../services/requestService/requestService';

// Reducers
import { getLocation } from '../../reducers/locationReducer';

const Location = ({
  location, editLocationAction, requestSendLocationAction, match,
  requestGetLocationAction, clearLocationAction,
}) => {
  useEffect(() => {
    if (match.params.locationSlug) {
      requestGetLocationAction(match.params.locationSlug);
    }

    return () => {
      clearLocationAction();
    };
  }, []);

  const handleInputChange = ({ target }) => {
    const { name, value, type } = target;
    let inputValue = value;

    if (type === 'number') {
      inputValue = parseInt(inputValue, 10);
    }

    editLocationAction(name, inputValue);
  };

  const handleFileInputChange = async ({ target }) => {
    const data = new FormData();
    data.append('images', target.files[0]);
    const additionalQueryA = `?slug=${location.slug}&type=location`;
    const requestResult = sendData('adminGalleryUpload', data, additionalQueryA);

    // @NOTE when you use remote DB and upload images locally
    //       they won't be available to the others
    const uploadedImages = requestResult.imagesList;
    if (uploadedImages && uploadedImages.length) {
      editLocationAction('mainPicture', uploadedImages[0]);
    }
  };

  const handleIsPromotedChange = (evt) => {
    editLocationAction('isPromoted', evt.target.checked);
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
        {
          component: Checkbox,
          id: 'promoted',
          labelText: 'Promoted',
          props: {
            onChange: handleIsPromotedChange, isSwitch: true, checked: location.isPromoted,
          },
          description: 'Promoted location',
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
  clearLocationAction: PropTypes.func.isRequired,
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
    clearLocationAction: clearLocationForm,
  },
)(Location);
