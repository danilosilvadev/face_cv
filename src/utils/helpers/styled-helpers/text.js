/*eslint-disable*/

import styled from 'styled-components';

export const PrimaryTitle = styled.div`
  color: ${({ theme }) => theme.primary.color || 'black'};
`;

export const PrimaryText = styled.div`
  color: ${({ theme }) => theme.primary.textColor || 'black'};
`;

export const PrimaryTag = styled.div`
  color: ${({ theme }) => theme.primary.textColor || 'black'};
`;

export const HighlightedText = styled.div`
  color: ${({ theme }) => theme.custom.tagTextColor || 'black'};
`;

export const LineThroughText = styled.div`
  color: ${({ theme }) => theme.primary.textColor || 'black'};
  font-size: ${( props ) => (props.small ? '0.75rem' : props.medium ? '0.875rem': '0.75rem')};
  text-decoration: line-through;
`;
