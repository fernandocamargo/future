import { useCallback, useMemo } from 'react';

import { FULL_TIME, PART_TIME, UNAVAILABLE } from 'enums/availability';
import { useForm, useI18n, useValidation } from 'hooks';
import { Radio } from 'components/widgets/fields';

import messages from './messages';

export default ({ profile, render }) => {
  const validation = useValidation();
  const i18n = useI18n(messages);
  const availability = useMemo(
    () => [
      { label: i18n['full-time'], value: FULL_TIME },
      { label: i18n['part-time'], value: PART_TIME },
      { label: i18n.unavailable, value: UNAVAILABLE },
    ],
    [i18n]
  );
  const fields = useMemo(
    () => [
      {
        field: Radio,
        name: 'availability',
        label: i18n.availability,
        value: profile.availability,
        validation: validation.fullName.required(),
        settings: {
          options: availability,
        },
      },
    ],
    [i18n, profile, validation, availability]
  );
  const onSubmit = useCallback(
    data => console.log('onSubmit();', { data }),
    []
  );

  return useForm({ render, fields, onSubmit });
};
