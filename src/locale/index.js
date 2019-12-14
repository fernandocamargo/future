import first from 'lodash/first';

export default () => {
  const { language, languages, userLanguage } = window.navigator;

  return (languages && first(languages)) || language || userLanguage || 'en-US';
};
