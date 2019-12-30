import store, { persistor } from 'store';
import * as translations from 'translations';

import { normalize } from './helpers';

export const useI18n = () => {
  const {
    settings: { locale },
  } = store.getState();
  const normalized = normalize(locale);
  const { [normalized]: messages } = translations;

  return { store, persistor, locale, messages };
};
