import styled from 'styled-components';

export const Img = styled.img`
  max-height: 100%;
  min-width: 100%;
  object-fit: cover;

  @media (max-width: 600px) {
    width: 100%;
    max-height: 75vh;
    min-width: 0;
  }
`;
