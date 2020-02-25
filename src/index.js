import React from 'react';
import { render } from 'react-dom';

import { Root } from 'components';

const initialize = () => render(<Root />, document.getElementById('root'));

export const foo = 'bar';

export default document.fonts.ready.then(initialize);
