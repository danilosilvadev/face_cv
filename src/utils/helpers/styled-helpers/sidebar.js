import styled from 'styled-components';

export const Sidebar = styled.section`
  background-color: ${({ theme }) => theme.default.gray || 'white'};
  display: block;
  height: 100%;

  position: fixed;
  right: 0;
  top: 0;
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
  transition: all 0.4s;
  width: 19rem;
  z-index: 40;
`;

export const ButtonClose = styled.button`
  height: 2.5rem;
  width: 2.5rem;
  align-items: center;
  border-radius: 0.1875rem;
  box-shadow: 0 0 0.25rem 0 rgba(0, 0, 0, 0.08),
    0 0.125rem 0.25rem 0 rgba(0, 0, 0, 0.16);
  color: #d3d3d3;
  display: flex;
  font-size: 1.25rem;
  justify-content: center;
  left: -4rem;
  padding: 0;
  position: absolute;
  top: 1.25rem;
  transition: all 0.8s;
  visibility: ${({ open }) => (open ? 'visible' : 'hidden')};
  opacity: ${({ open }) => (open ? '1' : '0')};
`;
