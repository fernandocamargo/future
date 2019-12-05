import { FETCH, FETCH_SUCCEED, FETCH_FAIL } from './constants';

export const fetch = ({ practitionerId }) => ({ type: FETCH, practitionerId });

export const fetchSucceed = ({ items }) => ({ type: FETCH_SUCCEED, items });

export const fetchFail = ({ error }) => ({ type: FETCH_FAIL, error });
