/*eslint-disable*/

import * as styled from 'styled-components';

const buttonBase = styled.css`
  background-color: transparent;
  border: 0.0625rem solid transparent;
  border-radius: 0.125rem;
  cursor: pointer;
  display: block;
  font-size: 1rem;
  font-weight: 500;
  margin: 0 auto;
  padding: 0.5rem 0.75rem;
  outline: none;
  text-decoration: none;
  transition: all ease-in-out;
  user-select: none;
  vertical-align: middle;
  white-space: nowrap;

  &:hover {
    text-decoration: none;
  }
`;

export const Button = styled.default.button`
  ${buttonBase}
  background-color: ${( props ) => (
    props.primary ? props.theme.primary.backgroundColor:
    props.secondary ? props.theme.secondary.backgroundColor :
    'transparent')
  };
  color: ${( props ) => (
    props.primaryLink ? props.theme.primary.color :
    props.secondaryLink ? props.theme.primary.textColor :
    props.theme.default.white)
  };
  font-size: ${({ theme }) => theme.secondary.fontSize || '0.875rem'};
  font-weight: ${( props ) => (props.secondaryLink ? '400' : '500')};

  margin: ${( props ) => (
    props.primaryLink ? '0' :
    props.secondaryLink ? '0':
    '0')
  };
  padding: ${(props) => (props.small ? '0.5rem' : props.large ? '1rem ': 'inherit')};
  text-decoration: ${( props ) => (
    props.primaryLink ? 'underline' :
    props.secondaryLink ? 'underline':
    'none')
  };
  width: ${(props) => (props.small ? 'auto' : props.large ? '100%': 'auto')};
`;


export const PrimaryButton = styled.default.button`
  ${buttonBase}
  background-color: ${({ theme }) => theme.primary.backgroundColor || 'black'};
  color: ${({ theme }) => theme.default.white || 'white'};
  font-size: ${({ theme }) => theme.secondary.fontSize || '1rem'};
`;

export const SecondaryButton = styled.default.button`
  ${buttonBase}
  background-color: ${({ theme }) => theme.secondary.backgroundColor || 'black'};
  color: ${({ theme }) => theme.white || 'white'};
  font-size: ${({ theme }) => theme.secondary.fontSize || '1rem'};
`;

export const CustomButton = styled.default.button`
  ${buttonBase}
  background-color: ${({ color }) => color || 'black'};
  color: ${({ theme }) => theme.default.white || 'white'};
  font-size: ${({ theme }) => theme.secondary.fontSize || '1rem'};
  font-weight: bold;
  border: 1px solid;
  border-color: white;
  border-radius: 50%;
  padding: 0;
  height: 1.5rem;
  width: 1.5rem;
  margin-left: .5rem;
`;