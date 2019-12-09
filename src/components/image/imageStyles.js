import styled from 'styled-components';

// Components
import Button from '../button/Button';

export const ImageBox = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const ImageWrapper = styled.div`
  position: relative;
`;

export const Image = styled.img`
  max-width: 300px;
  max-height: 150px;
`;

export const DeleteButton = styled(Button)`
  position: absolute;
  top: 15px;
  right: 15px;
  width: fit-content;
  height: fit-content;
  background: white;
  padding: 5px;   
  color: var(--cl-red-60);
`;
