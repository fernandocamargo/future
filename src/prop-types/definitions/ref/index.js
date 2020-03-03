import { func, instanceOf, oneOfType, shape } from 'prop-types';

export default oneOfType([func, shape({ current: instanceOf(Element) })]);
