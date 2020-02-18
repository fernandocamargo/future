import React, { useMemo, useCallback } from 'react';

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
  const succeed = useCallback(() => notify(i18n.succeed), [notify, i18n]);
  const fail = useCallback(() => notify(i18n.fail), [notify, i18n]);
  const onSubmit = useCallback(
    user =>
      create({ token, user })
        .then(succeed)
        .catch(fail),
    [create, token, succeed, fail]
  );

  return useForm({ render: Form, fields, onSubmit });
};
