import style from 'style';
import { Menu } from 'components/widgets';
import splash from 'assets/png/splashes/registration.png';

export default style`
  display: flex;
  flex-direction: row;

  & > {
    * {
      width: ${({ theme }) => theme.grid.half()};
    }

    article {
      margin-top: 112px;
    }
  }

  article:first-of-type {
    align-items: center;
    color: #333;
    display: flex;
    flex-direction: column;
    text-align: center;

    &:before {
      background: center url(${splash}) no-repeat;
      background-size: cover;
      content: '';
      display: block;
      filter: grayscale(1);
      height: 24.9vw;
      mix-blend-mode: luminosity;
      width: 21.1vw;
    }

    h1 {
      font-style: normal;
      font-size: 34px;
      font-weight: normal;
      line-height: 36px;
      margin-top: 49px;
    }

    p {
      width: ${({ theme }) => theme.grid.third()};
    }

    &,
    & + article {
      p,
      ${Menu} {
        margin-top: 20px;
      }

      p {
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        letter-spacing: 0.15px;
        line-height: 24px;
      }

      ${Menu} {
        & > ul {
          align-items: center;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
        }
      }
    }

    & + article {
      width: ${({ theme }) => theme.grid.third()};

      h1 {
        font-weight: 500;
        font-size: 24px;
        line-height: 24px;
      }

      p {
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 24px;
        margin-top: 16px;
      }
    }
  }
`;
