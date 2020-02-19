import { Machine } from 'xstate';
import React, { useMemo, useCallback } from 'react';
import { useMachine } from '@xstate/react';

import { useForm, useI18n, useNotification, useValidation } from 'hooks';
import { useUsers } from 'hooks/services/expertlead';
import { Checkbox, Password, Text } from 'components/widgets/fields';

import Form from './form';
import Agreement from './agreement';
import messages from './messages';

export const useRegistration = ({ token, profile }) => {
  const { create } = useUsers();
  const validation = useValidation();
  const { notify } = useNotification();
  const i18n = useI18n(messages);
  const machine = useMemo(
    () =>
      new Machine({
        id: 'valid',
        initial: 'idle',
        states: {
          idle: { on: { SUBMIT: 'submitting' } },
          submitting: {
            invoke: {
              src: (_, { user }) => create({ token, user }),
              onDone: {
                target: 'success',
                actions: [() => notify(i18n.succeed)],
              },
              onError: {
                target: 'failure',
                actions: [() => notify(i18n.fail)],
              },
            },
          },
          success: { on: { SUBMIT: 'submitting' } },
          failure: { on: { SUBMIT: 'submitting' } },
        },
      }),
    [create, token, notify, i18n]
  );
  const [{ matches }, send] = useMachine(machine);
  const fields = useMemo(
    () => [
      {
        field: Text,
        name: 'name',
        label: i18n.name,
        value: `${profile.firstName} ${profile.lastName}`,
        validation: validation.fullName.required(),
        disabled: true,
      },
      {
        field: Text,
        name: 'email',
        label: i18n.email,
        value: profile.email,
        validation: validation.email.required(),
        settings: { type: 'email' },
        disabled: true,
      },
      {
        field: Password,
        name: 'password',
        label: i18n.password,
        value: 'Elf030501!',
        validation: validation.password.required(),
      },
      {
        field: Password,
        name: 'password-confirmation',
        label: i18n['password-confirmation'],
        value: 'Elf030501!',
        validation: validation.password
          .equal({ field: 'password', label: i18n.password })
          .required(),
      },
      {
        field: Checkbox,
        name: 'agreement',
        label: <Agreement />,
        value: false,
        validation: validation.agreement.required(),
      },
    ],
    [i18n, profile, validation]
  );
  const onSubmit = useCallback(user => send('SUBMIT', { user }), [send]);
  const form = useForm({ render: Form, fields, onSubmit });
  const idle = useMemo(() => matches('idle'), [matches]);
  const submitting = useMemo(() => matches('submitting'), [matches]);
  const success = useMemo(() => matches('success'), [matches]);
  const failure = useMemo(() => matches('failure'), [matches]);

  return {
    ...((idle || submitting) && { form: { ...form, submitting } }),
    ...(success && {
      success: {
        redirect: {
          when: new Date().getTime(),
          to: console.log.bind(console, 'to();'),
        },
      },
    }),
    ...(failure && { failure: { foo: 'bar' } }),
  };
};
