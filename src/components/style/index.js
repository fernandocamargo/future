import { createGlobalStyle } from 'styled-components';

const Style = createGlobalStyle`
  html {
    opacity: 1;
  }

  body {
    font-family: ${({
      theme: {
        typography: { main },
      },
    }) => main};
  }

  figure {
    margin: 0;
  }
`;

export default Style;
