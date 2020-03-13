import { useCallback, useMemo } from 'react';

import * as AVAILABILITY from 'enums/availability';
import * as BOOLEAN from 'enums/boolean';
import { useForm, useI18n, useValidation } from 'hooks';
import { Autocomplete, Radio } from 'components/widgets/fields';

import messages from './messages';

export default ({ profile, render }) => {
  const validation = useValidation();
  const i18n = useI18n(messages);
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
        name: 'remote-only',
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
      },
    ],
    [i18n, profile, validation]
  );
  const onSubmit = useCallback(
    data => console.log('onSubmit(!);', { data }),
    []
  );

  return useForm({ render, fields, onSubmit });
};
