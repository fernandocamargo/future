import isEqual from 'lodash/isEqual';

export default () => isEqual(process.env.NODE_ENV, 'development');
