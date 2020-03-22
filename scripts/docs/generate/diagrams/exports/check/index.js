import { filter, notEmpty } from './helpers';

export default ({ program: { body } }) => notEmpty(body.filter(filter));