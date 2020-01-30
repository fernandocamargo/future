import { v4 as useUUID } from 'uuid';
import { useCallback } from 'react';

// import { Notifications as Context } from 'contexts';

export default props => {
  const uuid = useUUID();
  const show = useCallback(content => console.log({ uuid, content }), [uuid]);

  return { show };
};
