import style from 'style';

import { Link } from 'components/widgets';

export default style`
  color: #353336;
  font-size: 14px;
  font-style: normal;
  font-weight: normal;
  line-height: 24px;

  ${Link} {
    color: #4130db;
    display: inline-block;
  }
`;
