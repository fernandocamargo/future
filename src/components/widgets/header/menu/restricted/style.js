import property from 'lodash/property';
import styled from 'styled-components';

import Menu from 'components/widgets/menu';
import Option from 'components/widgets/menu/option';
import Link from 'components/widgets/link';
import arrow from 'assets/svg/arrow-down.svg';

export default component => styled(component)`
  & > ul {
    & > ${Option} {
      &:not([itemprop='you']) {
        z-index: 1;
      }

      &[itemprop='you'] {
        height: 100%;
        position: absolute;
        right: 0;
        top: 0;
        z-index: 0;

        &:before {
          background-color: #fff;
          content: '';
          display: block;
          height: 100%;
          position: absolute;
          right: 0;
          top: 0;
          width: 100vw;
          z-index: 1;
        }

        & > {
          * {
            position: absolute;
            right: 0;
          }

          ${Menu} {
            background-color: #fff;
            border-radius: 0 0 4px 4px;
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
            opacity: 0;
            padding: 0 20px;
            right: 30px;
            top: 100%;
            transform: translateY(-25vh);
            transition: opacity 0.15s linear, transform 0.15s linear;
          }

          ${Link} {
            display: flex;
            font-size: 0;
            height: 100%;
            top: 0;
            z-index: 1;

            &:before,
            &:after {
              content: '';
              display: block;
              height: 100%;
            }

            &:before {
              background: url(${property('avatar')}) no-repeat;
              background-size: cover;
              border-left: 1px solid rgba(0, 0, 0, 0.1);
              width: 70px;
            }

            &:after {
              background: center center url(${arrow}) no-repeat;
              background-size: 10px 5px;
              transition: transform 0.15s linear;
              width: 60px;
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
          & > {
            ${Menu} {
              opacity: 1;
              transform: translateY(0);
            }

            ${Link} {
              &:after {
                transform: rotate(180deg);
              }
            }
          }
        }
      }
    }
  }
`;
