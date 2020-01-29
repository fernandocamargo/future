// import { useI18n, useYup } from 'hooks';
import { useYup } from 'hooks';

// import messages from './messages';

export default () => {
  const { string } = useYup();
  // const { valid } = useI18n(messages);

  return string().trim();
};
