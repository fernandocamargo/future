import React, { useCallback } from 'react';

import {
  fullName,
  email,
  password,
  passwordConfirmation,
  truthy,
} from 'validations';
import { useForm, useI18n } from 'hooks';
import { Checkbox, Password, Text } from 'components/widgets/fields';

import Form from './form';
import Agreement from './agreement';
import messages from './messages';

export const useRegistration = () => {
  const i18n = useI18n(messages);
  const fields = [
    {
      field: Text,
      name: 'name',
      label: i18n.name,
      value: '',
      validation: fullName().required(),
    },
    {
      field: Text,
      name: 'email',
      label: i18n.email,
      settings: { type: 'email' },
      value: '',
      validation: email().required(),
    },
    {
      field: Password,
      name: 'password',
      label: i18n.password,
      value: '',
      validation: password().required(),
    },
    {
      field: Password,
      name: 'password-confirmation',
      label: i18n['password-confirmation'],
      value: '',
      validation: passwordConfirmation({ name: 'password' }).required(),
    },
    {
      field: Checkbox,
      name: 'agreement',
      label: <Agreement />,
      value: false,
      validation: truthy().required(),
    },
  ];
  const onSubmit = useCallback(
    data => console.log('registration.onSubmit();', data),
    []
  );
  const onError = useCallback(() => console.log('onError();'), []);

  return useForm({ render: Form, fields, onSubmit, onError });
};
