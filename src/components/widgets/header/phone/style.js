import styled from 'styled-components';

export default component => styled(component)`
  color: #000;
  font-weight: 500;
  position: relative;
  text-decoration: none;

  &:before {
    color: #666666;
    content: '\\e311';
    display: block;
    font-family: ${({
      theme: {
        typography: { icons },
      },
    }) => icons};
    font-size: 175%;
    position: absolute;
    right: calc(100% + 0.5rem);
    top: 50%;
    transform: translateY(-50%);
  }

  em {
    display: none;
  }
`;
