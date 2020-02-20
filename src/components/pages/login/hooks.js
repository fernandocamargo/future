import { useCallback, useMemo } from 'react';
import { useHistory } from 'react-router-dom';

import { useForm, useI18n, useValidation } from 'hooks';
import { Password, Switch, Text } from 'components/widgets/fields';

import Form from './form';
import messages from './messages';

export const useLogin = () => {
  const {
    location: { state: profile = { email: '' } },
  } = useHistory();
  const validation = useValidation();
  const i18n = useI18n(messages);
  const fields = useMemo(
    () => [
      {
        field: Text,
        name: 'email',
        label: i18n.email,
        value: profile.email,
        validation: validation.email.required(),
        settings: { type: 'email' },
      },
      {
        field: Password,
        name: 'password',
        label: i18n.password,
        value: '',
        validation: validation.password.required(),
      },
      {
        field: Switch,
        name: 'keep-logged',
        label: i18n['keep-logged'],
        value: false,
      },
    ],
    [i18n, profile, validation]
  );
  const onSubmit = useCallback(data => console.log('here();', { data }), []);
  const form = useForm({ render: Form, fields, onSubmit });

  return {
    form,
  };
};
