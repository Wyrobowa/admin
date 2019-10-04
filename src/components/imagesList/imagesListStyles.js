import styled from 'styled-components';

// Components
import Image from '../image/Image';

const ImagesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const ImageStyles = styled(Image)`
  margin-right: 10px;
  margin-top: 10px;
`;

export { ImagesWrapper, ImageStyles };
