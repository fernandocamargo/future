import { useCallback, useMemo } from 'react';
import { useHistory } from 'react-router-dom';

import {
  useForm,
  useI18n,
  useNotification,
  useRoadtrip,
  useValidation,
} from 'hooks';
import { useAuth } from 'hooks/services/expertlead';
import { Password, Switch, Text } from 'components/widgets/fields';

import Form from './form';
import messages from './messages';

export const useLogin = () => {
  const {
    location: { state: profile = { email: '' } },
  } = useHistory();
  const { login } = useAuth();
  const validation = useValidation();
  const { notify } = useNotification();
  const i18n = useI18n(messages);
  const { start, busy } = useRoadtrip({
    itinerary: (_, { credentials }) => login({ credentials }),
    onArrive: [
      { profile: (_, { data: profile }) => profile },
      ({ profile }) => notify(JSON.stringify(profile)),
    ],
    onCrash: ({ error }) => notify(error),
  });
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
  const onSubmit = useCallback(credentials => start({ credentials }), [start]);
  const form = useForm({ render: Form, fields, onSubmit });

  return { ...form, busy };
};
