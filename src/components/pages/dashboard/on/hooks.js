import { useCallback, useMemo } from 'react';

import * as AVAILABILITY from 'enums/availability';
import * as BOOLEAN from 'enums/boolean';
import {
  useForm,
  useI18n,
  useNotification,
  usePromise,
  useValidation,
} from 'hooks';
import { useCity, useProfile } from 'hooks/services/expertlead';
import { Autocomplete, Radio } from 'components/widgets/fields';

import { getLocationOptionKeywords, getLocationOptionLabel } from './helpers';
import messages from './messages';

export default ({ profile, render }) => {
  const { update } = useProfile();
  const city = useCity();
  const validation = useValidation();
  const { notify } = useNotification();
  const i18n = useI18n(messages);
  const save = useCallback(
    data => update({ id: profile.id, data: { ...profile, ...data } }),
    [update, profile]
  );
  const { resolve: onSubmit, pending } = usePromise({
    then: () => notify(i18n.succeed),
    catch: () => notify(i18n.fail),
    promise: save,
  });
  const fields = useMemo(
    () => [
      {
        field: Radio,
        name: 'availability',
        label: i18n.availability,
        value: profile.availability,
        validation: validation.oneOf(Object.values(AVAILABILITY)).required(),
        settings: {
          options: [
            {
              label: i18n['availability.full-time'],
              value: AVAILABILITY.FULL_TIME,
            },
            {
              label: i18n['availability.part-time'],
              value: AVAILABILITY.PART_TIME,
            },
            {
              label: i18n['availability.unavailable'],
              value: AVAILABILITY.UNAVAILABLE,
            },
          ],
        },
      },
      {
        field: Radio,
        name: 'isRemoteOnly',
        label: i18n['remote-only'],
        value: profile.isRemoteOnly,
        validation: validation.oneOf(Object.values(BOOLEAN)).required(),
        settings: {
          options: [
            { label: i18n['remote-only.yes'], value: true },
            { label: i18n['remote-only.no'], value: false },
          ],
        },
      },
      {
        field: Autocomplete,
        name: 'location',
        label: i18n.location,
        value: profile.location,
        validation: validation.notEmpty.required(),
        settings: {
          getOptions: city.getBy,
          getOptionKeywords: getLocationOptionKeywords,
          getOptionLabel: getLocationOptionLabel,
        },
      },
      {
        field: Autocomplete,
        name: 'focusRole',
        label: i18n.role,
        value: profile.focusRole,
        validation: validation.notEmpty.required(),
        settings: { options: profile.focusRoleList },
      },
    ],
    [city, i18n, profile, validation]
  );
  const form = useForm({ render, fields, onSubmit });

  return { ...form, pending };
};
