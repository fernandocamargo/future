import styled from 'styled-components';

import Option from 'components/widgets/menu/option';
import Link from 'components/widgets/link';

export default component => styled(component)`
  margin-left: 44px;

  & > ul {
    & > ${Option} {
      &:not([itemprop='contact']) {
        margin-left: 40px;

        ${Link} {
          color: #353336;
          display: block;
          font-size: 1rem;
          font-style: normal;
          font-weight: normal;
          letter-spacing: 0.02em;
          line-height: 19px;
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
          &:hover {
            color: #3c26de;

            &:after {
              height: 4px;
            }
          }
        }
      }

      &[itemprop='contact'] {
        margin: 0 24px 0 auto;

        & > {
          span {
            display: none;
          }
        }
      }
    }
  }
`;
