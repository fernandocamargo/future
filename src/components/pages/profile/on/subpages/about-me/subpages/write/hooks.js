import { useCallback, useMemo } from 'react';

import { useForm, useI18n, useValidation } from 'hooks';
import { useCity } from 'hooks/services/expertlead';
import { Autocomplete, Editor, Text } from 'components/widgets/fields';

import { getLocationOptionKeywords, getLocationOptionLabel } from './helpers';
import messages from './messages';

export const useWrite = ({ render, profile }) => {
  const city = useCity();
  const validation = useValidation();
  const i18n = useI18n(messages);
  const fields = useMemo(
    () => [
      {
        field: Text,
        name: 'first-name',
        label: i18n['first-name'],
        value: profile.firstName,
      },
      {
        field: Text,
        name: 'last-name',
        label: i18n['last-name'],
        value: profile.lastName,
      },
      {
        field: Editor,
        name: 'biograpphy',
        label: i18n.biograpphy,
        value: profile.bio,
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
    ],
    [city, i18n, profile, validation]
  );
  const onSubmit = useCallback(
    data => console.log('onSubmit();', { data }),
    []
  );

  return useForm({ render, fields, onSubmit });
};
