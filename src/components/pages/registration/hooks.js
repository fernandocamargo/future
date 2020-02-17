import { Machine, assign } from 'xstate';
import { useMachine } from '@xstate/react';
import { useEffect, useMemo } from 'react';
import { useParams } from 'react-router-dom';

import { useInvitation } from 'hooks/services/expertlead';

export const useCondition = () => {
  const { token } = useParams();
  const invite = useInvitation(token);
  const machine = useMemo(
    () =>
      new Machine({
        id: 'registration',
        initial: 'idle',
        context: { profile: null, error: null },
        states: {
          idle: { on: { FETCH: 'loading' } },
          loading: {
            invoke: {
              src: () => invite(),
              onDone: {
                target: 'valid',
                actions: assign({ profile: (_, { data: profile }) => profile }),
              },
              onError: {
                target: 'invalid',
                actions: assign({ error: (_, { data: error }) => error }),
              },
            },
            on: { CANCEL: 'idle' },
          },
          valid: { on: { FETCH: 'loading' } },
          invalid: { on: { FETCH: 'loading' } },
        },
      }),
    [invite]
  );
  const [{ value: condition, context }, send] = useMachine(machine);

  useEffect(() => {
    send('FETCH');
  }, [send]);

  return { condition, ...context };
};
