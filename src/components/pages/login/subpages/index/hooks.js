import { useCallback, useMemo } from 'react';

import {
  useAuthentication,
  useForm,
  useHistory,
  useI18n,
  useNotification,
  useRoadtrip,
  useRoutes,
  useValidation,
} from 'hooks';
import { useAuth } from 'hooks/services/expertlead';
import { Password, Switch, Text } from 'components/widgets/fields';

import { UNKNOWN } from './constants';
import { getFieldNameBasedOn, setProfile } from './helpers';
import Form from './form';
import messages from './messages';

export const useIndex = () => {
  const {
    location: {
      state: { profile: user = UNKNOWN },
    },
    push,
  } = useHistory({ forwardState: true });
  const { identify } = useAuthentication();
  const { login } = useAuth();
  const { 'recover-password': recoverPassword } = useRoutes();
  const validation = useValidation();
  const { notify } = useNotification();
  const i18n = useI18n(messages);
  const { start: enter } = useRoadtrip({
    itinerary: (_, { profile }) => identify(profile),
  });
  const { start: check, busy: checking } = useRoadtrip({
    itinerary: (_, { credentials }) => login({ credentials }),
    onArrive: [{ profile: setProfile }, ({ profile }) => enter({ profile })],
    onCrash: ({ error: { code, message } }) =>
      notify(message).then(() => {
        const name = getFieldNameBasedOn(code);
        const {
          fields: {
            unordered: { [name]: field },
          },
        } = form;
        const { [code]: reason } = i18n;

        return field.error(reason).focus();
      }),
  });
  const fields = useMemo(
    () => [
      {
        field: Text,
        name: 'email',
        label: i18n.email,
        value: user.email,
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
    [i18n, user, validation]
  );
  const onSubmit = useCallback(credentials => check({ credentials }), [check]);
  const form = useForm({ render: Form, fields, onSubmit });
  const goToRecoverPage = useCallback(
    () => push({ pathname: recoverPassword }),
    [push, recoverPassword]
  );

  return { busy: checking, goToRecoverPage, ...form };
};
