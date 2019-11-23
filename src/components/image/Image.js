import React from 'react';
import PropTypes from 'prop-types';
import { MdBlock } from 'react-icons/md';

// Helpers
import { getImageUrl } from '../../helpers/helpers';

// Styles
import * as Styled from './imageStyles';

const Image = ({
  item, imageName, type, alt, width, height, format, className, handleDelete,
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
    <Styled.Image>
      {imageName
        ? (
          <Styled.ImageWrapper>
            <img src={imageSrc} alt={alt || item.slug} className={className} />
            {handleDelete && (
              <Styled.DeleteButton
                type="button"
                model="quaternary"
                onClick={handleDelete}
                data-slug={imageName}
              >
                <MdBlock />
              </Styled.DeleteButton>
            )}
          </Styled.ImageWrapper>
        )
        : <p>No image</p>
      }
    </Styled.Image>
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
  handleDelete: PropTypes.func,
};

Image.defaultProps = {
  imageName: null,
  alt: '',
  width: null,
  height: null,
  format: null,
  className: '',
  handleDelete: null,
};

export default Image;
