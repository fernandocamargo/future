import style from 'style';
import splash from 'assets/png/splashes/registration.png';

export default style`
  flex-direction: row;

  & > * {
    width: ${({ theme }) => theme.grid.half()};
  }

  article {
    align-items: center;
    color: #333;
    display: flex;
    flex-direction: column;
    margin-top: 112px;
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
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      letter-spacing: 0.15px;
      line-height: 24px;
      margin-top: 20px;
      width: ${({ theme }) => theme.grid.third()};
    }
  }
`;
