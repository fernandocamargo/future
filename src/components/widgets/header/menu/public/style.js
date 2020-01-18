import styled from 'styled-components';

import Option from 'components/widgets/menu/option';

export default component => styled(component)`
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
