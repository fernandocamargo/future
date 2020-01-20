import style from 'style';
import { pulse } from 'style/animations';
import Menu from 'components/widgets/menu';
import Option from 'components/widgets/menu/option';
import Link from 'components/widgets/link';
import logo from 'assets/svg/logo.svg';

export default style`
  align-items: center;
  display: flex;
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1;

  &:before {
    background-color: #fff;
    box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.2), 0px 3px 1px rgba(0, 0, 0, 0.12),
      0px 2px 2px rgba(0, 0, 0, 0.14);
    content: '';
    display: block;
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
  }

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
      outline: 0;
      position: relative;
      width: 31px;

      &:after {
        background: inherit;
        content: '';
        display: block;
        height: 100%;
        position: absolute;
        transition: left 0.25s linear, opacity 0.25s linear, top 0.25s linear,
          transform 0.25s linear;
        width: 100%;
      }

      &:hover,
      &:focus {
        &:after {
          animation: ${pulse()} 1s infinite;
        }
      }
    }

    span {
      display: none;
    }
  }

  & > ${Menu} {
    position: relative;
    width: 100%;

    & > ul {
      align-items: center;
      display: flex;

      & > ${Option} {
        &:last-child {
          margin: 0 24px 0 auto;
        }

        &:not(:last-child) {
          margin-left: 40px;

          ${Link} {
            color: #353336;
            display: block;
            font-size: 1rem;
            font-style: normal;
            font-weight: normal;
            line-height: 19px;
            outline: 0;
            padding: 22.5px 0;
            position: relative;
            text-decoration: none;

            &:after {
              background-color: #3c26de;
              bottom: 0;
              height: 0;
              content: '';
              display: block;
              left: 0;
              position: absolute;
              transition: height 0.15s linear;
              width: 100%;
            }

            &[aria-current],
            &:hover,
            &:focus {
              color: #3c26de;

              &:after {
                height: 4px;
              }
            }
          }
        }
      }
    }
  }

  & + * {
    --margin-top: 64px;
  }
`;
