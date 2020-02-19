import style from 'style';

import Field from 'components/widgets/form/field';
import { spin } from 'style/animations';

export default style`
  padding-top: 104px;
  position: relative;

  & > {
    fieldset {
      color: #333;
      display: block;
      position: relative;
      width: ${({ theme }) => theme.grid.third()};

      & > *:not([aria-busy="true"]) {
        transition: opacity 0.15s linear;
      }

      &[disabled] {
        & > *:not([aria-busy="true"]) {
          opacity: 0.25;
        }
      }

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

      [aria-busy="true"] {
        display: inline-block;
        left: 50%;
        max-width: 50%;
        position: absolute;
        text-align: center;
        top: 50%;
        transform: translate(-50%, -50%);
        z-index: 1;

        &:before {
          animation: ${spin()} 1.2s infinite cubic-bezier(0.785, 0.135, 0.15, 0.86);
          border: 12px solid rgba(0, 0, 0, 0.1);
          border-radius: 50%;
          border-top: 12px solid #555;
          content: '';
          display: inline-block;
          font-size: 0;
          height: 36px;
          margin: 0 auto;
          width: 36px;
        }
      }
    }
  }
`;
