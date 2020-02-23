import property from 'lodash/property';

import style from 'style';

export default style`
  display: flex;
  flex-direction: row;

  & {
    &:before {
      content: '';
      display: block;
      width: ${({ theme }) => theme.grid.half()};
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
