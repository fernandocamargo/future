import { useCallback, useMemo } from 'react';
import { useHistory } from 'react-router-dom';

import { useForm, useI18n, useValidation } from 'hooks';
import { Password, Text } from 'components/widgets/fields';

import messages from './messages';

const Form = ({
  elements: {
    fields: { ordered: fields },
  },
}) => fields;

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
    ],
    [i18n, profile, validation]
  );
  const onSubmit = useCallback(data => console.log('here();', { data }), []);
  const form = useForm({ render: Form, fields, onSubmit });

  return {
    form,
  };
};
