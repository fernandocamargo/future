import { useIntl } from 'react-intl';

import { traverse } from 'helpers/collection';

export default messages => {
  const { formatMessage } = useIntl();

  return traverse(messages).map(definition => formatMessage(definition.get()));
};
