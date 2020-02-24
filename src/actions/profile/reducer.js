import update from 'immutability-helper';

import { CLEAR, SET_DETAILS } from './constants';

export const initialState = { details: {} };

export default (state = initialState, { type, details }) => {
  switch (type) {
    case CLEAR:
      return update(state, { details: { $set: {} } });
    case SET_DETAILS:
      return update(state, { details: { $set: details } });
    default:
      return state;
  }
};
