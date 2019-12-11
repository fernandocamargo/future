import styled from 'styled-components';
import { OutlinedInput } from '@material-ui/core';

export default component => styled(component)`
  ${OutlinedInput.type} {
    .MuiFormControl-root {
      width: 100%;
    }
  }
`;
