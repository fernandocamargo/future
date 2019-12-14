import getLocale from 'locale';

export const initialState = { locale: getLocale() };

export default (state = initialState, { type }) => {
  switch (type) {
    default:
      return state;
  }
};
