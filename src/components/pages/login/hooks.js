import { assign, Machine } from 'xstate';
import { useCallback, useMemo } from 'react';
import { useHistory } from 'react-router-dom';
import { useMachine } from '@xstate/react';

import { useForm, useI18n, useNotification, useValidation } from 'hooks';
import { useAuth } from 'hooks/services/expertlead';
import { Password, Switch, Text } from 'components/widgets/fields';

import Form from './form';
import messages from './messages';

const setError = assign({ error: (_, { data: error }) => error });

export const useLogin = () => {
  const {
    location: { state: profile = { email: '' } },
  } = useHistory();
  const { login } = useAuth();
  const validation = useValidation();
  const { notify } = useNotification();
  const i18n = useI18n(messages);
  const machine = useMemo(
    () =>
      new Machine({
        id: 'login',
        initial: 'idle',
        states: {
          idle: { on: { SUBMIT: 'submitting' } },
          submitting: {
            invoke: {
              src: (_, { credentials }) => login({ credentials }),
              onDone: {
                target: 'success',
                actions: [() => notify(i18n.succeed)],
              },
              onError: {
                target: 'failure',
                actions: [setError, ({ error }) => notify(error)],
              },
            },
          },
          success: { on: { SUBMIT: 'submitting' } },
          failure: { on: { SUBMIT: 'submitting' } },
        },
      }),
    [login, notify, i18n]
  );
  const [
    {
      context: { error },
      matches,
    },
    send,
  ] = useMachine(machine);
  const fields = useMemo(
    () => [
      {
        field: Text,
        name: 'email',
        label: i18n.email,
        value: profile.email,
        validation: validation.email.required(),
        settings: { type: 'email' },
      },
      {
        field: Password,
        name: 'password',
        label: i18n.password,
        value: '',
        validation: validation.password.required(),
      },
      {
        field: Switch,
        name: 'keep-logged',
        label: i18n['keep-logged'],
        value: false,
      },
    ],
    [i18n, profile, validation]
  );
  const onSubmit = useCallback(credentials => send('SUBMIT', { credentials }), [
    send,
  ]);
  const form = useForm({ render: Form, fields, onSubmit });
  const idle = useMemo(() => matches('idle'), [matches]);
  const submitting = useMemo(() => matches('submitting'), [matches]);
  const success = useMemo(() => matches('success'), [matches]);
  const failure = useMemo(() => matches('failure'), [matches]);

  return {
    form,
  };
};
