import React from 'react';
import PropTypes from 'prop-types';

// Components
import Skeleton from '../skeleton/Skeleton';
import TextField from '../textField/TextField';
import Title from '../title/Title';

// Styles
import * as Styled from './apartmentAddressStyles';

const ApartmentAddress = ({ apartmentAddressData, onChange, onAddressCoordinatesChange }) => (
  <Skeleton>
    <Skeleton.Item type="row-top">
      <Title heading="h3" type="secondary">Apartment address</Title>
    </Skeleton.Item>
    <Skeleton.Item type="content">
      <Styled.Item>
        <Styled.Field>
          <TextField labelText="City" onChange={onChange} id="city" name="address.city" value={apartmentAddressData.city} />
        </Styled.Field>
        <p>City</p>
      </Styled.Item>
    </Skeleton.Item>
    <Skeleton.Item type="content">
      <Styled.Item>
        <Styled.Field>
          <TextField labelText="Address" onChange={onChange} id="address" name="address.address" value={apartmentAddressData.address} />
        </Styled.Field>
        <p>Address</p>
      </Styled.Item>
    </Skeleton.Item>
    <Skeleton.Item type="content">
      <Styled.Item>
        <Styled.Field>
          <TextField
            labelText="Map coordinates - latitude"
            onChange={onAddressCoordinatesChange}
            id="mapCoordinates.lat"
            name="lat"
            value={apartmentAddressData.mapCoordinates ? apartmentAddressData.mapCoordinates.lat : ''}
          />
        </Styled.Field>
        <p>Map coordinates - latitude</p>
      </Styled.Item>
    </Skeleton.Item>
    <Skeleton.Item type="content">
      <Styled.Item>
        <Styled.Field>
          <TextField
            labelText="Map coordinates - longitude"
            onChange={onAddressCoordinatesChange}
            id="mapCoordinates.lng"
            name="lng"
            value={apartmentAddressData.mapCoordinates ? apartmentAddressData.mapCoordinates.lng : ''}
          />
        </Styled.Field>
        <p>Map coordinates - longitude</p>
      </Styled.Item>
    </Skeleton.Item>
  </Skeleton>
);

ApartmentAddress.propTypes = {
  apartmentAddressData: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  onAddressCoordinatesChange: PropTypes.func.isRequired,
};

export default ApartmentAddress;
