import React from 'react';

import * as string from 'validations/string';
import { Checkbox, Text } from 'components/widgets/fields';

import Agreement from './agreement';

const compose = () => () => {};

export default () => ({
  fields: [
    {
      field: Text,
      name: 'name',
      label: 'Name',
      value: '',
      validation: compose(
        string.required(),
        string.minLength(3),
        string.maxLength(20)
      ),
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
