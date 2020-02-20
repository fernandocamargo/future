import { assign, Machine } from 'xstate';
import { useEffect, useMemo } from 'react';
import { useMachine } from '@xstate/react';
import { useParams } from 'react-router-dom';

import { useInvitation } from 'hooks/services/expertlead';

const setProfile = assign({ profile: (_, { data: profile }) => profile });

const setError = assign({ error: (_, { data: error }) => error });

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
              onDone: { target: 'valid', actions: [setProfile] },
              onError: { target: 'invalid', actions: [setError] },
            },
            on: { CANCEL: 'idle' },
          },
          valid: { on: { FETCH: 'loading' } },
          invalid: { on: { FETCH: 'loading' } },
        },
      }),
    [invite]
  );
  const [
    {
      context: { profile, error },
      value: condition,
    },
    send,
  ] = useMachine(machine);

  useEffect(() => {
    send('FETCH');

    return () => send('CANCEL');
  }, [send]);

  return { valid: { token, profile }, invalid: { error }, condition };
};
