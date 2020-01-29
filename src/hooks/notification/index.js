import { useCallback } from 'react';

export default () => {
  const show = useCallback(
    (...content) => console.log('notification.show();', ...content),
    []
  );

  return { show };
};
