import style from 'style';

import { Menu } from 'components/widgets';

const halfGap = ({
  theme: {
    grid: { gap },
  },
}) => `calc(${gap} / 2)`;

export default style`
  padding-top: 104px;

  & > {
    fieldset {
      width: ${({ theme }) => theme.grid.third()};

      & > {
        div {
          &:first-of-type + div {
            display: flex;
            flex-direction: row-reverse;
            margin-top: ${halfGap};
          }
        }

        ${Menu} {
          bottom: ${halfGap};
          left: 0;
          position: absolute;
        }
      }
    }
  }
`;
