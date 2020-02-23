import style from 'style';
import splash from 'assets/png/splashes/404.png';

export default style`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  left: 0;
  justify-content: center;
  position: absolute;
  top: 0;
  width: 100%;

  h1 {
    color: #333;
    font-size: 2.25rem;
    font-weight: 500;
    text-align: center;

    &:before {
      background: center url(${splash}) no-repeat;
      background-size: contain;
      content: '';
      display: block;
      filter: grayscale(1);
      height: 50vh;
      margin: 0 auto;
      mix-blend-mode: luminosity;
      width: 50vw;
    }
  }
`;
