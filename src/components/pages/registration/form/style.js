import style from 'style';

import Field from 'components/widgets/form/field';

export default style`
  padding-top: 104px;

  & > {
    fieldset {
      color: #333;
      display: block;
      width: ${({ theme }) => theme.grid.third()};

      & > legend {
        font-weight: 500;
        font-size: 24px;
        line-height: 24px;
      }

      & > p {
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 24px;
        margin-top: 16px;
      }

      & > div {
        &:first-of-type {
          ${Field} {
            margin-top: 33px;

            &:first-of-type,
            &:last-of-type {
              margin-top: 25px;
            }
          }
        }

        &:last-of-type {
          margin-top: 48px;
        }
      }
    }
  }
`;
