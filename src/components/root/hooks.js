import { useEffect } from 'react';

import store, { persistor } from 'store';
import * as translations from 'translations';

import history from '../../history';
import { normalize } from './helpers';
import { useScrollToTop } from 'hooks';

export const useRoot = () => {
  const scrollToTop = useScrollToTop();
  const {
    settings: { locale },
  } = store.getState();
  const normalized = normalize(locale);
  const { [normalized]: messages } = translations;

  useEffect(() => history.listen(scrollToTop), [scrollToTop]);

  return { store, persistor, history, locale, messages };
};
