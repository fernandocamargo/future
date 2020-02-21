import { assign, Machine } from 'xstate';
import { useCallback, useMemo } from 'react';
import { useMachine } from '@xstate/react';

const setError = assign({ error: (_, { data: error }) => error });

export default ({ destination, arrival, crash }) => {
  const machine = useMemo(
    () =>
      new Machine({
        initial: 'idle',
        states: {
          idle: { on: { START: 'busy' } },
          busy: {
            invoke: {
              src: destination,
              onDone: { target: 'success', actions: arrival },
              onError: { target: 'failure', actions: [setError, crash] },
            },
          },
          success: { on: { START: 'busy' } },
          failure: { on: { START: 'busy' } },
        },
      }),
    [destination, arrival, crash]
  );
  const [{ context, matches }, send] = useMachine(machine);
  const start = useCallback((...params) => send('START', ...params), [send]);
  const idle = useMemo(() => matches('idle'), [matches]);
  const busy = useMemo(() => matches('busy'), [matches]);
  const success = useMemo(() => matches('success'), [matches]);
  const failure = useMemo(() => matches('failure'), [matches]);

  return { start, idle, busy, success, failure, ...context };
};
