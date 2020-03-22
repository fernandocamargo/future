import { ALLOWED_TYPES } from './constants';

export const filter = ({ type }) => ALLOWED_TYPES.includes(type);

export const notEmpty = collection => !!collection.length && collection;