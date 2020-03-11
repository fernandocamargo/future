import { assign } from 'xstate';

export const setData = assign({ data: (_, { data }) => data });

export const setError = assign({ error: (_, { data: error }) => error });
