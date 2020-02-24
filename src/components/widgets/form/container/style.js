import style from 'style';

import Field from 'components/widgets/form/field';

export default style`
  position: relative;

  & > {
    fieldset {
      color: #333;
      display: block;
      position: relative;

      & > *:not([aria-busy="true"]) {
        transition: opacity 0.15s linear;
      }

      &[disabled] {
        & > *:not([aria-busy="true"]) {
          opacity: 0.25;
          pointer-events: none;
        }
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
      }
    }
  }
`;
