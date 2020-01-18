import styled from 'styled-components';

import Menu from 'components/widgets/menu';
import Link from 'components/widgets/link';
import logo from 'assets/svg/logo.svg';

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
      width: 100%;

      & > ul {
        align-items: center;
        display: flex;
      }
    }
  }

  & + * {
    --margin-top: 64px;
  }
`;
