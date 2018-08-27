import React from 'react';
import PropTypes from 'prop-types';
import { compose, withProps } from 'recompose';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

const apiKey = ''; // TODO: Get API Key from .env
const Map = compose(
  withProps({
    googleMapURL: `https://maps.googleapis.com/maps/api/js?key=${apiKey}&v=3.exp&libraries=geometry,drawing,places`,
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap,
)(({ coordinates }) => {
  if (coordinates) {
    return (
      <GoogleMap
        defaultZoom={16}
        defaultCenter={{ lat: coordinates.latitude, lng: coordinates.longitude }}
      >
        {coordinates && <Marker position={{ lat: coordinates.latitude, lng: coordinates.longitude }} />}
      </GoogleMap>
    );
  }

  return null;
});

Map.propTypes = {
  coordinates: PropTypes.shape({
    longitude: PropTypes.number.isRequired,
    latitude: PropTypes.number.isRequired,
  }),
};

export default Map;
