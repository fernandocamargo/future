import React, { useMemo, useCallback } from 'react';

import {
  useForm,
  useI18n,
  useNotification,
  useRoadtrip,
  useValidation,
} from 'hooks';
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
  const { start, idle, busy, success, failure, error } = useRoadtrip({
    itinerary: (_, { user }) => create({ token, user }),
    destination: () => notify(i18n.succeed),
    crash: () => notify(i18n.fail),
  });
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
        value: '',
        validation: validation.password.required(),
      },
      {
        field: Password,
        name: 'password-confirmation',
        label: i18n['password-confirmation'],
        value: '',
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
  const onSubmit = useCallback(user => start({ user }), [start]);
  const form = useForm({ render: Form, fields, onSubmit });

  return {
    ...((idle || busy) && { form: { ...form, busy } }),
    ...(success && {
      success: {
        redirect: {
          when: new Date().getTime(),
          to: console.log.bind(console, 'to();'),
        },
      },
    }),
    ...(failure && { failure: { reason: error, profile } }),
  };
};
