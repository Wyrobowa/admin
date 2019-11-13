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
import Image from '../../components/image/Image';

// Reducers
import { getLocation } from '../../reducers/locationReducer';

// Services
import { sendData } from '../../services/requestService/requestService';

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

    const additionalQuery = `?slug=${location.slug}&type=location`;
    const requestResult = await sendData('adminGalleryUpload', data, additionalQuery);
    const [uploadedImages] = requestResult.imagesList;

    if (uploadedImages) {
      editLocationAction('mainPicture', uploadedImages);
    }
  };

  const handleIsPromotedChange = ({ target }) => {
    editLocationAction('isPromoted', target.checked);
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
      sectionTitle: 'Main picture',
      id: 'mainPicture',
      fields: [
        {
          component: FileInput,
          id: 'mainPictureInput',
          labelText: 'Main picture',
          props: {
            onChange: handleFileInputChange,
          },
        },
        {
          component: Image,
          id: 'mainPicture',
          labelText: 'Main picture',
          props: {
            item: location,
            imageName: location.mainPicture,
            type: 'location',
            alt: location.name,
            height: '150',
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
