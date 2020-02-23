import property from 'lodash/property';

import style from 'style';
import splash from 'assets/png/splashes/unauthorized.png';

export default style`
  display: flex;
  flex-direction: row;

  & {
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
      height: 24.9vw;
      left: 25%;
      position: absolute;
      top: 112px;
      transform: translateX(-50%);
      width: 21.1vw;
    }

    & > article {
      margin-left: ${property('theme.grid.gap')};
      margin-top: 112px;
      width: ${({ theme }) => theme.grid.third()};

      h1 {
        font-weight: 500;
        font-size: 24px;
        line-height: 24px;
      }

      p {
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 24px;
        margin-top: 16px;
      }
    }
  }
`;
