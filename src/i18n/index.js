import { dirname, normalize, sep } from 'path';

import { traverse } from 'helpers/collection';

import Definition from './definition';

export const using = ({ id: module }) => {
  const defineMessages = messages =>
    traverse(messages).map(
      (defaultMessage, path) =>
        new Definition({
          id: normalize(dirname(module))
            .split(sep)
            .concat(path)
            .join('/'),
          defaultMessage,
        })
    );

  return { defineMessages };
};
