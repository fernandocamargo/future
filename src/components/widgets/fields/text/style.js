import { TextField } from '@material-ui/core';

import style from 'style';

export default style`
  ${TextField.type} {
    .MuiTextField-root {
      width: 100%;
    }
  }
`;
