import React from 'react';
import { render } from 'react-dom';

import { Root } from 'components';

export default document.fonts.ready.then(() =>
  render(<Root />, document.getElementById('root'))
);
