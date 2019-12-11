import React from 'react';

import {
  email,
  fullName,
  password,
  passwordConfirmation,
  truthy,
} from 'validations';
import { Checkbox, Password, Text } from 'components/widgets/fields';

import Agreement from './agreement';

export default () => ({
  fields: [
    {
      field: Text,
      name: 'name',
      label: 'Name',
      value: '',
      validation: fullName().required(),
    },
    {
      field: Text,
      name: 'email',
      label: 'E-mail',
      settings: { type: 'email' },
      value: 'camargodelbuono@gmail.com',
      validation: email().required(),
    },
    {
      field: Password,
      name: 'password',
      label: 'Password',
      settings: { type: 'password' },
      value: '',
      validation: password().required(),
    },
    {
      field: Password,
      name: 'password-confirmation',
      label: 'Repeat password',
      settings: { type: 'password' },
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
  ],
  onSubmit: data => console.log('onSubmit();', data),
});
