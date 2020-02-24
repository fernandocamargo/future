import noop from 'lodash/noop';
import moment from 'moment';
import React, { useCallback, useEffect, useMemo } from 'react';
import { useHistory } from 'react-router-dom';

import {
  useForm,
  useI18n,
  useNotification,
  useRoadtrip,
  useRoutes,
  useScrollToTop,
  useValidation,
} from 'hooks';
import { useUsers } from 'hooks/services/expertlead';
import { Checkbox, Password, Text } from 'components/widgets/fields';

import Form from './form';
import Agreement from './agreement';
import messages from './messages';

const [TIMER_VALUE, TIMER_UNIT] = [10, 'second'];

export const useValid = ({ token, profile }) => {
  const history = useHistory();
  const { login: pathname } = useRoutes();
  const { create } = useUsers();
  const validation = useValidation();
  const { notify } = useNotification();
  const scrollToTop = useScrollToTop();
  const i18n = useI18n(messages);
  const { start, idle, busy, success, failure, error } = useRoadtrip({
    itinerary: (_, { user }) => create({ token, user }),
    onArrive: () => notify(i18n.succeed),
    onCrash: () => notify(i18n.fail),
    onStop: scrollToTop,
  });
  const fields = useMemo(
    () => [
      {
        field: Text,
        name: 'name',
        label: i18n.name,
        value: `${profile.firstName} ${profile.lastName}`,
        validation: validation.fullName.required(),
        disabled: true,
      },
      {
        field: Text,
        name: 'email',
        label: i18n.email,
        value: profile.email,
        validation: validation.email.required(),
        settings: { type: 'email' },
        disabled: true,
      },
      {
        field: Password,
        name: 'password',
        label: i18n.password,
        value: 'Elf030501!',
        validation: validation.password.required(),
      },
      {
        field: Password,
        name: 'password-confirmation',
        label: i18n['password-confirmation'],
        value: 'Elf030501!',
        validation: validation.password
          .equal({ field: 'password', label: i18n.password })
          .required(),
      },
      {
        field: Checkbox,
        name: 'agreement',
        label: <Agreement />,
        value: false,
        validation: validation.agreement.required(),
      },
    ],
    [i18n, profile, validation]
  );
  const onSubmit = useCallback(user => start({ user }), [start]);
  const form = useForm({ render: Form, fields, onSubmit });
  const when = useMemo(() => new moment().add(TIMER_VALUE, TIMER_UNIT), []);
  const redirect = useCallback(
    () => history.push({ state: profile, pathname }),
    [history, pathname, profile]
  );
  const schedule = useCallback(() => {
    const timeout = window.setTimeout(redirect, TIMER_VALUE * 1000);

    return () => window.clearTimeout(timeout);
  }, [redirect]);

  useEffect(success ? schedule : noop, [success]);

  return {
    ...((idle || busy) && { form: { ...form, busy } }),
    ...(success && { success: { redirect: { to: redirect, when } } }),
    ...(failure && { failure: { reason: error, profile } }),
  };
};
