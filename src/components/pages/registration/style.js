import styled from 'styled-components';

import splash from 'assets/png/splashes/registration.png';

export default component => styled(component)`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 2rem 0;
  position: relative;

  &:before {
    background-color: #e5e5e5;
    content: '';
    display: block;
    height: 100%;
    left: 50%;
    position: absolute;
    transform: translateX(-50%);
    width: 1px;
  }

  & > * {
    width: 50%;
  }

  article {
    color: #333;
    display: flex;
    flex-direction: column;
    text-align: center;

    &:before {
      background: center url(${splash}) no-repeat;
      background-size: contain;
      content: '';
      display: block;
      filter: grayscale(1);
      height: 50vh;
      margin: 0 auto;
      mix-blend-mode: luminosity;
      width: 25vw;
    }

    h2 {
      font-size: 2.25rem;
      font-weight: 500;
    }

    p {
      font-size: 1.125rem;
    }
  }
`;
