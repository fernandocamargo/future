import styled from 'styled-components';

import headset from 'assets/svg/headset.svg';

export default component => styled(component)`
  align-items: center;
  color: #4a4a4a;
  display: flex;
  font-size: 0.875rem;
  text-decoration: none;

  &:before {
    background-color: #4a4a4a;
    content: '';
    display: inline-block;
    fill: red;
    height: 24px;
    margin-right: 0;
    mask-image: url(${headset});
    transition: font-size 0.1s linear, margin-right 0.1s linear;
    width: 24px;
  }

  em {
    display: none;
  }

  strong {
    font-size: 0;
    opacity: 0;
    transition: font-size 0.1s linear, opacity 0.1s linear;
  }

  @media (min-width: 960px) {
    &:before {
      font-size: 150%;
      margin-right: 0.875rem;
    }

    strong {
      font-size: 0.875rem;
      opacity: 1;
    }
  }
`;
