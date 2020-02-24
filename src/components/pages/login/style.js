import property from 'lodash/property';

import style from 'style';
import splash from 'assets/png/splashes/login.png';

export default style`
  display: flex;
  flex-direction: row;

  & {
    margin-left: ${property('theme.grid.gap')};

    &:before,
    &:after {
      content: '';
      display: block;
    }

    &:before {
      width: ${({ theme }) => theme.grid.half()};
    }

    &:after {
      background: center url(${splash}) no-repeat;
      background-size: contain;
      height: 29.9vw;
      filter: grayscale(1);
      left: 25%;
      mix-blend-mode: luminosity;
      position: absolute;
      top: 112px;
      transform: translateX(-50%);
      width: 26.1vw;
    }
  }
`;
