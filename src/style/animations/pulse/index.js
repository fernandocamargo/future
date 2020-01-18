import { keyframes } from 'styled-components';

export default () => keyframes`
  from {
    left: 50%;
    opacity: 1;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  to {
    left: 0;
    opacity: 0;
    top: 0;
    transform: scale(2);
  }
`;
