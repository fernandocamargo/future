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
import { Text } from 'components/widgets/fields';

import Form from './form';
import messages from './messages';

export const useRecoverPassword = () => {
  const {
    location: { state: profile = { email: '' } },
  } = useHistory();
  const { forgotPassword } = useAuth();
  const validation = useValidation();
  const { notify } = useNotification();
  const i18n = useI18n(messages);
  const { start: check, busy: checking } = useRoadtrip({
    itinerary: (_, { email }) => forgotPassword({ email }),
    onArrive: () => {
      notify(i18n.succeed);
      form.reset();
    },
    onCrash: ({ error }) => {
      notify(error);
    },
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
    ],
    [i18n, profile, validation]
  );
  const onSubmit = useCallback(({ email }) => check({ email }), [check]);
  const form = useForm({ render: Form, fields, onSubmit });

  return { ...form, busy: checking };
};
