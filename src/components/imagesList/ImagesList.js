import React from 'react';
import PropTypes from 'prop-types';

// Styles
import * as Styled from './imagesListStyles';

const ImagesList = ({
  item, type, width, height, format, handleDelete,
}) => (
  <Styled.ImagesWrapper>
    {item.gallery && (
      item.gallery.map(imageName => (
        <Styled.ImageStyles
          key={imageName}
          item={item}
          imageName={imageName}
          src={imageName}
          type={type}
          alt={item.name}
          width={width}
          height={height}
          format={format}
          handleDelete={handleDelete}
        />
      ))
    )}
  </Styled.ImagesWrapper>
);

ImagesList.propTypes = {
  item: PropTypes.object.isRequired,
  type: PropTypes.string.isRequired,
  width: PropTypes.string,
  height: PropTypes.string,
  format: PropTypes.string,
  handleDelete: PropTypes.func,
};

ImagesList.defaultProps = {
  width: null,
  height: null,
  format: null,
  handleDelete: () => {},
};

export default ImagesList;
