import style from 'style';
import Option from 'components/widgets/menu/option';

export default style`
  margin-left: 44px;

  & > ul {
    & > ${Option} {
      &[itemprop='contact'] {
        & > span {
          display: none;
        }
      }
    }
  }
`;
