import { useI18n, useYup } from 'hooks';

import messages from './messages';

const VALID_PASSWORD = /^(?=.*[\d])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*])[\w!@#$%^&*]{6,}$/;

export default () => {
  const { string } = useYup();
  const { message } = useI18n(messages);

  return string()
    .trim()
    .min(6)
    .max(50)
    .matches(VALID_PASSWORD, message);
};
