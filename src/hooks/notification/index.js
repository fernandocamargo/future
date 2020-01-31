import { useMemo } from 'react';
import { useSnackbar } from 'notistack';

export default (...params) => {
  const { enqueueSnackbar: show, closeSnackbar: hide } = useSnackbar();
  const methods = useMemo(
    () => ({ notify: show, succeed: show, fail: show, hide }),
    [show, hide]
  );

  return methods;
};
