import style from 'style';
import { indigo, red } from '@material-ui/core/colors';

export default style`
  .MuiFormControl-root {
    width: 100%;
  }

  .Mui-error {
    .MuiIconButton-root {
      color: ${red[500]};
    }
  }

  .Mui-focused:not(.Mui-error) {
    .MuiIconButton-root {
      color: ${indigo[500]};
    }
  }
`;
