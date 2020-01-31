import update from 'immutability-helper';
import { v4 as useUUID } from 'uuid';
import { useEffect, useState } from 'react';

class Instances {
  constructor() {
    this.state = {
      items: {},
    };
  }

  register = uuid => {
    const { state } = this;

    this.state = update(state, { items: { [uuid]: { $set: [] } } });

    console.log('register();', { uuid });
  };

  deregister = uuid => {
    const { state } = this;

    this.state = update(state, { items: { $unset: [uuid] } });

    console.log('deregister();', { uuid });
  };
}

const instances = new Instances();

export default () => {
  const uuid = useUUID();
  const [, refresh] = useState();

  useEffect(() => {
    instances.register(uuid);
    refresh();

    return () => {
      instances.deregister(uuid);
      refresh();
    };
  }, [uuid]);

  return {};
};
