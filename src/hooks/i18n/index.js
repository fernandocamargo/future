import update from 'immutability-helper';
import { useIntl } from 'react-intl';

const traverse = object => ({
  map: transform =>
    Object.entries(object).reduce(
      (stack, [key, value]) =>
        update(stack, { [key]: { $set: transform({ id: key, value }) } }),
      {}
    ),
});

export default messages => {
  const { formatMessage } = useIntl();

  return traverse(messages).map(formatMessage);
};
