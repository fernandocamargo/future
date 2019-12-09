import styled from 'styled-components';

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
    left: 1rem;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);

    a {
      background-color: #cda;
      display: block;
      font-size: 0;
      height: 50px;
      width: 50px;
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

        ${MenuItem} {
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
            position: absolute;
            right: 1rem;
            top: 50%;
            transform: translateY(-50%);
          }

          & > a {
            display: block;
            text-decoration: none;
          }

          &:not(:last-child) > a {
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
                height: 5px;
              }
            }
          }
        }
      }
    }
  }
`;
