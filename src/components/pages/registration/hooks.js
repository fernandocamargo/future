import React, { useCallback } from 'react';

import {
  email as validEmail,
  password as strongPassword,
  passwordConfirmation as strongPasswordConfirmation,
  fullName,
  truthy,
} from 'validations';
import { useForm, useI18n } from 'hooks';
import { Checkbox, Password, Text } from 'components/widgets/fields';

import Form from './form';
import Agreement from './agreement';
import messages from './messages';

export const useRegistration = () => {
  const {
    'password-confirmation': passwordConfirmation,
    name,
    email,
    password,
  } = useI18n(messages);
  const fields = [
    {
      field: Text,
      name: 'name',
      label: name,
      value: '',
      validation: fullName().required(),
    },
    {
      field: Text,
      name: 'email',
      label: email,
      settings: { type: 'email' },
      value: '',
      validation: validEmail().required(),
    },
    {
      field: Password,
      name: 'password',
      label: password,
      value: '',
      validation: strongPassword().required(),
    },
    {
      field: Password,
      name: 'password-confirmation',
      label: passwordConfirmation,
      value: '',
      validation: strongPasswordConfirmation({ name: 'password' }).required(),
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

  return useForm({ render: Form, onSubmit, fields });
};
