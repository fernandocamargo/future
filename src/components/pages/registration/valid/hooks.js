import noop from 'lodash/noop';
import moment from 'moment';
import React, { useCallback, useEffect, useMemo } from 'react';

import {
  useForm,
  useHistory,
  useI18n,
  useNotification,
  usePromise,
  useScrollToTop,
  useValidation,
} from 'hooks';
import { useUsers } from 'hooks/services/expertlead';
import { Checkbox, Password, Text } from 'components/widgets/fields';

import Form from './form';
import Agreement from './agreement';
import messages from './messages';

const [TIMER_VALUE, TIMER_UNIT] = [60, 'seconds'];

const DELAY_UNIT = 'milliseconds';

export const useValid = ({ token, profile }) => {
  const history = useHistory();
  const { create } = useUsers();
  const validation = useValidation();
  const { notify } = useNotification();
  const scrollToTop = useScrollToTop();
  const i18n = useI18n(messages);
  const {
    resolve: onSubmit,
    idle,
    pending,
    fulfilled,
    rejected,
    error,
  } = usePromise({
    promise: user => create({ token, user }),
    then: () => notify(i18n.succeed),
    catch: () => notify(i18n.fail),
    finally: scrollToTop,
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
        value: '',
        validation: validation.password.required(),
      },
      {
        field: Password,
        name: 'password-confirmation',
        label: i18n['password-confirmation'],
        value: '',
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
  const form = useForm({ render: Form, fields, onSubmit });
  const when = useMemo(() => moment().add(TIMER_VALUE, TIMER_UNIT), []);
  const redirect = useCallback(
    () => history.push({ state: { profile }, pathname: '/' }),
    [history, profile]
  );
  const schedule = useCallback(() => {
    const delay = when.diff(moment(), DELAY_UNIT);
    const timeout = window.setTimeout(redirect, delay);

    return () => window.clearTimeout(timeout);
  }, [when, redirect]);

  useEffect(fulfilled ? schedule : noop, [fulfilled]);

  return {
    ...((idle || pending) && { form: { ...form, pending } }),
    ...(fulfilled && { fulfilled: { redirect: { to: redirect, when } } }),
    ...(rejected && { rejected: { reason: error, profile } }),
  };
};
