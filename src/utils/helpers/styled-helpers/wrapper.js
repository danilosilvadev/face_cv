/* eslint-disable */
import { default as styled, createGlobalStyle } from 'styled-components';

export const BodyBackground = createGlobalStyle`
  body {
    background-color: ${({ backgroundColor }) => `${backgroundColor} !important` || 'black !important'};
  }
`;

export const PrimaryBackground = styled.div`
  background-color: ${({ backgroundColor }) => backgroundColor || 'black'};
`;

export const SecondaryBackground = styled.div`
  background-color: ${({ backgroundColor }) => backgroundColor || 'black'};
`;

export const TertiaryBackground = styled.div`
  background-color: ${({ backgroundColor }) => backgroundColor || 'black'};
`;
