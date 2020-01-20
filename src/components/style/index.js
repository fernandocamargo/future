import property from 'lodash/property';
import { createGlobalStyle } from 'styled-components';

const Style = createGlobalStyle`
  html {
    background-color: #fff;
    opacity: 1;
  }

  body {
    font-family: ${property('theme.typography.main')};
  }

  figure {
    margin: 0;
  }
`;

export default Style;
