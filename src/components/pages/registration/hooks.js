import random from 'lodash/random';
import React, { useMemo, useCallback } from 'react';

import { useForm, useI18n, useNotification, useValidation } from 'hooks';
import { Checkbox, Password, Text } from 'components/widgets/fields';

import Form from './form';
import Agreement from './agreement';
import messages from './messages';

export const useRegistration = () => {
  const validation = useValidation();
  const i18n = useI18n(messages);
  const { notify, succeed, fail } = useNotification();
  const fields = useMemo(
    () => [
      {
        field: Text,
        name: 'name',
        label: i18n.name,
        value: '',
        validation: validation.fullName.required(),
      },
      {
        field: Text,
        name: 'email',
        label: i18n.email,
        settings: { type: 'email' },
        value: '',
        validation: validation.email.required(),
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
    [i18n, validation]
  );
  const onSubmit = useCallback(
    data => {
      notify(JSON.stringify(data, null, 2));

      return new Promise((resolve, reject) =>
        window.setTimeout(() => (!!random() ? resolve() : reject()), 1000)
      )
        .then(() => succeed('All good mate!'))
        .catch(() => fail('U suck! :('));
    },
    [notify, succeed, fail]
  );

  return useForm({ render: Form, fields, onSubmit });
};
