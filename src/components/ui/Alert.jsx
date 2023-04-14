import styled, { keyframes } from 'styled-components';

const slideDown = keyframes`
  from {
    transform: translateY(-100%);
  }

  to {
    transform: translateY(0);
  }
`;

const Alert = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 4rem;
  padding: 1rem;
  background-color: ${({ type }) => (type === 'error' ? '#ff3333' : '#33cc33')};
  color: #fff;
  font-size: 1.2rem;
  animation: ${slideDown} 0.5s ease-in-out;

  & > svg {
    margin-right: 1rem;
  }
`;

export default Alert;