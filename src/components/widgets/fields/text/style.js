import styled from 'styled-components';
import { TextField } from '@material-ui/core';

export default component => styled(component)`
  ${TextField.type} {
    .MuiTextField-root {
      width: 100%;
    }
  }
`;
