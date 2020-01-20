import style from 'style';
import { pulse } from 'style/animations';
import headset from 'assets/svg/headset.svg';

export default style`
  align-items: center;
  color: #4a4a4a;
  display: flex;
  font-size: 0.875rem;
  outline: 0;
  position: relative;
  text-decoration: none;
  transition: color 0.15s linear;

  &:before,
  &:after {
    background-color: #4a4a4a;
    content: '';
    fill: red;
    height: 24px;
    mask-image: url(${headset});
    transition: background-color 0.15s linear;
    width: 24px;
  }

  &:before {
    display: inline-block;
    margin-right: 0;
    transition: font-size 0.1s linear, margin-right 0.1s linear;
  }

  &:after {
    display: block;
    position: absolute;
  }

  &:hover,
  &:focus {
    color: #3c26de;

    &:before,
    &:after {
      background-color: #3c26de;
    }
  }

  em {
    display: none;
  }

  strong {
    font-size: 0;
    opacity: 0;
    transition: font-size 0.1s linear, opacity 0.1s linear;
  }

  @media (max-width: 960px) {
    &:hover,
    &:focus {
      &:after {
        animation: ${pulse()} 1s infinite;
      }
    }
  }

  @media (min-width: 960px) {
    &:before {
      font-size: 150%;
      margin-right: 0.875rem;
    }

    strong {
      font-size: 0.875rem;
      opacity: 1;
    }
  }
`;
