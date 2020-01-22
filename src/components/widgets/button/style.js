import property from 'lodash/property';

import style from 'style';

export default style`
  &.MuiButton-root {
    background-color: ${property('theme.colors.P500')};
    color: ${property('theme.colors.WHITE')};
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    letter-spacing: 1.25px;
    line-height: 16px;
    padding: 12px 28.8px 12px 26.8px;

    &:hover {
      background-color: ${property('theme.colors.P900')};
    }
  }
`;
