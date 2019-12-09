import React from 'react';
import { Checkbox, Text } from 'components/widgets/fields';

import Agreement from './agreement';

export default () => ({
  fields: [
    {
      field: Text,
      name: 'name',
      label: 'Name',
      value: '',
    },
    {
      field: Text,
      name: 'email',
      label: 'E-mail',
      settings: { type: 'email' },
      value: 'camargodelbuono@gmail.com',
    },
    {
      field: Text,
      name: 'password',
      label: 'Password',
      settings: { type: 'password' },
      value: 'elf030501',
    },
    {
      field: Text,
      name: 'password-confirmation',
      label: 'Repeat password',
      settings: { type: 'password' },
      value: '',
    },
    { field: Checkbox, name: 'agreement', label: <Agreement />, value: false },
  ],
  onSubmit: data => console.log('onSubmit();', data),
});
