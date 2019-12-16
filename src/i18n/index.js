import { dirname, normalize, sep } from 'path';
import { defineMessages as define } from 'react-intl';

import { traverse } from 'helpers/object';

export const using = ({ id: module }) => {
  const basename = normalize(dirname(module)).split(sep);
  const format = (defaultMessage, path) =>
    define({ id: basename.concat(path).join('/'), defaultMessage });
  const defineMessages = messages => traverse(messages).map(format);

  return { defineMessages };
};
