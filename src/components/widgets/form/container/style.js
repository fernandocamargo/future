import style from 'style';

import { spin } from 'style/animations';
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
      }

      [aria-busy="true"] {
        display: flex;
        flex-direction: column;
        left: 50%;
        max-width: 50%;
        position: absolute;
        text-align: center;
        top: 50%;
        transform: translate(-50%, -50%);
        z-index: 1;

        &:before {
          animation: ${spin()} 1.2s infinite cubic-bezier(0.785, 0.135, 0.15, 0.86);
          border: 8px solid rgba(0, 0, 0, 0.1);
          border-radius: 50%;
          border-top: 8px solid #555;
          content: '';
          display: inline-block;
          font-size: 0;
          height: 24px;
          margin: 0 auto 0.5rem auto;
          width: 24px;
        }
      }
    }
  }
`;
