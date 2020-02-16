import random from 'lodash/random';
import React, { useMemo, useCallback } from 'react';

import { useForm, useI18n, useNotification, useValidation } from 'hooks';
import { Checkbox, Password, Text } from 'components/widgets/fields';

import Form from './form';
import Agreement from './agreement';
import messages from './messages';

export const useRegistration = profile => {
  const validation = useValidation();
  const i18n = useI18n(messages);
  const { succeed, fail } = useNotification();
  const fields = useMemo(
    () => [
      {
        field: Text,
        name: 'name',
        label: i18n.name,
        value: profile.name,
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
  const onSubmit = useCallback(
    data =>
      new Promise((resolve, reject) =>
        window.setTimeout(() => (!!random() ? resolve() : reject()), 500)
      )
        .then(() => succeed('All good mate!'))
        .catch(() => fail('U suck! :(')),
    [succeed, fail]
  );

  return useForm({ render: Form, fields, onSubmit });
};
