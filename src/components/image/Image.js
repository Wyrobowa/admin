import React from 'react';
import PropTypes from 'prop-types';
import { MdBlock } from 'react-icons/md';

// Styles
import * as Styled from './imageStyles';

const Image = ({
  item, imageName, alt, className, handleDelete, src,
}) => (
  <Styled.Image>
    {imageName
      ? (
        <Styled.ImageWrapper>
          <img src={src} alt={alt || item.slug} className={className} />
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


Image.propTypes = {
  item: PropTypes.object.isRequired,
  imageName: PropTypes.string,
  src: PropTypes.string.isRequired,
  className: PropTypes.string,
  handleDelete: PropTypes.func,
  alt: PropTypes.string.isRequired,
};

Image.defaultProps = {
  imageName: null,
  className: '',
  handleDelete: null,
};

export default Image;
