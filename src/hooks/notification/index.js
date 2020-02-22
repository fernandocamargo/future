import { useCallback } from 'react';
import { useSnackbar } from 'notistack';

const anchorOrigin = { vertical: 'bottom', horizontal: 'right' };

const defaults = { anchorOrigin };

export default (...settings) => {
  const { enqueueSnackbar: show, closeSnackbar: hide } = useSnackbar(
    ...settings
  );
  const notify = useCallback(
    message => show(message, { variant: 'default', ...defaults }),
    [show]
  );
  const warn = useCallback(
    message => show(message, { variant: 'warning', ...defaults }),
    [show]
  );
  const succeed = useCallback(
    message => show(message, { variant: 'success', ...defaults }),
    [show]
  );
  const fail = useCallback(
    message => show(message, { variant: 'error', ...defaults }),
    [show]
  );

  return { notify, warn, succeed, fail, hide };
};
