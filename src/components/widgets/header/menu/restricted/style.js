import property from 'lodash/property';

import style from 'style';
import Menu from 'components/widgets/menu';
import Option from 'components/widgets/menu/option';
import Link from 'components/widgets/link';

export default style`
  margin-left: 47.5px;

  & > ul {
    & > ${Option} {
      &[itemprop='you'] {
        align-items: center;
        display: flex;
        position: relative;

        & > ${Link} {
          font-size: 0;
          outline: 0;
          position: relative;

          &:before,
          &:after {
            content: '';
            display: block;
          }

          &:before {
            background-color: #eee;
            border-radius: 50%;
            height: 100%;
            left: 50%;
            position: absolute;
            top: 50%;
            transform: translate(-50%, -50%);
            transition: height 0.15s linear, width 0.15s linear;
            width: 100%;
          }

          &:after {
            background: url(${property('avatar')}) no-repeat;
            background-size: cover;
            border-radius: 50%;
            height: 48px;
            position: relative;
            width: 48px;
            z-index: 1;
          }

          &:hover,
          &:focus {
            &:before {
              height: calc(100% + 8px);
              width: calc(100% + 8px);
            }
          }
        }

        & > ${Menu} {
          background: #fff;
          border-radius: 4px;
          box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
          opacity: 0;
          padding-top: 13.5px;
          position: absolute;
          right: 0;
          top: calc(100% + 12px);
          transform: translateY(-50vh);
          transition: opacity 0.2s linear, transform 0.2s linear;
          width: 200px;
          z-index: -1;

          ${Option} {
            &[itemprop='logout'] {
              border-top: solid 1px rgba(0, 0, 0, 0.1);
              margin-top: 11.5px;
              padding: 4.5px 0 6.5px 0;
            }
          }

          ${Link} {
            color: #353336;
            display: block;
            font-size: 0.875rem;
            font-style: normal;
            font-weight: normal;
            line-height: 16px;
            padding: 11.5px 0 11.5px 20px;
            text-decoration: none;
            transition: background-color 0.075s linear, color 0.075s linear;

            &[aria-current],
            &:hover,
            &:focus {
              background-color: #3c26de;
              color: #fff;
            }
          }
        }
      }
    }
  }

  &[aria-expanded='true'] {
    & > ul {
      & > ${Option} {
        &[itemprop='you'] {
          & > ${Link} {
            &:before {
              height: calc(100% + 8px);
              width: calc(100% + 8px);
            }
          }

          & > ${Menu} {
            opacity: 1;
            transform: translateY(0);
          }
        }
      }
    }
  }
`;
