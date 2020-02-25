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
      new Promise(onEntered =>
        show(message, { variant: 'default', onEntered, ...defaults })
      ),
    [show]
  );
  const warn = useCallback(
    message =>
      new Promise(onEntered =>
        show(message, { variant: 'warning', onEntered, ...defaults })
      ),
    [show]
  );
  const succeed = useCallback(
    message =>
      new Promise(onEntered =>
        show(message, { variant: 'success', onEntered, ...defaults })
      ),
    [show]
  );
  const fail = useCallback(
    message =>
      new Promise(onEntered =>
        show(message, { variant: 'error', onEntered, ...defaults })
      ),
    [show]
  );

  return { notify, warn, succeed, fail, hide };
};
