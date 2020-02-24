import { CLEAR, SET_DETAILS } from './constants';

export const clear = () => ({ type: CLEAR });

export const setDetails = ({ details }) => ({ type: SET_DETAILS, details });
