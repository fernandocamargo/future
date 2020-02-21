import update from 'immutability-helper';

import { SET_DETAILS } from './constants';

export const initialState = { details: {} };

export default (state = initialState, { type, details }) => {
  switch (type) {
    case SET_DETAILS:
      return update(state, { details: { $set: details } });
    default:
      return state;
  }
};
