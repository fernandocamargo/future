import styled from 'styled-components';

import logo from 'assets/svg/logo.svg';
import Menu from 'components/widgets/menu';
import MenuList from 'components/widgets/menu/list';
import MenuItem from 'components/widgets/menu/item';

export default component => styled(component)`
  background-color: #fff;
  align-items: center;
  display: flex;
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1;

  &:before {
    background-color: #e5e5e5;
    content: '';
    display: block;
    height: 1px;
    left: 0;
    position: absolute;
    top: 100%;
    width: 100%;
    z-index: -1;
  }

  h2 {
    align-items: center;
    border-right: solid 1px #e5e5e5;
    display: flex;
    height: 100%;
    left: 0;
    padding: 0 1.35rem;
    position: absolute;
    top: 0;

    a {
      background: url(${logo}) no-repeat;
      background-size: cover;
      display: block;
      font-size: 0;
      height: 28px;
      width: 31px;
    }

    span {
      display: none;
    }
  }

  ${Menu} {
    h4 {
      display: none;
    }
  }

  & > {
    ${Menu} {
      &,
      & > ${MenuList} {
        width: 100%;
      }

      & > ${MenuList} {
        display: flex;
        align-items: center;
        justify-content: center;

        & > ${MenuItem} {
          a {
            display: block;
            text-decoration: none;
          }

          &:not(:first-child) {
            margin-left: 2rem;
          }

          &[itemprop='contact'] {
            & > span {
              display: none;
            }
          }

          &[itemprop='phone'] {
            display: block;
            font-size: 0.9rem;
            font-weight: 500;
            white-space: nowrap;
          }

          &:last-child {
            align-items: center;
            border-left: solid 1px #e5e5e5;
            display: flex;
            height: 100%;
            padding: 0 1.35rem;
            position: absolute;
            right: 0;
            top: 0;
          }

          &:not(:last-child) > a {
            font-size: 1rem;
            padding: 1.5rem 0.5rem;
            position: relative;

            &:after {
              background-color: #3c26de;
              bottom: 0;
              content: '';
              display: block;
              height: 0;
              left: 0;
              position: absolute;
              transition: height 0.1s linear;
              width: 100%;
            }

            &[aria-current='page'],
            &:hover {
              &:after {
                height: 4px;
              }
            }
          }
        }
      }
    }
  }
`;
