import styled from 'styled-components';

import Menu from 'components/widgets/menu';
import Option from 'components/widgets/menu/option';
import Link from 'components/widgets/link';
import logo from 'assets/svg/logo.svg';

/*
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

  & > {

    ${Menu} {
      &,
      & > ul {
        width: 100%;
      }

      & > ul {
        display: flex;
        align-items: center;
        justify-content: center;

        & > ${Option} {
          & > a {
            display: block;
            text-decoration: none;
          }

          &:not(:first-child):not(:last-child) {
            margin-left: 2rem;
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
  */

export default component => styled(component)`
  align-items: center;
  background-color: #fff;
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.2), 0px 3px 1px rgba(0, 0, 0, 0.12),
    0px 2px 2px rgba(0, 0, 0, 0.14);
  display: flex;
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1;

  ${Menu} {
    h4 {
      display: none;
    }
  }

  h2 {
    margin-left: 24px;

    ${Link} {
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

  & > {
    ${Menu} {
      & > ul {
        align-items: center;
        display: flex;
      }
    }
  }
`;
