import property from 'lodash/property';

import style from 'style';

export default style`
  margin: 0 auto;
  position: relative;

  main {
    margin-top: var(--margin-top);
    min-height: calc(100vh - var(--margin-top));
    padding: 0 ${property('theme.grid.gap')} var(--margin-top) ${property(
  'theme.grid.gap'
)};

    ${({
      theme: {
        grid: { show },
      },
    }) => show(false)}
  }

  section {
    & > * {
      &:not(:first-child) {
        margin-left: ${property('theme.grid.gap')};
      }
    }
  }
`;
