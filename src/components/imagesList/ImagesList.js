import React from 'react';
import PropTypes from 'prop-types';

// Styles
import { ImagesWrapper, ImageStyles } from './imagesListStyles';

const ImagesList = ({
  item, type, width, height, format,
}) => (
  <ImagesWrapper>
    {item.gallery && (
      item.gallery.map(imageName => (
        <ImageStyles
          item={item}
          imageName={imageName}
          type={type}
          alt={item.name}
          width={width}
          height={height}
          format={format}
        />
      ))
    )}
  </ImagesWrapper>
);

ImagesList.propTypes = {
  item: PropTypes.object.isRequired,
  type: PropTypes.string.isRequired,
  width: PropTypes.string,
  height: PropTypes.string,
  format: PropTypes.string,
};

ImagesList.defaultProps = {
  width: null,
  height: null,
  format: null,
};

export default ImagesList;
