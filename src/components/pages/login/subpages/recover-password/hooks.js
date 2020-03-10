import { useCallback, useMemo } from 'react';

import {
  useForm,
  useHistory,
  useI18n,
  useNotification,
  usePromise,
  useRoutes,
  useValidation,
} from 'hooks';
import { useAuth } from 'hooks/services/expertlead';
import { Text } from 'components/widgets/fields';

import { UNKNOWN } from './constants';
import Form from './form';
import messages from './messages';

export const useRecoverPassword = () => {
  const {
    location: {
      state: { profile = UNKNOWN },
    },
    push,
  } = useHistory({ forwardState: true });
  const { forgotPassword } = useAuth();
  const { login } = useRoutes();
  const validation = useValidation();
  const { notify } = useNotification();
  const i18n = useI18n(messages);
  const { start: check, busy: checking } = usePromise({
    promise: (_, { email }) => forgotPassword({ email }),
    then: () => {
      notify(i18n.succeed);
      form.reset();
    },
    catch: ({ error }) => {
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
  const goBack = useCallback(() => push({ pathname: login }), [push, login]);

  return { busy: checking, goBack, ...form };
};
