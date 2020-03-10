import { useCallback, useMemo } from 'react';

import {
  useAuthentication,
  useForm,
  useHistory,
  useI18n,
  useNotification,
  usePromise,
  useValidation,
} from 'hooks';
import { useAuth } from 'hooks/services/expertlead';
import { Password, Switch, Text } from 'components/widgets/fields';

import { setProfile } from './helpers';
import Form from './form';
import messages from './messages';

const UNKNOWN = { email: '' };

export const useRoot = () => {
  const {
    location: { state: { email } = UNKNOWN },
  } = useHistory();
  const { identify } = useAuthentication();
  const { login } = useAuth();
  const validation = useValidation();
  const { notify } = useNotification();
  const i18n = useI18n(messages);
  const { start: enter } = usePromise({
    promise: (_, { profile }) => identify(profile),
  });
  const { start: check, busy: checking } = usePromise({
    promise: (_, { credentials }) => login({ credentials }),
    then: [{ profile: setProfile }, ({ profile }) => enter({ profile })],
    catch: ({ error }) => notify(error),
  });
  const fields = useMemo(
    () => [
      {
        field: Text,
        name: 'email',
        label: i18n.email,
        value: email,
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
    [i18n, email, validation]
  );
  const onSubmit = useCallback(credentials => check({ credentials }), [check]);
  const form = useForm({ render: Form, fields, onSubmit });

  return { ...form, busy: checking };
};
