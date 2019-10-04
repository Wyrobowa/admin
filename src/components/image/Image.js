import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

// Helpers
import { getImageUrl } from '../../helpers/helpers';

const Image = ({
  item, imageName, type, alt, width, height, format, className,
}) => {
  const params = {
    type,
    slug: item.slug,
    imageName,
    width,
    height,
    format,
  };

  const imageSrc = getImageUrl(params);

  return (
    <Fragment>
      {imageName
        ? <img src={imageSrc} alt={alt || item.slug} className={className} />
        : <p>No image</p>
      }
    </Fragment>
  );
};

Image.propTypes = {
  item: PropTypes.object.isRequired,
  imageName: PropTypes.string,
  type: PropTypes.string.isRequired,
  alt: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  format: PropTypes.string,
  className: PropTypes.string,
};

Image.defaultProps = {
  imageName: null,
  alt: '',
  width: null,
  height: null,
  format: null,
  className: '',
};

export default Image;
