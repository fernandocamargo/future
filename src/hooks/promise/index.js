import noop from 'lodash/noop';
import { Machine } from 'xstate';
import { useCallback, useMemo } from 'react';
// fix cache
import { useMachine } from '@xstate/react';

import { apply, setData, setError } from './helpers';

export default ({
  finally: stop = noop,
  catch: fail = [],
  then: succeed = [],
  id,
  promise,
}) => {
  const machine = useMemo(
    () =>
      new Machine({
        initial: 'idle',
        states: {
          idle: { on: { START: 'pending' } },
          pending: {
            invoke: {
              src: promise,
              onDone: {
                target: 'success',
                actions: [setData].concat(apply(succeed)),
              },
              onError: {
                target: 'failure',
                actions: [setError].concat(apply(fail)),
              },
            },
          },
          success: { entry: 'stop', on: { START: 'pending' } },
          failure: { entry: 'stop', on: { START: 'pending' } },
        },
        id,
      }),
    [id, promise, succeed, fail]
  );
  const [
    {
      context: { data, error },
      value: status,
      matches,
      done,
    },
    send,
  ] = useMachine(machine, { actions: { stop } });
  const start = useCallback((...params) => send('START', ...params), [send]);
  const idle = useMemo(() => matches('idle'), [matches]);
  const pending = useMemo(() => matches('pending'), [matches]);
  const success = useMemo(() => matches('success'), [matches]);
  const failure = useMemo(() => matches('failure'), [matches]);

  return {
    start,
    idle,
    pending,
    success,
    failure,
    status,
    data,
    error,
    done,
  };
};
