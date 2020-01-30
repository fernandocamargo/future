import update from 'immutability-helper';
import { node } from 'prop-types';
import React, { useCallback, useMemo, useState } from 'react';

import { Notifications as Context } from 'contexts';
// import { Notification } from 'components/widgets';

// import { useNotifications } from './hooks';

/*
const renderItem = notification => (
  <Notification key={notification.id} {...notification} />
);
*/

const Notifications = ({ children }) => {
  const [state, setState] = useState({ items: new Map() });
  const register = useCallback(
    ({ uuid, ...props }) =>
      setState(current =>
        update(current, {
          items: { $add: [[uuid, { visible: false, props }]] },
        })
      ),
    []
  );
  const deregister = useCallback(
    ({ uuid }) => setState(current => current),
    []
  );
  const value = useMemo(() => ({ state, register, deregister }), [
    state,
    register,
    deregister,
  ]);

  /*
  const { state, value, items } = useNotifications();

  return (
    <Context.Provider value={value}>
      {children}
      {items.map(renderItem)}
      <pre>{JSON.stringify(state, null, 2)}</pre>
    </Context.Provider>
  );
  */

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

Notifications.propTypes = {
  children: node.isRequired,
};

Notifications.defaultProps = {};

export default Notifications;
