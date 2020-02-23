import property from 'lodash/property';

import style from 'style';
import { Link } from 'components/widgets';

const gap = property('theme.grid.gap');

export default style`
  margin: 0 auto;
  position: relative;

  main {
    margin-top: var(--margin-top);
    min-height: calc(100vh - (var(--margin-top) * 2));
    padding: 0 ${gap} var(--margin-top) ${gap};

    ${({
      theme: {
        grid: { show },
      },
    }) => show()}
  }

  section {
    & > * {
      &:not(:first-child) {
        margin-left: ${gap};
      }
    }

    ${Link} {
      color: #4130db;
    }
  }
`;
