import noop from 'lodash/noop';
import { Machine } from 'xstate';
import { useCallback, useMemo } from 'react';
import { useMachine } from '@xstate/react';

import { apply, setError } from './helpers';

export default ({
  onStop: stop = noop,
  onCrash: crash = [],
  onArrive: arrive,
  itinerary,
}) => {
  const machine = useMemo(
    () =>
      new Machine({
        initial: 'idle',
        states: {
          idle: { on: { START: 'busy' } },
          busy: {
            invoke: {
              src: itinerary,
              onDone: { target: 'success', actions: apply(arrive) },
              onError: {
                target: 'failure',
                actions: [setError].concat(apply(crash)),
              },
            },
          },
          success: { entry: 'stop', type: 'final', on: { START: 'busy' } },
          failure: { entry: 'stop', type: 'final', on: { START: 'busy' } },
        },
      }),
    [itinerary, arrive, crash]
  );
  const [
    {
      context: { error, ...context },
      matches,
      value,
      done,
    },
    send,
  ] = useMachine(machine, { actions: { stop } });
  const start = useCallback((...params) => send('START', ...params), [send]);
  const idle = useMemo(() => matches('idle'), [matches]);
  const busy = useMemo(() => matches('busy'), [matches]);
  const success = useMemo(() => matches('success'), [matches]);
  const failure = useMemo(() => matches('failure'), [matches]);

  return { start, idle, busy, success, failure, context, value, done, error };
};
