import { useCallback } from 'react';

import { useForm } from 'hooks';

import * as settings from './settings';

export const useRegistration = ({ render }) => {
  const onSubmit = useCallback(
    data => console.log('registration.onSubmit();', data),
    []
  );

  return useForm({ onSubmit, render, ...settings });
};
