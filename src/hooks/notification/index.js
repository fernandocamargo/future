import { useCallback } from 'react';
import { useSnackbar } from 'notistack';

const anchorOrigin = { vertical: 'bottom', horizontal: 'right' };

const defaults = { anchorOrigin };

export default (...settings) => {
  const { enqueueSnackbar: show, closeSnackbar: hide } = useSnackbar(
    ...settings
  );
  const notify = useCallback(
    message =>
      new Promise(onEnter =>
        show(message, { variant: 'default', onEnter, ...defaults })
      ),
    [show]
  );
  const warn = useCallback(
    message =>
      new Promise(onEnter =>
        show(message, { variant: 'warning', onEnter, ...defaults })
      ),
    [show]
  );
  const succeed = useCallback(
    message =>
      new Promise(onEnter =>
        show(message, { variant: 'success', onEnter, ...defaults })
      ),
    [show]
  );
  const fail = useCallback(
    message =>
      new Promise(onEnter =>
        show(message, { variant: 'error', onEnter, ...defaults })
      ),
    [show]
  );

  return { notify, warn, succeed, fail, hide };
};
