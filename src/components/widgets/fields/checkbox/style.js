import style from 'style';
import { indigo, red } from '@material-ui/core/colors';

export default style`
  .MuiIconButton-root {
    color: ${({ error }) => (!!error ? red[500] : 'rgba(0, 0, 0, 0.23)')};

    &.Mui-focusVisible {
      color: ${({ error }) => (!!error ? red[500] : indigo[500])};
    }
  }
`;
