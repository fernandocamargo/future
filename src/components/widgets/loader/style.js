import styled from 'styled-components';

import splash from 'assets/png/splashes/loading.png';

export default component => styled(component)`
  align-items: center;
  background-color: #fff;
  color: #333;
  display: flex;
  flex-direction: column;
  font-size: 2.25rem;
  font-weight: 500;
  height: 100%;
  justify-content: center;
  left: 0;
  position: fixed;
  text-align: center;
  top: 0;
  width: 100%;
  z-index: 10;

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
`;
