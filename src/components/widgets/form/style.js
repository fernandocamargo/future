import styled from 'styled-components';

import Field from './field';

export default component => styled(component)`
  ${Field} {
    &:not(:last-of-type) {
      margin-top: 1rem;
    }
  }
`;
