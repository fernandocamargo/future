import isFunction from 'lodash/isFunction';
import { assign, Machine } from 'xstate';
import { useCallback, useMemo } from 'react';
import { useMachine } from '@xstate/react';

import { setError } from './helpers';

export default ({ itinerary, destination, crash }) => {
  const machine = useMemo(
    () =>
      new Machine({
        initial: 'idle',
        states: {
          idle: { on: { START: 'busy' } },
          busy: {
            invoke: {
              src: itinerary,
              onDone: {
                target: 'success',
                actions: [
                  isFunction(destination) ? destination : assign(destination),
                ],
              },
              onError: { target: 'failure', actions: [setError, crash] },
            },
          },
          success: { on: { START: 'busy' } },
          failure: { on: { START: 'busy' } },
        },
      }),
    [itinerary, destination, crash]
  );
  const [
    {
      context: { error, ...context },
      matches,
      value,
      done,
    },
    send,
  ] = useMachine(machine);
  const start = useCallback((...params) => send('START', ...params), [send]);
  const idle = useMemo(() => matches('idle'), [matches]);
  const busy = useMemo(() => matches('busy'), [matches]);
  const success = useMemo(() => matches('success'), [matches]);
  const failure = useMemo(() => matches('failure'), [matches]);

  return { start, idle, busy, success, failure, context, value, done, error };
};
